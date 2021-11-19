// const img_src = ["images/IMG_4675.jpeg",
//             "images/IMG_4680.jpeg",
//             "images/IMG_4686.jpeg",];



// let num = 0;

// function slideShow(){
//     if(num == 2){
//         num = 0;
//     }else{
//         num++
//     }
//     document.getElementById("slide_img").src = img_src[num];
// }


// setInterval(slideShow, 2500);


const slide__img = document.querySelectorAll(".slide__img");
const maxImg = slide__img.length;
let imgNo = 1;
console.log(slide__img);
setInterval(() => {
    if(imgNo < maxImg){
        slide__img[imgNo-1].style.opacity = "0";
        slide__img[imgNo].style.opacity = "1";
        imgNo++;
    }else{
        slide__img[imgNo-1].style.opacity = "0";
        slide__img[0].style.opacity = "1";
        imgNo = 1;
    }
    console.log(imgNo);
}, 1000);

//写真２を１秒後に透過
// function chenge1 (){
//             slide__img[2].style.opacity = "0"
//     }
// setTimeout(chenge1, 1000);

//写真１を３秒後に透過
// function chenge2 (){
//     slide__img[1].style.opacity = "0"
// }
// setTimeout(chenge2, 3000);

//写真０を５秒後に透過
// function chenge3 (){
//     slide__img[0].style.opacity = "0"
// }
// setTimeout(chenge3, 5000);

// let num = 0;


// function chenge(){
//     if(num == 2){
//         slide__img[num].style.opacity = "0"
//         console.log(slide__img[num]);
//         num = num-1;
//     }else if(num == 1){
//         slide__img[num].style.opacity = "0"
//         console.log(slide__img[num]);
//         num = num-1;
//     }else{
//         slide__img[1].style.opacity = "1"
//         slide__img[2].style.opacity = "1"
//         console.log(slide__img[num]);
//         num = 2;
//     }

// };

// function chenge(){
//     if(num == 2){
//         slide__img[num].style.opacity = "0"
//         slide__img[num-1].style.opacity = "1"
//         console.log(slide__img[num]);
//         num = num-1;
//     }else if(num == 1){
//         slide__img[num].style.opacity = "0"
//         slide__img[num-1].style.opacity = "1"
//         console.log(slide__img[num]);
//         num = num-1;
//     }else if (num == 0){
//         slide__img[num].style.opacity = "0"
//         slide__img[slide__img.length - 1].style.opacity = "1"
//         console.log(slide__img[num]);
//         num = 2;
//     }

// };

// setInterval(chenge,3500);

// console.log(slide__img.length);