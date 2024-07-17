

const key = "43a6bb3012fa68b9f6c7ecfb187f9510"

 async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then( resposta => resposta.json())

    console.log(dados)
   
}

function cliqueinoBotao() {
    const input = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}