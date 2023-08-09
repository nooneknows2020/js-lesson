// 長方形に関する変数や関数の定義
const RECT = "長方形";

let rect = {
    x: 0,
    y: 0,
    w: 100,
    h: 100
};

function printRect(){
    return `この${RECT}は、座標(${rect.x}、${rect.y})、幅${rect.w}、高さ${rect.h}です。`;
}

// 変数、関数、オブジェクトをエクスポートする
export { RECT, rect, printRect };
