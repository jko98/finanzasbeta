let ingreso = function(){
    let ingreso = parseInt(document.querySelector('#ingreso').value)
    let ingresado = parseInt(documentr.querySelector('#ingresado').innerText)
    let calculo = ingresado + ingreso
    document.querySelector('#ingresado').innerText = calculo 
}
let egreso = function(){
    let egreso = parseInt(document.querySelector('#egreso').value)
    let egresado = parseInt(document.querySelector('#gastado').innerText)
    let calculo = egreso + egresado
    document.querySelector('#gastado').innerText = calculo
    balance()
}
let balance = function(){
    let ingresado = parseInt(document.querySelector('#ingresado').innerText)
    let gastado = parseInt(document.querySelector('#gastado').innerText)
    let calculo = ingresado - gastado
    document.querySelector('#balance').innerText = calculo
    grafico(ingresado, gastado)
}
let grafico = function(ingresado, gastado){
    
}