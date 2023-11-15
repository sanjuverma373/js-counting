let no = document.querySelector("p")
let add = document.querySelector(".add")
let reset = document.querySelector(".reset")
let save = document.querySelector(".save")
let pra = document.querySelector("#pra")


add.addEventListener("click", function () {
    no.innerHTML = +no.innerHTML + 1
})
reset.addEventListener("click", function () {
    no.innerHTML = +no.innerHTML - +no.innerHTML
    pra.innerHTML = '';
})
save.addEventListener("click", function () {
    if (no.innerHTML != 0) {
        if (pra.innerHTML == 0) {
            pra.innerHTML = no.innerHTML
        } else if (pra.innerHTML != 0) {
            pra.innerHTML += "," + no.innerHTML
        }
    }
    no.innerHTML = 0
})