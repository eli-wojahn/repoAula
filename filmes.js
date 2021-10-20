var prompt = require("prompt-sync")()

// declara vetores
var titulos = []
var generos = []
var tempos = []

function titulo(texto) {
  console.log()
  console.log(texto)
  console.log("-".repeat(59))
}

// recebe os dados cadastrais
function incluir() {
  titulo("Inclusão de Filmes")   

  // adiciona a entrada do usuário ao vetor produtos e precos
  titulos.push(prompt("Título do Filme: "))
  generos.push(prompt("Gênero.........: "))
  tempos.push(Number(prompt("Duração........: ")))

  console.log("Ok! Filme cadastrado com sucesso")
}

function listar() {
  titulo("Lista dos Filmes Cadastrados")

  console.log("Título do Filme..............: Gênero.............: Duração")

  for (var i = 0; i < titulos.length; i++) {
    console.log(`${titulos[i].padEnd(30)} ${generos[i].padEnd(20)}   ${tempos[i]}`)
  }
  console.log("-".repeat(59))
}

// Programa principal: exibe um menu com as opções a serem disponibilizadas pelo programa
while (true) {
  titulo("Controle Pessoal de Filmes")
  console.log("1. Incluir Filme")
  console.log("2. Listar Filmes")
  console.log("3. Pesquisar por Gênero")
  console.log("4. Pesquisar por Duração")
  console.log("5. Duração Média")
  console.log("6. Finalizar")
  
  var opcao = Number(prompt("Opção: "))
  
  if (opcao == 1) {
    incluir()
  } else if (opcao == 2) {
    listar()
  } else if (opcao == 3) {
    pesqGenero()
  } else if (opcao == 4) {
    pesqDuracao()
  } else if (opcao == 5) {
    calculaMedia()
  } else {
    break
  }
}