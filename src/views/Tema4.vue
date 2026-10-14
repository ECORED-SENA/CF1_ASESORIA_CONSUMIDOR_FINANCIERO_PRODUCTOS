<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Caracterización y selección del cliente microfinanciero
      p(data-aos="fade-left") La caracterización permite pasar de la identificación inicial de un cliente potencial a un conocimiento organizado de la persona, su actividad económica, sus necesidades financieras y la información que las sustenta. Para ello, se recopilan y verifican datos mediante los medios disponibles y las fuentes institucionales, sin anticipar el análisis de capacidad de pago ni la decisión definitiva sobre el crédito.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Perfil del cliente microfinanciero
      p(data-aos="fade-left") El perfil del cliente microfinanciero reúne las características de la persona, su actividad económica y su relación con los servicios financieros. Los pequeños negocios presentan diferencias en sector, ubicación, antigüedad, funcionamiento, ingresos, tecnología y necesidades financieras; esta diversidad se refleja en los 24 arquetipos de micronegocios caracterizados por Banca de las Oportunidades (2026).
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características básicas del perfil
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img1.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-3.p-3 El perfil inicial integra aspectos personales y comerciales relacionados con la actividad económica. La Encuesta de Micronegocios del DANE estudia unidades económicas de hasta nueve personas ocupadas e incorpora variables sobre actividad, ubicación, propietario, personal ocupado, inclusión financiera, costos, gastos, activos, ventas e ingresos, evidenciando que la caracterización requiere considerar varias dimensiones (DANE, 2026).
          P Los siguientes elementos permiten construir un perfil inicial del cliente y reconocer las características generales de su actividad:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Identidad y antecedentes")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_1.png')
              .col-md-6
                h4 Identidad y antecedentes
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Identificación:] reúne los datos básicos necesarios para individualizar al cliente.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Experiencia financiera:] permite reconocer su relación previa con productos o servicios financieros, cuando exista.
          .py-3.py-md-4(titulo="Actividad y ubicación")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_2.png')
              .col-md-6
                h4 Actividad y ubicación
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Actividad económica:] identifica qué produce, comercializa o qué servicio presta.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Ubicación:] establece el lugar donde desarrolla principalmente la actividad.
          .py-3.py-md-4(titulo="Trayectoria y operación")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_3.png')
              .col-md-6
                h4 Trayectoria y operación
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Antigüedad:] permite reconocer el tiempo durante el cual ha funcionado el negocio.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Forma de operación:] identifica cómo produce, compra, vende o presta sus servicios.
          .py-3.py-md-4(titulo="Necesidad y soportes")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_4.png')
              .col-md-6
                h4 Necesidad y soportes
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Necesidad financiera:] identifica la situación que espera atender mediante un producto financiero.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span #[b Información disponible:] reconoce los registros, documentos y demás soportes relacionados con la actividad.
      //- Cierres Pestanas horizontales
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Perfil y realidad del micronegocio
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img2.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-5.p-3 El perfil debe construirse a partir de la realidad de cada actividad, pues negocios de un mismo sector pueden diferir en ubicación, operación, ingresos y necesidades financieras. Esta caracterización permite establecer quién es el cliente y cómo funciona su actividad de manera general; el cálculo de la capacidad de pago y la determinación de la viabilidad corresponden a etapas posteriores.
          P El siguiente caso permite reconocer diferencias entre perfiles de clientes pertenecientes a un mismo sector económico:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0.fw-bold Ejemplo aplicado: 
          <br>
          <br>
          p Dos personas solicitan información sobre financiación para sus negocios de alimentos. La primera administra un restaurante ubicado en una zona urbana y recibe pagos diariamente; la segunda produce alimentos por encargo desde su vivienda y concentra gran parte de sus ventas durante fines de semana.
          <br>
          p Aunque ambas pertenecen al mismo sector general, sus perfiles son diferentes. Cambian la forma de operación, la periodicidad de ingresos, el lugar donde desarrollan la actividad y posiblemente sus necesidades financieras. Caracterizar correctamente estos aspectos permite evitar una atención estandarizada y preparar una información más pertinente para las siguientes etapas.
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Información inicial del cliente y su actividad económica
      p.bg-color-2.p-4(data-aos="fade-left") La información inicial permite conocer de forma organizada al cliente y la actividad económica que desarrolla. Su recopilación debe limitarse a los datos necesarios para el procedimiento y responder a las finalidades autorizadas por la organización, de acuerdo con las disposiciones aplicables al tratamiento de datos personales (Ley 1581, 2012).
      p(data-aos="fade-left") La recopilación inicial comprende información del cliente y de su actividad económica, que posteriormente debe organizarse para facilitar su utilización en el proceso:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Información del cliente
                p Los datos iniciales pueden comprender identificación, ubicación y contacto, según los requisitos del proceso. Su registro debe realizarse cuidadosamente y, cuando sea posible, cotejar con los soportes definidos por la organización, pues los datos incorrectos o incompletos pueden dificultar las verificaciones posteriores.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Información de la actividad económica
                p La información puede incluir actividad desarrollada, ubicación, tiempo de funcionamiento, productos o servicios, características generales de las ventas, principales compras o insumos y destino de los recursos. La EMICRON contempla diferentes dimensiones para caracterizar el funcionamiento de los micronegocios (DANE, 2026).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Organización de la información
                p Los datos deben registrarse de forma clara y consistente en los medios definidos por la organización. La información declarada sobre ventas, antigüedad o destino de los recursos se registra inicialmente como tal y posteriormente se verifica mediante las fuentes y los procedimientos establecidos.
      //- Fin Slideshow
      p(data-aos="fade-left") Los principales datos pueden organizarse según el tipo de información recopilada y su utilidad dentro de la caracterización:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 11.
                  span Información inicial del cliente y de la actividad económica
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Grupo de información
                        th(style="width: 40%") Ejemplos
                        th(style="width: 35%") Utilidad
                    tbody
                      tr
                        td Identificación
                        td Datos básicos del solicitante
                        td Individualizar al cliente.
                      tr
                        td Contacto y ubicación
                        td Teléfono y lugar de funcionamiento
                        td Facilitar contacto y establecer localización de la actividad.
                      tr
                        td Actividad económica
                        td Producto, comercio o servicio desarrollado
                        td Reconocer el sector y funcionamiento general.
                      tr
                        td Antigüedad
                        td Tiempo de operación
                        td Conocer trayectoria básica del negocio.
                      tr
                        td Operación
                        td Forma de compra, producción o prestación del servicio
                        td Comprender cómo funciona la actividad.
                      tr
                        td Ventas e ingresos
                        td Forma y periodicidad general de generación
                        td Preparar información para posteriores análisis.
                      tr
                        td Necesidad financiera
                        td Motivo y destino de los recursos
                        td Relacionar la solicitud con la actividad económica.
                      tr
                        td Soportes disponibles
                        td Documentos o registros existentes
                        td Facilitar posteriores procesos de verificación.
            //- FinTabla
      p(data-aos="fade-left") El siguiente caso permite reconocer cómo se recopila y diferencia la información inicial de aquella que posteriormente debe verificarse:
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-1
          p.mb-2.fw-bold Ejemplo aplicado:
          p Una persona que administra una peluquería manifiesta que lleva cuatro años desarrollando la actividad y solicita financiación para adquirir equipos y adecuar el establecimiento. Durante la entrevista se recopilan sus datos básicos, la ubicación del negocio, el tiempo de funcionamiento, los servicios ofrecidos y el destino proyectado de los recursos.
          P La información se registra diferenciando claramente lo declarado por el cliente de lo que haya sido verificado. Esta separación resulta importante porque la entrevista proporciona una primera caracterización, mientras que la comprobación mediante documentos, visita u otras fuentes corresponde a una etapa complementaria.
        .col-lg-5.d-flex.order-1.order-lg-2
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t4/img4.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Información y orientación al cliente de acuerdo con las políticas de microcrédito
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img5.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-5.p-4 La orientación al cliente debe proporcionar información suficiente y comprensible sobre el producto, las etapas del proceso y las responsabilidades que asumiría si la operación se formaliza. Para las entidades vigiladas por la Superintendencia Financiera, la información debe ser cierta, suficiente y oportuna, de acuerdo con lo establecido en la Ley 1328 de 2009.
          P Antes de continuar con el proceso, la orientación debe brindar elementos que permitan comprender sus condiciones y tomar decisiones informadas:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Información antes de continuar con la solicitud
                p Se explican finalidad, documentación requerida y etapas de recopilación, verificación, análisis y decisión; costos, periodicidad, medios de pago y autorizaciones para tratar datos. Las tasas y condiciones definitivas pueden variar según la operación y el momento. Solicitar no implica aprobación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Una orientación que facilite decisiones informadas
                p La orientación emplea lenguaje comprensible, evita presiones y expectativas incorrectas, y permite plantear preguntas y comparar opciones (Ley 1328, 2009). Términos como tasa, comisión, garantía o condición contractual requieren explicar su significado y efecto en la operación.
      //- Fin Slideshow
      p(data-aos="fade-left") El siguiente caso permite reconocer cómo orientar al cliente sin anticipar condiciones que todavía dependen del análisis:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-2.fw-bold Ejemplo aplicado
          <br>
          <br>
          p Una propietaria de una tienda manifiesta interés en financiar la compra de una vitrina refrigerada. Durante la orientación pregunta cuánto recibiría, cuál sería la cuota y si puede disponer del dinero de inmediato.
          <br>
          p La atención adecuada consiste en explicar las características generales del producto, los requisitos y las etapas necesarias antes de definir las condiciones finales. Si todavía no se ha realizado el análisis, no corresponde afirmar cuál será el monto aprobado ni garantizar el desembolso. La orientación clara permite que la persona decida si desea continuar con la solicitud conociendo las condiciones generales del proceso.
      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Verificación de la información suministrada por el cliente
      p(data-aos="fade-left") La verificación permite contrastar los datos suministrados por el cliente con las fuentes permitidas para determinar si son coherentes, suficientes y susceptibles de comprobación. Una diferencia no implica por sí sola que la información sea falsa, pues puede originarse en errores, explicaciones incompletas, documentos desactualizados o situaciones que requieran aclaración antes de continuar. 
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fuentes y mecanismos de verificación
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img7.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-3.p-3 La verificación puede apoyarse en documentos, registros del negocio, visitas, referencias y consultas autorizadas. La Ley 590 de 2000 contempla la visita a la actividad empresarial y la comprobación de referencias; las consultas de información financiera, crediticia, comercial o de servicios deben cumplir la Ley 1266 de 2008 y sus modificaciones. Además, la Ley 2157 de 2021 establece que esta información debe valorarse junto con otros factores técnicamente relevantes y que un reporte negativo no puede constituir el único fundamento de una decisión crediticia (Ley 1266, 2008; Ley 2157, 2021).
          p Los datos suministrados pueden contrastarse mediante diferentes medios, de acuerdo con la información que se requiera comprobar:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 12.
                  span Verificación de información del cliente
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Información
                        th(style="width: 70%") Posible medio de verificación
                    tbody
                      tr
                        td Identificación
                        td Documento y mecanismos institucionales autorizados.
                      tr
                        td Ubicación del negocio
                        td Visita, soportes o registros disponibles.
                      tr
                        td Actividad económica
                        td Observación del establecimiento y documentos relacionados con la operación.
                      tr
                        td Antigüedad
                        td Soportes disponibles, referencias y demás fuentes permitidas.
                      tr
                        td Destino de los recursos
                        td Entrevista, cotizaciones u otros soportes cuando correspondan.
                      tr
                        td Información financiera o crediticia
                        td Fuentes autorizadas y consultas realizadas conforme con la normativa.
                      tr
                        td Datos declarados
                        td Comparación entre entrevista, documentos y demás evidencias recopiladas.
            //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Consistencia y registro de hallazgos
      //- Título nivel 3 - Imagen
      p.bg-color-2.p-4(data-aos="fade-left") La consistencia se establece cuando la información obtenida de diferentes fuentes guarda una relación razonable entre sí. Las diferencias relevantes deben aclararse y registrarse para conservar la trazabilidad de las verificaciones realizadas.
      p(data-aos="fade-left") La revisión debe considerar tanto la correspondencia entre los datos como el registro de las diferencias identificadas:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t4/img8.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Consistencia de la información
                    p.mb-0 La actividad, la ubicación y el destino de los recursos deben guardar coherencia con lo informado por el cliente y con las demás fuentes utilizadas.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t4/img9.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Registro de hallazgos
                    p.mb-0 Una diferencia importante debe aclararse y registrarse. No corresponde modificar u omitir datos para hacerlos coincidir; debe quedar constancia de la fuente utilizada y del resultado obtenido.
            //- Fin Tarjetas
            p(data-aos="fade-left") El siguiente caso permite reconocer cómo proceder ante una diferencia entre la información declarada y los soportes disponibles:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0.fw-bold Ejemplo aplicado: 
          <br>
          <br>
          p Una persona manifiesta que administra desde hace cinco años un pequeño taller y solicita financiación para adquirir herramientas. Durante la visita se confirma que la actividad existe, pero uno de los documentos suministrados presenta una fecha que no coincide con la antigüedad declarada.
          <br>
          p En lugar de concluir inmediatamente que la información es falsa, se solicita aclaración y se revisan los soportes adicionales previstos por el procedimiento. Si se determina que la diferencia corresponde a un cambio reciente de establecimiento, se registra la explicación y su evidencia. Si no puede aclarar, la inconsistencia debe quedar documentada para que sea considerada en la etapa correspondiente.
      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Clasificación y selección del cliente potencial
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img11.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-7.p-4 La clasificación organiza a los clientes potenciales según criterios previamente establecidos por la organización, mientras que la selección inicial determina cuáles reúnen las condiciones para continuar hacia el estudio de la solicitud. Esta selección permite avanzar al análisis de viabilidad, pero no significa que el crédito se encuentre aprobado.
          p Se invita a reproducir el siguiente video para conocer los criterios que orientan la clasificación y selección inicial del cliente potencial y su continuidad en el proceso:
      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema4',
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
