/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const { strictEqual } = require('assert');
const assert = require('assert');
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(typeof(circle(5)), 'object');
    // Teste se circle retorna um objeto.
    assert.strictEqual(Object.entries(circle(5)).length, 3);
    // Teste se o objeto retornado tem 3 entradas.
    assert.strictEqual(circle(), undefined);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    const objectCircumference = circle(2);
    assert.strictEqual(objectCircumference.circumference, 12.56);
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    const objectArea = circle(3);
    assert.strictEqual(objectArea.area, 28.259999999999998);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    const objectData = circle(3);
    assert.deepStrictEqual(objectData, { radius: 3, area: 28.259999999999998, circumference: 18.84 });
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
  });
});
