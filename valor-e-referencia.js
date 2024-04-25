let numero1 = 5
let numero2 = numero1 //Sempre que eu faço uma atribuiçao em um number o JavaScript faz uma copia.
numero1 = 10

console.log("Numero1 = ", numero1)//O resultado é 10
console.log("Numero2 = ", numero2)//O resultado é 5

//-----------------------------------------------------------------
let texto1 = "abra"
let texto2 = texto1
texto1 = texto1 + "cadabra"

console.log("texto1 = ", texto1) //O resultado é "abracadabra"
console.log("texto2 = ", texto2)// O resultado é "abra"

//-----------------------------------------------------------------
let obj1 = { prop: 5}
let obj2 = obj1 //Em objeto ele guarda a referencia, pegando sempre o dado original(mesmo quando ele for modificado)
obj1.prop = 10 // ou obj1[prop] = 10

console.log("obj1 = ", obj1)//O resultado é 10
console.log("obj2 = ", obj2)//O resultado tambem é 10, ele pegou o resultado do objeto modificado

//-----------------------------------------------------------------
let array1 = [1, 2, 3]
let array2 = array1
array1.push(4)

console.log("array1 = ", array1)//O resultado é [1, 2, 3]
console.log("array2 = ", array2)//O resultado tambem é [1, 2, 3], ele pegou o resultado do objeto modificado


//Sempre que for um tipo primitivo(number, boolean, strings...) o comportamento vai ser de um jeito diferente de quando for um objeto(objetos, arrays, metodos).

//Quase tudo é um objeto, array é um objeto, obejto é um objeto, metodos é um objeto.