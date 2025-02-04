// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables globales
let personas = [];

function agregarAmigo(){
    let personaIntroducida = document.getElementById("amigo").value;
    if(personaIntroducida == "" || personaIntroducida == null){
        alert("Ingrese un nombre valido");
    }else{
        personas.push(personaIntroducida);
        console.log(personaIntroducida);
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
    });

}


