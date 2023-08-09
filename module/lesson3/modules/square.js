// 長方形に関する変数や関数の定義
const name = "長方形";

let param = {
    x: 0,
    y: 0,
    w: 100,
    h: 100
};

function print(){
    return `この${name}は、座標(${param.x}、${param.y})、幅${param.w}、高さ${param.h}です。`;
}

export { name, param, print };
