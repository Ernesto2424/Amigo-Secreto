// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables globales
let personas = [];

function agregarAmigo(){
    document.getElementById("resultado").innerHTML="";

    let personaIntroducida = document.getElementById("amigo").value;
    if(personaIntroducida == "" || personaIntroducida == null){
        alert("Ingrese un nombre valido");
    }else{
        personas.push(personaIntroducida);
      //  console.log(personaIntroducida);
        actualizarLista();
        
    } 
    
}

function actualizarLista(){
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML="";
    personas.forEach(persona => {
        let li = document.createElement("li");
        li.textContent = persona;
        ul.appendChild(li);

        document.getElementById("amigo").value="";
        document.getElementById("amigo").focus();

        
    });

}


function sortearAmigo(){

    let numeroAleatorio = Math.floor(Math.random() * personas.length);
 //   console.log(numeroAleatorio);
    
    if(personas.length>1){
        let ul = document.getElementById("resultado");
        ul.innerHTML="";
        let li = document.createElement("li");
        li.textContent = "El amigo secreto sorteado es: "+personas[numeroAleatorio];
        ul.appendChild(li);
        // borra los amigos listados para mostar el amigo secreto
        personas = [];
        actualizarLista();
    }else{
        document.getElementById("resultado").innerHTML="";
    }
}

