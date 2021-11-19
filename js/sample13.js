const img_src = ["images/IMG_4675.jpeg",
            "images/IMG_4680.jpeg",
            "images/IMG_4686.jpeg",];



let num = 0;

function slideShow(){
    if(num == 2){
        num = 0;
    }else{
        num++
    }
    document.getElementById("slide_img").src = img_src[num];
}


setInterval(slideShow, 2500);