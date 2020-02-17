let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        alert("valor inválido ou já está na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('adicione valores')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            media += valores[pos] / valores.length
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos < menor])
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>a lista tem ${total} números.</p>`
        res.innerHTML += `<p>o maior valor da lista é ${maior}.</p>`
        res.innerHTML += `<p>o menor valor da lista é ${menor}.</p>`
        res.innerHTML += `<p>a soma dos valores da lista é ${soma}.</p>`
        res.innerHTML += `<p>a média dos valores da lista é ${media}.</p>`



    }
}