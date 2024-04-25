function inverterString(texto) {

    let arrayDeLetras = texto.split("") //Transforma uma String em um Array
    arrayDeLetras.reverse()

    let resultadoFinal = arrayDeLetras.join("")

    console.log(resultadoFinal)
}

inverterString("Cubos Academy")