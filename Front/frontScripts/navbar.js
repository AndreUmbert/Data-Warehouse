const role = window.localStorage.getItem("rolUsuario");
const usersButton = document.getElementById("usersButton");

if (role == 2) {
  usersButton.style.display = "none";
}
