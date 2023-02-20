let btnCheckbox = document.getElementsByTagName("input")[0]
console.log(btnCheckbox)

let menu = document.getElementsByClassName("menu-lateral")[0]

btnCheckbox.addEventListener('click', function() {
    menu.classList.add("menu-lateral")
})