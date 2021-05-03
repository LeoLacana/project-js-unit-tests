const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const product = productDetails('Alcool gel', 'Mascara');
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(typeof (product), 'object');
    // Teste que o retorno da função é um array.
    assert.strictEqual(product.length, 2);
    // Teste que o array retornado pela função contém dois itens dentro.
    for (let index = 0; index < product.length; index += 1){
      assert.strictEqual(typeof (product[index]), 'object');
    }
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const differentProduc = (product[0].name === product[1].name);
    assert.strictEqual(differentProduc, false);
    // Teste que os dois objetos são diferentes entre si.
    for (let index2 = 0; index2 < 2; index2 += 1) {
      let string123 = 3;
      for (let index = ((product[index2].details.productId.length) - 1); index >= ((product[index2].details.productId.length) - 3); index -= 1) {
        assert.strictEqual(((product[index2].details.productId[index]) == string123), true);
        string123 -= 1;
      }
    }
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
