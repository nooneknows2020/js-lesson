class Canvas{
    // コンストラクタ
    constructor(width, height){
        // canvaの生成
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        // キャンバスのサイズが指定されていなければ、幅480、高さ480を初期値とする
        this.canvas.width = width || 480;
        this.canvas.height = height || 480;

        // キャンバスに描画する図形を入れておく
        this.shapes = [];
    }

    // キャンバスの初期設定
    init(){
        // コンテキストを呼ぶ
        const ctx = this.canvas.getContext("2d");
        // キャンバスの初期状態
        ctx.fillStyle = "#eeeeee";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // キャンバスに図形を追加する
    add(shape){
        this.shapes.push(shape);
        console.log(this.shapes);
    }

    draw(shape){
        const ctx = this.canvas.getContext("2d");
        console.log(shape);
        shape.draw(this.canvas);
    }
}

export { Canvas };