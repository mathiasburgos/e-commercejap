//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("logbtn").addEventListener("click", function() {
      let inputEmail = document.getElementById("usuario");
      let inputPassword = document.getElementById("password");
      let camposCompletos = true;
      if (inputEmail.value === '') {
        inputEmail.classList.add("invalid");
        camposCompletos = false;
      } else {
        inputEmail.classList.remove("invalid");
      }
      if (inputPassword.value === '') {
        inputPassword.classList.add("invalid");
        camposCompletos = false;
      } else {
        inputPassword.classList.remove("invalid");
      }
      if (camposCompletos) {
        window.location = "main.html";
      } else {
        alert("Ingresar los datos por favor");
      }
    })
  });