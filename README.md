# JavaScriptの練習

- モジュール
- イベントリスナ

## モジュール

- lesson1:モジュールの読み込みの基本→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson1/)
- lesson2:インポート時の名前の変更(衝突回避)→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson2/)
- lesson3:モジュール全体をオブジェクトとしてインポートする→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson3/)
- lesson4:クラスをインポートする→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson4/)
- lesson5:モジュールの集約→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson5/)
- lesson6:モジュールを動的に読み込む→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson6/)
- lesson7:await→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson7/)

※コンソールを確認すること。

※モジュールを読み込む際は、ローカルサーバーを起動して確認すること。

### lesson1:モジュールの読み込みの基本

#### ファイル構造

- index.html
- main.js
- modules/
    - square.js
    - circle.js

#### ファイルの役割

- index.html
    - main.jsを読み込む
- main.js
    - modules配下のモジュールを読み込む
    - 処理の実行
- square.js
    - 長方形に関する変数や関数の定義
- circle.js
    - 円に関する変数や関数の定義

```html
<!-- index.html -->
<!-- スクリプトファイルにtype="module"を指定する -->
<script type="module" src="./main.js"></script>
```

```javascript
// main.js
// インポート側
import { RECT, rect, printRect  } from './modules/square.js';
import { CIRCLE, circle, printCircle } from './modules/circle.js';
```

```javascript
// square.js
// エクスポート側
export { RECT, rect, printRect };
```

```javascript
// circle.js
// エクスポート側
export { CIRCLE, circle, printCircle };
```

### lesson2:インポート時の名前の変更(衝突回避)

```javascript
// main.js
// インポート時に名前を変更する(衝突回避)
import { name as squareName,
        param as squareParam,
        print as squarePrint  } from './modules/square.js';
import { name as circleName,
        param as circleParam,
        print as circlePrint  } from './modules/circle.js';
```

```javascript
// square.js
// エクスポート側
export { name, param, print };
```

```javascript
// circle.js
// エクスポート側
export { name, param, print };
```

### lesson3:モジュール全体をオブジェクトとしてインポートする

```javascript
// main.js
// インポート側
// モジュール全体をオブジェクトとしてインポートする
import * as Square from './modules/square.js';
import * as Circle from './modules/circle.js';
```

```javascript
// square.js
// エクスポート側
export { name, param, print };
```

```javascript
// circle.js
// エクスポート側
export { name, param, print };
```

### lesson4:クラスをインポートする

```javascript
// main.js
// インポート側
// クラスをインポートする
import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';
```

```javascript
// square.js
// エクスポート側
// クラスをエクスポートする
export { Square };
```

```javascript
// square.js
// エクスポート側
// クラスをエクスポートする
export { Circle };
```

### lesson5:モジュールの集約

複数のモジュールを親モジュールに集約する。

#### ファイル構造

- index.html
- main.js
- modules/
    - shapes.js
    - shapes/
        - square.js
        - circle.js

#### ファイルの役割

- index.html
    - main.jsを読み込む
- main.js
    - modules配下のモジュールを読み込む
    - 処理の実行
- shapes.js
    - モジュールを集約する
    - モジュールをまとめてエクスポートする
- square.js
    - 長方形に関する変数や関数の定義
- circle.js
    - 円に関する変数や関数の定義

```javascript
// main.js
// インポート側
// モジュールをまとめて読み込む
import { Square, Circle } from './modules/shapes.js';
```

```javascript
// shapes.js
// エクスポート側
// モジュールをまとめてエクスポートする
export { Square } from './shapes/square.js';
export { Circle } from './shapes/circle.js';
```

```javascript
// square.js
// エクスポート側
// クラスをエクスポートする
export { Square };
```

```javascript
// circle.js
// エクスポート側
// クラスをエクスポートする
export { Circle };
```

### lesson6:モジュールを動的に読み込む

ex.)ボタンをクリックしたときにモジュールを読み込む。

```javascript
//ボタンをクリックしたときの処理
squareBtn.addEventListener('click', () => {
    import('./modules/square.js').then((Module) => {
        let square = new Module.Square(10, 10, 100, 100);
        console.log(square.print());
    });
});
```

### lesson7:await

#### ファイル構造

- index.html
- main.js
- modules/
    - square.js
    - circle.js
    - getColors.js
- data/
    - colors.js

#### ファイルの役割

- index.html
    - main.jsを読み込む
- main.js
    - modules配下のモジュールを読み込む
    - 処理の実行
- square.js
    - 長方形に関する変数や関数の定義
- circle.js
    - 円に関する変数や関数の定義
- getColors.js
    - jsonデータを取得する
- colors.js
    - カラーコードをjson形式のデータで定義する



```javascript
// main.js
// インポート側
import colors from './modules/getColors.js';

...

//ボタンをクリックしたときの処理
squareBtn.addEventListener('click', () => {
    import('./modules/square.js').then((Module) => {
        let square = new Module.Square(10, 10, 100, 100, colors.blue);
        console.log(square.print());
    });
});
```

```javascript
// getColors.js
// fetch request
const colors = fetch('./data/colors.json')
    .then(response => response.json());

export default await colors;
```

```
// colors.json
// json形式のカラーコード
{
    "yellow": "#F4D03F",
    "green": "#52BE80",
    "blue": "#5499C7",
    "red": "#CD6155",
    "orange": "#F39C12"
}
```

## イベントリスナ

- lesson1:イベントリスナの基本→[実行例](https://nooneknows2020.github.io/js-lesson/event-listener/lesson1/)

### lesson1:イベントリスナの基本

後から追加した要素にもイベントリスナを作っておける。

## 参考サイト

- [JavaScript モジュール - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules)
- [js-examples/module-examples at main · mdn/js-examples](https://github.com/mdn/js-examples/tree/main/module-examples)

