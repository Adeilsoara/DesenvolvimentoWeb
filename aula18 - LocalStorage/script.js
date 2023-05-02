window.addEventListener("load", function(){
    let chave = document.getElementById("key")
    let valor = document.getElementById("value")
    let salvar = document.getElementById("btnAdd")
    let limpar = document.getElementById("btnLimp")
    let conteudo = document.getElementById("conteudo")

    salvar.addEventListener("click", function(){
        let input1=chave.value
        let input2=valor.value
        localStorage.setItem(input1, input2)

        exibir()
    })

    limpar.addEventListener("click", function(){
        localStorage.clear()

        exibir()
    })

    function exibir() {
        let str = ""
        for (let i = 0, len = localStorage.length; i < len; i++) {
            let key = localStorage.key(i)
            let valor = localStorage.getItem(key)
            str += `${[i+1]} . ${key} : ${valor} <br>`
        }

        valor.value = ""
        chave.value = ""
        conteudo.innerHTML = str
    }

    exibir()
})