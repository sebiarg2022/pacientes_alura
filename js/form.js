var botonAdicionar = document.querySelector("#adicionar-paciente");

//uso funcion anonima directamente desde evento para reducir codigo solo se usa aca
botonAdicionar.addEventListener('click',function(evento){
      //Para evitar el evento padron del btn y que no se borre todo...
      event.preventDefault();
       
      //creamos var de id form
      var form = document.querySelector("#form-adicionar");
      //capturamos los datos del formulario con una funcion
      //creo objeto paciente...
      var paciente = capturarDatosPacientes(form);
    
     // var tabla =document.querySelector("#tabla-pacientes");
     // var pacienteTr = construirTr(paciente);
      
      var errores = validarPaciente(paciente);
      //si error es distinto de 0 es que hay error
      if(errores.length > 0){
            //si hay errores, osea el tamaño de mis mjes es mayor a cero
            exhibirMensajesErrores(errores);
            return; //return sale completamente si encontro un error... como un break rompe la fun anonima
      }

      //le designo, adoptar el paciente tr creado recien
     // tabla.appendChild(pacienteTr);

     //usamos la fun para adicionar paciente a la tabla
     adicionarPacienteEnLaTabla(paciente);
     form.reset(); //para vaciar los input al terminar
     
     //para dejar en blanco lista de errores ul
     //traigo la lista
     var mensajesErrores = document.querySelector("#mensajes-errores");
     mensajesErrores.innerHTML ="";
});


//encapsulamos para usarla tmb en ajax
function adicionarPacienteEnLaTabla(paciente){
      var pacienteTr = construirTr(paciente); //creamos la etiqueta tr
      var tabla = document.querySelector("#tabla-pacientes"); //capturamos la tabla
      tabla.appendChild(pacienteTr); //adicionamos esta paciente tr a la tabla

}

function capturarDatosPacientes(form){
       //capturamos los datos del formulario
//creo clase paciente devuelve objeto paciente
   var paciente ={
      nombre : form.nombre.value,
      peso : form.peso.value,
      altura : form.altura.value,
      gordura : form.gordura.value,
      imc: calcularIMC(form.peso.value,form.altura.value)
   }
 return paciente;  

}

function construirTr(paciente){
      var pacienteTr = document.createElement("tr");
      pacienteTr.classList.add("paciente"); //agregamos la class original a cada uno

      //asignamos al tr de los td y la tabla el tr
      pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
      pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
      pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
      pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
      pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));
        
      return pacienteTr;

}

function construirTd(dato,clase){
 var td = document.createElement("td"); //creo objeto td
 td.classList.add(clase); //le agrego la class q estoy recibiendo
 td.textContent = dato;//le asigno el dato q estoy recibiendo
 return td;
}

//validamos clase paciente... retorne un mje
function validarPaciente(paciente){

      var errores = []; //para guardar los errores, creo este array
      
      //si la long de campo nombre es igual a 0
      if(paciente.nombre.length == 0){
            //agregamos con push este error
             errores.push("El campo NOMBRE no puede estar vacio");
       }
       if(paciente.peso.length == 0){
            //agregamos con push este error
             errores.push("El campo PESO no puede estar vacio");
       }
       if(paciente.altura.length == 0){
            //agregamos con push este error
             errores.push("El campo AlTURA no puede estar vacio");
       }
       if(paciente.gordura.length == 0){
            //agregamos con push este error
             errores.push("El campo %GORDURA no puede estar vacio");
       }


      if(!validarPeso(paciente.peso)){
           //agregamos con push este error
            errores.push("El Peso es INCORRECTO");
      }

      if(!validarAltura(paciente.altura)){
            //agregamos con push este error
             errores.push("La Altura es INCORRECTO");
       }   
       
       return errores;
     
}


//mostrar los mjes de error span en el index html
function exhibirMensajesErrores(errores){
      var ul = document.querySelector("#mensajes-errores");
       ul.innerHTML = "";
        //para cada item de array errores
        //creo una fun anonima va a iterar cada error q hay en errores
        errores.forEach(function(error){
             //creamos var li en html
            var li =document.createElement("li");
            //le agregamos a cada li el error del array...
            li.textContent = error;
            //le asigno al padre ul cada li creado
            ul.appendChild(li);

        });

        

}