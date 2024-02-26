//<<<<------------Funcion para detectar texto con acento y mayusculas---------------->>>>
        function detectarMayusculasConAcentos() {
           var textarea = document.getElementById('texto');
                //Condiciona si el texto tiene mayuscula o acento
                if (/[A-Záéíóúü]/.test(textarea.value)) {

            //<<------Si es asi presenta un mensaje y se reinicia el sistema------>>
                    alert('Se ha detectado caracteres con acentos.');
                    window.location.reload();
                    textarea.focus();
           }

           else{

            console.log('texto correcto');

           }
        }
        
//<<<<--------------FIN FUNCION DETECTAR MAYUSCULAS------------------>>>>


        
//<<<<-------------funcion al pulsar boton y encriptar texto----------------->>>>
       
function btnEncriptar(){

        var textoTextarea = document.getElementById('texto').value;
     
    //<<<-1-- Condicion para verificar que el texto no este vacio---->>>    
        if(textoTextarea === ""){

            alert('Por favor ingrese texto antes de encriptar');
            return;
        }
    //<<<-2-- Llama la funcion de detectar texto mayuscula----->>>>>>>    
        if (detectarMayusculasConAcentos(textoTextarea) == true) {

            alert('Se ha detectado caracteres en mayúsculas o acentos.');
            window.location.reload();   

        } 

        else {

            console.log('No se ha detectado texto en mayúsculas con acentos.');
        }    

        document.getElementById('parrafo').innerText = 'El texto encriptado es ';

        var image = document.getElementById('img-titulo');
    //<<-4-- Desactiva la imagen si el texto es correcto ----->>>>    
        image.style.display = "none";
        
//<<<<--------------- Llama a la función cuando se hace clic en un botón de encriptación ------------>>>>>>>
            
            encriptar(); 

    }


//<<<<---------------------------- Funcion que encripta el texto ---------------------------------->>>>>>
function encriptar(){

    //<<--1--Se encripta el texto---->>>>    
        let texto = document.getElementById("texto").value;
        let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    //<<--2---El texto se transfiere al textarea desencriptar----->>>>>        
        document.getElementById("texto2").value = textoCifrado;

    //<<--3----.........Fin encriptar texto.......-------->>>>>>
    


    // Obtener referencia a los botones
     const botonEncriptar = document.getElementById('btn-Encriptar');
     const botonCopiar = document.getElementById('btn-copiar');

    // Agregar evento al botón "Encriptar"
     
         botonCopiar.style.display = 'block'; // Mostrar el botón copiar
         botonEncriptar.style.display = 'inline-block'; // Ocultar el botón "Encriptar"
     
    // Agregar evento al botón "Copiar"
     
         botonCopiar.style.display = 'block'; // Ocultar el botón "Copiar"
         botonEncriptar.style.display = 'inline-block'; // Mostrar el botón "Encriptar"

    //----.............FIN EVENTO DE BOTONES AL PRECIONAR ENCRIPTAR...........------------>>>>>>
    





    //----.............EVENTO PARA ADAPTAR FORMATO A DIFERENTE PANTALLAS..........-------->>>>>> 

                        //Referencia al tamaño del textarea desencriptar                       
                        var cambiarAltura = document.getElementById('texto2');

                        //Referencia al tamaño del boton copiar cuando la tablet esta de lado
                        var botonCopia = document.getElementById('btn-copiar');

                        //Referencia cuando la pantalla es de telefonos
                        let pantallaPequeña = window.matchMedia("(max-width:768px)");

                        //Referencia cuando la pantalla es de tablet
                        let pantallaTablet = window.matchMedia("(min-width:769px) and (max-width:1024px)");

                        //Referencia cuando la pantalla es de tablet horizontal
                        let pantallaTabletLado = window.matchMedia
                        ("(min-device-width:768px) and (max-device-width:1024px) and (orientation: landscape)");

                        //Condicion cuando la pantalla es celular vertical
                        if (pantallaPequeña.matches) {
                            cambiarAltura.style.height = "95px";
                            cambiarAltura.style.width = "94%"
                            botonCopia.style.padding = "20px 123px"

                        //Condicion cuando la pantalla es tablet vertical
                        }if (pantallaTablet.matches) {
                            cambiarAltura.style.height = "150px";

                        }

                        //Condicion cuando la pantalla de tablet horizontal
                        if (pantallaTabletLado.matches) {
                            cambiarAltura.style.height = "352px";
                            botonCopia.style.padding = "20px 110px";
                        }

                        //Condicion cuando la pantalla es de un monitor
                         else{
                        cambiarAltura.style.height = "416px";
                    }
}
//<<<<<<<<<<---------------------FIN FUNCION ENCRIPTAR----------------------->>>>>>>>>>>>>>>>>>>>>>>>>                     




//<<<<<<<<<<<<<------------------FUNCION DESENCRIPTAR---------------------------->>>>>>>>>>>>>>>>>>>>>

function desencriptar(){
var textoTextarea = document.getElementById('texto').value;
     
    //CONDICION SI EL TEXTO ESTA VACIO
    if(textoTextarea === ""){
        alert('Por favor ingrese texto antes de desencriptar');
        return;
    }

                //<<<<<<-----Desencriptar texto-------->>>>>>>>>>>>>>>>>>>        
                        let texto = document.getElementById("texto").value;
                        let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
                //<<<<<<------Fin desencriptar texto------->>>>>>>>>>>>>>>
                
                        //muestra el texto desencriptado        
                        document.getElementById("texto2").value = textoCifrado;

                        //Muestra parrado que dice texto decifrado
                        document.getElementById("parrafo").innerHTML = 'Este es el texto decifrado ';

                        //Desactiva la imagen para mostrar el texto
                        var image = document.getElementById('img-titulo');
                        image.style.display = "none";


                //----.............EVENTO PARA ADAPTAR FORMATO A DIFERENTE PANTALLAS..........-------->>>>>> 
                        //Referencia al tamaño textarea desencriptar
                        var cambiarAltura = document.getElementById('texto2');

                        //Referencial cuando la pantalla es telefono vertical
                        let pantallaPequeña = window.matchMedia("(max-width:768px)");

                        //Referencia cuando la pantalla es tablet vertical
                        let pantallaTablet = window.matchMedia("(min-width:769px) and (max-width:1024px)");

                        //Referencia cuando la pantalla es tablet horizontal
                        let pantallaTabletLado = window.matchMedia("(min-device-width:768px) and (max-device-width:1024px) and (orientation: landscape)");


                //<<<<CONDICION CUANDO LA PANTALLA ES DE TELEFONO VERTICAL>>>>>>>>>        
                        if (pantallaPequeña.matches) {
                            cambiarAltura.style.height = "95px";
                        }

                //<<<<CONDICION CUANDO LA PANTALLA ES DE TABLET VERICAL>>>>>>>>>        
                        if (pantallaTablet.matches) {
                            cambiarAltura.style.height = "150px";
                        }

                //<<<<CONDICION CUANDO LA PANTALLA ES DE TABLET HORIZONTAL>>>>>>        
                        if (pantallaTabletLado.matches){
                            cambiarAltura.style.height = "352px";
                        }

                //CONDICION CUANDO LA PANTALLA ES UN MONITOR        
                         else{
                        cambiarAltura.style.height = "416px";
                    }
                

}
//-------------Llamar Funcion boton desencriptar-------------->>>>>>>>
                    function btnDesencriptar(){
                       
                        desencriptar();
                    }
//-------------Fin FUNCION BOTON DESENCRIPTAR---------------->>>>>>>>>>                    





//<<<<<<--------------------------FUNCION COPIAR TEXTO---------------------------->>>>>>>> 
function copiarTexto() {
    var texto = document.getElementById('texto');
    var textarea = document.getElementById('texto2');
  
    // Crear un elemento temporal de tipo input
    var inputTemp = document.createElement("input");
    
    // Asignar el valor del textarea al input temporal
    inputTemp.value = textarea.value;
    
    // Agregar el input temporal al DOM
    document.body.appendChild(inputTemp);
    
    // Seleccionar el texto dentro del input temporal
    inputTemp.select();
    
    // Ejecutar el comando de copiar
    document.execCommand("copy");
    
    // Eliminar el input temporal del DOM
    document.body.removeChild(inputTemp);
    
    alert("Texto copiado al portapapeles");
        const botonCopiar = document.getElementById('btn-copiar');

    // Ocultar el botón "Copiar"
     botonCopiar.style.display = 'none'; 

     

    //Limpiar los textareas 
    clearInput();


    //Posicionar la entrada de texto en ingrese texto aqui
    texto.focus();
}

//-------------Funcion limpiar texto de los textarea--------------->>>>>>>>>>>>>>
function clearInput() {
    document.getElementById('texto2').value = "";
    document.getElementById('texto').value = "";
}
