module.exports = {
  base: '/etc-notes/',
  title: '一体系',
  description: '一体系',
  head: [
    ['link', { rel: 'icon', href: '/assets/image/favicon.ico' }],
    ['meta', { name: 'keyword', content: '一体系项目介绍' }],
  ],
  themeConfig: {
    logo: '/assets/image/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'External', link: 'https://baidu.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Hone', link: '/' },
          { text: 'About', link: '/about' },
        ],
      },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1',
            items: [
              { text: 'css', link: '/css/' },
              { text: 'js', link: '/js/' },
            ],
          },
          {
            text: 'Group2',
            items: [
              { text: 'Hone', link: '/' },
              { text: 'About', link: '/about' },
            ],
          },
        ],
      },
    ],
    sidebar: {
      // '/css/': ['a-css', 'b-css'],
      '/css/': [
        {
          title: 'Group 1', // 必要的
          path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ['a-css', 'b-css'],
        },
        // {
        //   title: 'Group 2', // 必要的
        //   path: '/js/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //   collapsable: false, // 可选的, 默认值是 true,
        //   sidebarDepth: 1, // 可选的, 默认值是 1
        //   children: ['a-js', 'b-js']
        // }
      ],
      '/js/': ['a-js', 'b-js'],
    },
    lastUpdated: '更新时间', // 最后更新时间
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/assets/image',
      },
    },
  },
};
