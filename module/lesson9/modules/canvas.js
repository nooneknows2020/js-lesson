class Canvas{
    // コンストラクタ
    constructor(width, height){
        this.canvasElem = document.getElementById('canvas');
        this.canvasElem.width = width;
        this.canvasElem.height = height;
        
        this.ctx = this.canvasElem.getContext("2d");
    }
}

export { Canvas };