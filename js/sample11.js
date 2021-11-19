//関数の使い方
//関数名（） aleart

//関数作り方
//function 関数 (){}


/*
function setTax(){
    console.log("setTaxが実行された");
}

setTax();
*/

//チェックを押す
const btn = document.getElementById("check");
console.log(btn);

//id = textを読み込む
const text = document.getElementById("text");
console.log(text);



btn.addEventListener("click", () => {
    if(!judge(text.value)){
        console.log("空");
    }
    else{
        console.log("ok");
    }
    // if(text.value == ""){
    //         alert("入れて");
    //         console.log("out");
    //     }else{
    //             console.log("ok");    
    //         }
});   
        
function judge(text_data) {
    // console.log(text_data);
    if(text_data == ""){
        // console.log("から");
        return true;
    }else{
        // console.log("ok");
        return false;
    }
    // if(text.value == ""){
    //     alert("入れて");
    //     console.log("out");
    // }else{
    //     console.log("ok");
    // }
    // return(judge)
}
        
        
        



