const calc = document.getElementById("calc");
calc.addEventListener("click",()=>{
    let box = Number(document.getElementById("num1").value);
    let box2 = Number(document.getElementById("num2").value);
    //console.log(box);
    //console.log(box2);
    document.getElementById("ans").value = box * box2;
    console.log(ans)

});
