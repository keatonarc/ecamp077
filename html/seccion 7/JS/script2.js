// alert("Bienvenidos a Supermercados Araucania");
document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML = "<h1>Bienvenidos a Supermercados Araucania</h1>";
});

alert("Elige una opcion: 1. Subtotal, 2. Total c/IVA, 3. Descuento");
opcion=parseInt(prompt("Escribe el numero de opcion"));
var precioProd1;
var cantProd1
var preciProd2;
var cantProd2;
var desc;
iva = 1.19;
precioProd1 = parseInt(prompt("Ingresa el valor del primer producto"));
cantProd1 = parseInt(prompt("Ingresa la cantidad del primer producto"));
precioProd2 = parseInt(prompt("Ingresa el valor del segundo producto"));
cantProd2 = parseInt(prompt("Ingresa la cantidad del segundo producto"));
switch(opcion) {
    case 1:
        subTotal = subTotal(precioProd1,cantProd1,precioProd2,cantProd2);
        alert("El SubTotal de su compra es: " + subTotal);
        break;
    case 2:
        total = total(precioProd1,cantProd1,precioProd2,cantProd2);
        alert("El Total de su Compra con IVA es: " + total);
        break;
    case 3:
        desc = parseInt(prompt("Ingresa el descuento a aplicar"));
        descuento = descuento(precioProd1,cantProd1,precioProd2,cantProd2,desc);
        alert("El Total de su compra con Descuento: " + descuento);
        break;
}
alert("Gracias por su compra")


function subTotal(precioProd1,cantProd1,precioProd2,cantProd2) {
    if ((precioProd1 == 0 || precioProd2 == 0) && (cantProd1 == 0 || cantProd2 == 0)) {
        alert("Debe ingresar una cantidad y/o precio de producto distinta de cero")
    }else{
    resultado = (parseInt(precioProd1) * parseInt(cantProd1)) + (parseInt(precioProd2) * parseInt(cantProd2));
    return resultado;
    }
}

function total(precioProd1,cantProd1,precioProd2,cantProd2) {
    if ((precioProd1 == 0 || precioProd2 == 0) && (cantProd1 == 0 || cantProd2 == 0)) {
        alert("Debe ingresar una cantidad y/o precio de producto distinta de cero")
    }else{
    resultado = (parseInt(precioProd1) * parseInt(cantProd1) + parseInt(precioProd2) * parseInt(cantProd2)) * iva;
    return resultado;
    }
}

function descuento (precioProd1,cantProd1,precioProd2,cantProd2,desc) {
    if ((precioProd1 == 0 || precioProd2 == 0) && (cantProd1 == 0 || cantProd2 == 0) && desc == 0) {
        alert("Debe ingresar una cantidad, precio o descuento distinto de cero")
    }else{
    resultado = ((parseInt(precioProd1) * parseInt(cantProd1) + parseInt(precioProd2) * parseInt(cantProd2)) - ((parseInt(precioProd1) * parseInt(cantProd1) + parseInt(precioProd2) * parseInt(cantProd2)) * (desc/100))) * iva;
    return resultado;
    }
}