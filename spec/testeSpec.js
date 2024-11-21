// it("Fizz Buzz", function () {
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe("Fizz");
//     expect(inteiro(4)).toBe(4);
//     expect(inteiro(5)).toBe("Buzz");
//     expect(inteiro(6)).toBe("Fizz");
//     expect(inteiro(7)).toBe(7);
//     expect(inteiro(8)).toBe(8);
//     expect(inteiro(9)).toBe("Fizz");
//     expect(inteiro(10)).toBe("Buzz");
//     // expect(inteiro(15)).toBe("Fizz Buzz");

// })

// it("Teste: situação do aluno", function(){
//     expect(escola(6)).toEqual("Reprovado")
//     expect(escola(9)).toEqual("Aprovado")
// })

it("Teste: exercício 1", function () {
    expect(mult3(1, 2, 3)).toEqual(6)
    expect(mult3(3, 2, 3)).toEqual(18)
    expect(mult3(2, 3, 4)).toEqual(24)
    expect(mult3(1, 2, 5)).toEqual(10)
    expect(mult3(1, 0, 3)).toEqual(0)
})

it("Teste: exercício 2", function () {
    expect(div(10, 2)).toEqual(5)
    expect(div(7, 0)).toEqual("Não é possível dividir por 0")
})

it("Teste: exercício 3", function () {
    expect(celsiusFahrenheit(22)).toEqual(71.6)
    expect(fahrenheitCelsius(77)).toEqual(25)
})

it("Teste: exercício 4", function () {
    expect(calcularMedia(3, 4, 5)).toEqual(4)
    expect(calcularMedia(10, 20, 30)).toEqual(20)
})

it("Teste: exercício 5", function () {
    expect(contarCaracteres("Caramba quantas letras")).toEqual(22)
    expect(contarCaracteres("12345")).toEqual(5)
})

it("Teste: exercício 6", function () {
    expect(calculadora(4, 2, "+")).toEqual(6)
    expect(calculadora(4, 2, "/")).toEqual(2)
    expect(calculadora(4, 0, "/")).toEqual("Não é possível dividir por 0")
    expect(calculadora(4, 2, "*")).toEqual(8)
    expect(calculadora(4, 2, "-")).toEqual(2)
}) 