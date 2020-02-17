// simples
/*var vel = 80.5
console.log('a velocidade do carro é ' + vel + ' km por hora')
if (vel > 80) {
    console.log('você ultrapassou a velocidade permitida')
} else
    console.log('você está na velocidade permitida')*/

/*var idade = 66
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('voto opcional')
} else {
    console.log('voto obrigatório')
}*/

/*var agora = new Date();
var hora = agora.getHours()
console.log('Agora são exatamente ' + hora + ' horas')
if (hora > 6 && hora < 12) {
    console.log('bom dia')
} else if (hora <= 18 && hora > 12) {
    console.log('boa tarde')
} else if (hora > 18) {
    console.log('boa noite')
} else if (hora < 6) {
    console.log('boa madrugada')
}*/

var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')
}