let number = document.getElementById("number");
console.log(number);

let multiple = document.querySelector(".multiple");
console.log(multiple);


multiple.onclick = () =>{
    for(let i = 1; i <= number.value; i++){
        // console.log(i);
        if(i % 3 == 0){
            console.log(i + "🌟");
        }else{
            console.log(i);
        }
    }
}