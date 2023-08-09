// 円に関する変数や関数の定義
const name = "円";

let param = {
    x: 0,
    y: 0,
    r: 10
};

function print(){
    return `この${name}は、座標(${param.x}、${param.y})、半径${param.r}です。`;
}

export { name, param, print };