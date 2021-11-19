const brown = document.querySelector(".tomBrown");
console.log(brown);

console.log("aaa");

let flg = false;

brown.onmousedown = (e) =>{
    flg = true;
}

brown.onmouseup = (e) =>{
    flg = false;
}

document.body.onmousemove = (e) => {
    if(flg){
        console.log("X座標" + e.clientX);
        console.log("Y座標" + e.clientY);

        brown.style.left = (e.clientX - (brown.clientWidth * 0.5)) + "px";
        brown.style.top = (e.clientY - (brown.clientWidth * 0.5)) + "px";
    }
}






