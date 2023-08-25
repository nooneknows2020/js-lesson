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
import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';
import { Button } from './modules/button.js';


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

// ボタンをクリックしたときの処理
btnSauare.button.addEventListener('click', function(){
    // 図形を生成し、キャンバスに描画する
    // 図形の生成
    const square = new Square();
    // キャンバスに図形を追加する
    canvas.add(square);
    // 追加した図形を描画する
    // canvas.draw(square);
    canvas.randomDraw(square);
});

btnCircle.button.addEventListener('click', function(){
    // 図形を生成し、キャンバスに描画する
    // 図形の生成
    const circle = new Circle();
    // キャンバスに図形を追加する
    canvas.add(circle);
    // 追加した図形を描画する
    // canvas.draw(circle);
    canvas.randomDraw(circle);
});


// // ブラウザ表示用
// const ulElem = document.getElementById('list');


// // 図形の情報をブラウザに表示
// function displayAreaPerimeter(shape){
//     const li = document.createElement('li');
//     let text;
//     if(shape.type == "SQUARE"){
//         text = `長方形:面積:${shape.getArea()}px, 外周:${shape.getPerimeter()}px`;       
//     }else{
//         text = `円:面積:${shape.getArea()}px, 円周:${shape.getPerimeter()}px`;    
//     }

//     li.textContent = text;
//     ulElem.appendChild(li); 
// }

// btnClear.addEventListener('click', function(){
//     // キャンバスをリセット
//     ctx.reset();
//     // 図形リストを全削除
//     while(ulElem.firstChild){
//         ulElem.removeChild(ulElem.firstChild);
//     }
// })
