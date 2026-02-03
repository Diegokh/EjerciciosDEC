document.addEventListener('keydown', (event) =>{
    
    if(event.key === 'F8'){
        event.preventDefault()
        document.body.style.backgroundImage = 'url(images.jpg)'
    }
})