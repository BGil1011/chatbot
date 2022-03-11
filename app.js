document.addEventListener("DOMContentLoaded",()=>{
    iniciar();   
});

function iniciar(){
    lista();
    //productos();
}

function productos(e) {
    const productos = document.querySelector(".productos");
    e.map(element =>{
        const {id, nombre, precio, imagen} = element;
        const div = document.createElement("DIV");
        const divImagen = document.createElement("IMG");
        const divNombre = document.createElement("P");
        const divPrecio = document.createElement("P");

        divImagen.src = imagen;
        divImagen.classList = "imagen";
        divNombre.textContent = nombre;
        divNombre.classList = "nombre";
        divPrecio.textContent = "$"+precio;
        divPrecio.classList = "precio";
        div.classList = "producto";
        div.id = id;
        div.appendChild(divImagen);
        div.appendChild(divNombre);
        div.appendChild(divPrecio);
        productos.appendChild(div);
        
    });
    
}

async function lista(){
    try {
        const list = await fetch("base.json");
        const ls = await list.json();
        productos(ls);
    } catch (error) {
        console.log(error);   
    }
}

