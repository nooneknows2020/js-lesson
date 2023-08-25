class Canvas{
    // コンストラクタ
    constructor(width, height){
        // canvaの生成
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        // キャンバスのサイズが指定されていなければ、幅480、高さ480を初期値とする
        this.canvas.width = width || 480;
        this.canvas.height = height || 480;
    }

    init(){
        const ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "#eeeeee";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw(shape){
        const ctx = this.canvas.getContext("2d");
        console.log(shape);
        shape.draw(this.canvas);
    }
}

export { Canvas };