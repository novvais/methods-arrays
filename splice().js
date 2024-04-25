//Altea o conteudo de uma lista, remmovendo o zero ou mais itens de um array num determinado indice.

//Opcionalmente, pode-se inserir um ou mais itens no local onde outros foran deletados.

//Modifica o array original.

const lista = ["a", "b", "c", "d", "e"]

lista.splice(1, 2, "f")//O 1- (indice) 2- (ate onde voce quer deletar nesse caso vai ser deletado 2 elementos) 3- (o que voce quer adicionar 'voce pode adicionar varios elementos') 

//Se no indice voce colocar "-1" ele comeca a contar de tras pra frente.

console.log(lista); //["a", "f", "d", "e"]