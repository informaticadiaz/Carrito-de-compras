const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach((producto, index) => {
    const bicicletaHtml = `
  <div class="tarjeta-producto">
    <img src="./img/productos/${producto.id}.jpg" alt="Bicicleta 1" class="">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al Pedido</button>
  </div>`
    contenedorTarjetas.insertAdjacentHTML("beforeend",bicicletaHtml);
    //nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
    document.getElementsByClassName("tarjeta-producto")[index].addEventListener("click",() => agregarAlCarrito(producto))  });
  
}
crearTarjetasProductosInicio(bicicletas);