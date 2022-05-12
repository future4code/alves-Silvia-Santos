// Declarando strings com aspas duplas, simples e crase(template string)
const nome = "Clara Meirelles"
const empresa = 'Labenu'
const frase = `Eu me chamo ${nome} e trabalho na ${empresa}`
const idade = 31
console.log(frase)
console.log(`Eu me chamo ${nome} e trabalho na ${empresa}`)

// Concatenação de strings
const fraseConcatenacao = "Eu me chamo " + nome + " e trabalho na " + empresa
console.log(fraseConcatenacao)
console.log(nome, empresa, idade)

// string.length
const nomeTurma = " Rubem Alves "
console.log(nomeTurma)
console.log(nomeTurma.length)

// string.toLowerCase()
console.log(nomeTurma.toLowerCase())

// string.toUpperCase()
console.log((nomeTurma.toUpperCase()))
console.log(nomeTurma)

// string.trim()
console.log(nomeTurma.trim())


//includes()
console.log(nomeTurma.includes("Rubem")) //retorna true
console.log(nomeTurma.includes("rubem")) // retorna false

//replaceAll()
const fraseTurma = "Eu sou estudante da Labenu, da turma Alves"
console.log(fraseTurma)
const novaFraseTurma = fraseTurma.replaceAll("Alves", "Muñoz").replaceAll("sou", "fui")
console.log(novaFraseTurma)


// Array

// Declarando e acessando o array
const arrayFrutas = ["Banana", "Maçã", "Melancia", "Melão", "Mamão", true, false, 10, 25]
console.log(arrayFrutas)

// acessando um elemento do array
console.log(arrayFrutas[1])

// length
console.log(arrayFrutas.length)

// includes()
console.log(arrayFrutas.includes("banana"))
console.log(arrayFrutas.includes("Mel"))
console.log(arrayFrutas.includes("Melão"))

// pop()
console.log("elemento removido", arrayFrutas.pop())
console.log(arrayFrutas)

// splice(i, n)
console.log(arrayFrutas.splice(5, 2))
console.log(arrayFrutas)

// push()
arrayFrutas.push("Pitaya", "Caqui")
console.log(arrayFrutas)
