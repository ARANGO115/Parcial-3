const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let primerNombre = document.getElementById("validationDefault01").value.trim();
    let segundoNombre = document.getElementById("validationDefault02").value.trim();
    let correo = document.getElementById("validationDefaultUsername").value.trim();
    let ciudad = document.getElementById("validationDefault03").value.trim();
    let departamento = document.getElementById("validationDefault04").value;
    let cedula = document.getElementById("validationDefault05").value.trim();
    let terminos = document.getElementById("invalidCheck2").checked;

    let regexNombre = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexCedula = /^\d{6,10}$/;

    if (!regexNombre.test(primerNombre)) {
        alert("Primer nombre inválido");
        return;
    }

    if (!regexNombre.test(segundoNombre)) {
        alert("Segundo nombre inválido");
        return;
    }

    if (!regexCorreo.test(correo)) {
        alert("Correo inválido");
        return;
    }

    if (ciudad.length < 3) {
        alert("Ciudad inválida");
        return;
    }

    if (departamento === "") {
        alert("Selecciona un departamento");
        return;
    }

    if (!regexCedula.test(cedula)) {
        alert("Cédula inválida");
        return;
    }

    if (!terminos) {
        alert("Debes aceptar los términos y condiciones");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({
        primerNombre,
        segundoNombre,
        correo,
        ciudad,
        departamento,
        cedula
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Formulario enviado correctamente");

    let modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
    modal.hide();

    form.reset();
});

function iniciar() {
    window.location.href = "index.html";
}

function ir() {
    window.location.href = "tabla.html";
}