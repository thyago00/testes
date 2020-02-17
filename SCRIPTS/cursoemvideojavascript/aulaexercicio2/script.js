function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var dtinformada = document.getElementById('txtano')
    var res = document.getElementById("res")
    if (dtinformada.value.length == 0 || Number(dtinformada.value) > ano) {
        alert('ERRO! tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(dtinformada.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'criancahomem.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                img.setAttribute('src', 'homemidoso.jpg')
            }

        } else if (fsex[1].checked)
            genero = 'mulher'
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'criancamulher.jpg')
        } else if (idade < 18) {
            img.setAttribute('src', 'jovemmulher.jpg')
        } else if (idade < 60) {
            img.setAttribute('src', 'mulheradulta.jpg')
        } else {
            img.setAttribute('src', 'mulheridosa.jpg')
        }


        res.innerHTML = 'é ' + genero + ' com ' + idade + ' anos'
        res.appendChild(img)
    }
}