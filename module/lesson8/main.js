import { name, draw, getArea, getPerimeter, randomSquare } from './modules/square.js';

// コンテキストの取得
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// 図形リスト
const shapeList = document.getElementById("shape-list");
// console.log(shapeList);

// 正方形の描画
const square1 = draw(ctx, 50, 50, 50, "blue");
// キャンバスに描画される図形の情報をリストで表示する
reportAreaPerimeter(square1);

const square2 = randomSquare(ctx);
reportAreaPerimeter(square2);

// リストタグを生成・追加
function reportAreaPerimeter(shape){
    // <li>四角形:面積:2500px, 外周:200px</li>
    const li = document.createElement("li");
    const text = `${name}:面積:${getArea(shape.length)}px, 外周:${getPerimeter(shape.length)}px`;
    li.textContent = text;
    shapeList.appendChild(li);
}