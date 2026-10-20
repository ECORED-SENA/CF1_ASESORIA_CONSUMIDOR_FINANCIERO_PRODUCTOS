<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Mercado objetivo, zonificación y promoción del crédito
      p(data-aos="fade-left") La gestión microfinanciera requiere identificar a quién se dirige la oferta y en qué territorio se desarrolla la atención, considerando las diferencias de las unidades económicas en actividad, ubicación, tamaño, operación, necesidades de financiación y acceso a servicios financieros. La Encuesta de Micronegocios (EMICRON) analiza variables que permiten reconocer esta diversidad y comprender las características del mercado microfinanciero (DANE, 2026).
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Mercado objetivo de las microfinanzas
      p(data-aos="fade-left") El mercado objetivo comprende las personas o unidades económicas cuyas características coinciden con el segmento atendido por una organización. Su identificación considera aspectos como actividad, ubicación, escala y necesidades financieras, reconociendo la diversidad de los micronegocios y sus comportamientos financieros, reflejada en 24 arquetipos identificados por Banca de las Oportunidades (2026).
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Variables para reconocer el mercado objetivo
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img1.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-2.p-2 La segmentación permite agrupar clientes con características comunes y facilitar la orientación de los productos mediante variables como sector económico, actividad, territorio, escala, generación de ingresos y necesidades financieras. El DANE caracteriza micronegocios de hasta nueve personas ocupadas en diferentes actividades económicas y analiza aspectos como ubicación, formas de operación e inclusión financiera, útiles para comprender este mercado (DANE, 2026).
          p Las variables básicas para identificar y caracterizar inicialmente el mercado objetivo se relacionan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 8.
                  span Variables para caracterizar el mercado objetivo
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Variable
                        th(style="width: 70%") Información que permite identificar
                    tbody
                      tr
                        td Actividad económica
                        td Qué produce, comercializa o qué servicio presta la unidad económica.
                      tr
                        td Ubicación
                        td Municipio, zona urbana, rural o rural dispersa donde opera.
                      tr
                        td Escala del negocio
                        td Tamaño y características generales de la operación.
                      tr
                        td Forma de generar ingresos
                        td Frecuencia y características de las ventas o servicios prestados.
                      tr
                        td Necesidad financiera
                        td Destino probable del ahorro, financiación, pagos u otros servicios.
                      tr
                        td Acceso financiero
                        td Productos y canales utilizados previamente por la persona o el negocio.
            //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Mercado objetivo y oportunidad comercial
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img2.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-5.p-3 Identificar el mercado objetivo permite concentrar los esfuerzos comerciales en personas y unidades económicas que puedan encontrar utilidad real en los productos ofrecidos. Esta identificación orienta la búsqueda hacia actividades compatibles con el segmento atendido, pero constituye únicamente una coincidencia inicial y no determina por sí sola el acceso a una financiación.
          p Esta relación permite diferenciar la oportunidad comercial de las condiciones que posteriormente deben verificarse:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Identificación y priorización de oportunidades")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_1.png')
              .col-md-6
                h4 Identificación y priorización de oportunidades
                p Si una entidad busca atender a pequeños comerciantes, resulta más eficiente identificar zonas donde se concentran tiendas, establecimientos de alimentos, talleres u otras actividades compatibles con su segmento que realizar una promoción indiscriminada.
          .py-3.py-md-4(titulo="Pertenencia al mercado objetivo")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png')
              .col-md-6
                h4 Pertenencia al mercado objetivo
                p Pertenecer al mercado objetivo no implica automáticamente cumplir las condiciones para recibir un crédito. Posteriormente deben aplicarse los procedimientos de recopilación, verificación y análisis establecidos para determinar si la solicitud puede continuar.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") El siguiente caso ejemplifica cómo el mercado objetivo orienta la identificación inicial de posibles clientes:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo aplicado:</b>
          <br>
          <br>
          p Una entidad ofrece productos dirigidos a pequeños negocios de comercio y servicios ubicados en determinados municipios. En una zona comercial se identifican tiendas, peluquerías, talleres, restaurantes y vendedores de diferentes productos.
          <br>
          p La primera tarea consiste en determinar cuáles actividades corresponden al mercado definido por la organización y reconocer sus principales necesidades. La identificación permite priorizar posibles clientes para una orientación posterior, pero no equivale a seleccionarlos ni a aprobar una financiación. El mercado objetivo funciona como el punto inicial para organizar la búsqueda comercial.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Área de trabajo y zonificación geográfica
      p(data-aos="fade-left") La zonificación geográfica organiza el territorio de atención para facilitar la promoción, la identificación de clientes, las visitas y el seguimiento de la gestión comercial. En microfinanzas se permite distribuir el trabajo entre barrios, zonas comerciales, plazas de mercado, centros poblados y territorios rurales, considerando sus condiciones de acceso, movilidad y concentración de negocios.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Organización del territorio
      //- Título nivel 3 - Imagen
      p.bg-color-2.p-3(data-aos="fade-left") El área de trabajo puede delimitarse por municipios, comunas, barrios, veredas, corredores comerciales, plazas de mercado o sectores con concentración de actividades productivas. Su organización debe considerar no solo la cantidad de negocios, sino también la facilidad de desplazamiento, las actividades compatibles con el mercado objetivo, la seguridad, los canales de atención disponibles, la dispersión territorial y las características económicas de la zona.
      p(data-aos="fade-left") Los siguientes criterios permiten organizar territorialmente el área de trabajo de acuerdo con las características de cada zona:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 9.
                  span Criterios para la zonificación del área de trabajo
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Criterio
                        th(style="width: 70%") Utilidad
                    tbody
                      tr
                        td Concentración de negocios
                        td Permite identificar sectores con mayor presencia del mercado objetivo.
                      tr
                        td Tipo de actividad
                        td Facilita reconocer zonas comerciales, productivas o de servicios.
                      tr
                        td Ruralidad
                        td Permite ajustar recorridos y métodos de atención según la dispersión territorial.
                      tr
                        td Accesibilidad
                        td Ayuda a estimar tiempos y medios necesarios para desplazamientos y visitas.
                      tr
                        td Canales financieros disponibles
                        td Permite reconocer oficinas, corresponsales y opciones digitales existentes.
                      tr
                        td Potencial comercial
                        td Facilita priorizar zonas compatibles con la estrategia institucional.
            //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Zonificación y conocimiento del entorno
      //- Título nivel 3 - Imagen      
      p(data-aos="fade-left") El conocimiento de la zona permite reconocer sus dinámicas particulares y mantener actualizada la información necesaria para caracterizar el territorio:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Dinámicas del territorio")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_1.png')
              .col-md-6
                h4 Dinámicas del territorio
                p Recorrer y conocer la zona permite identificar dinámicas que no siempre aparecen en una base de datos. En un barrio puede existir una alta concentración comercial; en un municipio, los días de mercado pueden movilizar actividades productivas; y en zonas rurales, los negocios pueden estar dispersos entre varias veredas.
          .py-3.py-md-4(titulo="Actualización de la información territorial")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_2.png')
              .col-md-6
                h4 Actualización de la información territorial
                p La información debe actualizarse a medida que cambian las actividades económicas. La EMICRON incluye variables sobre el sitio y la ubicación de los micronegocios, lo que permite reconocer el lugar donde funciona la actividad como una dimensión relevante para su caracterización (DANE, 2026).
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") El siguiente caso aplica la zonificación para organizar recorridos y planear la búsqueda de clientes:
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-1
          p.mb-2.fw-bold Ejemplo aplicado:
          p Se asigna un sector que comprende varios barrios urbanos y dos centros poblados cercanos. Antes de iniciar la promoción, se identifican los corredores comerciales, plazas, talleres, establecimientos de alimentos y vías principales de acceso.
          P Con esta información puede organizarse un recorrido que concentre las visitas por zonas y permita registrar los negocios compatibles con el mercado objetivo. De esta manera, la zonificación deja de ser únicamente una división del mapa y se convierte en una herramienta para utilizar mejor el tiempo, conocer el entorno y planear la búsqueda de clientes.
        .col-lg-5.d-flex.order-1.order-lg-2
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img4.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Identificación de clientes potenciales
      p(data-aos="fade-left") El cliente potencial se encuentra en una etapa previa a la contratación y presenta condiciones compatibles con la oferta. La Ley 1328 de 2009 reconoce esta fase de tratativas con entidades vigiladas. Identificarlo permite comprobar condiciones iniciales para continuar sin anticipar el análisis de viabilidad (Ley 1328, 2009).
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fuentes para identificar posibles clientes
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img5.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-2.p-4 La búsqueda de posibles clientes puede realizarse mediante recorridos por la zona asignada, referidos de clientes, asociaciones de comerciantes o productores, ferias empresariales, jornadas institucionales, campañas comerciales y contactos generados mediante canales digitales. La estrategia utilizada depende del mercado objetivo y de los procedimientos establecidos por la entidad.
          p La información inicial permite realizar un primer reconocimiento de la actividad, la ubicación, la necesidad financiera y las condiciones básicas para continuar el proceso:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Actividad y ubicación")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_1.png')
              .col-md-6
                h4 Actividad y ubicación
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Actividad económica:] permite verificar la correspondencia inicial con el mercado objetivo.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Ubicación del negocio:] permite confirmar que la actividad se encuentra dentro de la cobertura establecida.
          .py-3.py-md-4(titulo="Trayectoria y necesidad")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_2.png')
              .col-md-6
                h4 Trayectoria y necesidad
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Tiempo de funcionamiento:] permite conocer la trayectoria básica de la actividad.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Necesidad manifestada:] permite identificar qué situación financiera busca atender la persona.
          .py-3.py-md-4(titulo="Recursos y contacto")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_2.png')
              .col-md-6
                h4 Recursos y contacto
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Destino de los recursos:] permite reconocer si la solicitud guarda relación con la actividad económica.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Datos de contacto:] facilitan la continuidad del proceso cuando existe interés.
      //- Cierres Pestanas horizontales
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificar no significa aprobar
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img6.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-5.p-4 Identificar a una persona como cliente potencial permite establecer si existen condiciones iniciales para continuar el proceso, pero no significa que la financiación esté aprobada.
          P La identificación inicial y la decisión posterior cumplen funciones diferentes:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta04_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Identificación inicial
                    p.mb-0 Permite explicar el producto y recopilar información básica para determinar si el posible cliente puede continuar en el proceso.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta04_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Análisis posterior
                    p.mb-0 La aprobación depende de las verificaciones y del análisis establecidos por la entidad. En las entidades vigiladas, la información suministrada debe permitir decisiones informadas (Ley 1328, 2009).
            //- Fin Tarjetas
            p(data-aos="fade-left") El siguiente caso permite diferenciar la identificación de un cliente potencial de la decisión posterior sobre la financiación:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-2.fw-bold Ejemplo aplicado
          <br>
          <br>
          p Durante un recorrido por una zona comercial se identifica un pequeño establecimiento dedicado a la venta de alimentos. La actividad se encuentra dentro del segmento atendido y su propietario manifiesta que necesita recursos para comprar una nevera y aumentar la mercancía disponible.
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Promoción del crédito en el mercado objetivo
      p(data-aos="fade-left") La promoción del crédito permite dar a conocer alternativas de financiación entre personas y unidades económicas del mercado objetivo, proporcionando información que facilite comprender las características generales del producto y su relación con una necesidad financiera. Esta actividad debe comunicar condiciones reales y evitar mensajes que generen expectativas equivocadas sobre aprobaciones, costos o condiciones.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Canales de promoción
      //- Título nivel 3 - Imagen
      p.bg-color-3.p-4(data-aos="fade-left") La promoción puede realizarse mediante visitas, ferias, jornadas, referidos, llamadas, mensajería y canales digitales autorizados. La elección depende de las características del mercado y del territorio; por ejemplo, la atención presencial puede ser útil en zonas comerciales concentradas, mientras que en sectores dispersos pueden combinarse recorridos programados y contacto telefónico.
      p(data-aos="fade-left") Los canales cumplen distintas funciones y requieren considerar precauciones durante el acercamiento con los clientes potenciales:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 10.
                  span Canales para la promoción del crédito
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Canal
                        th(style="width: 40%") Utilidad
                        th(style="width: 35%") Consideración
                    tbody
                      tr
                        td Visita al negocio
                        td Facilita contacto directo y conocimiento inicial de la actividad.
                        td No debe confundirse la visita con una aprobación.
                      tr
                        td Ferias o jornadas
                        td Permiten contactar varios clientes potenciales en un mismo espacio.
                        td La información debe ser uniforme y verificable.
                      tr
                        td Referidos
                        td Facilitan acercamiento a personas vinculadas con el mercado objetivo.
                        td Cada nuevo interesado debe cumplir su propio proceso.
                      tr
                        td Llamada o mensajería
                        td Permite realizar contacto inicial y programar atención.
                        td Deben aplicarse las reglas institucionales para el uso de datos.
                      tr
                        td Canales digitales
                        td Amplían la difusión y facilitan solicitudes de información.
                        td Las condiciones publicadas deben mantenerse actualizadas.
            //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información durante la promoción
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img8.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-5.p-3 La promoción debe explicar de forma comprensible qué ofrece el producto, a quién está dirigido y sus condiciones generales. Para las entidades vigiladas, la información previa debe incluir características, derechos, obligaciones, condiciones y costos, entre otros aspectos (Ley 1328, 2009).
          P La información debe corresponder con las condiciones reales del producto y evitar promesas que puedan generar expectativas incorrectas:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta05_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Información que debe comunicarse
                    p.mb-0 La información debe permitir al consumidor comprender las condiciones del producto y comparar las alternativas disponibles.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta05_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Promesas que deben evitarse
                    p.mb-0 Expresiones como «crédito garantizado», «aprobación inmediata» o «sin requisitos» solo pueden utilizarse si corresponden estrictamente a las condiciones reales y permitidas del producto.
            //- Fin Tarjetas
            p(data-aos="fade-left") El siguiente caso aplica la comunicación responsable durante la promoción de una alternativa de financiación:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img9.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Ejemplo aplicado:</b>
          <br>
          <br>
          p En una plaza de mercado se realiza una jornada para presentar una línea de financiación destinada a pequeños comerciantes. Durante la actividad se explican la finalidad del producto, las condiciones generales, los documentos iniciales y las etapas del proceso.
          <br>
          p Una comerciante manifiesta interés y pregunta si por tener varios años de funcionamiento su solicitud está automáticamente aprobada. La orientación adecuada consiste en explicar que esa trayectoria puede formar parte de la información analizada, pero que la decisión dependerá del cumplimiento de los requisitos y de las verificaciones posteriores. Así, la promoción genera una oportunidad comercial sin alterar las reglas del proceso.
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Estrategias institucionales de búsqueda y obtención de información
      p(data-aos="fade-left") La búsqueda y obtención de información permite pasar del contacto comercial a un conocimiento inicial y organizado del cliente potencial. Su finalidad es recopilar datos suficientes para establecer si la persona y su actividad cumplen las condiciones básicas para continuar, utilizando los medios definidos por la organización y la información únicamente para los propósitos autorizados.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fuentes de información
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img10.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-7.p-4 En microfinanzas pueden utilizarse distintas fuentes porque los pequeños negocios no cuentan con el mismo nivel de documentación. La información obtenida en la entrevista puede complementarse, cuando corresponda, con formularios, visitas, documentos, referencias, registros institucionales e información crediticia autorizada, conforme con los procedimientos y la regulación aplicable.
          P Las fuentes aportan información complementaria para conocer inicialmente al cliente y su actividad económica:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Entrevista
                            p Permite obtener información sobre la actividad, la necesidad financiera, la trayectoria y las características generales del negocio.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Formulario institucional
                            p Organiza los datos requeridos por la entidad para iniciar el procedimiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Visita al negocio
                            p Permite obtener información sobre la existencia, ubicación y características de la actividad. La Ley 590 de 2000 contempla la visita para verificar el estado de la actividad empresarial (Ley 590, 2000).
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Documentos y soportes
                            p Aportan evidencia sobre determinados datos suministrados por el cliente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Referencias
                            p Proporcionan información complementaria conforme con el procedimiento institucional. La comprobación de referencias está contemplada entre las actividades especializadas relacionadas con el microcrédito (Ley 590, 2000).
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registros internos
                            p Permiten consultar antecedentes de la relación del cliente con la organización, cuando existan.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta06_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Información crediticia autorizada
                            p Aporta datos financieros y crediticios utilizados conforme con las finalidades y condiciones de la regulación aplicable (Ley 1266, 2008).
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t3/img11.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      p.mb-5(data-aos="fade-left") Los datos personales recopilados mediante estas fuentes deben tratarse de acuerdo con las reglas establecidas en la Ley 1581 de 2012 (Ley 1581, 2012).
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación y consistencia de la información
      //- Título nivel 3 - Imagen
      p.bg-color-2.p-4(data-aos="fade-left") La verificación inicial busca establecer coherencia entre los datos y las fuentes disponibles. La actividad declarada debe corresponder con la información obtenida del negocio, el destino de los recursos debe ser compatible con la necesidad presentada y los documentos aportados deben guardar relación con los datos registrados.
      p(data-aos="fade-left") La comprobación inicial puede organizarse mediante las siguientes actuaciones:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  //- PASO 1
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Contrastar datos y fuentes
                      p Se compara la información suministrada con los documentos, la visita y las demás fuentes permitidas para establecer si los datos obtenidos son suficientes, coherentes y verificables.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_1.png', alt='').img125
                  //- PASO 2
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_2.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Aclarar las diferencias
                      p Una diferencia no supone automáticamente falsedad. Puede originarse en un error de registro, una explicación incompleta, una actualización pendiente o una situación que requiera revisión adicional; por ello, debe aclararse antes de continuar.
                  //- PASO 3
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Registrar la comprobación
                      p De acuerdo con los procedimientos institucionales, debe conservarse evidencia de la información obtenida y registrar la fuente, la fecha y el resultado de la verificación para facilitar las etapas posteriores.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_3.png', alt='').img125
            //- Fin Linea de tiempo
      p(data-aos="fade-left") El siguiente caso aplica el contraste inicial de información antes de continuar con el proceso:
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-1
          p.mb-3.fw-bold Ejemplo aplicado:
          p Durante la visita a un negocio de comidas, su propietario informa que lleva tres años funcionando y solicita financiación para adquirir equipos. En la entrevista se registran la actividad, el destino de los recursos, la ubicación y los datos básicos requeridos. Posteriormente, estos datos se contrastan con los documentos aportados y con la información obtenida durante la visita.
          p Si la información es coherente, el proceso puede continuar hacia las etapas establecidas por la organización. Si aparece una diferencia —por ejemplo, una fecha de funcionamiento distinta en los documentos—, debe aclararse y registrarse antes de avanzar. La búsqueda de información proporciona así una base confiable para la posterior caracterización y selección del cliente.
        .col-lg-5.d-flex.order-1.order-lg-2
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img13.png', alt='', style="object-fit: cover;")
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
