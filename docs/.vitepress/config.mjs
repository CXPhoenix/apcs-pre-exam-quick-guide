import { defineConfig } from "vitepress";
import readYamlSync from "./utils/yaml_define_config";

const navbar = readYamlSync("./nav.yaml", import.meta.url);
const sidebar = readYamlSync("./sidebar.yaml", import.meta.url);

export default defineConfig({
  title: "AI 資安學程考前懶人包 💼",
  description: "AI 資安學程 APCS 考前懶人包",
  base: "/apcs-pre-exam-quick-guide/", // 👈👈👈 這個非常需要設定喔！！
  themeConfig: {
    
    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-nav
    nav: navbar,

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-sidebar
    sidebar: sidebar,

    // 👇👇👇 查看 https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cxphoenix/apcs-pre-exam-quick-guide",
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
