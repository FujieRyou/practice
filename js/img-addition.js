const luffy = document.querySelector(".luffy");
console.log(luffy);

const workplace = document.querySelector(".workplace");
console.log(workplace);


luffy.addEventListener("click",() =>{
    // console.log("aa");
    let imgAddition = document.createElement("img");
    imgAddition.src = "img/onepiece01_luffy.png";
    imgAddition.alt = "ルフィー"
    workplace.appendChild(imgAddition)
})
