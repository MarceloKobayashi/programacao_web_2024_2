let titulo = document.getElementById("titulo").value;
console.log(titulo);

function submeter() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;

    console.log(cpf);
    
    const isValidCPF = validaCPF(cpf);
    console.log(isValidCPF);

    if (isValidCPF) {
        console.log(calculoCPF(cpf));
    }
}

function validaCPF(cpf) {
    cpf = cpf.trim()

    if (cpf == "") {
        alert("Campo CPF não pode ser vazio.");
        return false;
    }

    if (/[a-zA-Z]/.test(cpf)) {
        alert("CPF não pode conter letras.");
        return false;
    }

    //REGEX
    if (!/^[\d.-]+$/.test(cpf)) {    //Do início ao fim, só tem [\d.-] uma ou mais vezes, true
        alert("CPF só pode conter números, '.' ou '-'");
        return false;
    }

    if (cpf.length != 11 && cpf.length != 14) {
        alert("CPF deve ter 11 ou 14(com pontos e hífen) dígitos.");
        return false;
    }

    if (cpf.length == 11 && !/^\d{11}$/.test(cpf)) {
        //calculo cpf valido
        alert("Reescreva o CPF com apenas números ou no formato 123.123.123-12");
        return false;
    }

    if (cpf.length == 14 && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        alert("Reescreva o CPF com apenas números ou no formato 321.321.321-32");
        return false;
    }

    return true;
}

function calculoCPF(cpf) {
    cpf = cpf.replace(".", "");
    cpf = cpf.replace("-", "");

    let primeiraSoma = 0;
    let primeiroElemento = 10;

    for (let i = 0; i < 9; i++) {
        let numero = Number(cpf[i]);
        primeiraSoma += numero * primeiroElemento;
        primeiroElemento--;
    }

    let primeiroDigito = 11 - (primeiraSoma % 11);

    if (primeiroDigito >= 10) {primeiroDigito = 0;}

    if (primeiroDigito != cpf[9]) {
        alert("Primeiro dígito verificador inválido, insira um CPF válido.");
        return false;
    }

    let segundaSoma = 0;
    let segundoElemento = 11;

    for (let i = 0; i < 10; i++) {
        let numero = Number(cpf[i]);
        segundaSoma += numero * segundoElemento;
        segundoElemento--;
    }

    let segundoDigito = 11 - (segundaSoma % 11);

    if (segundoDigito >= 10) {segundoDigito = 0;}

    if (segundoDigito != cpf[10]) {
        alert("Segundo dígito verificador inválido, insira um CPF válido.");
        return false;
    }

    return true;
}
