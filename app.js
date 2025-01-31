// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* ---------------------------------------------------------------------------------------------------  */

// Array para almacenar nombres.
let amigos = []

// Implementacion de funcion para: agregar amigos.
function agregarAmigo() {
  amigos.push(document.getElementById('amigo').value);

  document.getElementById('amigo').value = "";
  mostrarAmigos();
}

/* Implementacion de función que recorra el array amigos y agregue cada nombre como un
elemento <li>
*/
function mostrarAmigos() {
  let lista = document.getElementById('ListaAmigos');

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++){
      //Crear un elemento <li> y asignarle el nombre del amigo en la posicion i
      let elemento = document.createElement('li');
      elemento.textContent = amigos[i];
      //Agregar el elemento <li> a la lista
      lista.appendChild(elemento);
  }
}

