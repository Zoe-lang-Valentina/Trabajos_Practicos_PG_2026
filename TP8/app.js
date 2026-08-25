let ej1 = document.querySelector('#ej1')
let b1 = document.querySelector('#b1')
let  inputEj1 = document.querySelector('inputEj1')
let edad = 18

b1.onclick = function () {
    edad = inputEj1.value
    if (edad >= 18) {
        ej1.textContent = 'ere mayor de edad ψ(._. )>'
    }else{
        ej1.textContent= 'tu no ere mayor de edad '
    }
}
//         :v

