numeros ();
function numeros ()
{
    let num1 = parseInt(prompt("Ingrese un numero"));
    let num2 = parseInt(prompt("Ingrese un segundo numero"));
    
    if (isNaN(num1) || isNaN(num2)) {
      alert("debe ingresar números");
      return;
    }
    
    if (num1 > num2) {

        alert(num1+" es mayor que " + num2);
    } else if (num1 == num2) {
        alert("Los números son iguales");
    } else {
        alert(num2+" es mayor que " + num1);
    }
}