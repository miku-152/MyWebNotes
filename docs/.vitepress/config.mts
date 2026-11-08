import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Siron游戏开发笔记",
  description: "记录游戏开发学习过程中的知识、经验和踩坑，以及项目总结。",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目总结', link: '/项目总结/godot项目总结/' },
      { text: '代码进阶', link: '/代码进阶/设计模式/' },
      // 新增游戏开发秘籍的顶部导航
      { text: '游戏开发秘籍', link: '/游戏开发秘籍/' }
    ],
    sidebar: [
      {
        text: '项目总结',
        items: [
          { 
            text: 'Godot项目总结', 
            link: '/项目总结/godot项目总结/' 
          },
          {
            text: 'UE项目总结',
            link: '/项目总结/UE项目总结/',
            items: [
              { 
                text: '跑酷游戏总结', 
                link: '/项目总结/UE项目总结/' 
              },
              { 
                text: 'FPS人物部分项目总结', 
                link: '/项目总结/UE项目总结/FPS人物部分项目总结' 
              }
            ]
          }
        ]
      },
      {
        text: '代码进阶',
        link: '/代码进阶/',
        items: [
          {
            text: '设计模式',
            link: '/代码进阶/设计模式/',
            items: [
              { 
                text: '面向对象进阶', 
                link: '/代码进阶/设计模式/面向对象进阶'     
              },
              { 
                text: '创建型模式', 
                link: '/代码进阶/设计模式/创建型模式' 
              },
              { 
                text: '结构型模式', 
                link: '/代码进阶/设计模式/结构型模式' 
              },
              { 
                text: '行为模式', 
                link: '/代码进阶/设计模式/行为模式' 
              },
              {
                text: '热点专题',
                link: '/代码进阶/设计模式/热点专题/',
                items: [
                  {
                    text: '数据局部性与性能优化',
                    link: '/代码进阶/设计模式/热点专题/数据局部性与性能优化'
                  },
                  {
                    text: 'ECS 架构设计',
                    link: '/代码进阶/设计模式/热点专题/ECS架构设计'
                  },
                  {
                    text: '对象池设计',
                    link: '/代码进阶/设计模式/热点专题/对象池设计'
                  }
                ]
              }
            ]
          }
        ]
      },
      // 新增游戏开发秘籍的侧边栏
      {
        text: '游戏开发秘籍',
        link: '/游戏开发秘籍/',
        items: [
          { 
            text: '配置文件', 
            link: '/游戏开发秘籍/配置文件' 
          },
          { 
            text: '跳跃', 
            link: '/游戏开发秘籍/跳跃' 
          },
          { 
            text: '移动', 
            link: '/游戏开发秘籍/移动' 
          },
          { 
            text: '网络同步', 
            link: '/游戏开发秘籍/网络同步' 
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/miku-152' }
    ]
  }
})