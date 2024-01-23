*Definición de arrays:*

- Crear un array con los nombres de las imágenes llamado options
- Crear otro array llamado slots [0,0,0] que será para poner que opciones hay (puede ser con índices del array opciones o con sus valores).

*Creamos eventos para los botones en la función inicio:*

- ` `**Boton tirar:** va a cambiar los tres slots llama a la funcion tiroTres
- **Botones simples:**  todos harán la misma función pero en una ventana diferente llaman a la función tiroUno.
  - tiroUno recibirá un parámetro k que corresponda al índice del botón escogido.
- ` `**Boton cruz:** Para cerrar el mensaje llama a la función cerrar mensaje

*Creo las funciones para cada evento (newSlot, tiroUno y tiroTres) y funciones que dependan de éstas:*

- función **tiroUno(k):**
  - comprobará el valor de monedas actuales con un if. Si  son superiores a 0 se ejecutará.
    - El audio correspondiente a 1 tiro (definido en el html).
    - Estarà 1 moneda a monedasActuales.
    - Cambiarà la imagen del slot en el que está (k) con una función a parte newSlot(k). k será el índice del slot.
    - Una vez escogida la nueva imagen, se comprobará el resultado comparando con el resto de slots con un función llamada comprobarResultado.

- función **newSlot(k):**
  - esta función escogerá de forma aleatoria una imagen. Creara un numero aleatorio.
    - La imagen no puede ser la misma que había anteriormente en su mismo sitio es decir: El valor random generado para el índice correspondiente del array slots (slots[k]) en el que esta tiene que ser diferente al que había anteriormente (diferente al que sustituirá).
    - Con un do while creará un número aleatorio mientras el número aleatorio generado sea el mismo que había. Cuando sean diferentes añadirá la imagen con índice aleatorio creado al slot que le corresponde, actualizará el array slots con el nuevo valor del índice de la imagen nueva y actualizará las monedasActuales con la función actualizar monedas.

- función **actualizarMonedas(monedasActuales):**
  - actualizará el valor de monedas que se muestra
  - mostrara tantas imagenes de monedas como monedas actuales.

- funcion **tiroTres:**
  - se ejecutará si monedasActuales son superiores a 0. (con un if)
  - mostrara audio correspondiente.
  - restara 1 moneda.
  - hara la funcion newSlot para cada ventana. (con un for).
  - comprobará el resultado con la función comprobarResultado.

- función **comprobarResultado:**
- comprobará los valores del array slots.

Si los 3 valores son iguales:

- ejecutará la función premiRandom.
- actualizará el valor de monedasActuales sumándole el valor random del premio.
- mostrará el mensaje ganador con la función mensajeGanar.

Si los valores no son iguales:

- si las monedas son inferiores o iguales a 0:
  - pondrá el audio de perder.
  - mostrará el mensaje de perder.



Otras funciones necesarias:

- función **monedasIniciales**:
  - genera un numero aleatorio de monedas.
  - si es inferior a 10 crea otro número para que las monedas iniciales estén siempre por encima de 10.
  - se ejecutará en la función inicio para que determine las monedas iniciales.

- ` `función **premiRandom**:
  - genera un número aleatorio entre 1 y 10 y lo guarda en una variable.

- funcion **audio(nom):**
  - recibe un string con el nombre del audio
  - hace play() del audio correspondiente.

- función **cerrarMensaje:**
  - pone el display del velo a none y actualiza monedas.


*Problemáticas encontradas:*

**3 Mensajes de perder:**

- para poder tirar tienes que tener más de 0 monedas si no las tienes sale un aviso de que no tienes monedas
- La función tiroTres es un bucle que ejecuta 3 veces la función newSlot.
- si compruebo el resultado dentro de la función newSlot,  cada vez que le doy a tirOTres y no hay dinero me sale 3 veces el mensaje de que no tienes monedas.
- Solución: ejecutar la función comprobarResultado fuera de la funcion newSlot (en las funciones tiroUno y tiroTres) y fuera del for de la función tiroTres. 

**Mensaje ganar antes de que se actualicen las imágenes y que estén las 3 iguales.**

- cuando salen tres slots iguales y sale el mensaje de ganar. me sale el mensaje antes de que se cambie la ultima imagen y que estén iguales las tres 
- pasaba cuando había un alert antes de que el mensaje ganar se hiciera por html.

**Como hacer que los botones individuales realicen la misma función escribiendo una sola vez el evento onclick.**

*Solución:*

- Haciendo un for donde el valor que del for corresponde al índice de los botones llamados botón en el querySelectorAll.
- La función newSlot recibe el parámetro k. k se usará como índice para determinar la ventana en la que tiene que actualizar la imagen. 
- También servirá para actualizar el array de slots en la posición que toque.
- k lo recibirá de tiroUno y tiroTres
  - tiroUno recibe k del botón, determinado en el for del evento del botón.
  - en tiroTres el newSlot recibirá k a través del for de la propia función.




