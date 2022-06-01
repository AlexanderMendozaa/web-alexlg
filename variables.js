var variables = new Array();
const getValor = () => {
    
    
    let coment = document.getElementById("intxt").value;
    variables.push(coment);


    if(coment != null){
        for (let i = 0; i <= variables.length ; i++){
            console.log(variables[i])
        }
    }
    let cadena = "";
    for (i = 0; i < variables.length; i++){
        cadena += variables[i] + "\n";
    }
    document.getElementById("mtxt").value = cadena;
    localStorage.setItem("listaUsuario", JSON.stringify(variables))
       // window.location.assign("InicioSesion.html")
    

}