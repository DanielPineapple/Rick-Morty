    // botones filtro
    let botonFiltroTodo = document.getElementById('filtroTodo');
    let botonFiltroMujer = document.getElementById('filtroMujer');
    let botonFiltroHombre = document.getElementById('filtroHombre');
    let botonFiltroUnknown = document.getElementById('filtroUnknown');
    let botonFiltroGenderless = document.getElementById('filtroGenderless');

    // Eventos
// 1- Nos traemos el elemento html que queremos agregarle el evento
// 2- Crear una funcion que se ejecute cuando se realice el evento
// 3- Creamos el evento, conectando todo

// Funciones para el filtro

function filtroMujer () {
    let mujeres = totalPersonajes.filter((itemPersonaje)=>{
        return itemPersonaje.gender==='Female';
    });
    mostrarEnElHtml(mujeres);
};

function filtroHombre () {
    let hombres = totalPersonajes.filter((itemPersonaje)=>{
        return itemPersonaje.gender==='Male'
    });
    mostrarEnElHtml(hombres);
}

function filtroTodo () {
    mostrarEnElHtml(totalPersonajes);
}

function filtroUnknown () {
    let unknown = totalPersonajes.filter((itemPersonaje)=>{
        return itemPersonaje.gender==='unknown'
    });
    mostrarEnElHtml(unknown);
}

function filtroGenderless () {
    let Genderless = totalPersonajes.filter((itemPersonaje)=>{
        return itemPersonaje.gender==='Genderless'
    });
    mostrarEnElHtml(Genderless);
}

// Crear evento
// elementoHTML.addEventListener('tipo de evento', funcion que se ejecuta cuando se da el evento)
botonFiltroMujer.addEventListener('click',filtroMujer);
botonFiltroHombre.addEventListener('click',filtroHombre);
botonFiltroTodo.addEventListener('click',filtroTodo);
botonFiltroUnknown.addEventListener('click', filtroUnknown);
botonFiltroGenderless.addEventListener('click',filtroGenderless);