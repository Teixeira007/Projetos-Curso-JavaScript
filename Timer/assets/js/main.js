function watch(){
    const relogio = document.querySelector('.relogio');

    let seconds = 0;
    let time;

    function startClock(){
        time = setInterval(function(){
            seconds++;
            relogio.innerHTML = getTimeSeconds(seconds);
        }, 1000);
    }

    function getTimeSeconds(seconds){
        let date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hours12: false,
            timeZone: "UTC"
        });
    }

    function stopClock(){
        const stopTime = setTimeout(function(){
            clearInterval(time);
        }, 0);
    }

    document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('iniciar')){
            clearInterval(time);
            startClock();
            relogio.style.color = 'black';
        }

        else if(el.classList.contains('pausar')){
            stopClock();
            relogio.style.color = "red";
        }
        else if(el.classList.contains('zerar')){
            relogio.innerHTML = getTimeSeconds(0);
            clearInterval(time);
            seconds = 0;
            relogio.style.color = "black";
        }
    });
}

watch();

