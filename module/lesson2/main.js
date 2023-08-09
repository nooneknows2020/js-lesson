// インポート時に名前を変更する(衝突回避)
import { name as squareName,
        param as squareParam,
        print as squarePrint  } from './modules/square.js';
import { name as circleName,
        param as circleParam,
        print as circlePrint  } from './modules/circle.js';

console.log(squareName);
console.log(squareParam);
console.log(squarePrint());

console.log(circleName);
console.log(circleParam);
console.log(circlePrint());
