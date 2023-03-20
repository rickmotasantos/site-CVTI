let btnSaibaMais = document.getElementsByClassName("curiosidades")[0]

let abrirSbMais = document.getElementsByClassName("mais-curioso")[0]

let sairCarrossel = document.getElementsByClassName("sair-carrossel")[0]

btnSaibaMais.addEventListener('click', ()=>{
    abrirSbMais.classList.remove('esconder')    
})

sairCarrossel.addEventListener('click', ()=>{
    abrirSbMais.classList.add('esconder')
})