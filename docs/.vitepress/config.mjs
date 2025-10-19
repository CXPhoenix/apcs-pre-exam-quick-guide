<<<<<<< HEAD
import { defineConfig } from 'vitepress'
=======
import { defineConfig } from "vitepress";
import readYamlSync from "./utils/yaml_define_config";

const navbar = readYamlSync("./nav.yaml", import.meta.url);
const sidebar = readYamlSync("./sidebar.yaml", import.meta.url);
>>>>>>> 3c237d4 (Initialize feat/yaml-doc-defined)

export default defineConfig({
  title: "新手友善的 Vitepress 模板 🐥",
  description: "👶👶 提供新手快速建立的 Vitepress 模板 👶👶",
<<<<<<< HEAD
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
=======
  base: "/vitepress-templating/", // 👈👈👈 這個非常需要設定喔！！
  themeConfig: {
    
    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-nav
    nav: navbar,

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-sidebar
    sidebar: sidebar,

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/aisp-fhsh/vitepress-templating",
      },
      {
        icon: {
          svg: `<img src='New%20AISP%20Logo%20Icon.svg' alt='AISP Logo' width='80%' height='80%' />`,
        },
        link: "https://security-program.fhsh.taipei",
      },
    ],
  },
});
>>>>>>> 3c237d4 (Initialize feat/yaml-doc-defined)
