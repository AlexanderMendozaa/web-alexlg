var objclass = new Array();
const setValor = () => {
    
    
    let nombre = document.getElementById("name").value;
    let psw = document.getElementById("ps").value;
    let texto = "Registrado correctamente";
    objclass.push({ nombre, psw });


    
    for (let i = 0; i <= objclass.length ; i++){
        console.log(objclass[i])
    }

    document.getElementById("msj").innerHTML = texto;
    let cadena = "";
    for (i = 0; i < objclass.length; i++){
        cadena += objclass[i].nombre + " " + objclass[i].psw+ "\n";
    }
    document.getElementById("contenido").value = cadena;
    localStorage.setItem("listaUsuario", JSON.stringify(objclass))
        window.location.assign("InicioSesion.html")
    


}