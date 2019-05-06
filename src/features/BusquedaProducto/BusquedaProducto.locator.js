
config = {
    locator: {
        fieldBuscarProducto:{id:"CampoBuscadorProductos"},
        clickIngresaFacebook:{id:"btnLoginFB"},
        clickOlvidasteContrasena: {id:"loginanterior"},
        selectResultadoBusqueda: {id:  'ResultadoBuscador'},
        selectResultadoBusquedaItem: (row) => { return `//*[@id="ResultadoBuscador"]/div[${row}]` },
        botonAgregarItem: {class: 'resultado_busqueda_btn_agregar_wrapper pl-0 pr-0 text-center'}
    }
  }
  
  module.exports.config=config;
  module.exports.locator=config.locator;
  