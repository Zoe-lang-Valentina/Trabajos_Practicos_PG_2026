let h1 = document.querySelector('#h1')

let nombres = ['Alvaro','Pablizqui','Manuel']

nombres[5] = 'Martinizqui'
nombres[4] = 'Pablo'

nombres.push('Salmon')
nombres.pop('')
nombres.unshift('langosta')
nombres.shift()

h1.textContent = nombres