var button = document.getElementById("botao_leia")

button.addEventListener('click', function(){
    var bloco = document.querySelector('.bloco')
    bloco.classList.toggle('active')
    //o toggle adiciona uma nova classe na tag selecionada

    if(bloco.classList.contains('active')){
        return button.textContent = "Leia menos"
    }

    button.textContent = "Leia mais"
})