// Lista de productos reales con precios (unidad, 10 uni, 20 uni)
const productos = [
    { nombre: "Lisa Blanca 10KG", unidad: 13500, diez: 12500, veinte: 12000 },
    { nombre: "Blanca con Chamote 5KG", unidad: 10000, diez: 9500, veinte: 8900 },
    { nombre: "Gres Tostado Claro 5KG", unidad: 10000, diez: 9500, veinte: 8900 },
    { nombre: "Gres Tostado Oscuro 5KG", unidad: 10000, diez: 9500, veinte: 8900 },
    { nombre: "Gres Blanco 5KG", unidad: 10000, diez: 9500, veinte: 8900 },
    { nombre: "Roja Lisa 5KG", unidad: 10000, diez: 9500, veinte: 8900 },
    { nombre: "Roja con Chamote 5KG", unidad: 10000, diez: 9500, veinte: 8900 },
    { nombre: "Fuego Directo 5KG", unidad: 10000, diez: 9500, veinte: 8900 },
    { nombre: "Raku 5KG", unidad: 11000, diez: 10000, veinte: 9200 },
    { nombre: "Barbotina con bidón", unidad: 12000, diez: 10000, veinte: null },
    { nombre: "Barbotina sin bidón con canje", unidad: 9500, diez: 8500, veinte: null },
    { nombre: "Barbotina para gres (bidón 9kg)", unidad: 13500, diez: 12000, veinte: null }
  ];
  
  // Mostrar menú
  function mostrarMenu() {
    let mensaje = "Seleccioná un producto:\n";
    productos.forEach((p, i) => {
      mensaje += `${i + 1}. ${p.nombre}\n`;
    });
    return parseInt(prompt(mensaje)) - 1;
  }
  
  // Calcular precio
  function calcularPrecio(prod, cantidad) {
    let precioUnidad = productos[prod].unidad;
    let precio10 = productos[prod].diez;
    let precio20 = productos[prod].veinte;
  
    let precioAplicado;
  
    if (cantidad >= 20 && precio20) {
      precioAplicado = precio20;
    } else if (cantidad >= 10) {
      precioAplicado = precio10;
    } else {
      precioAplicado = precioUnidad;
    }
  
    return precioAplicado * cantidad;
  }
 
  function iniciarSimulador() {
    alert("Bienvenido/a al Simulador de Compra de Arcillas Argentinas");
  
    let productoSeleccionado = mostrarMenu();
  
    if (productoSeleccionado >= 0 && productoSeleccionado < productos.length) {
      let cantidad = parseInt(prompt(`¿Cuántas unidades de "${productos[productoSeleccionado].nombre}" querés comprar?`));
  
      if (!isNaN(cantidad) && cantidad > 0) {
        let total = calcularPrecio(productoSeleccionado, cantidad);
        alert(`Elegiste: ${productos[productoSeleccionado].nombre}\nCantidad: ${cantidad} unidades\nPrecio final: $${total}`);
        console.log(`Producto: ${productos[productoSeleccionado].nombre}`);
        console.log(`Cantidad: ${cantidad}`);
        console.log(`Precio total: $${total}`);
      } else {
        alert("Cantidad no válida. Por favor intentá de nuevo.");
      }
    } else {
      alert("Opción inválida. Por favor intentá de nuevo.");
    }
  }
  
  // Iniciar el simulador
  iniciarSimulador();
  