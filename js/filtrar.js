var campoFiltro = document.querySelector("#filtrar-tabla"); //capturamos el campo de buscar

//evento para capturar lo ingresado en el input... de buscar
campoFiltro.addEventListener("input",function(){
 // console.log("escribieron en el input");
  //console.log(this.value);  accedemos al value usando this o usando el campofiltro... donde estamos escribiendo
 // console.log(campoFiltro.value);
 
 //variable trae completo todos los pacientes de la clase paciente... los tr completos de la tabla
 var pacientes = document.querySelectorAll(".paciente");

  if(campoFiltro.value.length>0){ //si hay algo dentro de la caja texto... escrita...
      console.log("hay algo escrito");
       //for iteramos x cada elemento de la clase pacientes...
     for(var i=0; i<pacientes.length;i++){

   var paciente = pacientes[i];
   var tdNombre = paciente.querySelector(".info-nombre"); //guardamos tdNombre que sacamos de html clase info-nomrbe
   var nombre = tdNombre.textContent; //accedemos al contenido de ese td...

   var expresion = new RegExp(campoFiltro.value,"i"); //creo expresion regular... el campo donde lo aplico + "i" q es igual mayuscula q minuscula

  //ER .test y dentro con lo q lo va a comparar
  //si la expresion NO esta dentro del nombre volvelo invisible sino remove inivisible
  if(!expresion.test(nombre)){//campoFiltro.value == this.value
   //si nombre es diferente a lo q escribo...
   paciente.classList.add("invisible");
   console.log("oculto");
  }else{ //si es igual q remueva la clase invisible... q se vea
     paciente.classList.remove("invisible");
     console.log("muestro");
  }
}
  }else{  //no hay nada escrito... es 0
   for(var i=0; i<pacientes.length;i++){

      var paciente = pacientes[i];
      paciente.classList.remove("invisible");
   }
  }



});