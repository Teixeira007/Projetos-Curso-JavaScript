const h1 = document.querySelector('h1');
const data = new Date();

h1.innerHTML = `${data.toLocaleDateString('pt-BR', { dateStyle: 'full' })} 
        ${data.toLocaleTimeString('pt-BR', { timeStyle: 'short' })}`;


