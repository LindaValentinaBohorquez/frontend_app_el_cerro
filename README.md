# Frontend App El Cerro

Este repositorio contiene el código fuente para la aplicación frontend de la página web dedicada al supermercado "El Cerro". La aplicación está construida en React y utiliza una serie de paquetes y bibliotecas. A continuación, se detallan las instrucciones para la instalación y ejecución.

## Dependencias

Asegúrate de tener instaladas las siguientes dependencias antes de ejecutar la aplicación:

- **@fortawesome/fontawesome-free**: Conjunto de iconos y fuentes.
- **@testing-library/jest-dom**: Utilizado para pruebas en Jest.
- **@testing-library/react**: Utilizado para pruebas en React.
- **@testing-library/user-event**: Librería para simular eventos del usuario en pruebas.
- **axios**: Cliente HTTP para realizar peticiones a un servidor.
- **bootstrap**: Framework de diseño y estilos.
- **react**: Biblioteca principal para construir interfaces de usuario.
- **react-dom**: Renderizador de React para la web.
- **react-router-dom**: Enrutador para aplicaciones React.
- **react-scripts**: Scripts y configuraciones para proyectos React.
- **react-spring**: Biblioteca para animaciones en React.
- **sonner**: Dependencia específica no identificada (puede referirse a alguna biblioteca o módulo personalizado).
- **web-vitals**: Herramientas para medir el rendimiento web.

## Estructura del Proyecto

```
src/
|-- components/
|   |-- landing/
|   |   |-- carrusel/
|   |   |   |-- Carrusel.css
|   |   |   |-- Carrusel.js
|   |   |-- Landing.css
|   |   |-- Landing.js
|   |   |-- section_card/
|   |       |-- SectionCard.css
|   |       |-- SectionCard.js
|   |-- list_products/
|   |   |-- card_discount/
|   |   |   |-- CardDiscount.css
|   |   |   |-- CardDiscount.js
|   |   |-- card_product/
|   |       |-- CardProduct.css
|   |       |-- CardProduct.js
|   |   |-- (Espacio para Mafer)
|   |-- payment/
|   |   |-- (Espacio para Mafer)
|   |-- shared/
|       |-- bar/
|       |   |-- Bar.css
|       |   |-- Bar.js
|       |-- footer/
|           |-- Footer.css
|           |-- Footer.js
```

## Componentes Principales

1. **Landing:**
   - Contiene los componentes `Carrusel` y `SectionCard`.
   - `Carrusel` realiza un slide de 3 imágenes que redirigen a las promociones.
   - `SectionCard` muestra las cards de promociones que también redirigen a las promociones.

2. **List Products:**
   - Contiene `CardDiscount` y `CardProduct`.
   - `CardDiscount` Determina el producto con el descuento, con la funcionalidad de agregar el producto
   - `CardProduct` Agrega el producto al carrito, tomando la información del producto a travez de la componente props

3. **Payment:**
   - Contiene los steps del proceso de pago.
   - `Step1`  Toma la lista de productos de Shopping, calcula y muestra el total de la compra, permitiendo la navegacion entre diferentes pasos
   - `Step2` Recopila y procesa la información personal del usuario, realiza operaciones en el servidor relacionadas con el usuario y el carrito de compras
   - `Step3` Proporciona al usuario un resumen del costo total de la compra, tomando las consultas del carrito para realizar las operaciones pertinentes

4. **Shared:**
   - **Bar:**
     - Contiene el logo de "El Cerro", menú de categorización, buscador de productos y carrito de compras.
     - El carrito de compras muestra los productos seleccionados y permite añadir o eliminar productos.

   - **Footer:**
     - Proporciona enlaces e información sobre el supermercado "El Cerro".

## Ejecutar la Aplicación

Asegúrate de tener Node.js y npm instalados. Luego, ejecuta los siguientes comandos:

```bash
# Instala las dependencias
npm install

# Inicia la aplicación
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de mejorar este proyecto. ¡Gracias por tu colaboración!

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).



Entiendo, te explicaré el proceso sin usar tantas fórmulas y símbolos técnicos. Vamos a resolverlo paso a paso de una manera más sencilla.

### Paso 1: Cargar el primer capacitor

1. **Carga inicial en el primer capacitor:**
   - Tienes un capacitor de 2.5 microfaradios (µF) conectado a una batería de 9.0 voltios (V).
   - La carga (Q) que se acumula en el capacitor se calcula multiplicando la capacitancia (C) por el voltaje (V):
     \[
     \text{Carga} = \text{Capacitancia} \times \text{Voltaje}
     \]
     En este caso:
     \[
     \text{Carga} = 2.5 \, \mu\text{F} \times 9.0 \, \text{V} = 22.5 \, \mu\text{C}
     \]
   - Así que el primer capacitor tiene una carga de 22.5 microculombios (µC).

### Paso 2: Conectar los dos capacitores

2. **Desconectar el primer capacitor y conectarlo con el segundo capacitor:**
   - El primer capacitor (de 2.5 µF) se desconecta de la batería y se conecta a un segundo capacitor de 5.0 µF que inicialmente no tiene carga.
   - Al conectar ambos capacitores, la carga total se reparte entre ellos. Además, ambos capacitores tendrán el mismo voltaje final (Vf) porque están conectados entre sí.

### Paso 3: Repartir la carga y calcular el voltaje final

3. **Conservación de la carga:**
   - La carga total del sistema se conserva. La carga inicial total era 22.5 µC, y esta carga se reparte entre los dos capacitores.
   - La fórmula para la carga final en un sistema de dos capacitores conectados es:
     \[
     \text{Carga total} = \text{Carga en el primer capacitor final} + \text{Carga en el segundo capacitor final}
     \]
   - Sabemos que:
     \[
     22.5 \, \mu\text{C} = Q_1' + Q_2'
     \]
     Donde \( Q_1' \) es la carga final en el primer capacitor y \( Q_2' \) es la carga final en el segundo capacitor.

4. **Igualar voltajes:**
   - Los voltajes en los capacitores son iguales al final. Entonces, podemos decir que:
     \[
     V_f = \frac{Q_1'}{C_1} = \frac{Q_2'}{C_2}
     \]
     Donde:
     - \( V_f \) es el voltaje final.
     - \( C_1 \) es la capacitancia del primer capacitor (2.5 µF).
     - \( C_2 \) es la capacitancia del segundo capacitor (5.0 µF).

### Paso 4: Calcular el voltaje final y las cargas finales

5. **Calcular el voltaje final:**
   - La carga total se distribuye entre los dos capacitores de forma proporcional a su capacitancia:
     \[
     V_f = \frac{22.5 \, \mu\text{C}}{2.5 \, \mu\text{F} + 5.0 \, \mu\text{F}}
     \]
     Simplificando, obtenemos:
     \[
     V_f = \frac{22.5 \, \mu\text{C}}{7.5 \, \mu\text{F}} = 3.0 \, \text{V}
     \]

6. **Calcular las cargas finales:**
   - La carga en el primer capacitor (de 2.5 µF) con el voltaje final de 3.0 V es:
     \[
     Q_1' = 2.5 \, \mu\text{F} \times 3.0 \, \text{V} = 7.5 \, \mu\text{C}
     \]
   - La carga en el segundo capacitor (de 5.0 µF) con el voltaje final de 3.0 V es:
     \[
     Q_2' = 5.0 \, \mu\text{F} \times 3.0 \, \text{V} = 15.0 \, \mu\text{C}
     \]

### Resumen:

- **Carga final en el capacitor de 2.5 µF:** \( 7.5 \, \mu\text{C} \)
- **Carga final en el capacitor de 5.0 µF:** \( 15.0 \, \mu\text{C} \)
- **Voltaje final a través de ambos capacitores:** \( 3.0 \, \text{V} \)

Espero que ahora esté más claro. Si tienes alguna otra duda, por favor házmelo saber.
