//Exercícios de interpretação de código
/* 1 -  Leia o código abaixo

a) O que vai ser impresso no console?

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) /* teoricamente o 0 é o primeiro, então seria Matheus 
Nachtergale.*/

/*console.log(filme.elenco[filme.elenco.length - 1])

console.log(filme.transmissoesHoje[2]) /* 0 = Telecine, 1 = Canal Brasil e 2 = Globo.
A resposta correta seria Globo, no horário 14:00h.*/


/* 2- Leia o código abaixo:


const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que vai ser impresso no console?

Cachorro = Juba, 3, SRD
Gato = Juba, 3, SRD
Tartaruga: jubo, 3, SRD



b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Resposta: mudar ou adicionar propriedades*/


/*  3-Leia o código abaixo
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?

console.log(minhaFuncao(pessoa, "backender"))  False

console.log(minhaFuncao(pessoa, "altura")) Talvez undefined ou null, pois não aparece
nada relacionado a altura.

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

No backende o valor que aparece já está como falso, se eu der um console.log 
vai continuar aparecendo como falso.

"Altura", não tem essa propriedade. Por conta disso, talvez apareça como null ou undefined.*/



//             Exercícios de escrita de código

/* 1- Resolva os passos a seguir: 

a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos
 (um array que sempre terá exatamente três apelidos). Depois, escreva uma função
  que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: */

    // function meusApelidos(){
      //   return string[arrays]
     
     //const pessoa = {
        //nome: "Anabele",
        //apelidos: ["Ana", "Bele", "Bel"],
        //}
        //function apelido(pessoa) {
          //  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `)

        //}
        //apelido(pessoa)

       /* b) Agora, usando o operador spread, crie um novo objeto mantendo o valor 
       da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame
        a função feita no item anterior passando como argumento o novo objeto.*/
        //const pessoa1 = {
          //  ...pessoa,
           // apelidos:["Aninha", "Belinha", "Belão"]
        //}
         //console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou  ${pessoa1.apelidos[2]}`)                               
          

        // 2- Resolva os passos a seguir: 
       
        /* A)  Crie dois objetos diferentes com as seguintes propriedades: nome, idade 
        e profissão. */
         const pessoa2 = {
            nome:"Aurora",
            idade: 20,
            profissao: "dentista",
            
         }
         
         console.log(`${pessoa2.nome}, ${pessoa2.nome.length}, ${pessoa2.idade}, ${pessoa2.profissao}, ${pessoa2.profissao.length}`)     
    
         
         
         
           const pessoa3 = {
            nome: "Amanda",
            idade: 28,
            profissao: "autonoma"
         }
         console.log(`${pessoa3.nome}, ${pessoa3.nome.length}, ${pessoa3.idade}, ${pessoa3.profissao}, ${pessoa3.profissao.length}`)     
                        

        /*B) Escreva uma função que receba esses objetos e retorne um array com as 
        seguintes informações:*/
     
        /*1. O valor de `nome`
        2. O numero de caracteres do valor `nome`
        3. O valor de `idade`
        4. O valor de `profissão`
        5. O numero de caracteres do valor `profissão`*/
       

        /* 3- Resolva os passos a seguir: 
        
        a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho*/
            
          /*const arrayCarrinho = [{}, {}, {}]
          
          const hortfruit = {nome:"ameixa",disponibilidade: true}
          const hortfruit1 = {nome: "amora", disponibilidade: true}
          const hortfruit3 = {nome: "Morango", disponibilidade: true}
               
          arrayCarrinho.push(hortfruit)
          arrayCarrinho.push(hortfruit1)
          arrayCarrinho.push(hortfruit3)
          console.log(arrayCarrinho)



        /*b)Crie três novos objetos que representem frutas de um sacolão. Eles devem ter
         as seguintes propriedades: nome (string) e disponibilidade (boolean - devem
         começar como true)

         c)Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro 
         do array de carrinho. Invoque essa função passando os três objetos criados.  

         d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido 
         com três objetos. */

