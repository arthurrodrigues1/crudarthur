function adicionar() {
    let nomeItem = document.getElementById('nomeItem');
    let novoItem = nomeItem.value
    
    let lista = document.getElementById('lista');
    lista.appendChild(document.createElement(`<li>${novoItem}</li>`))
}