// console.log(10)
// console.log("2%3");
let ryo;
const tax = 1.1;
console.log(ryo); 
ryo = 2;
console.log(ryo*tax); 

// 誰が　何を　する
// が、を、中の〜
// ID属性の名前がbtnのものをクリックしたら
// letは変わる数値（変数）
// constは変わらん（定数）

document.getElementById('btn').onclick = function(){
    console.log("ボタンがクリックされた！")
}
// 

document.getElementById('btn').onmousedown = function(){
    console.log("ボタンがクリックおされた！")
}

const btnA = document.getElementById("btnA");
console.log(document.body);

//btnA.addEventListener("click",function(){

//});

btnA.addEventListener("click",()=>{
    document.body.style.backgroundColor="tomato";
});

