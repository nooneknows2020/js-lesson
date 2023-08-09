// モジュールを動的に読み込む

const squareBtn = document.querySelector('.square');
const circleBtn = document.querySelector('.circle');

//ボタンをクリックしたときの処理
squareBtn.addEventListener('click', () => {
    import('./modules/square.js').then((Module) => {
        let square = new Module.Square(10, 10, 100, 100);
        console.log(square.print());
    });
    // console.log(squareBtn);
});

//ボタンをクリックしたときの処理
circleBtn.addEventListener('click', () => {
    import('./modules/circle.js').then((Module) => {
        let circle = new Module.Circle(0, 0, 100);
        console.log(circle.print());
    });
    // console.log(circleBtn);
});
