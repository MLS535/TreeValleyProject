
<h1 align="center"> Tree Valley</h1>
<p align="center"><img src="/src/assets/images/TreeValley.png" alt="Lighthouse"/></p> 
## Tabla de contenidos:
---

- [Descripción y contexto](#descripción-y-contexto)
- [Netlify](#Netlify)  
- [Lighthouse ](#Lighthouse )
- [Guía de usuario](#guía-de-usuario)
- [Principios UX y tecnicas de accesibilidad](#Principios UX y tecnicas de accesibilidad)
- [Guía de instalacion](#guía-de-instalación) 
- [Autor/es](#autores)



## Descripción y contexto
---
En este proyecto final, se trata de crear una tienda con un carrito de la compra, que posteriormente llevará al cliente a hacer un checkout y mostrará una factura.

Este proyecto se ha hecho utilizando Vue Router y Vuex. Contiene persistencia de datos, además de la ampliación de imagenes de los productos.
## Netlify
---
Enlace de Netlify:
<p> <a href="https://gallant-bassi-7e9692.netlify.app/">Haz click aquí para ir a Netlify</a></p>

## Lighthouse
---
<p align="center"><img src="/src/assets/Lighthouse.png" alt="Lighthouse"/></p> 

## Guía de usuario
---
Dentro de la aplicación tenemos varias páginas:

<h2> Home:</h2>
En ella se muestra un carrousel y tres cards que siguiendo el convenio UX y de accesibilidad son bastante visibles. Por ejemplo, al pasar por encima con el ratón de una card, hace un hover que aumenta un poco el tamaño de dicha card.
El carousel permite cambiar las imágenes.

Otras aplicaciones de la home:
- Se han sustituido con más de 3 imágenes del Front Page con imágenes nuevas. Estas imágenes provienen de pexels.
- El carousel es mayor que 800px y contiene 4 imagenes nuevas.

<h2> Shop </h2>
La página de shop está constituida por tres muebles que permiten al usuario añadir y eliminar y que se van sumando a un carrito de compra. Una vez que se ha creado el carrito de compra y el usuario está contento simplemente le lleva a una página de checkout donde debe introducir su nombre y la dirección para después continuar a una página de facturación.
Se han utilizado directivas vuex para la persistencia de datos, tanto de compra como de producto. Se han utilizado vistas y componentes para realizar las distintas páginas. Se han utilizado todas las directivas VUE como han sido posibles.

##Principios UX y tecnicas de accesibilidad: 
---
  1. Paleta de colores:
<p> <a href="https://coolors.co/ffffff-e49e06-959595-1bb5ac">Paleta de colores</a></p>
    La paleta de colores se basa en estos colores:

    - #FFFFFF: Es el color blanco de fondo.
    - #E49E06: Titulos.
    - #959595: Texto y navegador.
    - #1BB5AC: Logo y botones.

2. Fuente utilizada:  
font-family: Arial, Helvetica, sans-serif;

3. Emplea descripciones cortas para links, botones, menús y headings.

4. Emplea un lenguaje simple y adecuado al sector o ámbito de la web.

5. Alineamiento correcto de las cards de la home.

6. Consistente jerarquia en la aplicación. Se aplican los principios de headers.

7. Botones con sentido que eliminan y añaden.

8. Navegación por la página web de manera simple. El logo contiene un enlace que te lleva directamente a la home y en el navegador queda claro donde está situado en cada momento el usuario.

9. Los links son distingibles.

10. Al pasar por encima se cambia a un dedo.

11. Los links reaccionan cuando pasamos por encima, es decir realiza el hover.
12. El usuario puede visualizar correctamente el contenido en todo momento.
13. La aplicación es sencilla. En todo momento el usuario sabe donde está.
14. Utilización de iconos como flechas o un icono de un carrito para indicar al usuario que debe hacer.


## Guía de instalación
---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Autor/es
---
Maite Ladaria Sanchez y Daniel Maestre



