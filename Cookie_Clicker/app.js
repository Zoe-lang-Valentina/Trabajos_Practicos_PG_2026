let Cookies = document.querySelector('#Cookies')
let Boton = document.querySelector('#Boton')
let cokie = 0
Boton.onclick = function (){
    cokie = cokie + 1
    Cookies.textContent = cokie + ' cookies'
    if (cokie == 10) {
    Cookies.style.color = 'red'    
    } 
     if (cokie == 20) {
        Cookies.style.color = 'orange'    
    }
    if (cokie == 50){
        Cookies.style.color = 'green'    
    }
    
} 