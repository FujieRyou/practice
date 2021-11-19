const navi__menu = document.querySelectorAll(".navi__menu");
console.log(navi__menu);

const main1 = document.body.querySelector(".main__1");
console.log(main1);

const main2 = document.body.querySelector(".main__2");
console.log(main2);

const main3 = document.body.querySelector(".main__3");
console.log(main3);

// console.log(navi__menu[0]);


// let A = document.querySelector("body");
// console.log(A.scrollX);

// const srollVal = window.scrollY;
// console.log(srollVal);

// document.body.scroll = (as) =>{
//         console.log("X座標" + as.clientX);
//         console.log("Y座標" + as.clientY);
// }

// let x = main1.Left;
// let y = main1.clientTop
// console.log(x);

// let num = 0;


navi__menu[0].addEventListener("click",() =>{
    window.scroll(0,0);
    navi__menu[0].style.backgroundColor = "#C0C0C0"
    navi__menu[1].style.backgroundColor = "transparent"
    navi__menu[2].style.backgroundColor = "transparent"
    console.log("aa");
});

navi__menu[1].addEventListener("click",() =>{
    window.scroll(0,600);
    navi__menu[1].style.backgroundColor = "#C0C0C0"
    navi__menu[0].style.backgroundColor = "transparent"
    navi__menu[2].style.backgroundColor = "transparent"

    console.log("aa");

});

navi__menu[2].addEventListener("click",() =>{
    window.scroll(0,1900);
    navi__menu[2].style.backgroundColor = "#C0C0C0"
    navi__menu[0].style.backgroundColor = "transparent"
    navi__menu[1].style.backgroundColor = "transparent"
console.log("aa");
});

// window.addEventListener('scroll', () =>{
//     console.log(window.scrollY);
// }

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY < 750){
        navi__menu[0].style.backgroundColor = "#C0C0C0"
        navi__menu[1].style.backgroundColor = "transparent"
        navi__menu[2].style.backgroundColor = "transparent"    
    }else if(window.scrollY < 1450){
        navi__menu[1].style.backgroundColor = "#C0C0C0"
        navi__menu[0].style.backgroundColor = "transparent"
        navi__menu[2].style.backgroundColor = "transparent"    
    }else{
        navi__menu[2].style.backgroundColor = "#C0C0C0"
        navi__menu[0].style.backgroundColor = "transparent"
        navi__menu[1].style.backgroundColor = "transparent"
    }
});

let box = document.querySelector(".box");

console.log(box);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 400){
        box.style.width = "500px";
    }else{
        box.style.width = "200px"
    }
});

let box__2 = document.querySelector(".box__2");

console.log(box__2);

window.addEventListener("scroll", () =>{
    if(window.scrollY > 550){
        box__2.style.transform = "translate(300px,0px)"
    }else{
        box__2.style.transform = "translate(-300px,0px)"
    }
})















// if(num == 0){
//     navi__menu[num].addEventListener("click",() =>{
//         window.scroll(0,0);
//         navi__menu[num].style.backgroundColor = "#C0C0C0";
//         navi__menu[1].style.backgroundColor = "none";
//         navi__menu[2].style.backgroundColor = "none";
//     });
// }else if(num == 1){
//     navi__menu[num].addEventListener("click",() =>{
//         window.scroll(0,950);
//         navi__menu[num].style.backgroundColor = "#C0C0C0";
//         navi__menu[0].style.backgroundColor = "none";
//         navi__menu[2].style.backgroundColor = "none";
//         console.log("aa");
// });
// }else if(num == 2){
//     navi__menu[num].addEventListener("click",() =>{
//         window.scroll(0,1900);
//         navi__menu[num].style.backgroundColor = "#C0C0C0";
//         navi__menu[0].style.backgroundColor = "none";
//         navi__menu[1].style.backgroundColor = "none";
// });
// }
// navi__menu[num].addEventListener("click",() =>{
//     if(num == 0){
//         window.scroll(0,0);
//         navi__menu[num].style.backgroundColor = "#C0C0C0";
//         navi__menu[1].style.backgroundColor = "none";
//         navi__menu[2].style.backgroundColor = "none";
//     }else if(num == 1){
//         window.scroll(0,950);
//         navi__menu[num].style.backgroundColor = "#C0C0C0";
//         navi__menu[0].style.backgroundColor = "none";
//         navi__menu[2].style.backgroundColor = "none";
//     }else if(num == 2){
//         window.scroll(0,1900);
//         navi__menu[num].style.backgroundColor = "#C0C0C0";
//         navi__menu[0].style.backgroundColor = "none";
//         navi__menu[1].style.backgroundColor = "none";
//     }
// });

