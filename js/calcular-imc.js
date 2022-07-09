//traigo todos los pacientes ... un array
var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes); // todo el objeto pacientes completo


for(var i=0;i<pacientes.length;i++)
{
   //guarda cada paciente q recorre y calcula en el array pacientes...
   var paciente = pacientes[i];
   
   //Acceso al objeto peso no del document sino del paciente...
   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;


   var tdIMC = paciente.querySelector(".info-imc");

   //2 var booleanas para crear otra condicion validar peso y altura
  // pesoEsValido=true;
  // alturaEsValida=true;

  pesoEsValido = validarPeso(peso); //true si es correcto o false la funcion q cree
  alturaEsValida = validarAltura(altura);
   //validando peso y altura
  // if((peso<0) ||(peso>1000)){
      if(!pesoEsValido){ //niego pesoEsValido porq si es true es q es correcto...
         console.log("Peso Incorrecto");
         tdIMC.textContent = "PESO incorrecto"; 
        // paciente.style.color ="red";
        //paciente.style.backgroundColor ="lightcoral";
        paciente.classList.add("paciente-incorrecto"); //clase creada en CSS
         pesoEsValido=false;
   }
   if(!alturaEsValida){
         console.log("Altura Incorrecto");
         tdIMC.textContent = "ALTURA incorrecto"; 
         //paciente.style.backgroundColor ="lightcoral";
         paciente.classList.add("paciente-incorrecto");  //clase creada en CSS
         alturaEsValida=false;
   }

   //las 2 deben cuplirse...
   if(pesoEsValido && alturaEsValida)
   {
      //si las 2 se cumplen hace el calculo IMC
      var imc = peso / (altura*altura);
      tdIMC.textContent = calcularIMC(peso,altura);
   }
}
   //encapsulo armo la funcion para poder ser reutilizada
function calcularIMC(peso,altura){
      var imc = peso / (altura*altura);
      return imc.toFixed(2); //coloca solo 2 decimales... al resultado

}

function validarPeso(peso){
      if(peso>=0 && peso<1000){
            return true; //retorna verdadero si es valido
      }
      else{
            return false;
      }
}

function validarAltura(altura){
      if(altura>=0 && altura<3.00){
            return true; //retorna verdadero si es valido
      }
      else{
            return false;
      }
}