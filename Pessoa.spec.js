const Pessoa = require("./Pessoa")

describe("Classe Pessoa", () => {
  it('deve retornar verdadeiro se uma pessoa for maior de idade', () => {
    const Fulano = new Pessoa("Fulano", 19)

    expect(Fulano.ehAdulta()).toBe(true)
  });

  it('deve retornar falso se uma pessoa for menor de idade', () => {
    const Siclano = new Pessoa("Siclano", 17)

    expect(Siclano.ehAdulta()).toBe(false)
  });

  it('a idade da pessoa deve ser maior ou igual a 18', () => {
    const Fulano = new Pessoa("Fulano", 19)

    expect(Fulano.idade).toBeGreaterThanOrEqual(18)
  });
})