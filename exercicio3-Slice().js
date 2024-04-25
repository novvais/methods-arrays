const dados = [0, 3, 4, 6, 8, 12, 17, 19, 23, 27, 32, 65]

//Para arredondar pode usar Math.floor(arredondar para baixo) ou Math.ceil(arredondar para cima) e Math.round(arredonda para o mais perto)
function filtra80 (dados) {
    let startIndex = Math.round(dados.length * 0.1)
    let endIndex = Math.round(dados.length * 0.9)

    let fatia = dados.slice(startIndex, endIndex)

    console.log(fatia)
}

filtra80(dados)