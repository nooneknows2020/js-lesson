class Square{
    // コンストラクタ
    constructor(x, y, width, height, color){
        this.type = 'SQUARE';
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.color = color;
    }

    // 図形の描画
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    //ランダムな大きさの長方形を作る
    randomSquare(ctx){
        const color1 = random(0, 255);
        const color2 = random(0, 255);
        const color3 = random(0, 255);
        this.color = `rgb(${color1}, ${color2}, ${color3})`;
        ctx.fillStyle = this.color;
    
        this.x = random(0, 480);
        this.y = random(0, 320);
        this.w = random(10, 100);
        this.h = random(10, 100);
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    
    //図形の面積を求める
    getArea(){
        return this.w * this.h;
    }

    //図形の外周の長さを求める
    getPerimeter(){
        return (this.w + this.h) * 2;
    }

    // クリック判定
    hit(point){
        return (this.x <= point.x && point.x <= this.x + this.w) &&
        (this.y <= point.y && point.y <= this.y + this.h);
    }

    // クリックされたときの処理
    clicked(ctx){
        ctx.clearRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

// 乱数生成
function random(min, max){
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

export { Square };