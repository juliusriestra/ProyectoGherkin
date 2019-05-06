Feature: Realizar el ingreso al portal web Somos Belcorp
  Como una consultora suscrita
  Yo quiero ingresar al portal Somos Belcorp
  para ver mi estado de cuenta, mis ganancias e ingresar mi pedido
   
@Login @LoginExitoso
Scenario Outline:  Login exitoso
    Given Ingreso el "<Pais>"  mi "<Usuario>" y mi "<Password>"
    When  click en el boton "Ingresa a tu cuenta" 
    Then  puedo ver mi estado de cuenta, mis ganancias e ingresar mi pedido

Examples:
    |Pais   | Usuario            | Password  | 
    |PE     | 039926806          | 039926806 |
    |CO     | 0020647614         | 0020647614|
  
#0021515730 pass;0021515730
#0020750091  pass:0020750091
#0020647614  pass:0020647614
@login @LoginFallido
Scenario Outline:  Login Fallido
    Given Ingreso el "<Pais>"  mi "<Usuario>" y mi "<Password>"
    When  click en el boton "Ingresa a tu cuenta" 
    Then  me debe mostrar el "<Mensaje>" en el "<TipoForm>"

Examples:
    |Pais   | Usuario            | Password   |  Mensaje                                      | TipoForm |
    |PE     |                    | 039926806  | Debe ingresar el Usuario.                     | PopUp|
    |PE     | 039926806          |            | Debe ingresar la Clave Secreta.               | PopUp |
    |CO     | 0021594477         | 0021594477 | Mensaje: Su cuenta fue bloqueada, por superar la cantidad maxima de intento ||
    |CO     | 0020587705         | 0020587705 | Mensaje: No estás autorizada para pasar pedido| |
    |CO     | 0021515730         | 0021515730 | Mensaje: Usuario o Contraseña Incorrectas||
