const I = actor();
const utils= require('./../../utils/utils');
let wait = { retries: 5, minTimeout: 2000 };
const config= require('./Login.locator')
let locator=config.locator; 

/*Inicio de Sesion*/
module.exports={
  
Constructor(){
    I.retry(wait).amOnPage('/');

  },

IngresarDatos(Pais, Usuario, Password) {
    I.retry(wait).say('Deseo loguearme a Somos Belcorp');
  },

Ingresar(){

   
  },

InicioSesionAdministrador(Pais, Usuario, Password) {
   
},

Validaciones(){
 
},

/*Cierre de Sesion */
CerrarSesion(){
    I.retry(wait).click(locator.clickLogout);
},

ValidarMensaje(Mensaje, Form='main'){

}




}

