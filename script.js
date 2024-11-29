function adicionaritem(){
    let input = document.getElementById("iteminput")
    let novoitem = input.value
    
    if (novoitem === ""){
        alert("por favor, insira um item")
    }
    criartd()
}

function criartd(){
    let tabela = getElementById("tabela")
    tabela.appendChild(document.createElement(`<tr><td>${novoitem}</td></tr>`))
}