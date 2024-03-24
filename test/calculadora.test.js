const {soma, subtracao} = require("../src/calculadora");

test('Dados de Soma', () => {
    expect(soma(75, 18)).toBe(93);
});

test('Dados de Subtração', () => {
    expect(subtracao(75, 5)).toBe(70);
});