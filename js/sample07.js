//boxをクリックしたらマウスカーソル座標をとる

//idをとってくる
let box = document.getElementById("box");
console.log(box.clientWidth);

//bodyの座標をとってくる


//何もしてない状態
let flg=false;
//boxを押した時
box.onmousedown = (as) =>{
    flg = true;
}
//マウスを離した時
box.onmouseup = (as) =>{
    flg = false;
}

document.body.onmousemove = (as) =>{
    if(flg){
        console.log("X座標" + as.clientX);
        console.log("Y座標" + as.clientY);
        //boxのleft値をclientXにする
        //マウスの座標からboxの半分の値を引く
        box.style.left = (as.clientX - (box.clientWidth * 0.5) ) + "px";
        box.style.top = (as.clientY - (box.clientWidth * 0.5)) + "px";
    };
};

