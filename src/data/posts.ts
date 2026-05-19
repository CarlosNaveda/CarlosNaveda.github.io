import { title } from "process";


//Usar máximo 2 tags por post
const mapPosts = [
  {
    index: 0,
    imageSource: "/images/blog/Autolayout.jpg",
    publishDate: new Date("2026-05-09"),
    tag: ["UI"],
    title: "Domina Auto Layout",
    shortDescription: "Aprende cómo usar Auto Layout para crear interfaces más ordenadas, adaptables y fáciles de mantener en Figma. Un enfoque práctico para mejorar tu flujo de diseño y prototipado.",
    tableOfContents: [
      {
        index: 0,
        title: "Introducción"
      },
      {
        index: 1,
        title: "¿Qué es Auto Layout cómo funciona?"
      },
      {
        index: 2,
        title: "Construcción de componentes dinámicos"
      },
      {
        index: 3,
        title: "Espaciado, padding y alineación inteligente"
      },
      {
        index: 4,
        title: "De diseño manual a diseño sistemático"
      },
      {
        index: 5,
        title: "Conclusión"
      }   
    ],
    content: `
            Introducción: por qué Auto Layout cambia tu forma de diseñar
            Auto Layout es una de las herramientas más poderosas en Figma para construir interfaces escalables y ordenadas sin esfuerzo manual.
            Su verdadero valor no está solo en “alinear elementos”, sino en permitirte pensar en estructuras flexibles que se adaptan automáticamente al contenido.

            ¿Qué es Auto Layout y cómo funciona?
            En este apartado entenderás cómo Figma interpreta el Auto Layout como un sistema de reglas.
            Auto Layout permite que los elementos dentro de un frame se organicen automáticamente en función de:
            Dirección (vertical u horizontal)
            Espaciado entre elementos
            Padding interno del contenedor
            Ajuste automático al contenido
            Esto elimina la necesidad de mover elementos manualmente cada vez que algo cambia.

            Construcción de componentes dinámicos
            Aquí aprenderás cómo pasar de elementos estáticos a componentes inteligentes.
            Con Auto Layout puedes crear:
            Botones que crecen según el texto
            Cards que se adaptan a contenido variable
            Listas que se reorganizan automáticamente
            Esto es clave para diseñar sistemas reutilizables y consistentes.

            Espaciado, padding y alineación inteligente
            Uno de los puntos más importantes del Auto Layout es el control del espacio.
            En esta sección se explora cómo:
            El padding define el “aire” interno del componente
            El spacing controla la distancia entre elementos
            La alineación asegura coherencia visual sin esfuerzo manual
            Dominar esto te permite evitar ajustes pixel por pixel.

            Buenas prácticas para sistemas de diseño
            Auto Layout no solo es una herramienta, es una forma de pensar diseño.
            Buenas prácticas clave:
            Usar componentes reutilizables siempre que sea posible
            Evitar posiciones manuales dentro de frames con Auto Layout
            Mantener reglas consistentes de espaciado
            Pensar en escalabilidad desde el inicio
            Esto te ayuda a construir interfaces más limpias y mantenibles.

            De diseño manual a diseño sistemático
            El cambio más importante es mental: dejar de “alinear a ojo” y empezar a diseñar con lógica.
            Auto Layout te permite construir interfaces que:
            Se adaptan automáticamente
            Escalan sin romperse
            Mantienen consistencia visual en todo el producto

            Conclusión
            Auto Layout no es solo una función de Figma, es una transición hacia un diseño más estructurado, eficiente y profesional.
            Dominarlo significa reducir errores, ahorrar tiempo y construir sistemas de diseño sólidos desde el inicio.    
            `
  },
  {
    index: 1,
    imageSource: "/images/blog/Selenium.avif",
    publishDate: new Date("2026-03-11"),
    tag: ["QA", "DEV", "TEST"],
    title: "Mis primeros pasos con Selenium",
    shortDescription: "Cómo configuré mi primer proyecto de automatización desde cero, los errores que cometí y lo que aprendí en el proceso.",
    tableOfContents: [],
    content: ""
  },
  {
    index: 2,
    imageSource: "/images/blog/LLM.jpg",
    publishDate: new Date("2026-02-22"),
    tag: ["IA", "DEV"],
    title: "¿Qué es un LLM y por qué debería importarte?",
    shortDescription: "Explicación sin tecnicismos de cómo funcionan los modelos de lenguaje y por qué están cambiando la forma en que trabajamos.",
    tableOfContents: [],
    content: ""
  },
  {
    index: 3,
    imageSource: "/images/blog/Git.avif",
    publishDate: new Date("2026-01-02"),
    tag: ["DEV", "GIT"],
    title: "Git para los que siempre olvidan los comandos",
    shortDescription: "Los comandos que uso el 90% del tiempo, explicados como me hubiera gustado que me los explicaran cuando empecé.",
    tableOfContents: [],
    content: ""
  },
];

export default mapPosts