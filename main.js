function adicionar() {
    const input = document.getElementById("input")
    const tarefaPura = document.getElementById("input").value
    const listaDeTarefas = document.getElementById('listaDeTarefas')

    const paragrafo = document.createElement('p')
    const tarefa = document.createTextNode(` ${tarefaPura}`)
    const checkbox = document.createElement('input')
    
    if(input.value != '') {
        checkbox.type = "checkbox";
        checkbox.name = "checkName";
        checkbox.id = "idCheck";
        checkbox.value = 'valor'
        checkbox.checked = false


        paragrafo.appendChild(checkbox)
        paragrafo.appendChild(tarefa)
        listaDeTarefas.appendChild(paragrafo)

        input.value = ''
        

        checkbox.addEventListener('click', function checkOff() {
            if(checkbox.checked == true) {
                paragrafo.style.textDecoration = 'line-through'
            } else if (checkbox.checked == false) {
                paragrafo.style.textDecoration = 'none'
            } 
        })
    }
}




