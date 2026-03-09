const rectangulo = document.querySelector('#rectangulo')

rectangulo.addEventListener('mousedown' , () =>{
    rectangulo.style.backgroundColor = 'gold'
    rectangulo.textContent = 'Suéltame'
})

rectangulo.addEventListener('mouseup', () =>{
    rectangulo.style.backgroundColor = 'pink'
    rectangulo.textContent = 'Gracias'
})