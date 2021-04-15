/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
module.exports = {
    title: "vite-docs",                 // 网站标题
    description: '快速搭建文档平台模板.', // 网站描述
    base: '/',                          // 部署时的路径 默认 /  可以使用二级地址 /base/
    lang: 'en-US',                      // 语言
    repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/img/favicon.ico',      //图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
        
        nav: [      // 头部导航
            { text: '首页', link: '/' },
            { text: '关于', link: '/about/' },
        ],
        sidebar: [  //   侧边导航
            { text: '我的', link: '/mine/' }
        ]
    }
}