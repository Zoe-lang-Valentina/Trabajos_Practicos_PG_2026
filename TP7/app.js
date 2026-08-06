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

//        ;3

let ej5 = document.querySelector('#ej5')
let b5= document.querySelector('#b5')
let Edad = 40

if ((Edad > 6) && (Edad < 10)){
    ej5.textContent= 'Usted esun niño'
}
else if ((Edad > 6) && (Edad < 10)){
   ej5.textContent
}