let box = document.getElementById("box");
console.log(box)

let flg=false;

box.onmousedown = (as) =>{
    flg=true
}

box.onmouseup = (as) =>{
    flg=false
}

document.body.onmousemove = (as) =>{
    if(flg){
    console.log("X座標" + as.clientX);
    console.log("Y座標" + as.clientY);

    box.style.left = ((as.clientX - (box.clientWidth * 0.5)) + "px");
    box.style.top = ((as.clientY - (box.clientHeight * 0.5)) + "px");
    }
}