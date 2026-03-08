const rectangulo = document.querySelector('#rectangulo')

rectangulo.addEventListener('mouseover',()=>{
    rectangulo.style.backgroundColor = 'gold'
    rectangulo.textContent = 'Muchas Gracias'
})

rectangulo.addEventListener('mouseout',()=>{
    rectangulo.style.backgroundColor = 'green'
    rectangulo.textContent = 'Pon el raton sobre mi'
})