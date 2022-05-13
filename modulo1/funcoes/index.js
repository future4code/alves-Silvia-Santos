//Exercícios de interpretação de código

//   1-Leia o código abaixo:

/*function minhaFuncao(variavel) {
	return variavel * 5
}



console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


a) O que vai ser impresso no console?

Resposta: Acredito que será impresso 10 e 50, pois, (5*2= 10) e (10*5= 50).

b) O que aconteceria se retirasse os dois console.log e simplesmenteinvocasse a função 
minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

Resposta: Talvez desse o mesmo valor da anterior, ou, não dê em nada.*/

//  2- Leia o código abaixo

/*let textoDoUsuario = prompt("Insira um texto")

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}  

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

  Resposta : Uma das funçoes é inserir um texto, um numero...

 b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
 i.   Eu gosto de cenoura

  Resposta: Se escrevesse : Eu gosto de cenoura e desse um console.log, ia aparecer exatemente a mesma frase: Eu gosto de cenoura.
 
  ii.  CENOURA é bom pra vista

Resposta: (tolowercase)Transformaria a CENOURA em caixa baixa e (includes)encontraria a palavra CENOURA. 

iii. Cenouras crescem na terra
?????????????            */


//  Exercícios de escrita de código

/*  1- 1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações 
    sobre você, como:

    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."*/


 /*Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não 
 possui entradas, apenas imprime essa mensagem.*/

 let trocar =  "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
 trocar = trocar.replaceAll("Caio", "Silvia")
trocar = trocar.replaceAll("23", "32")
trocar = trocar.replaceAll("São Paulo", "Rio de Janeiro")
console.log(trocar)

 /*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
 o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma
  string que unifique todas as informações da pessoa em uma só mensagem com o template:*/

const info = (nome, idade, endereço, profissão) => {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}.`
}

const Resu = info("Silvia", 32, "Rua Retiro dos Artistas", "Autonoma")
console.log(Resu)
  /*Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].*/


  /*2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas 
    entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/
    
    function somar(num1 , num2){
        return num1+num2 
    }
    console.log(somar(3, 5))

    /*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número 
    é **maior ou igual** ao segundo.*/

    function numero (num3, num7){
        return num3 >= num7
    
    }
    console.log(numero(3,7))

    /*c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não*/

    function ParOuNao (num3){
     return num3
    }
    console.log = `Este número é par? ${3}`
    
   /* d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
     juntamente com uma versão dela em letras maiúsculas.*/
     
     
     //let nome = "Matheus Freitas"
     //nome = `Menssagem é ${nome.toUpperCase()}`
    
     //console.log(nome)
     
      
     /* 3- Crie uma função para cada uma das operações básicas (soma, subtração,
      multiplicação e divisão). Em seguida, peça para o usuário inserir dois números
       e chame essas 4 funções com esses valores inputados pelo usuário sendo o 
       argumento. Por fim, mostre no console o resultado das operações:*/

         /*function somar(numero1 , numero2){
          return numero1+numero2
         }

         console.log(somar)
          

         function subtrair(numer1 , numer2){
            return numer1-numer2
         }
  
           console.log(subtrair)



           function multiplicacao(num1 , num2){
            return num1*num2
         }
  
           console.log(multiplicacao)*/

          const numee1 = (prompt("Digite um numero:"))
           const numee2 = (prompt("Digite o segundo numero:"))

             function divisao (dezUm, dezDois)  {
               const resultado1 = dezUm/dezDois
               return resultado1
             }
             
             const resultado1 = divisao
             console.log(resultado1(dezUm, dezDois))
 

             //console.log(divisao(dez1, dez2))

             //console.log(numee1, "e", numee2)
             
           //console.log("digite uum numero" ,divisao(nume1,nume2))
           

           
          
          

