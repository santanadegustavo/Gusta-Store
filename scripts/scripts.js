const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const items = document.querySelectorAll(".item")
const dots = document.querySelectorAll(".dot")
const numberIndicator = document.querySelector(".numeros")
const lista = document.querySelector(".lista")

let ativo = 0
const total = items.length
let timer

function update(direcao){  
    document.querySelector('.item.ativo').classList.remove('ativo')
    document.querySelector('.dot.ativo').classList.remove('ativo')

    if(direcao > 0){
        ativo = ativo + 1

        if(ativo === total){
            ativo = 0
        }
    } else if(direcao < 0){
        ativo = ativo -1

        if(ativo <0){
            ativo = total -1
        }
    }

    items[ativo].classList.add('ativo')
    dots[ativo].classList.add('ativo')

    // Novo código aprendido, para adicionar um valor a frente ou depois, antes converti em string.
    numberIndicator.textContent = String(ativo + 1).padStart(2, '0')
}

// Novo código aprendido
clearInterval(timer)
timer = setInterval(function(){
    update(1)
},7000)

prevButton.addEventListener ('click', function(){

    update(-1)
})

nextButton.addEventListener ('click', function(){

    update(1)
})