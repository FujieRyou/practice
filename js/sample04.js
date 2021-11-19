const calc = document.getElementById("calc");
calc.addEventListener("click",()=>{
    let box = Number(document.getElementById("num1").value);
    let box2 = Number(document.getElementById("num2").value);
    //console.log(box);
    //console.log(box2);
    //console.log(document.getElementById("calc").value)
    let keisan= document.getElementById("keisan").value;
    let ans = 0;
    //条件
    //A ≒≒ B　AとBは同じ
    if(box != "" || box2 != ""){
        if(box == ""){
            ans = ""
            alert("数字");
        }
        else if(box2 == ""){
            ans = ""
            alert("数字");
        }
        else if(keisan == "+"){
            ans = box + box2;
        }
        else if(keisan == "-"){
            ans = box - box2;
        }
        else if(keisan == "*"){
            ans = box * box2;
        }
        else if(keisan == "/"){
            ans = box / box2;
        }        
        document.getElementById("ans").value = ans;
    }
    else{
        ans = ""
        alert("数字");
    }


    
});
