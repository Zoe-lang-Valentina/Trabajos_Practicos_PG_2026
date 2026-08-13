let ej1 = document.querySelector('#ej1')
let b1 = document.querySelector('#b1')
let edad = 18

b1.onclick = function () {
    if (edad >= 18) {
        ej1.textContent = 'ere mayor de edad ψ(._. )>'
    }else{
        ej1.textContent= 'tu no ere mayor de edad '
    }
}
//         :v

let ej2 = document.querySelector('#ej2')
let b2= document.querySelector('#b2')
let nombreUsuario = 'Pablizqui'

b2.onclick = function () {
    if ((nombreUsuario == 'Adrian') || (nombreUsuario == 'Pablizqui')){
        ej2.textContent ='Bienvenido '+ nombreUsuario + '¿como estas?'
       }
       else{
           ej2.textContent = 'bienvenido' + nombreUsuario
       }
} 


//         :v

let ej4 = document.querySelector('#ej4')
let b4= document.querySelector('#b4')
let numero = 0

b4.onclick = function () {
    if (numero < 0 ){
        ej4.textContent = 'El numero es negativo'
    }
     if( numero > 0) {
        ej4.textContent = 'El numero es positivo'
    }
    if (numero == 0){
        ej4.textContent = 'El numero es 0'
    }
}

//       ;3

let ej5 = document.querySelector('#ej5')
let b5= document.querySelector('#b5')
let Edad = 67

b5.onclick = function(){
    if ((Edad > 6) && (Edad < 10)){
        ej5.textContent = 'Usted es un niño'
    }
    else if ((Edad > 6) && (Edad < 10)){
       ej5.textContent = 'Usted es un Adolescente'
    }
    else if ((Edad > 19) && (Edad < 26)){
        ej5.textContent = 'Usted es un Joven'
     }
     else if ((Edad > 27) && (Edad < 59)){
        ej5.textContent = 'Usted es un Adulto'
     }
     else if (Edad >= 60){
        ej5.textContent = 'Usted ya es un fosil '
     }
}
//      :o

let ej6 = document.querySelector('#ej6')
let b6= document.querySelector('#b6')
let dia = 'martes'

b6.onclick = function(){
if ((dia == 'lunes')  || (dia =='martes')  || (dia =='miercoles')  || (dia == 'jueves')  || (dia == 'viernes')){
    ej6.textContent =  'Hora de ir a trabajar,artiba ese poto' }
    else if (( dia == 'sabado') || (dia == 'domingo')) 
    {
        ej6.textContent = 'Ya puedes descansar tu poto'
     }
}
//      ;)

let ej7 = document.querySelector('#ej7')
let b7= document.querySelector('#b7')
let contraseña = 'muy secreta 👀'

b7.onclick = function (){
    if (contraseña = 'muy secreto 👀'){
        ej7.textContent = 'Acceso consedido'}
        else {
            ej7.textContent = 'Acceso denegado 😡'
        }

}