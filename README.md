# 練習看 Babel 運作

之前撰寫 React 都是用 CRA 快速開發與發佈一個專案，最近開始練習自己使用 Babel 和 Webpack 的設定進行 ES5 編譯和自動化，試過兩、三次後，想更瞭解工具是怎麼使用

## 以 ES6 module 環境嘗試 Babel

使用 Babel 的主要核心是利用 @babel/core 和其他根據環境與需求的不同加裝 presets 和 plugins，這次練習共使用:

    @babel/cli: ^7.16.8 > 在 client 端可以執行腳本進行編譯
    @babel/core: ^7.16.12 > 主要協助編譯的工具
    @babel/preset-env: ^7.16.11 > 編譯環境設定
    @babel/polyfill: ^7.12.1 > 舊版做 polyfill 的方式 ( 同樣寫入來看與新方式的差異 )
    @babel/plugin-transform-runtime: ^7.16.10 > 協助做 compile，並使用部分 core-js@3 的函數
    @babel/runtime-corejs3: ^7.16.8 > 給予 compile 時會重複運用的函數

## 測試語法

1. ES6 Array Method
2. fetch API 以 .then() & .catch() 消化 promise
3. async & await 以 try / catch 消化 promise
4. ES6 class sugar syntax
