let value1;
let value2;


function calcular() {
    let option = document.getElementById('operacaoInput').value;
    value1 = document.getElementById('value1').value;
    value2 = document.getElementById('value2').value;

    if (value1 && value2) {
        switch(option) {
            case '1':
                soma(value1, value2);
                break;
            case '2':
                subtrair(value1, value2);
                break;
            case '3':
                multiplicar(value1, value2);
                break;
            case '4':
                dividir(value1, value2);
                break;
            case '5':
                sqrt(value1, value2);
                break;
        }
    }
}


function soma(a, b) {
    alert(`
        Resultado:\n
        ${parseFloat(a) + parseFloat(b)}
    `);
}

function subtrair(a, b) {
    alert(`
        Resultado:\n
        ${parseFloat(a) - parseFloat(b)}
    `)
}

function multiplicar(a, b) {
    alert(`
        Resultado:\n
        ${parseFloat(a) * parseFloat(b)}
    `)
}

function dividir(a, b) {
    alert(`
        Resultado:\n
        ${a} / ${b} = ${parseFloat(a) / parseFloat(b)}\n
        ${b} / ${a} = ${parseFloat(b) / parseFloat(a)}\n
    `)
}

function sqrt(a, b) {
    alert(`
        Resultado:\n
        SQRT(${a}) = ${Math.sqrt(a)}\n
        SQRT(${b}) = ${Math.sqrt(b)}\n
    `)
}