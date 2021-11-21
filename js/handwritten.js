window.onload = function(){

const canvas = document.getElementById("writeCanvas");
console.log(canvas);

const context = canvas.getContext("2d");

context.fillRect(10,10,100,50);
};
// window.onload = function () {
//   var canvas = document.getElementById('writeCanvas');

//   var context = canvas.getContext('2d');

//   context.font = "30px serif";
//   context.fillText("こんにちは", 100, 50);
// };
// const drawContext = drawArea.getContext("2d");

// drawContext.lineWidth = 20;


// let flg = false;

// canvas.onmousedown = (e) =>{
//     flg = true;
//     console.log("down");
// }

// canvas.onmouseup = (e) =>{
//     flg = false;
//     console.log("up");
// }

// // let setColor: = "";

// canvas.onmousemove = (e) =>{
//     if(flg){
//         console.log("X座標" + e.clientX);
//         console.log("Y座標" + e.clientY);
//         // drawContext.fillStyle = "#fff";
//         // drawContext.fillRect(0, 0, 500, 500);
//         drawContext.lineCap = "round";
//         drawContext.lineJoin = "round";
//         drawContext.lineWidth = setLineWidth;
//         drawContext.strokeStyle = setColor;
//         drawContext.moveTo(x, y);
//     }
// }
