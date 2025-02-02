// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* ---------------------------------------------------------------------------------------------------  */

// Array para almacenar nombres.
let amigos = [];

// Implementación de función para agregar amigos.
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre) {
    amigos.push(nombre);
    input.value = "";
    mostrarAmigos();
  }
}

// Implementación de función que recorra el array amigos y agregue cada nombre como un elemento <li>
function mostrarAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  amigos.forEach(amigo => {
    const elemento = document.createElement('li');
    elemento.textContent = amigo;
    lista.appendChild(elemento);
  });
}

