class Pessoa {
  MAIORIDADE = 18

  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  ehAdulta() {
    return this.idade >= this.MAIORIDADE
  }
}

module.exports = Pessoa;
