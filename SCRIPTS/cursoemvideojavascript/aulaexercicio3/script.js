function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! passo agora vale 1')
            p = 1
        }
        if (i < f) {
            //crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ' ' + c
            }
            //decrescente
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ' ' + c
            }
        }

    }
}