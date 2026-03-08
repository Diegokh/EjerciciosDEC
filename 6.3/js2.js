const selectorSize  = document.querySelector('#cboSize')
const p = document.querySelector('p')

selectorSize.addEventListener('change', function(){
   p.style.fontSize = selectorSize.value
})

const selectorColor = document.querySelector('#cboColorFuente')
selectorColor.addEventListener('change',function(){
    p.style.color = selectorColor.value
})