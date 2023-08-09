# JavaScriptの練習

## モジュール

- lesson1:モジュールの読み込みの基本→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson1/)
- lesson2:インポート時の名前の変更(衝突回避)→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson2/)
- lesson3:モジュール全体をオブジェクトとしてインポートする→[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson3/)
- lesson4:クラスをインポートする[実行例](https://nooneknows2020.github.io/js-lesson/module/lesson4/)

※コンソールを確認すること

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

## lesson3:モジュール全体をオブジェクトそしてインポートする

```javascript
// main.js
// インポート側
// モジュール全体をオブジェクトそしてインポートする
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

## 参考サイト

- [JavaScript モジュール - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules)
- [js-examples/module-examples at main · mdn/js-examples](https://github.com/mdn/js-examples/tree/main/module-examples)

