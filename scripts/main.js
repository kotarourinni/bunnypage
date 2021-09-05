let miImage = document.querySelector('img');
miImage.onclick = function(){
    let miSrc = miImage.getAttribute('src');
    if(miSrc === 'images/conejo-logo(1).png')
    {
        miImage.setAttribute('src','images/conejo-logo(3).png');       
    } else {
        miImage.setAttribute('src','images/conejo-logo(1).png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function establecerNombreUsuario(){
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre){
        establecerNombreUsuario();
    }
    else{
        localStorage.setItem('nombre',miNombre);
        miTitulo.textContent = 'Los conejos son lo mas, '+ miNombre;
    }
    
}

if(!localStorage.getItem('nombre')){
    establecerNombreUsuario();
}
else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Los conejos son lo mas, '+ nombreAlmacenado;
}

miBoton.onclick = function(){
    establecerNombreUsuario();
}
