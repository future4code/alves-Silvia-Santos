/*  ###  Exercícios de interpretação de código  ###

 1- Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  //a) O que vai ser impresso no console?

     // Vai imprimir tudo ( nomes, apelidos dos usuários ).*/



/* 2- Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  //a) O que vai ser impresso no console?

      // Vai mapear e imprimir apenas os nomes das meninas.

/* 3- Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)


  //a) O que vai ser impresso no console?*/

  // Vai imprimir somente os nomes e apelidos da laís e Amanda.



   //   ####  Exercícios de escrita de código  ####

/* 1- Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as 
 operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


 //a) Crie um novo array que contenha apenas o nome dos doguinhos
 /*const nomesPets = pets.map((pets) => {
     return pets.nome
 } )
  console.log(nomesPets)*/

//b) Crie um novo array apenas com os [cachorros salsicha]
//(https://www.youtube.com/watch?v=YQ404vwjzus)

 /*const pets1 = pets.filter((pets) => {
    return pets.raca === "Salsicha"
 })
 console.log(pets1)*/

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são 
//poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
 
/*const soPoodle = pets.filter((racaPet) => {
    return racaPet.raca == "Poodle"
}).map((racaPet) => {
    console.log(racaPet.nome)
    return `Você ganhou um cupom de desconto de 10% para tosar o/a  ${racaPet.nome}!`
})
console.log(soPoodle)*/


/*2- Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
utilizando as funções de array map e filter:*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


/* a) Crie um novo array que contenha apenas o nome de cada item*/
 //let nomeProduto = produtos.map((produtos) => {
  //   return produtos.nome
 //})
 //  console.log(nomeProduto)

/*b) Crie um novo array que contenha um objeto com o nome e o preço de
 cada item, aplicando 5% de desconto em todos eles*/
   //let descProdutos = produtos.map((produtos) => {
     //let nObj = {
       //  nome: produtos.nome,
         //preco: produtos.preco - (produtos.preco * 0.05),
     //}
      //return nObj
 //})
   //console.log(descProdutos)

 /*c) Crie um novo array que contenha apenas os objetos da categoria Bebidas*/

//const objBebidas = produtos.filter((produtos) => {
   // return produtos.categoria === "Bebidas"
//})
 //console.log(objBebidas)

/*d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"*/
   //const objYpe = produtos.filter((produtos) => {
     //  return produtos.nome.includes("Ypê")
  // }) 
        //  console.log(objYpe)

/*e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve
 conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
  let arrayYpe = produtos.filter((produtos) => {
      produtos.preco == "Limpeza"
  }).map((produtos)=> {
      console.produtos.nome.includes("Ypê")
      return arrayYpe
  })
  console.log(`Compre ${produtos.nome} por ${produtos.preco}`)*/

  
          
     
  
       
        


     

 