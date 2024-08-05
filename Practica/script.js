const submitFunction = (event) => {
    if (!validarFormulario()) {
        event.preventDefault(); //previene que se actualize la web
    }else{
        event.preventDefault();
        alert(
            'Los datos enviados fueron: \n'+
            'Nombre: '+document.getElementById('nombre').value + '\n'+
            'Apellido: '+document.getElementById('apellido').value + '\n'+
            'Documento: '+document.getElementById('documento').value + '\n'+
            'Email: '+document.getElementById('email').value + '\n'+
            'Edad: '+document.getElementById('edad').value + '\n'+
            'Actividad: '+document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: '+document.getElementById('nivelEstudio').value + '\n'
        );
    }
}

document.getElementById('formulario').addEventListener('submit',submitFunction); //Escucha el envio del formulario

function validarFormulario(){
    //Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo =>{
        let errorCampo = document.getElementById('error'+ campo.id.charAt(0).toUpperCase()+campo.id.slice(1));
        if(campo.value.length == ''){
            mostrarError(errorCampo,"Este campo es requerido!");
            validacionCorrecta = false;
        }else if(campo.value.length > 0 && campo.value.length < 3){ //Este regex valida que el formato del email sea valido
            mostrarError(errorCampo,"Este campo debe tener al menos 3 caracteres");
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo);
        }
    })
    //Esto valida los campos Email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        ocultarError(errorEmail);
    }else{
        mostrarError(errorEmail,"Ingrese un correcto electronico valido!")
    }

    //Validacion de edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');
    if(edad.value < 18){
        mostrarError(errorEdad,"Debes ser mayor de 18 años para registrarte!")
        validacionCorrecta = false;
    }else{
        ocultarError(errorEdad);
    }

    //Validacion actividad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');

    if(actividad.value == ''){
        mostrarError(errorActividad,"Por favor seleccione una actividad");
        validacionCorrecta = false;
    }else{
        ocultarError(errorActividad);
    }

    //Validacion estudio
    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if (nivelEstudio.value == '') {
        mostrarError(errorNivelEstudio,"Por favor ingrese su nivel de estudio");
        validacionCorrecta = false;
    }else{
        ocultarError(errorNivelEstudio);
    }

    //Validar los terminos y condiciones
    const terminosYCondiciones = document.getElementById('aceptoTerminos');
    const errorTerminosYCondiciones = document.getElementById('errorAceptoTerminos');

    if (!terminosYCondiciones.checked) {
        mostrarError(errorTerminosYCondiciones,"Por favor acepte los terminos y condiciones");
        validacionCorrecta = false;
    }else{
        ocultarError(errorTerminosYCondiciones);
    }

    return validacionCorrecta;
}

const mostrarError = (elemento,mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}