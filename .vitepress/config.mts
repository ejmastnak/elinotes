import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EliNotes",
  description: "EliNotes",
  srcDir: 'src',

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [
      { text: 'Tomorrow lists', link: '/tomorrow-lists/' },
      { text: 'Roadmaps', link: '/roadmaps/' },
      { text: 'Ricky', link: '/ricky/' },
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Tomorrow Lists',
        items: [
          { text: 'Index', link: '/tomorrow-lists/' },
          { text: 'August 2025', link: '/tomorrow-lists/2025-08' },
          { text: 'July 2025', link: '/tomorrow-lists/2025-07' },
        ]
      },
      {
        text: 'Roadmaps',
        items: [
          { text: 'Index', link: '/roadmaps/' },
          { text: 'Gaia', link: '/roadmaps/gaia' },
          { text: 'EliPortfolio', link: '/roadmaps/portfolio' },
          { text: 'Hišna Številka', link: '/roadmaps/hisna-stevilka' },
          { text: 'TV47', link: '/roadmaps/tv47' },
          { text: 'LJ16', link: '/roadmaps/lj16' },
        ]
      },
    ],

  }
})
