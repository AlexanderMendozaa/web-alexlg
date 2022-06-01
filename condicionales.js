var condicionales = new Array();
const getValor = () => {
    
    
    let coment = document.getElementById("intxt").value;
    condicionales.push(coment);


    if(coment != null){
        for (let i = 0; i <= condicionales.length ; i++){
            console.log(condicionales[i])
        }
    }
    let cadena = "";
    for (i = 0; i < condicionales.length; i++){
        cadena += condicionales[i] + "\n";
    }
    document.getElementById("mtxt").value = cadena;
    localStorage.setItem("listaUsuario", JSON.stringify(condicionales))
       // window.location.assign("InicioSesion.html")
    

}