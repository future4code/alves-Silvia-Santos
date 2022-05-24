// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   //  array = array.length
     return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    for (let i = array.length-1; i>=0; i = i-1){
        console.log(array[i])
    }
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b) 
    
 }  
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = array.filter((array) =>{
        return array % 2 === 0
    })
    
      return pares   
}

    
   console.log(pares)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 const numerosPares = array.filter((numero) =>{
     return numero % 2 === 0
 })
 let numerosElevados = numerosPares.map((item) => {
     return item ** 2
 })
    return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
       if ( array[i] > maior ) {
          maior = array[i];
       }
    }
    return maior
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let veriMaior = (num1, num2) => {
    if(num1 > num2) {
        return num1
    } else {
        return num2
}     
    }


  let veriMenor = (num1, num2) => {
      if (num1 < num2) {
          return num1
      } else {
          return num2
      }
  }
   let maiorNumero = veriMaior(num1, num2)
   let menorNumero = veriMenor(num1, num2)

   let verificarDivisao = (num1, num2) => {
       if(num1 % num2 ===0) {
           return (true)
       } else {
           return (false)
       }
   }

   let divisao = verificarDivisao(maiorNumero, menorNumero)

   let diferenca = num1 - num2
   diferenca = Math.abs(diferenca)

    const obj = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: divisao,
        diferenca:diferenca
    
    }
       return obj 
    
}

        






// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {


}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arrayOrde = array.sort((a, b) => a - b)
  let segundoMenorValor = arrayOrde[1]
  let segundoMaiorValor = arrayOrde[arrayOrde.length - 2]
  let arrayResultado = [segundoMaiorValor, segundoMenorValor]
  return arrayResultado
 }

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const filmes = [
    {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 }
]
 // saída
 const informa = `Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${diretor} e estrelado por ${atores}.`
    return informa
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
let resultado = contas.map((contas) => {
    let soma = contas.compras.reduce((itemAnterior, itemAtual) => itemAnterior + itemAtual, 0)
    let saldo = contas.saldoTotal
    return {...contas, saldoTotal: saldo - soma, compras: []}
})
   return resultado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let resultado = consultas.sort((primeiraConsulta, segundaConsulta) => {
        return new Date(primeiraConsulta.dataDaConsulta.split("/").reverse()).getTime() - 
        new Date(segundaConsulta.dataDaConsulta.split("/").reverse()).getTime()
    })
    return resultado
}