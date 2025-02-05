
// Animacion boton burbujas 

const animateButton = function (e) {
    e.preventDefault;
    // reset animation
    e.target.classList.remove("animate");
  
    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };
  
  const bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }



// Dark mode 

document.addEventListener('DOMContentLoaded',function() {


  darkMode();
});

function darkMode(){

  const miStorage = window.localStorage; // Objeto para controlar el Local-Storage de Windows
  const PrefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)'); // DEVUELVE VERDADERO SI EL VALOR POR DEFECTO DEL SISTEMA ES DARK
  
  if (miStorage.getItem('dark')==null) { // SI NO  EXISTE ALGUNA VARIABLE GUARDADA EN STORAGE CON LA CLAVE OSCURO
      if (PrefiereDarkMode.matches) { // COMO EL VALOR POR DEFECTO DEL SISTEMA ES OSCURO LE ASIGNAMOS ESE VALOR
          miStorage.setItem('dark',1); // CREAMOS ESA VARIABLE EN STORAGE CON VALOR 1=OSCURO
          document.body.classList.add('dark-mode');
      }else{ // POR DEFECTO EL SSITEMA ESTA EN CLARO , DEVUELVE FALSO
          miStorage.setItem('dark',0); // CREAMOS ESA VARIABLE EN STORAGE CON VALOR 0=CLARO
          document.body.classList.remove('dark-mode');
      }
  }
  else{ // SI YA EXISTE ALGUNA VARIABLE ALMACENADA CON ESE NOMBRE Y UN VALOR 
      if (miStorage.getItem('dark')==1) { // VERIFICAMOS SI EL VALOR ES 1 =OSCURO
          document.body.classList.add('dark-mode'); // PONEMOS MODO OSCURO
      }else{                                     // SI EL VALOR ES BLANCO
          document.body.classList.remove('dark-mode'); // PONENMOS MODO CLARO
      }
  }

  PrefiereDarkMode.addEventListener('change',function(){ // FUNCION SI EXISTE CAMBIO EN PREFERENCIA DE TEMA POR EL USARIO
      if (PrefiereDarkMode.matches) { // EL TEMA SIGUE SIENDO OSCURO
          miStorage.setItem('dark',1); // NUEVO VALOR PARA OSCURO=1
          document.body.classList.add('dark-mode');
      }else{ // TEMA BLANCO
          miStorage.setItem('dark',0); // NUEVO VALOR PARA OSCURO=0
          document.body.classList.remove('dark-mode');
      }
  })

  const botonDarkMode=document.querySelector('.dark-mode-boton'); // EVENTO PARA EL BOTON
  botonDarkMode.addEventListener('click',function(){ // AÑÁDIMOS EVENTO
      if (document.body.classList.contains('dark-mode')) { // SI CAMBIAMOS A MODO CLARO
          miStorage.setItem('dark',0); // NUEVO VALOR PARA STORAGE OSCURO=0 
          document.body.classList.remove('dark-mode');
      }else{ // SI CAMBIAMOS A MODO OSCURO
          miStorage.setItem('dark',1); // NUEVO VALOR PARA STORAGE OSCURO=1
          document.body.classList.add('dark-mode');
      }
  })
}

function eventListeners () {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
   const navegacion = document.querySelector('.navegacion');

   navegacion.classList.toggle('mostrar')
}



// Open and Close Navbar Menu

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click",() =>{
  document.body.classList.toggle("open");
})



