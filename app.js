// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Array para almacenar los nombres de los amigos.
let amigos = [];

/**
 * Función para agregar un nuevo amigo a la lista.
 */
function agregarAmigo() {
    // a. Capturar el elemento de entrada y su valor.
    let nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value.trim(); // .trim() para quitar espacios en blanco al inicio y final

    // b. Validar que el campo no esté vacío.
    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return; // Detiene la función si no hay nombre.
    }

    // c. Añadir el nombre al array 'amigos'.
    amigos.push(nombre);

    // d. Limpiar el campo de entrada para el siguiente nombre.
    nombreInput.value = '';
    
    // Actualizar la lista que se muestra en pantalla.
    actualizarListaAmigos();
}

/**
 * Función para mostrar la lista de amigos en la página.
 */
function actualizarListaAmigos() {
    // a. Obtener el elemento <ul> donde se mostrarán los amigos.
    let lista = document.getElementById('listaAmigos');

    // b. Limpiar la lista para evitar nombres duplicados al añadir uno nuevo.
    lista.innerHTML = '';

    // c. Iterar sobre el array 'amigos'.
    for (let i = 0; i < amigos.length; i++) {
        // d. Crear un elemento <li> para cada amigo y añadirlo a la lista <ul>.
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

/**
 * Función para realizar el sorteo del amigo secreto.
 */
function sortearAmigo() {
    // a. Validar que haya amigos en la lista para sortear.
    if (amigos.length === 0) {
        alert('Necesitas agregar al menos un amigo para poder sortear.');
        return;
    }

    // b. Generar un índice aleatorio.
    // Math.random() genera un número entre 0 y 1
    // Lo multiplicamos por el número de amigos para abarcar todos los índices
    // Math.floor() redondea hacia abajo para obtener un índice válido
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // c. Obtener el nombre sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // d. Mostrar el resultado en la pantalla
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    // Ocultar la lista de participantes después del sorteo.
    document.getElementById('listaAmigos').innerHTML = '';
}