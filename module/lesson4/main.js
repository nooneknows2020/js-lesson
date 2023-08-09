// クラスをインポートする
import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';

let square = new Square(0, 0, 10, 10);
console.log(square.print());

let circle = new Circle(0, 0, 10);
console.log(circle.print());