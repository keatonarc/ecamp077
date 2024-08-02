
var listaUsuarios = [
    {id:1, nombre: 'Matias', password: '123', saldo: 1000000},
    {id:2,  nombre: 'Juan',   password: '456', saldo: 600000},
    {id:3,  nombre: 'Maria', password: 'abc', saldo: 850000}
]

validarUsuario();

function bienvenido(nombre,indice){
    alert('Bienvenid@ a Banca en Linea '+nombre);
    mostrarMenu(indice);
}

function mostrarMenu(indice){

    let opcion = prompt("Seleccione que desea hacer: \n1.-Ver Saldo \n2.-Realizar Giro \n3.-Realizar Deposito\n4.-Salir");
    switch (opcion){
        case '1':
            //Ver Saldo
            alert("Su saldo actual es de $ "+ listaUsuarios[indice].saldo);
            mostrarMenu(indice);
        break;
        case '2':
            //Realizar Giro
            let giro = prompt("Su saldo actual es de  $ "+ listaUsuarios[indice].saldo+" \n Ingrese el monto que desea girar");

            if(parseInt(giro) <= 0){
                alert("ERROR: No puede realizar un giro a un monto menor o igual a $ 0");
                mostrarMenu(indice);
            }else{
                if(parseInt(listaUsuarios[indice].saldo) < parseInt(giro)){
                    alert("ERROR: No puede realizar un giro por un monto mayor a su saldo");
                    mostrarMenu(indice);
                }else{
                    let nuevoSaldo = parseInt(listaUsuarios[indice].saldo) - parseInt(giro);
                    listaUsuarios[indice].saldo = nuevoSaldo;
                    alert("Giro realizado su nuevo saldo es de $ "+ nuevoSaldo);
                    mostrarMenu(indice);
                }
            }
            
        break;
        case '3':
             //Realizar Deposito
            let deposito = prompt("Su saldo actual es de $ "+ listaUsuarios[indice].saldo+" \n Ingrese el monto que desea depositar");
            if(parseInt(deposito) <= 0){
                alert("ERROR: No puede realizar un deposito por un monto de $ 0 o menor a $ 0");
                mostrarMenu(indice);
            }else{
                let nuevoMonto = parseInt(listaUsuarios[indice].saldo) + parseInt(deposito);
                listaUsuarios[indice].saldo = nuevoMonto;
                alert("Deposito realizado su nuevo saldo es de $ "+ nuevoMonto);
                mostrarMenu(indice);
            }
        break;
        case '4':
             //Salir
            return;
        break;
        default:
            alert("ERROR: Por favor ingrese una opción valida");
            mostrarMenu(indice);
        break;
    }
}

function validarUsuario(){

    let nombreUsuario = prompt("Usuario:");
    let password      = prompt("Contraseña:");
    let logeado       = false;
    let indice        = null;

    if (nombreUsuario == null || nombreUsuario == "") {
        alert("No ingresaste un Usuario");
    }else if(password == null || password == ""){
        alert("No ingresaste una Contraseña");
    }else{
        for(let x=0; x < listaUsuarios.length; x++){
            if(listaUsuarios[x].nombre == nombreUsuario && listaUsuarios[x].password == password){
                logeado = true;
                indice  = x;
                break;
            }
        }
        if(logeado == true){
            bienvenido(nombreUsuario,indice);
        }else{
            alert("ERROR: El nombre de Usuario no Existe o la Contraseña es incorrecta");
        }
    }
}
