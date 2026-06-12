const form = document.getElementById("formulario");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let password = document.getElementById("password").value.trim();
    let departamento = document.getElementById("departamento").value;

    let generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    let genero = generoSeleccionado ? generoSeleccionado.value : "";

    let regexNombre = /^[a-zA-Z\s]{3,}$/;
    let regexEdad = /^(1[01][0-9]|120|[1-9]?[0-9])$/ 
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexTelefono = /^\d{10}$/;
    let regexPassword = /^.{8,}$/;

    if (!regexNombre.test(nombre)) {
        alert("Nombre inválido");
        return;
    }

    if (!regexEdad.test(edad)) {
        alert("Edad inválida");
        return;
    }

    if (!regexCorreo.test(correo)) {
        alert("Correo inválido");
        return;
    }

    if (!regexTelefono.test(telefono)) {
        alert("Teléfono inválido (10 dígitos)");
        return;
    }

    if (!regexPassword.test(password)) {
        alert("Contraseña inválida");
        return;
    }

    if (departamento === "") {
        alert("Selecciona un departamento");
        return;
    }

    if (genero === "") {
        alert("Selecciona un género");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({
        nombre,
        edad: parseInt(edad),
        correo,
        telefono,
        password,
        departamento,
        genero
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Formulario enviado correctamente");

    window.location.href = "tablas.html";
});

function ir() {{
    window.location.href = "formulario.html";
}}