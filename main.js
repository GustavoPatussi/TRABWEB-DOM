// abaixo aciona um evento de click que cria uma função a partir do elemento em que a ação foi feita 
document.addEventListener('click', e =>{
    // compara se a tag html do elemento que foi clicado é 'button'
    if (e.target.tagName == 'BUTTON') {
        // encontra a tag body no html e adiciona uma cor aleatória para seu background;
        document.body.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
    }
    // caso a tag não for 'button' retorna
    else{
        return;
    }
})
