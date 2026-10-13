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
            // 因为文件名是 index.md，这里写文件夹路径即可
            link: '/项目总结/godot项目总结/' 
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/miku-152' }
    ]
  }
})