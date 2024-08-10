//Llamar a la función para mostrar el menú
mostrarMenu(); 


function mostrarMenu() {
    let opcion = 0;

    while (opcion !== 5) {
        // Mostrar el menú y pedir la opción al usuario
        opcion = parseInt(prompt( 
            "Seleccione una opción:\n" + 
            "1. Contacto con Profesor\n" +
            "2. Horarios de Atencion\n" +
            "3. Conoce Nuestros Expertos\n" +
            "4. Sobre Nostros\n" +
            "5. Salir"
        ));
        // Ver opciones seleccionadas
        switch(opcion) {
            case 1:
                alert("Un Profesor se Contactara Con Usted");
            break;
            case 2:
                console.log("Seleccionó la Opción 2");
                alert("Nuestros Horarios son de 09:00 A.M - 13:00 P.M");
            break;    
            case 3:
                console.log("Seleccionó la Opción 3");
                alert("Nuestros profesores son los SRES;\n-Roberto Hernandez \n-Matias Valladares");
            break;
            case 4:
                console.log("Seleccionó la Opción 4");
                alert("Somos un curso dedicado a Full Stack Phyton");
                break;
            case 5:
                console.log("Saliendo del menú...");
                alert("Saliendo del menú...");
                break;
            default:
                console.log("Opción no válida. Por favor seleccione una opción del 1 al 5.");
                alert("Opción no válida. Por favor seleccione una opción del 1 al 5.");
            break;
            }
        }
}