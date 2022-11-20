function adicionar() {

    // Variaveis

    const input = document.getElementById("input")
    const tarefaPura = document.getElementById("input").value
    const listaDeTarefas = document.getElementById('listaDeTarefas')

    const paragrafo = document.createElement('p')
    const tarefa = document.createTextNode(` ${tarefaPura}`)
    const checkbox = document.createElement('input')

    // Caso tenha algo escrito ele ira prosseguir com o script
    
    if(input.value != '') {

        // Setando informações no checkbox

        checkbox.type = "checkbox";
        checkbox.name = "checkName";
        checkbox.id = "idCheck";
        checkbox.value = 'valor'
        checkbox.checked = false

        // Inserindo os elementos criados no HTML

        paragrafo.appendChild(checkbox)
        paragrafo.appendChild(tarefa)
        listaDeTarefas.appendChild(paragrafo)

        // Limpa o input

        input.value = ''
        
        // Ao clicar na checkbox, a tarefa é concluida

        checkbox.addEventListener('click', function checkOff() {
            if(checkbox.checked == true) {
                paragrafo.style.textDecoration = 'line-through'
            } else if (checkbox.checked == false) {
                paragrafo.style.textDecoration = 'none'
            } 
        })
    }
}




