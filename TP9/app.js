let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let p = document.querySelector('#texto1')
let b1 = document.querySelector('#boton1')

function comparar(){
    let = num1.value
    let = num2.value
    let = comparacion

 if (num1 > num2) {
    p.textContent = 'El numero mayor es' + num1
 }
 else{
    p.textContent = 'El numero mayor es' + num2
 }
 return(comparacion) 
 }

b1.onclick = function(){
    comparar()
}