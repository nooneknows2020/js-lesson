'use strict';

// ボタンクリックでランダムな大きさの図形をブラウザに表示
import { Canvas } from './modules/canvas.js';
import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';

// ボタン
const btnSquare = document.getElementById('btnSquare');
const btnCircle = document.getElementById('btnCircle');
const btnClear = document.getElementById('btnClear');

// キャンバスの生成
const myCanvas = new Canvas(480, 320);
const ctx = myCanvas.ctx;

// 図形の管理用
let items = [];

// ボタンをクリックしたときの処理
btnSquare.addEventListener('click', function(){
    // 図形の生成
    // const square = new Square(10, 10, 50, 50, 'red');
    // square.draw(ctx);
    // ランダムな大きさの図形を生成
    const square = new Square();
    square.randomSquare(ctx);

    // 配列に要素を追加
    items.push(square);
})

// ボタンをクリックしたときの処理
btnCircle.addEventListener('click', function(){
    // const circle = new Circle(100, 100, 10, 'blue');
    // circle.draw(ctx);
    // ランダムな大きさの図形を生成
    const circle = new Circle();
    circle.randomCircle(ctx);

    // 配列に要素を追加
    items.push(circle);
})

// ボタンをクリックしたときの処理
btnClear.addEventListener('click', function(){
    // キャンバスをリセット
    ctx.reset();

    // 図形管理用の配列をリセット
    items = [];
})

// キャンバスをクリックしたときの処理
myCanvas.canvasElem.addEventListener("click", function(e){
    const rect = e.target.getBoundingClientRect();
    // console.log(rect.left + "," + rect.top);
    // カーソルの座標を取得
    const point = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };

    // クリック判定
    items.forEach(item => {
        if(item.hit(point)){
            item.clicked(ctx);
        }
    });
});