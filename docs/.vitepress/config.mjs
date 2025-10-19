import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "新手友善的 Vitepress 模板 🐥",
  description: "👶👶 提供新手快速建立的 Vitepress 模板 👶👶",
  themeConfig: {
    
    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-nav
    nav: [ 
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-sidebar
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 使用範例', link: '/markdown-examples' },
          { text: 'Runtime API 使用範例', link: '/api-examples' },
        ]
      }
    ],

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aisp-fhsh/vitepress-templating' },
      { icon: { svg: "<img src='New%20AISP%20Logo%20Icon.svg' alt='AISP Logo' width='80%' height='80%' />" }, link: 'https://security-program.fhsh.taipei'}
    ]
  }
})
