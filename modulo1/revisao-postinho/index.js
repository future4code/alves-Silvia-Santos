
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

//function checarDesigualdade(a, b) {

  //  return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
//}
//console.log(checarDesigualdade(1, 3));
 

// b-)Compare a igualdade entre a===b

//function checarIgualdade(a, b) {
  //  return `No comparador de igualdade ${a} === ${b} é ${a === b}`
//}

 //console.log(checarIgualdade(2, 2))
 
// c-)Faça uma função chamada "verificaSeEMaior"
//function verificaSeEMaior(a, b) {
  //     return  a > b    
//}

//console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=  False
// b-) 1=='1'=   True
// c-) 'a'==='b'= False
// d-) 'b'>'a'=   True
// e-) 0!==null= False


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
 
/*const nomeUser = prompt('Nome do Usuario')
const anoNasc = Number(prompt('Ano de nascimento'))
const nacionalidade = prompt('Nacionalidade')*/
//const senhaUser = prompt('Senha do usuario')



 /*const cadastro = (nome, ano, senha, nacionalidade) => {
     const usuario = []
     let maiorIdade = 2022 - ano
     if(maiorIdade >= 18 &&(senha.length >=6) && nacionalidade === "Brasileiro(a)") {
            usuario.push(nome, ano, senha, nacionalidade)
    } 
         return usuario
    }
       console.log(cadastro(nomeUser, anoNasc, senhaUser, nacionalidade)) */






 //Exercício 4-----------------------------------------------------------------------------------------------
/* Escreva uma função que peça uma senha para o usuário e verifique se está é a mesma senha 
cadastrada por ele.  Dentro da função defina uma senha válida  Ex: const senha=”labenu”

- Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
- Caso a senha seja inválida imprima no console (Senha Inválida)*/

 //let senhaLogin = prompt("Senha User")

//const login = (senha) => {
  //  const login = "Labenu"
    //if (login === senhaLogin){
      //  return "Usuário Logado"

    //}else{
      //  return "Senha Inválida"
    //}
  //}

    //console.log(login(senhaLogin));

// Exercício 5----------------------------------------------------------------------------------------------------
/*Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou. 
E retorne a mensagens a seguir dependendo da vacina tomada. 
`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`*/  

 //const nome = prompt("Nome usuario")
 //const vacinaCorona = prompt("Nome da vacina")
//const vacinaAstra = prompt("Vacina 2")
//const vacinaPfizer = prompt("Vacina 3 ")
//let tempo1 = Number(prompt("Tempo vacina"))
//let tempoAstra = Number(prompt("Tempo vacina 2"))
//let tempoPfizer = Number(prompt("tempo vacina 3"))
//let dataTomouVacina = "21/05/2022"
//let data1 = "18/06/2022"
//console.log(`Olá ${nome}! A próxima dose da ${vacinaCorona} é daqui a ${tempo1} dias. Compareça no posto na data ${data1}.`)

//const primeiraDose = ( ) 
//let tempo = '90'
//let data = "21/08/2022"


/*Sabendo que as vacinas tem tempos diferentes  para a aplicação da segunda dose crie uma única 
variável ‘tempo” que mude seu valor dependendo da vacina informada pelo usuário, faça o mesmo com
 “data”.

- Coronavac = 28 dias
- Astrazenica = 90 dias
- Pfizer = 90 dias*/

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------
/*- Exercício 6 - Loop+Condicional -**Segunda dose**
    
    Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário e
     mude o valor da propriedade `imunização` para **“completa”** para isso vamos te fornecer uma
      lista de usuários.*/

         //const nomeDoUsuario = prompt("Barbara")

     //const segundaDose = (nomeDoUsuario) => {
       // const usuarios = [
        //{ nome: "Artur", imunizacao: "incompleta" },
        //{ nome: "Barbara", imunizacao: "incompleta" },
        //{ nome: "Carlos", imunizacao: "incompleta" }
        
        //]
    //}
         
      //     nomeDoUsuario.filter((imunizacao) =>{
            //return usuarios.nome.imunizacao.replaceAll("incompleta", "completa") === "Barbara"
         
         //})
        
           // console.log(segundaDose(nomeDoUsuario))
         //nomeDoUsuario = usuarios.filter((usuarios) => {
        //usuarios.nome === "Barbara"
//.map((usuarios) =>{
   // usuarios.imunizacao.replaceALL("incompleto", "completo")
    //console.log(segundaDose("Barbara"))


    
   


// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

/*const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());*/