
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && altura !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classification = "";

        if (valorIMC < 18.5) {
            classification = "abaixo do peso."
        } else if (valorIMC < 25) {
            classification = "no peso ideal."
        } else if (valorIMC < 30) {
            classification = "acima do peso."
        } else if (valorIMC < 35) {
            classification = "com obesidade grau 1."
        } else if (valorIMC < 40) {
            classification = "com obesidade grau 2."
        } else {
            classification = "com obesidade grau 3. ALTO RISCO."
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classification}`;

    } else {
       resultado.textContent = 'Preencha os  campos corretamente!'
    }
}

calcular.addEventListener('click', imc);