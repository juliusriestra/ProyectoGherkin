Feature: Buscar productos por nombre en la barra del buscador
  Como una consultora suscrita
  Yo quiero buscar productos desde cualquier landing en Somos Belcorp
  para poder agregarlos a mi pedido
   
@BusquedaProducto @FlujoBasico
Scenario Outline:  Buscar productos por nombre en la barra del buscador
    Given Ingreso el "<Pais>"  mi "<Usuario>" y mi "<Password>"
    When  Ingreso la palabra "<Producto>" en el buscador
    Then  mostrara una lista de productos con el botón "Agregar" activado

Examples:
    |Pais   | Usuario            | Password   | Producto |
    |PE     | 039926806    | 039926806    | labial   |
    |PE     | 039926806    | 039926806    | asdasdasdsd   |

