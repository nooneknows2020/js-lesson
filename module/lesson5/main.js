// モジュールの集約
import { Square, Circle } from './modules/shapes.js';

let square = new Square(0, 0, 10, 10);
console.log(square.print());

let circle = new Circle(0, 0, 10);
console.log(circle.print());