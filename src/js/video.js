let abrirVideo = document.querySelectorAll("a")

let telaVideo = document.getElementsByClassName("video")

let fecharVideo = document.getElementsByClassName("btn-fechar")

const video = document.getElementById("linkVideo")

const linkVideo = video.src


abrirVideo[6].addEventListener('click', ()=>{
    telaVideo[0].classList.remove("esconder")
    video.setAttribute("src", "")
})

fecharVideo[0].addEventListener('click', ()=>{
    telaVideo[0].classList.add("esconder")
    video.setAttribute.classList.remove("src", linkVideo)
})