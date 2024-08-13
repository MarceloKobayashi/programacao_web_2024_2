let titulo = document.getElementById("titulo").value;
console.log(titulo);

function submeter() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;

    console.log(cpf)
    console.log(validaCPF(cpf))
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

    if (length(cpf) != 11 || length(cpf) != 14) {
        alert("CPF deve ter 11 ou 14(com pontos e hífen) dígitos.");
        return false;
    }

    if (length(cpf) == 11 && !/^[\d]+$/) {
        //calculo cpf valido
        alert("Reescreva o CPF com apenas números ou no formato 123.123.123-12");
        return false;
    }

    if (length(cpf) == 14 && !/[\d].[\d].[\d]-[\d]/)

    return true;
}
