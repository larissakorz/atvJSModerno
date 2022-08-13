// A partir da variável abaixo retorne um array com valores 
// de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter:

var ages = [32, 33, 16, 40];

const maiorDeDezoito = ages.filter((age) => {
    return age >= 18 
})

console.log(maiorDeDezoito)