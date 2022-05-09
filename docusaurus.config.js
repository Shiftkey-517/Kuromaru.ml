// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'くろまるサーバー - Kuromaru.ml',
  tagline: 'kuromaru.ml',
  url: 'https://www.kuromaru.ml',
  baseUrl: '/',
  onBrokenLinks: 'warn', //throw

  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Kuromaru.ml', // Usually your GitHub org/user name.
  projectName: 'Kuromaru.ml', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kanji1113/Kuromaru.ml/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kanji1113/Kuromaru.ml/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'KUROMARU',
        logo: {
          alt: 'くろまるサーバーのロゴ',
          src: 'img/logo_small_dark.png',
        },
        "items": [
          {
            "type": "doc",
            "docId": "index",
            "position": "left",
            "label": "ドキュメント"
          },
          {
            "to": "/blog",
            "label": "お知らせ",
            "position": "left"
          },
          {
            "href": "https://discord.gg/3cPMXcdGKd",
            "label": "Discord",
            "position": "left"
          },
          {
            "href": "https://twitter.com/Server_kuromaru",
            "label": "Twitter",
            "position": "left"
          },
          {
            "href": "http://kuromaru.ml:8123/",
            "label": "Dynmap",
            "position": "left"
          },
          {
            "href": "http://kuromaru.ml:8100/",
            "label": "BlueMap",
            "position": "left"
          },
          {
            "href": "https://www.youtube.com/watch?v=GHC1wtTcr9s",
            "label": "YouTube Live",
            "position": "left"
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: 'はじめに',
                to: '/docs',
              },
              {
                label: '参加方法',
                to: '/docs/join',
              },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/3cPMXcdGKd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Server_Kuromaru',
              },
            ],
          },
          {
            title: '関連サイトリンク',
            items: [
              {
                label: 'くろまるサーバー 公認Wiki',
                to: 'https://kuromaru.game-info.wiki/',
              },
              {
                label: '匠・新海座高速鉄道',
                to: 'https://sites.google.com/view/tsrr/',
              },
              {
                label: 'KGNN News',
                to: 'https://kgnn-news.blogspot.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kuromaru.ml.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
    localeConfigs: {
      ja: {
        label: '日本語',
        direction: 'ltr',
      },
    },
  },
};

module.exports = config;
