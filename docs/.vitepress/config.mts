import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Siron游戏开发笔记",
  description: "记录游戏开发学习过程中的知识、经验和踩坑，以及项目总结。",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目总结', link: '/项目总结/godot项目总结/' },
      // 可以在顶部导航再加一个，方便快速跳转
      { text: '编程基础', link: '/编程基础/设计模式/' } 
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
            // 补上这一行，解决你之前点不了的问题
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
      // 👇 新增分类
      {
        text: '编程基础',
        items: [
          {
            text: '设计模式',
            link: '/编程基础/设计模式/',
            items: [
              { 
                text: '面向对象进阶', 
                link: '/编程基础/设计模式/面向对象进阶' 
              },
              { 
                text: '创建型模式', 
                link: '/编程基础/设计模式/创建型模式' 
              },
              { 
                text: '结构型模式', 
                link: '/编程基础/设计模式/结构型模式' 
              }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/miku-152' }
    ]
  }
})