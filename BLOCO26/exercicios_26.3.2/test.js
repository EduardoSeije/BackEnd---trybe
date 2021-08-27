const { expect } = require('chai');
const { it } = require('mocha');

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
  describe('Quando o parâmetro não for um número', () => {
    describe('Aresposta', () => {
      it('é uma string', () => {
        const result = checkNumber('abc');
        expect(result).to.be.a('string');
      });
      it('é diferente de número', () => {
        const result = checkNumber('abc');
        expect(result).to.be.equal('o valor deve ser um número');
      });
    });
  });
});
