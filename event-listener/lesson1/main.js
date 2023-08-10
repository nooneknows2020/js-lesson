'use strict';

let i = 0;

// クリックでボタンを生成する
document.getElementById('addBtn').addEventListener('click', function(){
    console.log("click add");
    // 編集ボタン、削除ボタン、修正ボタンを作る
    // <div>
    // <input type="button" class="editBtn" value="編集">
    // <input type="button" class="removeBtn" value="削除">
    // <input type="button" class="fixBtn" value="修正"></input>
    // </div>
    const div = document.createElement('div');
    div.dataset.num = i++;
    let html = createButton("edit", "編集");
    html += createButton("remove", "削除");
    html += createButton("fix", "修正");
    div.innerHTML += html;
    // console.log(html);
    document.getElementById('veiw').appendChild(div);
});

// inputタグを作る
function createButton(className, value){
    return '<input type="button" class="' + className + '" value="' + value + '">';
}

// 編集ボタンの処理
document.getElementById('veiw').addEventListener('click', function(e){
    if(e.target.className == "edit"){
        console.log("click edit");
        console.log(e.target.parentNode.dataset.num);
    }
});

// 削除ボタンの処理
document.getElementById('veiw').addEventListener('click', function(e){
    if(e.target.className == "remove"){
        console.log("click remove");
        console.log(e.target.parentNode.dataset.num);
    }
});

// 修正ボタンの処理
document.getElementById('veiw').addEventListener('click', function(e){
    if(e.target.className == "fix"){
        console.log("click fix");
        console.log(e.target.parentNode.dataset.num);
    }
});

