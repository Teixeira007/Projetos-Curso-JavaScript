const campo = document.querySelector('h1')

const data = new Date();

function formatDayWeek(dayWeek) {
    switch (dayWeek) {
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
        default:
            return "";
    }
}

function formatMonth(month) {
    const mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto",
        "setembro", "outubro", "novembro", "dezembro"];

    return mes[month];

}

function zeroAEsquerada(temp){
    return temp < 10 ? `0${temp}` : `${temp}`;
}
const dayWeek = data.getDay();
const day = data.getDate();
const month = data.getMonth();
const year = data.getFullYear();
const hours = data.getHours();
const minutes = data.getMinutes();
console.log(month);


campo.innerHTML = `${formatDayWeek(dayWeek)}, ${day} de ${formatMonth(month)} de 
                    ${year} ${zeroAEsquerada(hours)}:${zeroAEsquerada(minutes)}`


                    