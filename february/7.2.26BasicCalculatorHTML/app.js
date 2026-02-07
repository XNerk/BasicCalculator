const operatorSelect = document.getElementById("operator");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calculateBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");


calculateBtn.addEventListener("click", ()=> {
    const operator=operatorSelect.value;
    const n1 = Number(num1.value);
    const n2= Number(num2.value);
    if (operatorSelect.value==="+") {
        result.textContent= (n1+n2).toFixed(2);

    }

    if (operatorSelect.value==="-"){
        result.textContent=(n1 - n2).toFixed(2);
    }

    if (operatorSelect.value==="*"){
        result.textContent=(n1*n2).toFixed(2);
    }

    if (operatorSelect.value==="/"){
        result.textContent=(n1/n2).toFixed(2);
    }

} );