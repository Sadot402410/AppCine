('serviceWorker' in navigator) ? navigator.serviceWorker.register('/sw.js') : console.log("No Tenemos Service Worker");

let nombreusuario = document.getElementById('username');
let correo = document.getElementById('correo');
let peliculas = document.getElementById('peliculas');
let peliimagen = document.getElementById('peliposter');
let numboletos = document.getElementById('boletos');
let FilaEditar;

function addNewItemToTable(){
    const myList = document.querySelector("tbody");
    const Fila = document.createElement("tr");
    //Nombre de usuario
    let eUsername = document.createElement("td");
    eUsername.innerHTML = `<td> ${nombreusuario.value} </td>`;
    eUsername.value = `${nombreusuario.value}`;
    //Correo electronico
    let ECorreo = document.createElement("td");
    ECorreo.innerHTML = `<td> ${correo.value} </td>`;
    ECorreo.value = `${correo.value}`;
    //Nombre de pelicula
    let EPelicula = document.createElement("td");
    EPelicula.innerHTML = `<td> ${peliculas.value} </td>`;
    EPelicula.value = `${peliculas.value}`;
    //Imagen o poster de la imagen
    let Epeliimagen = document.createElement("td");
    Epeliimagen.innerHTML = `<td> <img src="${peliimagen.src}" alt="NotFound"class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Imagen">  </td>`;
    Epeliimagen.value = `${peliimagen.src}`;
    //Boletos 
    let EBoletos = document.createElement("td");
    EBoletos.innerHTML = `<td> ${numboletos.value} </td>`;
    EBoletos.value = `${numboletos.value}`;
    //Botones de edicion y eliminar
    let EBotones = document.createElement("td");
    let BotonEliminarx1 = document.createElement("button");
    let BotonEditarx1 = document.createElement("button");
    BotonEliminarx1.innerText = "Eliminar";
    BotonEliminarx1.classList.add("btn", "btn-eliminar");
    BotonEditarx1.innerText = "Editar";
    BotonEditarx1.classList.add("btn", "btn-editar");

    //Evento click de Eliminar
    BotonEliminarx1.addEventListener("click", e =>{
        let resp = prompt("¿Deseas realmente eliminar esta fila?");
        resp = resp.toUpperCase();
        if(resp == "SI" || resp == "SÍ"){
            e.target.parentElement.parentElement.remove();
        }
        else{
            //no
        }
        
    })

    //Evento click de edicion
    BotonEditarx1.addEventListener("click", e =>{
        FilaEditar = e.target.parentElement.parentElement;
        nombreusuario.value = FilaEditar.children[0].innerText;
        correo.value = FilaEditar.children[1].innerText;
        peliculas.value = FilaEditar.children[2].innerText;
        if (peliculas.value != ""){
            peliimagen.src = `images/${peliculas.value}.jpg`;
        }
        numboletos.value = FilaEditar.children[4].innerText;
        BotonGuardarEdicion.style.display = "block";
        BotonGuardar.style.display = "none";
        BotonLimpiar.style.display = "none";
        // Enviar.style.display = "none";
        // Editar.style.display = "Block";
    })
    EBotones.appendChild(BotonEliminarx1);
    EBotones.appendChild(BotonEditarx1);
    let aux = parseInt(EBoletos.value) * 50;
    let ETotal = document.createElement("td");
    ETotal.innerHTML = `<td> ${aux} </td>`;
    ETotal.value = `${aux}`;
    Fila.append(eUsername, ECorreo, EPelicula, Epeliimagen, EBoletos, ETotal, EBotones);
    myList.appendChild(Fila);
    nombreusuario.value = "";
    correo.value = "";
    peliculas.value = "";
    peliimagen.src = `images/default.png`;
    numboletos.value = "";
}
peliculas.addEventListener("change", () => {
    if (peliculas.value == "default"){
        peliimagen.src = `images/${peliculas.value}.png`;
    }
    else if (peliculas.value != ""){
        peliimagen.src = `images/${peliculas.value}.jpg`;
    }
    else{
        peliimagen.src = `images/default.png`;
    }

})

let BotonGuardarEdicion = document.getElementById("EdicionBoton");
let BotonLimpiar = document.getElementById("BotonLimpiar");
let BotonGuardar = document.getElementById("BotonGuardar");
BotonGuardarEdicion.addEventListener("click", () =>{
    FilaEditar.children[0].innerText = nombreusuario.value;
    FilaEditar.children[1].innerText = correo.value;
    FilaEditar.children[2].innerText = peliculas.value;
    FilaEditar.children[3].children[0].setAttribute("src", peliimagen.src);
    FilaEditar.children[4].innerText = numboletos.value;
    FilaEditar.children[5].innerText = parseInt(parseInt(numboletos.value) * 50);
    BotonGuardarEdicion.style.display = "none";
    BotonGuardar.style.display = "Block";
    BotonLimpiar.style.display = "Block";
    nombreusuario.value = "";
    correo.value = "";
    peliculas.value = "";
    peliimagen.src = `images/default.png`;
    numboletos.value = "";
})

// // Limpiar los campos
function clearinputs() {
    document.getElementById("username").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("peliculas").value = "";
    document.getElementById("peliposter").src = "images/default.png";
    document.getElementById("boletos").value = "";
}