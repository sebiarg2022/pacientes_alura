var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status == 200){
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta);
            pacientes.forEach(function(paciente){
                adicionarPacienteEnLaTabla(paciente);
            });
        }else{
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });  
    xhr.send();
});

/*//ordenar codigo Alt+Shift+F
var botonBuscar = document.querySelector("#buscar-paciente");

//capturo el evento clic
botonBuscar.addEventListener("click", function () {
  //console.log("clic Buscar");
  //traemos datos del api q tiene los datos .json con ajax...
  var xhr = new XMLHttpRequest();
  //abro la requesicion con el objeto creado xhr
  xhr.open(
    "GET",
    "https://alura-es-cursos.github.io/api-pacientes/pacientes.json"
  );


  //creamos un evento para el objeto load cargar... respuesta q trae
  xhr.addEventListener("load",function() {
    //voy a agregar si y solo si conexion es OK =200
    //VALIDACION
    var errorAjax = document.querySelector("#error-ajax"); //guardo el span a habilitar cuando de algun error
    if (xhr.status == 200) {

      //invisible el span xq aca no hay error
      errorAjax.classList.add("invisible");
      //console.log(xhr.responseText);
      //responseext me trae los datos de esta requesicion osea del jason, la url cargada
      var respuesta = xhr.responseText;
      //para ver q tipo de variable es la q estoy trayendo
      // console.log(typeof respuesta); tipo string es
      // console.log(respuesta);

      //convierto el json q traigo
      var pacientes = JSON.parse(respuesta);
      //console.log(pacientes); devuelve un array
      // console.log(typeof pacientes); ahora me dice q es un objeto

      //itero entre todos esos pacientes...
      pacientes.forEach(function (paciente) {
        //llamamos a la fun creada en form.js
        adicionarPacienteEnLaTabla(paciente);
        console.log(paciente);
      });
    }
    else{ //si es otro error q nos imprima la respuesta


       //creamos un span para mostrar error al usuario
       //remove invisible el span para q se vea el error
       errorAjax.classList.remove("invisible");

      console.log(xhr.status);
      console.log(xhr.responseText);

     


    }
  });
    //luego envio
    xhr.send();
});
*/
