console.log("Aula 2 de Javascrip")

//Exercícios de interpretação de código

//1- 
// a. False
// b. False
//c. Verdadeiro
//d. Boolean

//2- 
//Talvez por ter colocado prompt ele leu como string.

/*3- Colocar somento o numero ... Pois, por colocado o prompet(",,,")
o sistema entendeu que ele queria uma informacao de uma string*/

console.log("Exercico para resolver")

//a) Pergunte a idade do usuário
const idadeUsuario = 32

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
const idadeAmiga = 39
//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
let resposta = idadeUsuario===idadeAmiga
console.log("Sua idade é maior do que a da sua melhor amiga?", resposta)
//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
let resp = idadeUsuario - idadeAmiga
console.log("Diferença de idade:", resp, "anos.")

//2-Faça um programa que:

//a) Peça ao usuário que insira um número **par**

let nPar = 12            
//b) Imprima na console **o resto da divisão** desse número por 2. 
let divisao = 2
let resultado = nPar % divisao
console.log(resultado) // 0
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
let numPar = 40
let resul = numPar % divisao
console.log(resul)  // 0

console.log("Todos eles obteveram o resultado igual a zero quando um número inserido foi Par")

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
 let nImpar = 5
 let res = nImpar % divisao
 console.log(res) // 1

 let nuImpar = 13
 let resu = nuImpar % divisao 
 console.log(resu) 
 console.log("Todos terão o resultado igual a um")

 /*3- Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
 Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console*/

 //a) A idade do usuário em meses

//b) A idade do usuário em dias

//c) A idade do usuário em horas

/*4- Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:*/
let a = 10
let b = 2
let resposta1 = a===b
let resposta2 = a==b


//O primeiro numero é maior que segundo? true

console.log("O primeiro número é maior que o segundo", resposta1)

//O primeiro numero é igual ao segundo? false

console.log("O primeiro numero é igual ao segundo?", resposta2)


//O primeiro numero é divisível pelo segundo? true
console.log("O primeiro numero é divisível pelo segundo?", resposta1)
//O segundo numero é divisível pelo primeiro? true
console.log("O segundo numero é divisível pelo primeiro?", resposta2)

//obs: O true ou false vai depender dos números inseridos e do resultado das operações.
