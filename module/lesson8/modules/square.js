const name = "四角形";

function draw(ctx, length, x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}

//図形の面積を求める
function getArea(length){
    return length * length;
}

//図形の外周の長さを求める
function getPerimeter(length){
    return length * 4;
}

//ランダムな大きさの正方形を作る
function randomSquare(ctx){
    let color1 = random(0, 255);
    let color2 = random(0, 255);
    let color3 = random(0, 255);
    let color = `rgb(${color1}, ${color2}, ${color3})`;
    ctx.fillStyle = color;

    let x = random(0, 480);
    let y = random(0, 320);
    let length = random(10, 100);
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}

// 乱数生成
function random(min, max){
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

export { name, draw, getArea, getPerimeter, randomSquare };