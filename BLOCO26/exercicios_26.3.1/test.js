const { expect } = require('chai');

const checkNumber = require('./checkNumber');

describe(' Executa a função checkNumber', () => {
  describe('Quando o número for maior que 0', () => {
    describe('A resposta', () => {
      it('É uma string', () => {
        const result = checkNumber(10);

        expect(result).to.be.a('string');
      })
      it('é igual a positivo', () => {
        const result = checkNumber(10);
        expect(result).to.be.equals('positivo');
      });
    });
  });
  describe('Quando o número for menor que zero', () => {
    describe('A resposta', () => {
      it('É uma string', () => {
        const result = checkNumber(-10);
        expect(result).to.be.a('string');
      })
      it(' é igual a negativo', () => {
        const result = checkNumber(-10);
        expect(result).to.be.equals('negativo');
      });
    });
  });
  describe('Quando o número for igual a 0', () => {
    describe('A resposta', () => {
      it('é uma string', () => {
        const result = checkNumber(0);
        expect(result).to.be.a('string');
      })
      it('é igual a neutro', () => {
        const result = checkNumber(0);
        expect(result).to.be.equals('neutro');
      });
    });
  });
});
