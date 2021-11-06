var cards = document.querySelectorAll(".cards__span")
var image = document.querySelectorAll(".card")

cards[0].addEventListener("click", () => {  
   image[0].classList.add("show")
   image[1].classList.remove("show")
   image[2].classList.remove("show")
})

cards[1].addEventListener("click", () => {  
    image[1].classList.add("show")
    image[0].classList.remove("show")
    image[2].classList.remove("show")
 })
 
cards[2].addEventListener("click", () => {  
    image[2].classList.add("show")
    image[0].classList.remove("show")
    image[1].classList.remove("show")
 })