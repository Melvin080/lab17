function mostrarMensaje(){
    alert('Hola, Bienvenido a mi pagina!')
}

function vaciado(str){
    return str.replace (/^\s+|\s+$/g, '');
}

function validaFormulario(){
    let elementoNombre=document.getElementById('nombre');
    let elementoEmail=document.getElementById('email');
    let elementoTel=document.getElementById('tel');
    if (vaciado(elementoNombre.value)=='' || (vaciado(elementoEmail.value)=='' && vaciado(elementoTel.value)=='')){
        alert('Ingresa el nombre y por lo menos, un medio de contacto');
    }
}