// function inteiro(inteiro){
//     if(inteiro %3 == 0){
//         return "Fizz"
//     }
//     if(inteiro %5 == 0){
//         return "Buzz"
//     }
//     return inteiro; 
// }

// function escola(nota){
//     if(nota >= 7){
//         return "Aprovado"
//     } else {
//         return "Reprovado"
//     }
// }

function mult3(a, b, c) {
    let resul = a * b * c;
    return resul
}

function div(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Não é possível dividir por 0";
    }
}

function celsiusFahrenheit(C) {
    return (C * 9 / 5) + 32;
}

function fahrenheitCelsius(F) {
    return (F - 32) * 5 / 9;
}

function calcularMedia(a, b, c) {
    return (a + b + c) / 3

}

function contarCaracteres(string) {
    return string.length
}

function calculadora(a, b, operacao) {

    switch (operacao) {
        case "+":
            return a + b;
    
        case "-":
            return a - b;
    
        case "*":
            return a * b;
    
        case "/":
            if(b != 0){
                return a / b;
            } else {
                return "Não é possível dividir por 0"
            }
    
        default:
            return "Operação invalida"
    }
    

}