var lista = new Array();
const setValor = () => {
    
    
    let nombre = document.getElementById("name").value;
    let psw = document.getElementById("ps").value;
    let texto = "Registrado correctamente";
    lista.push({ nombre, psw });


    
    for (let i = 0; i <= lista.length ; i++){
        console.log(lista[i])
    }

    document.getElementById("msj").innerHTML = texto;
    let cadena = "";
    for (i = 0; i < lista.length; i++){
        cadena += lista[i].nombre + " " + lista[i].psw+ "\n";
    }
    document.getElementById("contenido").value = cadena;
    localStorage.setItem("listaUsuario", JSON.stringify(lista))
        window.location.assign("InicioSesion.html")
    


}