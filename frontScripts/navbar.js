const role = window.localStorage.getItem("rolUsuario");
const usersButton = document.getElementById("usersButton");
// console.log(role);

if (role == 2) {
    usersButton.style.display = "none";
}