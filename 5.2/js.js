const campos = document.querySelectorAll('input');

for(let i = 0; i < campos.length; i++){
    campos[i].addEventListener('click',function(){
          alert(
            'Los datos del campo pulsado son:\n' +
            'Name: ' + this.name + '\n' +
            'ID: ' + this.id + '\n' +
            'Value: ' + this.value + '\n' +
            'Type: ' + this.type
        );
    });
};