const token = localStorage.getItem("token");
const signUpSubmitButton = document.getElementById("signUpSubmitButton");
const signUpUserName = document.getElementById("signUpUserName");
const signUpUserLastname = document.getElementById("signUpUserLastname");
const signUpUserEmail = document.getElementById("signUpUserEmail");
const signUpUserProfile = document.getElementById("signUpUserProfile");
const signUpUserPassword = document.getElementById("signUpUserPassword");
const signUpUserRePassword = document.getElementById("signUpUserRePassword");
let signUpUserRol = document.getElementById("signUpUserRol");
const config = { headers: { Authorization: `Bearer ${token}` } };
console.log(config);




function signUp() {
    console.log(signUpUserRol);
    if (signUpUserRol.value == "admin") {
        signUpUserRol.value = 1
    } else if (signUpUserRol.value == "basico") {
        signUpUserRol.value = 2
    } else {
        console.log("Please put a valid role");
    }
    console.log(signUpUserPassword);
    if (signUpUserPassword.value != signUpUserRePassword.value) {
        console.log("Passwords must match");
    }

    axios.post(
        'http://localhost:3000/signup',
        {
            name: signUpUserName.value,
            lastname: signUpUserLastname.value,
            email: signUpUserEmail.value,
            profile: signUpUserProfile.value,
            rol: signUpUserRol.value,
            password: signUpUserPassword.value,
            rePassword: signUpUserRePassword.value
        },
        config
    )
        .then(function logear(response) {
            console.log(response);
            // console.log("Usuario creado correctamente");
            location.reload();
        }, function error(params) {
            console.error("Por favor intentelo mas tarde");
        })
}

signUpSubmitButton.addEventListener('click', (signUpButtonEvent) => {
    signUpButtonEvent.preventDefault();
    signUp();
})