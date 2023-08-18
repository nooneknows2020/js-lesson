class Circle{
    // コンストラクタ
    constructor(x, y, r, color){
        this.type = 'CIRCLE';
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    // 図形の描画
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        ctx.fill();
    }

    //ランダムな大きさの円を作る
    randomCircle(ctx){
        const color1 = random(0, 255);
        const color2 = random(0, 255);
        const color3 = random(0, 255);
        this.color = `rgb(${color1}, ${color2}, ${color3})`;
        ctx.fillStyle = this.color;
    
        this.x = random(0, 480);
        this.y = random(0, 320);
        this.r = random(10, 100);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        ctx.fill();
    }
    
    //図形の面積を求める
    getArea(){
        return Math.floor(this.r * this.r * Math.PI);
    }

    //図形の外周の長さを求める
    getPerimeter(){
        return Math.floor(2 * this.r + Math.PI);
    }

    // クリック判定
    hit(point){
        // ピラゴラスの定理からユークリッド距離と半径で判定
        return Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2) <= Math.pow(this.r, 2);
    }

    // クリックされたときの処理
    clicked(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}

// 乱数生成
function random(min, max){
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

export { Circle };