function criarP(){
    const p = document.createElement('p');
    return p;
}


const resultado = document.querySelector('#resultado');
resultado.innerHTML = '';

const p = criarP();

p.classList.add('paragrafo-resultado');

p.innerHTML = "Qualquer texto";
resultado.appendChild(p);