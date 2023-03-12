/* Introdução a objetos em JavaScript */

//Estrutura básica

//let usuario = new Object() "Objeto construtor"
//Objeto literal -> usando o formato chave:valor -> key:value
let usuario = {
    nome: "José",
    idade: 18
};

/* document.write(usuario.idade)
document.write(usuario.nome) */

//Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. Update the object with :

//the new property - discount and the corresponding value (7% or 10%) and the new price.
let product = {
    name: "headphones",
    price: 100,
    discount: 0
};
if (product.price > 100) {
  discount = ((product.price / 100) * 10);
  product.price = (product.price - discount);
} else {
  discount = ((product.price / 100) * 7);
  product.price = (product.price - discount);
}
console.log (product.price);
console.log("Updated product:", product);

/* Percorrendo um objeto - for in */

/* for (const key in usuario) {
    document.write(key)
    document.write(usuario[key])
} */

/* Converter objeto para vizulização em JSON */
/* let objetoConvertido = JSON.stringify(usuario) */
//document.write(JSON.stringify(usuario))

/* Usando o objeto Date() em JavaScript */
let data = new Date()
document.write(data, "<br>")
//document.write(`<br> A variável  'data' é do tipo: ${typeof(data)}`)
document.write(data.getTime(), "<br>")
document.write(Date.now())
//instâncias do objeto Date
/* let dia = data.getDate()
document.write(dia)
let mes = (data.getMonth()+1)
document.write(mes)
let ano = data.getFullYear()
document.write(ano)
let horas = data.getHours()
document.write(horas)
let minutos = data.getMinutes()
document.write(minutos) */
