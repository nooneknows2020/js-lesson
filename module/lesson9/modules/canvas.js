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
        // console.log(this.shapes);
    }

    draw(shape){
        shape.draw(this.canvas);
    }

    // ランダムな位置、大きさ、色の図形を描画する
    randomDraw(shape){
        shape.randomDraw(this.canvas);
    }

    // キャンバスに描画されている図形をリセットする
    reset(){
        // 図形が0個ならば、何も処理しない
        if(this.shapes.length === 0){
            return;
        }
        const ctx = this.canvas.getContext("2d");
        // キャンバスをリセットする
        ctx.reset();
        // キャンバスに描画する図形を空にする
        this.shapes = [];
        // console.log(this.shapes.length);
        // キャンバスを初期状態に戻す
        this.init();
    }
}

export { Canvas };