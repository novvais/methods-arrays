const lista = ["a", "b", "c", "d", "e"]

lista.splice(1, 0, "f", "g", "h")

console.log(lista);// a, f, g, h, b, c, d, e


const lista1 = ["a", "b", "c", "d", "e"]

lista1.splice(1, 2, "f")

console.log(lista1);//a, f, d, e

const lista2 = ["a", "b", "c", "d", "e"]

lista2.splice(1, 4, "f")

console.log(lista2); //a, f

//PUSH
const lista3 = ["a", "b", "c", "d", "e"]

lista3.splice(lista3.length, 0, "f") //Adicionar o "f" no final da lista3

console.log(lista3);

//POP
const lista4 = ["a", "b", "c", "d", "e"]

lista4.splice(lista4.length - 1, 1)//Remove o ultimo elemento da lista4

console.log(lista4);

//SHIFT
const lista5 = ["a", "b", "c", "d", "e"]

lista5.splice(0, 1) //Remove o primeiro elemento da lista5

console.log(lista5);

//UNSHIFT
const lista6 = ["a", "b", "c", "d", "e"]

lista6.splice(0, 0, "f")//Adiciona o "f" no comeco da lista6

console.log(lista6);