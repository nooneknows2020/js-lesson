class Square{
    // コンストラクタ
    constructor(x, y, width, height, color){
        this.type = 'SQUARE';
        // 図形のパラメータが指定されていなければ、初期値を以下のように設定する
        this.x = x || 10;
        this.y = y || 10;
        this.width = width || 10;
        this.height = height || 10;
        this.color = color || "#333333";
    }

    // 図形の描画
    draw(canvas){
        const _ctx = canvas.getContext("2d");
        _ctx.fillStyle = this.color;
        _ctx.fillRect(this.x, this.y, this.width, this.height);
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
        this.width = random(10, 100);
        this.height = random(10, 100);
        _ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    //図形の面積を求める
    getArea(){
        return this.width * this.height;
    }

    //図形の外周の長さを求める
    getPerimeter(){
        return (this.width + this.height) * 2;
    }
}

// 乱数生成
function random(min, max){
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

export { Square };