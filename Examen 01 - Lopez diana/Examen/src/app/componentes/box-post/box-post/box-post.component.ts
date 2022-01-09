import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-post',
  templateUrl: './box-post.component.html',
  styleUrls: ['./box-post.component.scss']
})
export class BoxPostComponent implements OnInit {

  arregloPost = [
    {
      titulo: "Módulo de Carrito",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/options_panier.jpg",
      descripcion: "Si tienes un sitio web de comercio electrónico, añadir un módulo de carrito te permitirá mostrar un botón con una lista desplegable, que enumera todos los...",
      autor: "Philippe",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/philippe.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Módulo de Horarios",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/ui_hour.jpg",
      descripcion: "El módulo de Horarios permite a los comerciantes, los proveedores de servicios, los trabajadores independientes, los artesanos… mostrar sus horarios ...",
      autor: "Alexandre",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/alex.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Módulo de Búsqueda",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/ui_search.jpg",
      descripcion: "Este módulo te permite insertar una barra de búsqueda personalizada en tu sitio web, que da la posibilidad a tus visitantes de buscar artículos de blog ...",
      autor: "Philippe",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/philippe.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Create a website with a FAQ block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/ui_faq.jpg",
      descripcion: "El módulo de FAQ de SiteW te permite crear una sección de FAQ personalizada en tu página web, en función de tus necesidades. De esta manera, podrás ...",
      autor: "Emma",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/emma.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Create a website with the Form block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/ui_form.jpg",
      descripcion: "El nuevo módulo de Formulario permite crear un formulario de contacto totalemente personalizable, en función de tus necesidades. Descubre cómo ...",
      autor: "Philippe",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/philippe.png",
      tiempo: "3 minutos"
    },
    {
      titulo: "Módulo Agenda",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/calendar_2.jpg",
      descripcion: "El módulo de Agenda te permite presentar fácilmente un programa de actividades en tu sitio web. Este módulo ofrece dos tipos de visualización ...",
      autor: "Cécile",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/cess.png",
      tiempo: "3 minutos"
    },
    {
      titulo: "Create a website with the Icon block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_icone.jpg",
      descripcion: "El módulo de Icono de SiteW te permitirá añadir un icono en tu sitio web con un solo clic: es muy útil para ofrecer una información clara y ... ",
      autor: "Emma",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/emma.png",
      tiempo: "2 minutos"
    },
    {
      titulo: "Módulo de Forma",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/boxes.jpg",
      descripcion: "El módulo de Forma te permite modificar fácilmente y eficazmente el diseño de tu web. Puedes crear bandas, fondos y agregar formas y contenedores ...",
      autor: "Cécile",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/cess.png",
      tiempo: "2 minutos"
    },
    {
      titulo: "Módulo de Botón",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/buttons.jpg",
      descripcion: "Conoces la importancia de las llamadas a la acción para tu web: estos botones te permiten animar a tus visitantes a comprar tus productos, a leer ...",
      autor: "Alexandre",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/alex.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Create website with Gallery block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/galerie.jpg",
      descripcion: "Cuando se crea un sitio web, se quiere que sea único y atractivo. Estamos a la escucha de tus necesidades y atentos a tus solicitudes y por eso hemos ...",
      autor: "Philippe",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/philippe.png",
      tiempo: "2 minutos"
    },
    {
      titulo: "Blog block for your website",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/blog.jpg",
      descripcion: "El módulo de Blog te permite escribir y publicar artículos en tu sitio web. Los lectores pueden reaccionar a tus artículos gracias a los comentarios Facebook...",
      autor: "Emma",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/emma.png",
      tiempo: "4 minutos"
    },
    {
      titulo: "Create website with Member block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/member_4.jpg",
      descripcion: "El módulo de Miembros permite a tus visitantes registrarse en tu sitio web. Pueden acceder a su cuenta para seguir los pedidos realizados en tu tienda en ...",
      autor: "Cécile",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/cess.png",
      tiempo: "2 minutos"
    },
    {
      titulo: "Create website with Download block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_telechargement.jpg",
      descripcion: "l módulo de Descarga te permite crear una página web y compartir tus documentos (PDF, Word, archives, ...) con tus visitantes. Muestra un icono personalizable ...",
      autor: "Aziliz",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/azi.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Create website with Social block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_social.jpg",
      descripcion: "l módulo Social te permite crear un sitio web y compartirlo en las redes sociales (Facebook, Twitter...). Este módulo muestra en tu sitio una lista de redes sociales ...",
      autor: "Emma",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/emma.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Create website with Forum block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/creer_forum.jpg",
      descripcion: "El módulo de Foro permite a los visitantes conversar directamente en tu sitio web. Este módulo está disponible para todos los sitios webs creados con el paquete ...",
      autor: "Cécile",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/cess.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Módulo de Newsletter",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_newsletter.jpg",
      descripcion: "El módulo de Newsletter muestra un pequeño formulario que permite a los usuarios suscribirse al boletín de tu sitio web. Así, puede enviar fácilmente mensajes a tus ...",
      autor: "Emma",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/emma.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Módulo de Tienda",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_boutique.jpg",
      descripcion: "El módulo de Tienda te permite crear tu propia tienda online. Así, puedes crear un catálogo virtual y vender en línea. SiteW no cobrará ninguna comisión sobre las ...",
      autor: "Aziliz",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/azi.png",
      tiempo: "7 minutos"
    },
    {
      titulo: "Módulo de Widget/Código HTML",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_widget_code_html.jpg",
      descripcion: "El gadget HTML es parte del módulo de Widget, la presentación general de este módulo está disponible en la guía del módulo de Widget. Este módulo está disponible ...",
      autor: "Philippe",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/philippe.png",
      tiempo: "2 minutos"
    },
    {
      titulo: "Módulo de Música",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_musique.jpg",
      descripcion: "Crear un sonido de fondo para tu sitio web, presentar tu música, compartir tus gustos musicales: todo esto es fácil con el módulo de Música. Simplemente crea archivos ...",
      autor: "Philippe",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/philippe.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Create website with Comment block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_commentaire.jpg",
      descripcion: "Tus visitantes pueden agregar fácilmente comentarios a tu página web. El módulo ofrece todas las funciones necesarias para tener un sitio web interactivo. ¿Por qué ...",
      autor: "Philippe",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/philippe.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Módulo de Menú",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_menu.jpg",
      descripcion: "El módulo de Menú automático de Sitew te permite insertar en tu sitio web la lista de las páginas. La gestión de las páginas es fácil y el menú se actualiza ...",
      autor: "Cécile",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/cess.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Módulo de Mapa",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_carte.jpg",
      descripcion: "Tus visitantes pueden encontrarte fácilmente utilizando los mapas dinámicos que puedes añadir en tu sitio web. Simplemente ingresa una dirección y el mapa se crea ...",
      autor: "Cécile",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/cess.png",
      tiempo: "1 minuto"
    },
    {
      titulo: "Módulo de Imagen",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module-image.png",
      descripcion: "El texto y la imagen son dos elementos esenciales de una página web. Elegir y posicionar imágenes tienen un fuerte impacto en la impresión que tu página web ...",
      autor: "Anaïs",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/anais.png",
      tiempo: "2 minutos"
    },
    {
      titulo: "Agregar módulo de Texto de SiteW",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/cover-module-texte.png",
      descripcion: "Este módulo te permite agregar texto a tu página web fácilmente, gracias a un editor de texto completo. Puedes personalizar tus textos y crear tus propios estilos ...",
      autor: "Anaïs",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/anais.png",
      tiempo: "4 minutos"
    },
    {
      titulo: "Create website with Video block",
      imagenPost: "https://ssl.sitew.org/images/blog/articles/cover/module_video.jpg",
      descripcion: "Crea una bonita web fácilmente insertando videos gratis en tu página web de SiteW utilizando los sitios web para compartir videos como Youtube y Dailymotion ...",
      autor: "Aziliz",
      imagenAutor: "https://ssl.sitew.org/images/blog/signatures/azi.png",
      tiempo: "1 minuto"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
