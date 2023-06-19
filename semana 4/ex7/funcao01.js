function parImpar(num) {
    if(num % 2 == 0) {
        return `O número ${num} é par.`
    } else {
        return `O número ${num} é ímpar.`
    }
}

console.log(parImpar(7))

//funcao 02

function soma(num1, num2=0) {
    result = num1 + num2
    return `${num1} + ${num2} = ${result}`
}

console.log(soma(5))


//funcao 03
// Essa função atribui uma potência à variável.
let variable = function(x){
    return x**2
}

console.log(variable(5))

//funcao 04
// Fatorial

// 5! = 5 * 4 * 3 * 2 * 1

function fatorial(num) {
    let fat = 1
    for(let c = num; c > 1; c--) {
        fat *= c
    }
    return `${num}! = ${fat}`
}

console.log(fatorial(4))

//funcao 05

// Recursividade:

function fatorial(num) {
    if(num == 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))

/* 
Formalização:

5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!

n! = n * (n-1)!

*/