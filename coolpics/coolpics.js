let button = document.querySelector("button")
let nav = document.querySelector("ul")

button.addEventListener("click", function ToggleMenu(){
    nav.hidden = !nav.hidden
})