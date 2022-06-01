var lista = new Array();
const getValor = () => {
    
    
    let coment = document.getElementById("intxt").value;
    lista.push(coment);


    if(coment != null){
        for (let i = 0; i <= lista.length ; i++){
            console.log(lista[i])
        }
    }
    let cadena = "";
    for (i = 0; i < lista.length; i++){
        cadena += lista[i] + "\n";
    }
    document.getElementById("mtxt").value = cadena;
    localStorage.setItem("listaUsuario", JSON.stringify(lista))
       // window.location.assign("InicioSesion.html")
    


}