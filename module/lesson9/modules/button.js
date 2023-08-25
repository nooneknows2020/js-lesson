"use strict";
/* 以下のようなHTML要素を作る
<button>Square</button>
<button>Circle</button>
<button>CLEAR</button>
*/
class Button{
    constructor(value){
        this.button = document.createElement("button");
        document.body.appendChild(this.button);
        this.button.textContent = value;
    }
}
export { Button };