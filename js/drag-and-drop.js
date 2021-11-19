// const luffy = document.querySelector(".luffy");
// console.log(luffy);


// let flg=false;

// luffy.onmousedown = (l) =>{
//     flg = true;
// }


// luffy.onmouseup = (l) =>{
//     flg = false;
// };



// document.body.onmousemove = (l) =>{
//     if(flg){
//         console.log("X座標" + l.clientX);
//         console.log("Y座標" + l.clientY);
//         luffy.style.left = (l.clientX - (luffy.clientWidth * 0.5) ) + "px";
//         luffy.style.top = (l.clientY - (luffy.clientWidth * 0.5)) + "px";
//     };
// };

// const box = document.querySelector(".box");
// console.log(box);

// let flg = false;

// box.onmousedown = (a) =>{
//     flg = true;
// };

// box.onmouseup = (a) =>{
//     flg = false;
// };

// document.body.onmousemove = (a) =>{
//     if(flg){
//         console.log("X座標" + a.clientX);
//         console.log("Y座標" + a.clientY);

//         box.style.left = (a.clientX - (box.clientWidth * 0.5)) + "px";
//         box.style.top = (a.clientY - (box.clientWidth * 0.5)) + "px";
//     };
// };

const ibutujokyo = document.querySelector(".ibutujokyo");
console.log(ibutujokyo);


let flg__2 = false;

ibutujokyo.onmousedown = (aa) =>{
    flg__2 = true;
    console.log("down");
}

ibutujokyo.onmouseup = (aa) =>{
    flg__2 = false;
    console.log("up");
}


document.body.onmousemove = (aa) => {
    if(flg__2){
        console.log("X座標" + aa.clientX);
        console.log("Y座標" + aa.clientY);

        ibutujokyo.style.left = (aa.clientX - (ibutujokyo.clientWidth * 0.5)) + "px";
        ibutujokyo.style.top = (aa.clientY - (ibutujokyo.clientWidth * 0.5)) + "px";
    }
}






