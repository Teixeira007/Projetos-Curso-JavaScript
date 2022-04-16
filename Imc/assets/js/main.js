const form = document.querySelector('#form');
const resultado = form.querySelector('#resultado');


function receberEventoForm(evento){
    evento.preventDefault();
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');
    
    
    const imc = calcularIMC(Number(peso.value), Number(altura.value));
    
    const validacao = validacaoIMC(imc);


    function calcularIMC(peso, altura){
        if(Number.isNaN(peso)){
            return "peso é inválido";
        }else if( Number.isNaN(altura)){
            return "altura é inváldia";
        }

        const imc = peso / (altura ** 2);
        return imc;
    }
    
    
    function validacaoIMC(imc){
        if(imc < 18.5){
            return "abaixo do peso";
        }
        else if(imc >= 18.5 && imc <= 24.9){
            return "Peso normal";
        }
        else if(imc >= 25 && imc <= 29.9){
            return "Sobrepeso";
        }
        else if(imc >= 30 && imc <= 34.9){
            return "Obesidade grau 1";
        }
        else if(imc >= 35 && imc <= 39.9){
            return "Obesidade grau 2";
        }
        else if(imc >= 40){
            return "Obesidade grau 3"
        }
    }
    if(typeof(imc) === 'string'){
        resultado.innerHTML = imc;
    }else{
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${validacao})`;
    }
}

addEventListener('submit', receberEventoForm)






