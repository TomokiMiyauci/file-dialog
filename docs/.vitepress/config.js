/**
 * @type {import('vitepress').UserConfig}
 */

const title = 'File Select Dialog'
const description = 'Directly call file select dialog from JavaScript'
module.exports = {
  lang: 'en-US',
  title,
  description,
  head: [
    ['meta', { name: 'og:title', content: title }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { name: 'og:image', content: '/logo.png' }],
    [
      'meta',
      {
        name: 'og:url',
        content: 'https://tomokimiyauci.github.io/file-select-dialog/'
      }
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@miyauchi_tomoki' }]
  ],

  themeConfig: {
    repo: 'TomokiMiyauci/file-select-dialog',
    logo: '/logo.png',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Guide', link: '/guide', activeMatch: '^/guide' },
      {
        text: 'API',
        link: '/api',
        activeMatch: '^/api'
      },
      {
        text: 'Release Notes',
        link:
          'https://github.com/TomokiMiyauci/file-select-dialog/blob/main/CHANGELOG.md'
      }
    ],

    sidebar: {
      '/api': getConfigSidebar(),
      '/guide': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      link: '/guide'
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'API Reference',
      link: '/api'
    }
  ]
}
