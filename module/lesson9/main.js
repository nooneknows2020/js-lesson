'use strict';

// ボタンクリックでランダムな大きさの図形をブラウザに表示
// ブラウザの初期表示は以下
/*
<div>
<canvas id="canvas"></canvas>
</div>
<button id="btnSquare">Square</button>
<button id="btnCircle">Circle</button>
<button id="btnClear">CLEAR</button>
<div>
<h2>図形リスト</h2>
<ul id="list"></ul>
</div>
*/
import { Canvas } from './modules/canvas.js';
import { Button } from './modules/button.js';
import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';

// キャンバスの生成、document.bodyに追加
const canvas = new Canvas(480, 320);
// キャンバスの初期表示
canvas.init();

// ボタンクリックで図形をキャンバスに描画する
// Squareボタンの生成、document.bodyに追加
const btnSauare = new Button("Square");
// Circleボタンの生成、document.bodyに追加
const btnCircle = new Button("Circle");
// CLEARボタンの生成、document.bodyに追加
const btnClear = new Button("CLEAR");

// ボタンをクリックしたときの処理
btnSauare.button.addEventListener('click', function(){
    // 図形を生成し、キャンバスに描画する
    // 図形の生成
    const square = new Square();
    // キャンバスに図形を追加する
    canvas.add(square);
    // 追加した図形を描画する
    canvas.randomDraw(square);

    // 図形リストに表示する
    displayAreaPerimeter(square);
});

btnCircle.button.addEventListener('click', function(){
    // 図形を生成し、キャンバスに描画する
    // 図形の生成
    const circle = new Circle();
    // キャンバスに図形を追加する
    canvas.add(circle);
    // 追加した図形を描画する
    canvas.randomDraw(circle);

    // 図形リストに表示する
    displayAreaPerimeter(circle);
});

btnClear.button.addEventListener('click', function(){
    // キャンバスをリセット
    canvas.reset();
    // 図形リストを全削除
    while(ulElem.firstChild){
        ulElem.removeChild(ulElem.firstChild);
    }
});

// ブラウザに図形リストを表示する準備
const div = document.createElement("div");
let html = "<h2>図形リスト</h2>";
html += '<ul id="list"></ul>';
div.innerHTML = html;
document.body.appendChild(div);

// 図形リストの要素を取得する
const ulElem = document.getElementById('list');

// 図形の情報をブラウザに表示
function displayAreaPerimeter(shape){
    const li = document.createElement('li');
    let text;
    if(shape.type == "SQUARE"){
        text = `長方形:面積:${shape.getArea()}px, 外周:${shape.getPerimeter()}px`;       
    }else{
        text = `円:面積:${shape.getArea()}px, 円周:${shape.getPerimeter()}px`;    
    }

    li.textContent = text;
    ulElem.appendChild(li); 
}