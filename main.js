function adicionar() {
    const tarefaPura = document.getElementById("input").value
    const listaDeTarefas = document.getElementById('listaDeTarefas')

    const paragrafo = document.createElement('p')
    const tarefa = document.createTextNode(` ${tarefaPura}`)
    const checkbox = document.createElement('input')
    
    checkbox.type = "checkbox";
    checkbox.name = "checkName";
    checkbox.id = "idCheck";
    checkbox.value = 'valor'
    checkbox.checked = false
 
    checkbox.addEventListener('click', function checkOff() {
        console.log('desativando')
    })

    paragrafo.appendChild(checkbox)
    paragrafo.appendChild(tarefa)
    listaDeTarefas.appendChild(paragrafo)
}




