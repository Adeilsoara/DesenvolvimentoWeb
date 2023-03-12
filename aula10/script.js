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

/* Percorrendo um objeto - for in */

for (const key in usuario) {
    document.write(key)
    document.write(usuario[key])
}