const userLoginName = document.getElementById("userLoginName");
const userLoginPassword = document.getElementById("userLoginPassword");
const loginSubmitButton = document.getElementById("loginSubmitButton");

function login() {
    //Que? Quiero comparar los datos values del formulario y enviarlo a la pagina de dashboard.
    //Como? Comparando con un if-else datos del front con unos fijos que despues van a ser del Backend.
    //Para Que? Para poder logearme correctamente.
    //Por que? Porque despues solo voy a tener que cambiar los valores estaticos por valores traidos desde la DB y el usuario quedara logeado.
    axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
            name: userLoginName.value,
            password: userLoginPassword.value
        }
    })
        .then(function logear(response) {
            console.log(response);
            console.log("Logeado correctamente");
            console.log();
            window.localStorage.setItem("rolUsuario", response.data.rol);
            window.localStorage.setItem('token', response.data.token);
            location.href = './dashboard.html';
        }, function error(params) {
            console.error("Nombre o Contraseña incorrecta");
        })
}

loginSubmitButton.addEventListener('click', (loginButtonEvent) => {
    console.log("clicked");
    loginButtonEvent.preventDefault();
    login();
})