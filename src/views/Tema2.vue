<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Marco regulatorio y límites de actuación en microfinanzas
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-2 Las microfinanzas se desarrollan dentro de un marco normativo que determina las facultades de las entidades, las condiciones de las operaciones y la atención del consumidor financiero. Este tema aborda los principales referentes regulatorios, su relación con las políticas institucionales y los límites que orientan la gestión comercial y crediticia en Colombia.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img1.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Marco regulatorio de las microfinanzas
      p(data-aos="fade-left") El marco regulatorio de las microfinanzas reúne leyes, decretos e instrucciones que delimitan las actividades de las entidades, las operaciones de crédito y la protección del consumidor financiero. Comprenderlo requiere identificar qué disposiciones rigen cada institución y producto, y qué información debe recibir el cliente. El Decreto 2555 de 2010 constituye un referente reglamentario para esta labor, en la que participan entidades con naturalezas y regímenes diferentes.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales referentes normativos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La Ley 590 de 2000, el Decreto 2555 de 2010 y el Decreto 455 de 2023 cumplen funciones distintas en la gestión microfinanciera. Su lectura articulada permite reconocer la base legal del microcrédito y distinguirla de las modalidades de crédito productivo establecidas con fines regulatorios específicos. La función de cada disposición se relaciona con las operaciones de financiación y su clasificación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Ley 590 de 2000")
                p.mb-4 Esta ley contiene disposiciones para promover el desarrollo de las micro, pequeñas y medianas empresas. Su artículo 39 reguló los sistemas de microcrédito como mecanismos de financiamiento dirigidos a microempresas. También contempló actividades especializadas asociadas con estas operaciones: asesoría técnica al microempresario, visitas para verificar la actividad económica, estudio de la operación y verificación de referencias.
              .row(titulo="Decreto 2555 de 2010")
                p.mb-4 El Decreto 2555 de 2010 recopila disposiciones del sector financiero, asegurador y del mercado de valores. Define categorías de entidades, desarrolla reglas para establecimientos de crédito y operaciones activas. En microcrédito, remite al artículo 39 de la Ley 590 de 2000, por lo que ambas normas se interpretan conjuntamente.
              .row(titulo="Decreto 455 de 2023: modalidades")
                p.mb-4 El Decreto 455 de 2023 modificó el Decreto 2555 de 2010 y estableció modalidades para la certificación del interés bancario corriente por la Superintendencia Financiera de Colombia. Comprende crédito popular productivo rural y urbano, crédito productivo rural y urbano, y crédito productivo de mayor monto.
              .row(titulo="Decreto 455 de 2023: criterios y alcance")
                p.mb-4 La clasificación considera el destino productivo, el valor de la operación y, según la modalidad, la ubicación de la actividad económica. Estas categorías no eliminan el microcrédito de la Ley 590 de 2000: cada operación se analiza según su naturaleza y las disposiciones aplicables.
      //- Fin Accordion 1
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Supervisión y cumplimiento de la regulación
      //- Título nivel 3 - Imagen
      p.p-2.bg-color-3(data-aos="fade-left") La Superintendencia Financiera de Colombia inspecciona, vigila y controla las entidades sometidas a su supervisión, y expide instrucciones técnicas que deben cumplir junto con las leyes y los decretos aplicables. El Decreto 2555 de 2010 contiene disposiciones sobre la estructura y las funciones de esta autoridad. Por su parte, la Ley 1328 de 2009 creó un régimen de protección al consumidor financiero, desarrollado mediante instrucciones de la Superintendencia, que comprende la debida diligencia, la información, la atención al consumidor y el Sistema de Atención al Consumidor Financiero (SAC). Así, el cumplimiento normativo también abarca la forma en que se informa, orienta y atiende al cliente. 
      p(data-aos="fade-left") Los referentes descritos y su aplicación en la gestión microfinanciera se relacionan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 5.
                  span Referentes del marco regulatorio de las microfinanzas
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Referente
                        th(style="width: 40%") Aspecto principal
                        th(style="width: 35%") Aplicación en la gestión microfinanciera
                    tbody
                      tr
                        td Ley 590 de 2000
                        td Establece disposiciones sobre microempresas y sistemas de microcrédito.
                        td Permite reconocer la base legal del microcrédito y las actividades asociadas con su gestión.
                      tr
                        td Decreto 2555 de 2010
                        td Recopila y reglamenta disposiciones del sector financiero colombiano.
                        td Orienta la actuación de las entidades y las condiciones aplicables a diferentes operaciones financieras.
                      tr
                        td Decreto 455 de 2023
                        td Establece modalidades de crédito para la certificación de tasas de interés.
                        td Permite identificar categorías actuales de crédito productivo según monto, finalidad y ubicación.
                      tr
                        td Ley 1328 de 2009
                        td Regula la protección del consumidor financiero.
                        td Orienta la información, atención y protección que deben proporcionarse al cliente en entidades sujetas al régimen.
                      tr
                        td Instrucciones de la Superintendencia Financiera
                        td Desarrollan técnicamente disposiciones aplicables a las entidades vigiladas.
                        td Definen procedimientos y condiciones que deben incorporarse en la operación y control de las entidades supervisadas.
            //- FinTabla
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Regulación y actuación en la práctica
            //- Título nivel 3 - Imagen
            .row.mb-5.justify-content-center.align-items-start        
              .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mb-0.text-center
                  img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img3.png', alt='', style="max-width: 600px;")
              .col-12.col-lg-7(data-aos="fade-left")
                p.mb-3.bg-color-5.p-3 La atención de una solicitud financiera debe ajustarse a las normas aplicables y a los procedimientos autorizados por la organización. Por ello, no corresponde modificar libremente las condiciones de una operación, clasificar un crédito sin considerar los criterios normativos, omitir información relevante sobre el producto ni comprometer su aprobación antes de efectuar las verificaciones establecidas. 
                p La regulación externa y las políticas institucionales cumplen funciones complementarias:
            //- Inicio Tarjetas
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta00_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Regulación externa
                    p.mb-0 Establece las condiciones jurídicas generales que la organización debe respetar al ofrecer productos y atender operaciones financieras.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta00_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Políticas institucionales
                    p.mb-0 Concretan esas disposiciones y los criterios propios de administración del riesgo en procedimientos para la operación cotidiana.
            //- Fin Tarjetas
            p.bg-color-7.p-4(data-aos="fade-left") Una actuación permitida por la regulación puede estar sujeta a requisitos adicionales definidos por la entidad. Por eso, ambas clases de reglas deben considerarse al orientar al cliente.
            p.mb-5(data-aos="fade-left") Las condiciones de una solicitud dependen de la regulación y de los procedimientos institucionales. El siguiente ejemplo aplicado permite relacionar ambos criterios:
            .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img4.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 <b>Ejemplo aplicado:</b>
                <br>
                <br>
                p Una comerciante solicita financiación para incrementar las existencias de su establecimiento y pregunta al analista cuál será la tasa, cuánto dinero puede recibir y si el crédito puede ser aprobado ese mismo día. La respuesta no puede depender únicamente de la intención de facilitar la operación. Primero deben identificarse las características de la solicitud, la modalidad que corresponde, las condiciones establecidas por la entidad y las disposiciones aplicables a tasas, información al consumidor y análisis de la operación.
                <br>
                p.mb-0 En este caso, el marco regulatorio funciona como un límite y, al mismo tiempo, como una guía para la actuación. Permite determinar qué reglas deben observarse, qué información puede comunicarse al cliente y cuáles decisiones requieren el cumplimiento previo de procedimientos institucionales. De esta manera, conocer la regulación contribuye a que la gestión microfinanciera se realice de forma ordenada, verificable y coherente con las disposiciones vigentes.
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Normatividad aplicable a las operaciones microfinancieras
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img5.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-2.p-2 Las operaciones microfinancieras deben desarrollarse según la naturaleza del producto, las características del cliente y las disposiciones aplicables a la entidad. Antes de orientar una solicitud de crédito, es necesario identificar la finalidad de los recursos, el monto y las condiciones de la operación, pues estos elementos permiten establecer su clasificación y aplicar los parámetros normativos correspondientes.
          p Los siguientes aspectos permiten reconocer cómo la normatividad incide en la clasificación y las condiciones de las operaciones microfinancieras:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Microcrédito y financiación de la microempresa
                p La Ley 590 de 2000 reconoce el microcrédito como un sistema de financiamiento dirigido a microempresas. El Decreto 222 de 2020 relaciona estas operaciones con microempresas cuya principal fuente de pago proviene de los ingresos derivados de su actividad (Ley 590, 2000; Decreto 222, 2020).                 
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Modalidades de crédito productivo
                p El Decreto 455 de 2023 diferencia modalidades de crédito productivo principalmente según el monto y, cuando corresponde, la ubicación rural o urbana. Estas categorías no sustituyen el concepto de microcrédito y se utilizan, entre otros fines, para la certificación del interés bancario corriente (Decreto 455, 2023).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Tasas de interés y clasificación de la operación
                p La modalidad de crédito determina cuál certificación del interés bancario corriente debe consultarse. Debido a que esta información se actualiza periódicamente, la clasificación debe establecerse y la certificación vigente verificarse antes de comunicar al cliente las condiciones de la operación.
      //- Fin Slideshow
      p(data-aos="fade-left") Para profundizar en la clasificación del crédito productivo y la consulta de las tasas de interés, se presenta el siguiente documento complementario:
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12        
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-4.p-4.rounded-4
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/icono-pdf.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              h4.mb-2(style="color:#5cdbc1")  Normatividad aplicable a las operaciones microfinancieras
              p.mb-0.text-white Explica las modalidades de crédito productivo, su clasificación según el monto y la ubicación, y cómo consultar la certificación vigente de las tasas de interés. Incluye un caso de financiación de una actividad productiva rural.
            .mt-3.mt-lg-0.ps-lg-4            
              a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexos/Anexo_02_Normatividad_Aplicable_Operaciones_Microfinancieras.pdf')" target="_blank")
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Políticas institucionales aplicables al microcrédito
      p(data-aos="fade-left") Las políticas institucionales convierten la regulación en criterios y procedimientos para atender y estudiar solicitudes. En las entidades vigiladas, el Sistema de Atención al Consumidor Financiero (SAC) incorpora políticas, controles, mecanismos de información y capacitación para proteger al consumidor durante la prestación del servicio (Ley 1328, 2009).
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre regulación y política institucional
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La regulación determina las condiciones que deben cumplirse obligatoriamente, mientras que las políticas institucionales establecen cómo actúa cada organización dentro de esos límites. Así, una norma puede definir una modalidad de crédito y sus reglas generales, mientras la entidad establece aspectos como los documentos requeridos, los responsables de la verificación, las zonas donde opera, los criterios de aceptación y los niveles internos de aprobación. Esta relación permite distinguir las decisiones propias de cada entidad y su función dentro de la gestión microcrediticia:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Procedimientos institucionales")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/pestana01.png')
              .col-md-6
                h4 Procedimientos institucionales
                p Dos entidades pueden atender el mismo segmento mediante procedimientos diferentes. Una puede exigir determinado tiempo de funcionamiento del negocio o limitar su operación a ciertos municipios, mientras otra puede utilizar una metodología o cobertura distinta.
          .py-3.py-md-4(titulo="Aplicación consistente")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/pestana02.png')
              .col-md-6
                h4 Aplicación consistente
                p Las diferencias entre procedimientos no implican necesariamente un apartamiento de la regulación. Lo fundamental es que las políticas sean conocidas por quienes intervienen en el proceso y se apliquen de manera consistente.
          .py-3.py-md-4(titulo="Control del riesgo")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/pestana03.png')
              .col-md-6
                h4 Control del riesgo
                p Antes de tramitar una operación debe comprobarse que el solicitante pertenece al segmento atendido, que su necesidad corresponde a los productos disponibles y que se dispone de la información mínima exigida para avanzar.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Estas comprobaciones orientan la gestión inicial y contribuyen al control del riesgo, pero no determinan la viabilidad del crédito, cuya decisión se realiza posteriormente mediante el análisis correspondiente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ámbitos de las políticas institucionales de microcrédito
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las políticas institucionales abarcan diferentes aspectos de la gestión, desde la definición de los clientes y territorios atendidos hasta las acciones posteriores al otorgamiento. Estos criterios permiten establecer las condiciones bajo las cuales se desarrolla el proceso microcrediticio. Los principales ámbitos de las políticas institucionales y su aplicación durante la atención microcrediticia se presentan seguidamente:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 6.
                  span Ámbitos de las políticas institucionales de microcrédito
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Política
                        th(style="width: 70%") Aplicación práctica
                    tbody
                      tr
                        td Mercado objetivo
                        td Establece qué segmentos de clientes y actividades económicas atiende la organización.
                      tr
                        td Cobertura geográfica
                        td Define municipios, zonas o territorios donde se ofrece el servicio.
                      tr
                        td Productos y montos
                        td Determina las alternativas de financiación y sus condiciones generales.
                      tr
                        td Requisitos de vinculación
                        td Establece la información y documentación requerida para iniciar el proceso.
                      tr
                        td Verificación
                        td Define procedimientos para comprobar información del cliente y de la actividad económica.
                      tr
                        td Niveles de aprobación
                        td Identifica quiénes están facultados para recomendar, aprobar o negar una operación.
                      tr
                        td Seguimiento
                        td Determina las acciones que deben realizarse una vez otorgado el crédito.
            //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Políticas e información al cliente
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") En las entidades vigiladas, la Ley 1328 de 2009 exige brindar información cierta, suficiente y oportuna al consumidor financiero. Durante la orientación, debe diferenciarse la información que puede proporcionarse de los resultados sujetos a verificaciones o decisiones posteriores (Ley 1328, 2009):
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta02_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Información que puede proporcionarse
                    p.mb-0 Quien realiza la orientación puede explicar los requisitos, las condiciones generales y las etapas del procedimiento que debe seguir la solicitud.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t2/tarjeta02_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Resultados que no deben anticiparse
                    p.mb-0 No corresponde afirmar que el crédito está aprobado ni asegurar un monto cuando todavía deben aplicarse las políticas de evaluación establecidas por la organización.
            //- Fin Tarjetas
            p(data-aos="fade-left") El siguiente caso ejemplifica cómo las políticas institucionales orientan la actuación durante la atención inicial de una solicitud:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-2.fw-bold Ejemplo
          <br>
          <br>
          p Una persona dedicada a la comercialización de ropa solicita financiación para comprar mercancía. Durante la atención se identifica que desarrolla su negocio en un municipio cubierto por la entidad y que su actividad hace parte del mercado objetivo. Sin embargo, todavía deben recopilarse y verificarse los datos definidos en las políticas institucionales antes de que la solicitud pueda avanzar hacia su evaluación.
          <br>
          <br>
          p En esta situación, la función inicial consiste en explicar el procedimiento, verificar el cumplimiento de los requisitos básicos y registrar correctamente la información. No corresponde modificar las condiciones para facilitar la vinculación ni anticipar una aprobación. La política institucional funciona así como una guía que permite desarrollar el proceso de forma uniforme y dentro de las facultades asignadas.
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Límites de actuación en la gestión microfinanciera
      p(data-aos="fade-left") Los límites de actuación indican qué puede hacer cada persona durante la atención de una solicitud y cuáles decisiones corresponden a otras instancias. Se establecen a partir de la regulación, las funciones asignadas y las políticas y procedimientos de la entidad. Su aplicación evita compromisos o decisiones que excedan las facultades asignadas y orienta el manejo de la información del cliente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Límites frente a la información suministrada
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img7.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-2.p-3 La información suministrada constituye uno de los límites de la actuación microfinanciera. En las entidades vigiladas por la Superintendencia Financiera de Colombia, debe ser cierta, suficiente y oportuna, e incluir las características del producto, los derechos y obligaciones, los costos y demás condiciones necesarias para comprender la relación financiera y tomar decisiones informadas (Ley 1328, 2009). 
          p Durante la orientación al consumidor financiero deben tenerse en cuenta los siguientes límites:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-3(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta03_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Información verificable
              p.mb-0 Se deben comunicar únicamente condiciones ciertas y verificables, evitando presentar como definitiva aquella información que todavía se encuentre sujeta a evaluación.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta03_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Costos y condiciones
              p.mb-0 No deben ocultarse costos relevantes ni ofrecer beneficios que no correspondan a las características y condiciones reales del producto.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta03_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Expectativas de aprobación
              p.mb-0 La información suministrada no debe llevar al cliente a interpretar que la aprobación de la solicitud es automática cuando depende de evaluaciones posteriores.
      //- Fin Tarjetas
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Límites frente al manejo de información personal y crediticia
      //- Título nivel 3 - Imagen
      p.mb-5(data-aos="fade-left") La Circular Básica Jurídica de la Superintendencia Financiera establece reglas específicas sobre información, publicidad y protección del consumidor financiero. Su versión fue reexpedida mediante la Circular Externa 006 de 2025 (Superintendencia Financiera de Colombia, 2025).
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-3.p-3 La gestión microfinanciera implica recopilar información personal, económica y, en determinados procesos, financiera y crediticia. Su tratamiento y utilización deben responder a las finalidades permitidas y cumplir las condiciones establecidas por la regulación.
          p Los principales límites para el manejo de la información y documentación del cliente son los siguientes:
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img8.png', alt='', style="max-width: 800px;")
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Información personal")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/pestana01.png')
              .col-md-6
                h4 Información personal
                p La información personal debe recopilarse y utilizarse únicamente conforme con la finalidad y la regulación aplicables. La Ley 1581 de 2012 reconoce los derechos del titular a conocer, actualizar y rectificar sus datos y exige su autorización cuando corresponda (Ley 1581, 2012).
          .py-3.py-md-4(titulo="Información crediticia")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/pestana02.png')
              .col-md-6
                h4 Información crediticia
                p La información financiera, crediticia, comercial y de servicios debe consultarse para las finalidades permitidas y valorarse junto con otros elementos técnicamente relevantes. Una decisión de crédito no puede sustentarse exclusivamente en un reporte negativo (Ley 1266, 2008; Ley 2157, 2021).
          .py-3.py-md-4(titulo="Documentos del cliente")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t2/pestana03.png')
              .col-md-6
                h4 Documentos del cliente
                p Los documentos suministrados durante la gestión deben mantenerse bajo condiciones de confidencialidad y manejarse conforme con los controles institucionales establecidos para su custodia.
      //- Cierres Pestanas horizontales
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Autoridad y responsabilidad dentro del proceso
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img9.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-5.p-4 La separación de funciones permite distribuir las responsabilidades entre quienes intervienen en la gestión microfinanciera y evita que una sola persona concentre todas las etapas. Así, una persona puede promocionar el producto y recopilar información, otra verificar los datos y una instancia diferente adoptar la decisión final.
          p Las actuaciones deben mantenerse dentro de las atribuciones asignadas y seguir los procedimientos establecidos por la entidad:
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
                      h4 Aplicar los requisitos establecidos
                      p Los requisitos definidos por la organización deben aplicarse sin crear excepciones no autorizadas. Si una condición no está contemplada en el procedimiento, no corresponde resolverla mediante criterios personales.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_1.png', alt='').img125
                  //- PASO 2
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_2.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Mantener las condiciones autorizadas
                      p Las tasas, los costos y demás condiciones aplicables no deben modificarse por iniciativa propia. Cualquier cambio debe corresponder a las facultades y procedimientos definidos por la entidad.
                  //- PASO 3
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Respetar los niveles de decisión
                      p La recopilación o verificación de información no otorga facultad para aprobar el crédito. No debe anticiparse una decisión que corresponda a otra instancia.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_3.png', alt='').img125
                  //- PASO 4
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta05_4.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Remitir situaciones para revisión
                      p Cuando exista información contradictoria, un documento no cumpla los requisitos o se presente una situación no contemplada, debe registrarse y remitirse o escalarse al responsable correspondiente.
            //- Fin Linea de tiempo
      p(data-aos="fade-left") El siguiente caso permite aplicar los límites de actuación ante solicitudes que exceden las atribuciones asignadas:
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3.fw-bold Ejemplo aplicado:
          p.mb-2 Durante una visita a un pequeño taller, el propietario solicita que se aumente el monto inicialmente contemplado y manifiesta que entregará después algunos documentos faltantes. También pide que se le confirme inmediatamente que el crédito será aprobado.
          p.mb-0 En esta situación, deben explicarse las etapas del proceso y mantenerse las condiciones establecidas por la organización. Si el monto solicitado requiere otro nivel de evaluación, debe tramitarse mediante el procedimiento correspondiente; si existen documentos pendientes, deben obtenerse conforme con los requisitos establecidos; y no debe anunciarse una aprobación hasta que la instancia competente adopte la decisión. Reconocer estos límites protege tanto al cliente como a la organización.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img10.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Aplicación del marco regulatorio y de las políticas vigentes
      p(data-aos="fade-left") Aplicar el marco regulatorio y las políticas vigentes implica convertir las disposiciones legales y los lineamientos institucionales en actuaciones concretas durante la atención del cliente. Para ello, se deben identificar las reglas pertinentes según cada situación y aplicarlas en la clasificación de la operación, la información suministrada, el tratamiento de los datos y el cumplimiento de los procedimientos establecidos.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 De la norma al procedimiento
      //- Título nivel 3 - Imagen
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img11.png')})` }")
        .bloque-texto-g__texto.p-4
          p La aplicación del marco regulatorio y de las políticas institucionales requiere identificar la necesidad del cliente y el producto que podría atenderla, verificar que la operación corresponda al mercado, territorio y condiciones de la entidad, y recopilar la información exigida antes de continuar con el análisis. Cuando se trate de financiación productiva, también debe determinarse la modalidad aplicable y consultar información actualizada sobre tasas y condiciones regulatorias, debido a que algunos valores y parámetros pueden cambiar con el tiempo.
          <br>
      p(data-aos="fade-left") Las principales verificaciones que permiten relacionar la regulación y las políticas institucionales con una solicitud son las siguientes:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 7.
                  span Verificación del marco regulatorio y las políticas institucionales
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Verificación
                        th(style="width: 70%") Pregunta práctica
                    tbody
                      tr
                        td Naturaleza de la entidad
                        td ¿Qué operaciones se encuentra facultada para realizar?
                      tr
                        td Mercado objetivo
                        td ¿El solicitante corresponde al segmento atendido?
                      tr
                        td Cobertura
                        td ¿La actividad se encuentra dentro del territorio definido?
                      tr
                        td Producto
                        td ¿La necesidad puede ser atendida mediante la alternativa ofrecida?
                      tr
                        td Clasificación
                        td ¿Cuál modalidad corresponde según las características de la operación?
                      tr
                        td Información al cliente
                        td ¿Se explicaron condiciones, costos, requisitos y procedimiento?
                      tr
                        td Datos personales
                        td ¿La información se está recopilando y utilizando conforme con la regulación?
                      tr
                        td Facultades internas
                        td ¿La actuación corresponde al nivel de autorización asignado?
            //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Coherencia entre norma, política y actuación
      //- Título nivel 3 - Imagen
      p.bg-color-7.p-4(data-aos="fade-left") Una política institucional no puede desconocer una obligación legal; a su vez, que una operación sea jurídicamente posible no implica que todas las entidades deban ofrecer, pues cada organización define su mercado, productos, procedimientos y criterios dentro del marco aplicable.
      p(data-aos="fade-left") La coherencia de la actuación puede comprenderse a partir de tres niveles:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-3(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta06_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Norma
              p.mb-0.text-center Determina las condiciones obligatorias que deben respetarse.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta06_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Política institucional
              p.mb-0.text-center Establece cómo opera la entidad dentro de esas condiciones.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta06_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Procedimiento
              p.mb-0.text-center Define los pasos concretos que deben seguirse.
      //- Fin Tarjetas
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img12.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-5.p-4 La actuación debe guardar coherencia entre la norma, la política institucional y el procedimiento.
          p El siguiente caso permite aplicar conjuntamente la regulación, las políticas institucionales y los procedimientos durante una solicitud:
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img13.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-2.fw-bold Ejemplo
          <br>
          <br>
          p Una comerciante ubicada en una zona urbana solicita financiación para adquirir mercancías. Durante la atención se identifica el destino productivo de los recursos, el monto requerido y la actividad desarrollada. Posteriormente se verifica que se encuentra dentro del mercado y la cobertura establecidos por la entidad.
          <br>
          <br>
          p El proceso continúa con la explicación de las condiciones generales, la recopilación autorizada de información y la aplicación de los requisitos definidos. Si la solicitud cumple las condiciones iniciales, podrá continuar hacia las siguientes etapas; esto todavía no representa una aprobación. De esta manera, regulación y política institucional se convierten en criterios concretos para orientar la actuación desde el primer contacto con el cliente.
</template>

<script>
export default {
  name: 'Tema2',
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
<style lang="sass"></style>
