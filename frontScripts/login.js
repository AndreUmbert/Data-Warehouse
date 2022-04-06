const userLoginName = document.getElementById("userLoginName");
const userLoginPassword = document.getElementById("userLoginPassword");
const loginSubmitButton = document.getElementById("loginSubmitButton");

function login() {
    //Que? Quiero comparar los datos values del formulario y enviarlo a la pagina de dashboard.
    //Como? Comparando con un if-else datos del front con unos fijos que despues van a ser del Backend.
    //Para Que? Para poder logearme correctamente.
    //Por que? Porque despues solo voy a tener que cambiar los valores estaticos por valores traidos desde la DB y el usuario quedara logeado.
    if (userLoginName.value == "Andre" && userLoginPassword.value == "1111") {
        console.log("Logeado correctamente");
        location.href = '/dashboard.html';
    } else {
        console.log("Nombre o Contraseña incorrecta");
    }

}

loginSubmitButton.addEventListener('click', (loginButtonEvent)=>{
    console.log("clicked");
    loginButtonEvent.preventDefault();
    login();
})