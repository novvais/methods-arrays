//Join() = Junta todos os elementos de um array em uma string, separando-os com vírgulas, e retorna esta string.
//Opcionalmente, pode-se passar uma string como argumento para ser colocada entere os itens.

const opcoes = ["Uma", "Outra"]

let resultado = opcoes.join() 
console.log(resultado) //Uma,Outra

resultado = opcoes.join("")
console.log(resultado)//UmaOutra

resultado = opcoes.join(" ou ")
console.log(resultado)//uma ou Outra