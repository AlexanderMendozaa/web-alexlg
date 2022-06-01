var ciclos = new Array();
const getValor = () => {
    
    
    let coment = document.getElementById("intxt").value;
    ciclos.push(coment);


    if(coment != null){
        for (let i = 0; i <= ciclos.length ; i++){
            console.log(ciclos[i])
        }
    }
    let cadena = "";
    for (i = 0; i < ciclos.length; i++){
        cadena += ciclos[i] + "\n";
    }
    document.getElementById("mtxt").value = cadena;
    localStorage.setItem("listaUsuario", JSON.stringify(ciclos))
       // window.location.assign("InicioSesion.html")
    

}