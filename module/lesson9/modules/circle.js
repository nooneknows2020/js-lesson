class Circle{
    // コンストラクタ
    constructor(x, y, r, color){
        this.type = 'CIRCLE';
        // 図形のパラメータが指定されていなければ、初期値を以下のように設定する
        this.x = x || 10;
        this.y = y || 10;
        this.r = r || 10;
        this.color = color || "#333333";
    }

    // 図形の描画
    draw(canvas){
        const _ctx = canvas.getContext("2d");
        _ctx.fillStyle = this.color;
        _ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        _ctx.fill();
    }

    //ランダムな位置、大きさ、色の図形を描画する
    randomDraw(canvas){
        const color1 = random(0, 255);
        const color2 = random(0, 255);
        const color3 = random(0, 255);
        this.color = `rgb(${color1}, ${color2}, ${color3})`;

        const _ctx = canvas.getContext("2d");
        _ctx.fillStyle = this.color;
    
        this.x = random(0, 480);
        this.y = random(0, 320);
        this.r = random(10, 100);
        _ctx.beginPath();
        _ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        _ctx.fill();
    }
    
    //図形の面積を求める
    getArea(){
        return Math.floor(this.r * this.r * Math.PI);
    }

    //図形の外周の長さを求める
    getPerimeter(){
        return Math.floor(2 * this.r + Math.PI);
    }
}

// 乱数生成
function random(min, max){
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

export { Circle };