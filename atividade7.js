// Utilizando os dois arrays abaixo, desestruture cada array com spread
// para clonar todos itens menos o primeiro:

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const [itemUm, ...array1] = arr
const [itemDois, ...array2] = arr2

const allArray = [...array1, ...array2]

console.log(allArray)