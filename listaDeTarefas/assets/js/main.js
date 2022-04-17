const tasks = document.querySelector('#input-tasks');
const button = document.querySelector('.button-add');
const ulTasks = document.querySelector('.ul-tasks');

const buttonDelete = document.querySelector('.button-delete');
;

// Criar tag li
function criarLi(){
    const li = document.createElement('li');
    return li;
}

// Limpar input e focar
function CleatInput(){
    tasks.value = "";
    tasks.focus();
}

// Função para pegar o valor do input e adicionar no ul
function getTextInput(tasks){
    let text = document.createTextNode(tasks); 
    const li = criarLi(); 
    li.appendChild(text); 
    ulTasks.appendChild(li);
    addButton(li); 
    CleatInput(); 
    saveTasks(); // salva as tarefas no localStorage
}

//função de adicionar butão
function addButton(li){
    li.innerHTML += "  "; 
    const buttonDelete = document.createElement('button'); 
    buttonDelete.innerText = "Apagar";
    buttonDelete.classList.add('button-delete'); 
    li.appendChild(buttonDelete);
}

// eventos de click
addEventListener('click', function(event){
    
    const element = event.target;

    //quando o botão de adicionar é clicado
    if(element.classList.contains('button-add')){
        if(!tasks.value) return ;
        getTextInput(tasks.value);
    }

    //quando o botão de apagar é clicado
    if(element.classList.contains('button-delete')){
        element.parentElement.remove() // remove o pai do elemento selecionado
        saveTasks(); // salva no localStorage 
    }
});

// evento para pegar o valor do input quando a tecla enter for precionada
tasks.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!tasks.value) return ;
        getTextInput(tasks.value);
    }
});


// função salva as tarefas no localStorage
function saveTasks(){
    const listTasks =  ulTasks.querySelectorAll('li'); 
    const arrayTasks = [];

    for(let task of listTasks){
        let listText = task.innerText;
        listText = listText.replace('Apagar', '').trim(); //trocar a palavra apagar por "" e tirar espaços vazios
        arrayTasks.push(listText);
    }

    const tasksJson = JSON.stringify(arrayTasks); // transformar o array em uma String JSON
    localStorage.setItem('tasks', tasksJson); // armazenar essa StringJSON no localStorage
}

// Readicionar os valores armazenados no localStorage
function retrieveTasks(){
    const tasksJson = localStorage.getItem('tasks'); // pegar os valores armazenados no localStorage
    const arrayTasks = JSON.parse(tasksJson); // tranformar a StringJSON em um array

    for(let task of arrayTasks){
        getTextInput(task);
    }
}

retrieveTasks();