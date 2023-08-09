// 円に関する変数や関数の定義
class Circle{
    //コンストラクタ
    constructor(x, y, r, color){
        this.name = '円';
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    print(){
        return `この${this.name}は、座標(${this.x}、${this.y})、半径${this.r}、色は${this.color}です。`;
    }
}

// クラスをエクスポートする
export { Circle };