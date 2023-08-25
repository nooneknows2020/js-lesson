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


// キャンバスの生成
const canvas = new Canvas(480, 320);
// キャンバスの初期表示
canvas.init();


// // ブラウザ表示用
// const ulElem = document.getElementById('list');
// const btnSquare = document.getElementById('btnSquare');
// const btnCircle = document.getElementById('btnCircle');

// // キャンバスの生成
// const myCanvas = new Canvas(480, 320);
// const ctx = myCanvas.ctx;
// // console.log(ctx);


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

// // ボタンをクリックしたときの処理
// btnSquare.addEventListener('click', function(){
//     // 図形の生成
//     // const square = new Square(10, 10, 50, 50, 'red');
//     // square.draw(ctx);
//     // ランダムな大きさの図形を生成
//     const square = new Square();
//     square.randomSquare(ctx);
//     // console.log(square);

//     displayAreaPerimeter(square);
// })

// btnCircle.addEventListener('click', function(){
//     // const circle = new Circle(100, 100, 10, 'blue');
//     // circle.draw(ctx);
//     // ランダムな大きさの図形を生成
//     const circle = new Circle();
//     circle.randomCircle(ctx);

//     displayAreaPerimeter(circle);
// })

// btnClear.addEventListener('click', function(){
//     // キャンバスをリセット
//     ctx.reset();
//     // 図形リストを全削除
//     while(ulElem.firstChild){
//         ulElem.removeChild(ulElem.firstChild);
//     }
// })
