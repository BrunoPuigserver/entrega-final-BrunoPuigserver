function setData(){
    let recuperandoDatos = localStorage.getItem("arregloDeUsuarios");

    let arregloUsuarios = recuperandoDatos ? JSON.parse(recuperandoDatos) : [];

    let nombreUsuario = document.getElementById("nombre");
    let passUsuario = document.getElementById("pass");

    let usuario = {nombre: nombreUsuario.value, password: passUsuario.value};

    console.log(usuario);

    arregloUsuarios.push(usuario);

    let arregloJson = JSON.stringify(arregloUsuarios);

    localStorage.setItem("arregloDeUsuarios", arregloJson);
}

function loginUsuario(){
    let nombreUsuario = document.getElementById("nombreLogin");
    let passUsuario = document.getElementById("passLogin");

    let recuperandoDatos = localStorage.getItem("arregloDeUsuarios");
    recuperandoDatos = recuperandoDatos ? JSON.parse(recuperandoDatos) : [];
    
    console.log(recuperandoDatos);

    for(let usuario of recuperandoDatos){
        if(nombreUsuario.value == usuario.nombre && passUsuario.value == usuario.password){
        window.location.href = "inicio.html";
        return;
    }
}

    document.body.innerHTML = `<h1>No te conozco :(</h1>
        <a href="index.html.">Volver</a>`;
}

let btnRegistro = document.getElementById("btnRegistro");
btnRegistro.addEventListener("click", function(event){
    event.preventDefault();
    setData();
});

let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", function(event){
    event.preventDefault();
    loginUsuario();
});