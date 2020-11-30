const nav = require('./components/nav.js');

module.exports = {
    title: 'CJD的博客',
    description: '个人博客',
    dest: './dist',
    port: '8888',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [{
            text: 'Home', link: '/'
        },
        {
            text: '面试宝典', link: '/baodian/',
            items: [
                {text: '初级开发篇', link: '/baodian/zero/'},
                {text: '中高进阶篇', link: '/baodian/high/'},
            ]
        },
        {
            text: 'Category',
            items: [
                {
                    text: '在线编辑',
                    items: [
                        {text: '图片压缩', link: 'https://tinypng.com/'}
                    ]
                },
                {
                    text: '在线服务',
                    items: [
                        {text: '阿里云', link: 'https://www.aliyun.com/'},
                        {text: '腾讯云', link: 'https://cloud.tencent.com/'}
                    ]
                },
                {
                    text: '博客指南',
                    items: [
                        {text: '掘金', link: 'https://juejin.im/'},
                        {text: 'CSDN', link: 'https://blog.csdn.net/'}
                    ]
                }
            ]
        }],
        sidebar: {'/guide/':[
            {
                  title:'新手指南',
                  collapsable: true,
                  children:[
                    '/guide/notes/one',
                  ]
                },
                {
                  title:'知码学院',
                  collapsable: true,
                  children:[
                    '/guide/notes/two',
                  ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
