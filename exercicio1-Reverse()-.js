function inverterString(texto) {

    let arrayDeLetras = texto.split("") //Transforma uma String em um Array
    arrayDeLetras.reverse()

    let resultadoFinal = ""

    for(let letra of arrayDeLetras) {
        //resultadoFinal = resultadoFinal + letra
        resultadoFinal += letra
    }

    console.log(resultadoFinal)
}

inverterString("Cubos Academy")