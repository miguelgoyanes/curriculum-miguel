function validarFormulario() {
    // Comprobacion 1
    var email = document.getElementById('email').value;
    if(email.length == 0) {
        alert('Debe introducir una direccion de correo electronico');
        return false;
    }
    // Comprobacion 2
    var email = document.getElementById('email').value;
    if(!(email.indexOf('@') !== -1)) {
        alert('La dirección de correo debe tener al menos una arroba (@)');
        return false;
    }
    // Comprobacion 3
    var email = document.getElementById('email').value;
    if(!(email.indexOf('.') !== -1)) {
        alert('La dirección de correo debe tener al menos un punto (.)');
        return false;
    }
    // Comprobacion 4
    var comentario = document.getElementById('mensaje').value;
    if(comentario.length == 0) {
        alert('Debe introducir un comentario');
        return false;
    }
    // Comprobacion 5
    var comentario = document.getElementById('mensaje').value;
    if(comentario.length >= 200) {
        alert('La longitud del mensaje no puede exceder los 200 caracteres');
        return false;
    }
}
