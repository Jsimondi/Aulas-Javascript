let value1;
let value2;

function calcular(){
    let option = document.getElementById('inputOperation').value;
    value1 = document.getElementById('value1').value;
    value2 = document.getElementById('value2').value;
    
    switch(parseInt(option)) {
        case 1:
            summ(value1, value2);
            break;
        
        case 2:
            subtract(value1, value2);
            break;
        
        case 3:
            multiply(value1, value2);
            break;

        case 4:
            divide(value1, value2);
            break;
    }

}



function summ (a,b) {
    alert(`
        Resultado:\n
        ${parseFloat(a) + parseFloat(b)}
    `)
    
}

function subtract (a,b) {
    alert(`
        Resultado:\n
        ${parseFloat(a) - parseFloat(b)}
    `)
    
}

function multiply (a,b) {
    alert(`
        Resultado:\n
        ${parseFloat(a) * parseFloat(b)}
    `)
    
}

function divide (a,b) {
    alert(`
        Resultado:\n
        ${parseFloat(a) / parseFloat(b)}
    `)
}

// function sqrt (a,b) {
//     alert(`
//         Resultado:\n
//         ${}
//     `)
// }
