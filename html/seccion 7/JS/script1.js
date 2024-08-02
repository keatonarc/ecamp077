/* console.log("Hola desde la consola JS");*/
alert("Bienvenido a la calculadora Basica");
console.log("Bienvenido a la calculador Basica");
var a;
var b;
var suma;
// a = 90331;
a =  parseInt(prompt("Ingresa un numero"));
// b = 4233324;
b= parseInt(prompt("Ingresa otro numero"));
total = suma(a,b);
alert("El resultado de la suma es " + total);
total2= resta(a,b);
alert("El resultado de la resta es " + total2);
total3= multiplicacion(a,b);
alert("El resultado de la multiplicacion es: " + total3);
total4= division(a,b);
alert("El resultado de la division es " + total4);
if (total == 0 ){
    alert("Operacion Vacia")
}

alert ("Gracias por hacer uso de la calculadora 0077")

function suma(a,b){
    resultado= a + b;
    return resultado;
}
function resta(a,b){
    resultado = a - b;
    return resultado;
}
function multiplicacion(a,b){
    resultado = a * b;
    return resultado;
}
function division(a,b){
    if(a>b){
    resultado = a / b;
    }else{
        resultado=0;
    }
    return resultado;
}
