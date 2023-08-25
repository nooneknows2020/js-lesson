"use strict";
/* 以下のようなHTML要素を作る
<button id="btnSquare">Square</button>
<button id="btnCircle">Circle</button>
<button id="btnClear">CLEAR</button>
*/
class Button{
    constructor(value){
        this.button = document.createElement("button");
        document.body.appendChild(this.button);
        this.button.textContent = value;
    }

    draw(e){
        const button = e.target;
        console.log(button.textContent);
    }



}
export { Button };