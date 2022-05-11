console.log("Olá Mundo!")
//Exercicio 1
//1. Construa um programa, seguindo os seguintes passos:  
//Declare uma variável para armazenar um nome, sem atribuir um valor.
//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
//Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
let nomeArquivo   
let idadeArquivo 
console.log(typeof nomeArquivo, typeof idadeArquivo)
//d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//R: Nele não foi atribuido o valor da variavel.
//e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
let seuNome = prompt("silvia")
let suaIdade = Number(prompt("32"))
console.log("Meu nome é?", seuNome, "e", "Qual a idade?", suaIdade, "anos")
// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log("tipo do nome:", typeof seuNome, "tipo da idade:",typeof suaIdade)
//R: Para saber quais os tipos das variaveis, eu preciso usar o "typeof" 
// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
console.log("Olá, eu me chamo", seuNome, "e minha idade é", suaIdade, "anos")

//Exercicio 2
// Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
console.log("Você Gosta de rosa?")
console.log("Você come de tudo?")
console.log("você gosta de sair?")
//a) Crie três novas variáveis, contendo as respostas
let voceGostaDeRosa = false
let voceComeDeTudo = false
let voceGostaDeSair = true
//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
console.log("você gosta de rosa?", voceGostaDeRosa)
console.log("você come de tudo?", voceComeDeTudo)
console.log("você gosta de sair?", voceGostaDeSair)

//Exercicio 3
//3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial

let a = 10
let b = 25

//Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 
//Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
// Aqui faremos uma lógica para trocar os valores
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é=", b) 
console.log("O novo valor de b é=", a)
// Agora b= 10 e a=25

//DESAFIO OPCIONAL
//Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:

//1. O primeiro número somado ao segundo número resulta em: x.
let somaDoisNumeros = 3+7
console.log(somaDoisNumeros)
//3+7=10
//2. O primeiro número multiplicado pelo segundo número resulta em: y.
let multiplicado = 3*4
console.log(multiplicado) 
//3x4=12