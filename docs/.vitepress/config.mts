import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Siron游戏开发笔记",
  description: "记录游戏开发学习过程中的知识、经验和踩坑，以及项目总结。",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目总结', link: '/项目总结/godot项目总结/' } 
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
            items: [
              { 
                text: '跑酷游戏总结', 
                // 因为文件名为 index.md，所以路径写到文件夹为止
                link: '/项目总结/UE项目总结/' 
              },
              { 
                text: 'FPS人物部分项目总结', 
                // 注意：这里的路径是不带 .md 后缀的，要跟你的文件名完全对应
                link: '/项目总结/UE项目总结/FPS人物部分项目总结' 
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