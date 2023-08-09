// 円に関する変数や関数の定義
const CIRCLE = "円";

let circle = {
    x: 0,
    y: 0,
    r: 10
};

function printCircle(){
    return `この${CIRCLE}は、座標(${circle.x}、${circle.y})、半径${circle.r}です。`;
}

// 変数、関数、オブジェクトをエクスポートする
export { CIRCLE, circle, printCircle };
