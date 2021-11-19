let accordion__btn = document.querySelector(".accordion__btn");
console.log(accordion__btn);

let accordion__plus = document.querySelector(".accordion__plus");
console.log(accordion__plus);

let accordion__content = document.querySelector(".accordion__content")


accordion__btn.addEventListener("click", () => {
    accordion__plus.classList.toggle("vertical");
    accordion__btn.classList.toggle("color");
    accordion__content.classList.toggle("AC__height")
});

