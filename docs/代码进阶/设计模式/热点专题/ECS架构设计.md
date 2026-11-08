# ECS 架构设计

## ECS 是什么

ECS 是这种架构思想中三个核心构成元素的英文首字母。

*   **实体（Entity）**：代表游戏中的对象，本质上是一个 ID，用于标记具体实例。
*   **组件（Component）**：承载数据的容器，每个组件只保存特定的数据，如位置、速度、生命值等。
*   **系统（System）**：逻辑处理模块，负责读取组件数据，并对实体进行处理，比如物理运算、渲染、AI 更新等。

ECS 就像是把一个传统的游戏对象拆散了：把它的各部分数据抽象出去用组件进行描述，把它的逻辑抽象成系统来对组件处理，而自身只持有一个 ID，就可以到对应的组件列表中查找拼凑出完整的对象。

## 核心思想

将数据和逻辑分离：组件只关注数据存储，系统只关注逻辑运算，实体是一个标识符，将组件和系统串联起来。这样就能很好地实现数据的扁平化存储和高效的批量处理。

```cpp
// 实体：
using Entity = unsigned int;

class EntityManager
{
private:
    Entity nextEntity = 1;

public:
    Entity createEntity()
    {
        return nextEntity++;
    }
};

// 组件：
struct Position
{
    float x, y;
};

struct Velocity
{
    float vx, vy;
};

// 系统：
class MovementSystem
{
public:
    void update(std::unordered_map<Entity, Position>& positions,
                const std::unordered_map<Entity, Velocity>& velocities,
                float deltaTime)
    {
        for (auto& kv : positions)
        {
            Entity e = kv.first;
            if (velocities.find(e) != velocities.end())
            {
                Position& pos = kv.second;
                const Velocity& vel = velocities.at(e);
                pos.x += vel.vx * deltaTime;
                pos.y += vel.vy * deltaTime;
            }
        }
    }
};

// 客户端：
EntityManager entityManager;
std::unordered_map<Entity, Position> positions;
std::unordered_map<Entity, Velocity> velocities;

// 创建实体并附加组件
Entity player = entityManager.createEntity();
positions[player] = {0.0f, 0.0f};
velocities[player] = {5.0f, 3.0f};

MovementSystem moveSys;
float deltaTime = 0.016f; // 假设帧时间约 16 毫秒
moveSys.update(positions, velocities, deltaTime);
```

通过代码可以看出，ECS 是一种数据驱动的思想，有别于传统的面向对象将数据和逻辑存放在一处构成对象的思路。

## 优缺点

**优点：**

1. 数据驱动与高性能。
2. 低耦合和灵活扩展。
3. 易于管理大量对象。

**缺点：**

1. 学习曲线较陡峭。
2. 调试较为复杂。
3. 架构设计成本高。

## 误区提醒

1. ECS 是反 OOP 的，但不是一点面向对象也不用。
2. Unity / UE 等引擎是 Component-Actor 架构，不是 ECS。

若想独立使用 ECS 系统，可以考虑 [EnTT](https://github.com/skypjack/entt) 或 [Flecs](https://github.com/SanderMertens/flecs) 这两个开源项目。
