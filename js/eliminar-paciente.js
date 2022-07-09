//esto trae los pacientes nativos alcargar html no los q agregue nuevos
var pacientes = document.querySelectorAll(".paciente"); //capturo todos los pacientes de la clase paciente...
//console.log(pacientes);
/*
MUY IMPORTANTE, CON ESTE EVENTO SOLO BORRA LO QUE TRAE LA TABLA NO LO QUE AGREGAMOS NUEVO A LA MISMA....
//recorremos pacientes
pacientes.forEach(function(paciente){
 //en cada paciente adiciono un eschuchador de evento...
 paciente.addEventListener("dblclick",function(){  //escuche doble clic dentro de la tabla...
     console.log("DOBLE CLICK");
     //eliminame donde capture el evento
     this.remove();
    });

});*/ 

var tabla = document.querySelector("#tabla-pacientes");
console.log(tabla);

//escucho evento tabla
tabla.addEventListener("dblclick",function(event){
  // console.log("Hicieron CLICK");
  //el uso de this hace referencia a la var tabla en este caso...
  //event.target hace referencia al lugar donde estoy haciendo el click
  //console.log(event.target); // clic dentro de la tabla, muestra a lo que le estamos haciendo click...
  //console.log(this);  //clic dentro de la tabla, muestra toda la tabla  
 // console.log(event.target.parentNode);//muestra una jerarquia mas de donde hago clic.
  //osea clic en td me muestra toda la fila...
  //event.target.remove(); // borra solo lo te toca, minimo objeto aca seria cada td ...
   
  //agregamos la clase que cree opacidad en css, al hacer doble clic se oculta...
  event.target.parentNode.classList.add("fadeOut");

  
  //se ejecuta mediosegundo despues. Osea primero se oculta y despues se borra...
 setTimeout(function(){
   //Para borrar toda la fila que seria el padre o una jerarquia mas q el td donde hago clic
  event.target.parentNode.remove();
 },400);

});