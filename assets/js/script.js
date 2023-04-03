function validateForm() {
    var nombre = document.forms[0]["nombre"].value;
    var asunto = document.forms[0]["asunto"].value;
    var email = document.forms[0]["email"].value;
    var mensaje = document.forms[0]["mensaje"].value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const soloLetras = /^[a-zA-Z\s]*$/;
    const letrasNumeros = /^[a-zA-Z\d\s\-\.]*$/;
    
    if(!soloLetras.test(nombre)){
        alert("Escriba solo letras en su nombre.");
        return false;
    }else if (!emailRegex.test(email)) {
      alert("Por favor, introduzca una dirección de correo electrónico válida.");
      return false;
    } else if (!soloLetras.test(asunto)) {
        alert("Escriba solo letras en asunto.");
        return false;
    } else if (!letrasNumeros.test(mensaje)) {
      alert("Escriba solo letras o numeros.");
      return false;
    }
    
    return true;
  }