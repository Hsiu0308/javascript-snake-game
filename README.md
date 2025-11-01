# 貪食蛇遊戲 (JavaScript Snake Game)

這是一個使用 HTML Canvas、CSS 和純 JavaScript 打造的經典貪食蛇遊戲。

## 🚀 即時網站預覽 (Live Demo)

您可以透過以下連結瀏覽這個網站的即時成果：

[**https://Hsiu0308.github.io/javascript-snake-game/**](https://hsiu0308.github.io/javascript-snake-game/)

---

## 專案結構

```
project/
├── index.html # 網站主頁
├── app.js # 遊戲核心 JavaScript 檔案
└── style/ # 樣式檔案資料夾
    ├── style.scss # SCSS 源碼
    ├── style.css # 編譯後的 CSS
    └── style.css.map # Source map 檔案
```

---

_(專案結構是根據您 `index.html` 中的 `<link>` 路徑推斷的)_

## 💡 功能特色

- **HTML Canvas 繪圖：** 整個遊戲畫面，包含蛇、水果和背景，都是使用 `Canvas API` 動態繪製的。
- **貪食蛇操作：**
  - 使用上下左右 (`ArrowKeys`) 鍵盤按鍵來控制蛇的移動方向。
  - 防止 180 度迴轉：例如，當蛇向右移動時，無法立即向左。
- **遊戲機制：**
  - **撞牆穿越：** 蛇的頭碰到邊界時，會從另一側的邊界重新出現。
  - **遊戲結束：** 蛇的頭碰到自己身體的任一節時，遊戲結束並跳出提示。
  - **重新開始：** 提供「開始新遊戲」按鈕，點擊後會重新載入頁面。
- **水果與計分：**
  - **智慧型水果生成：** 水果會隨機生成在畫面上，並內建檢查機制 (`checkOverlap`)，確保不會在蛇的身體上生成。
  - **即時計分：** 吃到水果時，蛇會變長，分數會即時更新。
- **最高分紀錄：**
  - 使用瀏覽器的 `localStorage` 功能，會自動儲存並載入玩家的「最高分數」。

## 🛠️ 使用技術

- **HTML5:**
  - `<canvas>` 元素
- **CSS3 / SCSS:**
  - Flexbox 佈局
  - 使用 `position: absolute` 與 `transform` 將 Canvas 置中
- **JavaScript (ES6+):**
  - Canvas API (`getContext("2d")`)
  - DOM 操作 (讀取分數、按鈕事件)
  - `setInterval` 遊戲迴圈
  - 鍵盤事件監聽 (`window.addEventListener("keydown")`)
  - `localStorage` (儲存最高分)
  - `Math.random` (水果隨機位置)

## 🔧 開發環境設置

1.  clone 此專案。
2.  安裝 SASS 編譯器 (如果尚未安裝)。
3.  執行 SASS watch 來自動編譯 SCSS 檔案 (請注意 `index.html` 中引用的路徑是 `style/`):

```bash
sass --watch style/style.scss style/style.css
```

---

👨‍💻 作者
Hensel Huang

授權
MIT License
