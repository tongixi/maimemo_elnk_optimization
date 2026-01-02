// ==UserScript==
// @name         maimemo_elnk_optimization
// @namespace    http://tampermonkey.net/
// @version      6.1
// @description  墨水屏专用：上下布局、黑白配色、无动画、高对比度 + 删除干扰元素
// @author       TXUANI
// @match        *://www.maimemo.com/*
// @match        *://*.maimemo.com/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    // === 样式注入 ===
    GM_addStyle(`

        /* 单词高亮 */
        .phrase-hl .memo-word {
            text-decoration: underline !important;
            font-weight: 700 !important;
        }


        .rev-resp-btns taro-button-core {
            border: 2px solid #000000 !important;
            box-shadow: none !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
        }

        .accent, .note-type {
            background: #ffffff !important;
            border: 2px solid #000000 !important;
            color: #000000 !important;
        }

        .rev-content-blank {
            background-color: #000000 !important;
            height: 0px !important;
        }

        .rev-resp-btns taro-button-core {
            background: #ffffff !important;
            color: #000000 !important;
        }

        /* 移除所有渐变、阴影、模糊效果 */
        * {
            background-image: none !important;
            box-shadow: none !important;
            text-shadow: none !important;
            backdrop-filter: none !important;
            filter: none !important;
            animation: none !important;
            transition: none !important;
        }

        /* 不显示图标 */
        img, svg, .icon {
            display: none !important;
        }

        .taro-img__mode-scaletofill {
            display: none !important;
        }
        /* 不显示标题 */
        .rev-content-header{
        display: none !important;
        }
        .text{
        display: none !important;
        }

    `);

    console.log('墨墨背单词墨水屏优化版已启动 - 持续清理模式');
})();