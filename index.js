const passosIniciais = 1
const passosDados = 1000
const totalPassos = passosIniciais + passosDados
console.log(totalPassos);

if(totalPassos < 10){
    console.log('Você falhou na missão!!!')
}
else if(totalPassos < 500){
    console.log('Continue em frente')
}
else if(totalPassos <850){
    console.log('Voce esta quase lá!!!')
}
else{
    console.log('Voce compriu a missão!!!')
}