/* Operadores Lógicos
Not - !
And - &&
Or - ||
*/

/* let sim = false
let nao = true

console.log(!sim)
console.log(!nao)
 */
/* 
a   |   b   |   a && b
-------+-------+----------
true   | true  |   true
-------+-------+----------
true   | false |   false
-------+-------+----------
false  | true  |   false
-------+-------+----------
false  | false |   false

*/
/* let verdadeiro = true
let falso = true

console.log(verdadeiro && falso) */


/* 
a   |   b   |  a || b
-------+-------+----------
true   | true  |   true
-------+-------+----------
true   | false |   true
-------+-------+----------
false  | true  |   true
-------+-------+----------
false  | false |   false
*/

/* let logicoOR = true
let ORlogico = true

console.log(logicoOR || ORlogico) */


/* Exercício 01 */

/* const IDADEMOTORISTA = 12
let resultado = IDADEMOTORISTA >=18 ? 'pode dirigir' : 'não pode dirigir'
document.write(`O motorista tem ${IDADEMOTORISTA} anos ${resultado} `)
 */
/* Exercício 02 */

/* const PONTUACAO = 1000
let vip = PONTUACAO >=1000 ? 'Usuário VIP' : 'Usuário normal'
document.write(`A pontuação ${PONTUACAO} é para ${vip}`) */

function display()  
{  
var set = new Set();    
set.add("jQuery");    
set.add("AngularJS");    
set.add("Bootstrap");    
for (let elements of set) {    
 document.writeln(elements+"<br>");    
}     
}  
display(); 