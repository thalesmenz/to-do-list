function adicionar() {
    const tarefaPura = document.getElementById("input").value
    const p = document.createTextNode(tarefaPura)
    const listaDeTarefas = document.getElementById('listaDeTarefas')
    const button = document.getElementById("button")

    listaDeTarefas.appendChild(p)

    p.insertAdjacentElement(p, button)


}