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

