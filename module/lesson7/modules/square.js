// 長方形に関する変数や関数の定義
class Square{
    //コンストラクタ
    constructor(x, y, w, h, color){
        this.name = '長方形';
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    print(){
        return `この${this.name}は、座標(${this.x}、${this.y})、幅${this.w}、高さ${this.h}、色は${this.color}です。`;
    }
}

// クラスをエクスポートする
export { Square };