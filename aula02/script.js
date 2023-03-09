/* Variáveis em JavaScript */

/* Pode-se utilizar o var, let e ou const */

/* var num = 2
var num2 = 3
var soma = num + num2
console.log("A soma é: "+ soma)

let letra = 'A'
let letra2 = 'B'
let juntar = letra + letra2
console.log(juntar)

document.write(`A soma é: ${soma}`) */
/* Operadores matemáticos em JavaScript */


/* Cálculo do IMC */

var peso = 69
var altura = 1.75

var imc = peso/(altura*altura)
var imc2 = peso/(altura**2)
var imc3 = peso/Math.pow(altura, 2) //objeto Math

document.write('O seu IMC é: ', imc, '<br>')
document.write('O seu IMC é: ', imc.toPrecision(3), '<br>')
document.write('O seu IMC é: ', imc.toFixed(1), '<br>')

document.write('O seu IMC é: ', imc2, '<br>')
document.write('O seu IMC é: ', imc3, '<br>')

/* Calcular se um número é par ou ímpar */

var num = 5
var resultado = num % 2 == 0 ? 'par' : 'ímpar'
document.write(`Resultado ${num} é ${resultado}`) //template literals


/* Objeto Math */
console.log(Math.cbrt(3))
console.log(Math.hypot(5, 4))