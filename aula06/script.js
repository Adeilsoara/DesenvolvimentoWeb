/* Laços de repetição - FOR*/

for (let i = 1; i <= 10; i = i + 1) {
  document.write(`${i}ª`, " Olá mundo", "<br>");
}

/* Imprima os números de 0 até 15 usando for loop */

for (let i = 0; i <= 15; i++) {
  document.write(`Esse número é o: ${i}`, "<br>");
}

/* Imprima todos os números de 10 à 0 */

for (let i = 10; i >= 0; i--) {
  document.write(i, "<br>");
}

/* Imprima somente os números pares entre 0 e 20 */

for (let i = 0; i <= 20; i++) {
  /* if (i % 2 == 0) {
          document.write(i , '<br>')
      } */
  /* i % 2 != 0 ? document.write(i) : '' */
}

/* Imprima somente os números ímpares entre 0 e 10 */
for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) {
    document.write(`${i} é ímpar`, "<br>");
  }
}

/* Imprima os múltiplos de 2 de 0 até 1000 */
var num = prompt("Digite um número:");
for (let i = 1; i <= num; i *= 2) {
  document.write(`${i}`, "<br>");
}

/* Faça a tabuada da soma de 1 até 10 */
var num = prompt("Digite um número: ");
for (let i = 1; i <= 10; i++) {
  var soma = num + i;
  document.write(`${i} + ${i} = ${soma}`, "<br>");
}

/* Faça a tabuada da multiplicação de 1 até 10 */
var num = prompt("Digite o número: ");
document.write(`---Tabuada de ${num}---`, "<br>");
for (let i = 1; i <= 10; i++) {
  var mult = num * i;
  document.write(`${num} * ${i} = ${mult}`, "<br>");
}

/* Faça a tabuada da divisão de 1 até 10 */

for (let i = 1; i <= 10; i++) {
  let div = 2 / i;
  document.write(`${2} / ${i} = ${div}`, "<br>");
}

for (var i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.write(`${i} Belêzau <br>`);
  } else if (i % 3 == 0) {
    document.write(`${i} Belê <br>`);
  } else if (i % 5 == 0) {
    document.write(`${i} zau <br>`);
  }
}
