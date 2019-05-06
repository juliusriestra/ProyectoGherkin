const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const utils= require('./../../utils/utils');
const config= require('./BusquedaProducto.locator')
let locator=config.locator; 

module.exports = {

    Constructor(){
        I.amOnPage('/');
        //this.locator=config.locator; 
        //this.cfg=configJson; 
      },
   
   
    BuscarProducto(Producto){     
        I.wait(1);  
        I.retry(wait).fillField(locator.fieldBuscarProducto, Producto);
        I.wait(2);
        I.waitForElement(locator.selectResultadoBusqueda)      
        I.retry(wait).dontSee('Ups… no tenemos ofertas con este nombre.'); 
        //I.retry(wait).click(locator.selectResultadoBusquedaItem(3)); 
    
    },

    ValidarBotonAgregalo(){
       // I.wait(2)
        I.scrollPageToBottom();
        I.retry(wait).seeElement(locator.botonAgregarItem);
        locate('boton_Agregalo_home text-center text-uppercase d-block agregarProductoBuscador').withAttr({ placeholder: 'Type in name' });
        //I.see('Agrégalo'); 
    }


}