<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de las microfinanzas y el microcrédito
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las personas y las unidades productivas presentan necesidades financieras vinculadas con sus condiciones económicas y actividades. Este tema aborda el alcance de las microfinanzas, el concepto y las características del microcrédito, las diferencias entre ambos, las particularidades del segmento microfinanciero y las entidades que participan en él. Estos fundamentos orientan la identificación de soluciones pertinentes.
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Fundamentos y concepto de las microfinanzas
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img2.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-3.p-3 Las microfinanzas reúnen productos, servicios, canales y metodologías para atender necesidades de personas y pequeñas unidades productivas. Su orientación requiere conocer cómo funciona la actividad económica, de dónde provienen los ingresos y qué necesita el cliente para administrar recursos, realizar pagos, protegerse o financiar su operación.
          p Para relacionar las soluciones con cada situación, se presentan el alcance, las necesidades, la inclusión financiera y una aplicación práctica:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Concepto y alcance de las microfinanzas
                p Las microfinanzas abarcan productos, servicios, canales y metodologías ajustados a personas y unidades productivas. Banca de las Oportunidades incluye depósitos, financiación, pagos, transferencias, giros, remesas y seguros entre los servicios financieros disponibles según la autorización de cada entidad (Banca de las Oportunidades, s. f.-a).                   
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Microfinanzas y necesidades de la actividad económica
                p Una unidad productiva puede necesitar recursos para insumos o equipos, medios para recibir pagos y mecanismos para administrar dinero. La solución depende de la finalidad de cada necesidad, la forma de generar ingresos y el funcionamiento de la actividad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Microfinanzas e inclusión financiera
                p Las microfinanzas favorecen el acceso y uso de servicios adecuados. La distancia, los requisitos y los costos pueden limitar esa inclusión. Trujillo y Navajas (2016) documentan brechas regionales de acceso y uso; la orientación considera las condiciones del cliente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Características fundamentales del enfoque microfinanciero
                p El enfoque microfinanciero adapta los servicios a las condiciones de las personas y unidades productivas. Requiere conocer su actividad, identificar necesidades y reunir información suficiente para orientar la vinculación y, cuando corresponda, evaluar una solicitud de financiación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aplicación práctica del concepto
                p Una panadería recibe ingresos diarios, compra insumos y paga a proveedores. Cuando aumenta la demanda, puede requerir más materias primas o un equipo. La orientación identifica cada necesidad y la dinámica del negocio antes de relacionarlas con soluciones financieras.
      //- Fin Slideshow
      p(data-aos="fade-left") Se invita a consultar el siguiente material para profundizar en las necesidades de los micronegocios, la inclusión financiera y las características del enfoque microfinanciero:
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-12        
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-4.p-4.rounded-4
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/icono-pdf1.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              h4.mb-2(style="color:#5cdbc1") Microfinanzas y necesidades financieras de los micronegocios
              p.mb-0.text-white El documento profundiza en las necesidades financieras de los micronegocios, la inclusión financiera y los elementos del enfoque microfinanciero. Incluye tablas y un caso aplicado a una panadería.
            .mt-3.mt-lg-0.ps-lg-4            
              a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexos/Anexo_01_Microfinanzas_Necesidades_Financieras.pdf')" target="_blank")
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Concepto y características del microcrédito
      p(data-aos="fade-left") El microcrédito financia actividades económicas de pequeña escala y necesidades de operación o fortalecimiento de una microempresa, como la compra de mercancías, materias primas, herramientas o equipos. Su análisis relaciona el destino de los recursos con la actividad que genera los ingresos para atender la obligación. El contexto colombiano y la clasificación de la financiación se relacionan en estos aspectos:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="El microcrédito en el contexto colombiano")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_1.png')
              .col-md-6
                h4 El microcrédito en el contexto colombiano
                p En Colombia, la Ley 590 de 2000 define el microcrédito como un sistema de financiamiento dirigido a microempresas. Su gestión puede requerir el estudio de la operación, asesoría técnica relacionada con la actividad, verificación de referencias y visitas para conocer la unidad productiva.
          .py-3.py-md-4(titulo="Fuente de pago y viabilidad")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_2.png')
              .col-md-6
                h4 Fuente de pago y viabilidad
                p Como el pago proviene principalmente de los ingresos del negocio, se consideran su funcionamiento, los ciclos de venta y la periodicidad de los ingresos. La evaluación detallada de estas condiciones corresponde al análisis posterior de viabilidad del crédito.
          .py-3.py-md-4(titulo="Microcrédito y crédito productivo")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_3.png')
              .col-md-6
                h4 Microcrédito y crédito productivo
                p El Decreto 455 de 2023 distingue el crédito popular productivo rural y urbano, el crédito productivo rural y urbano y el crédito productivo de mayor monto. Las modalidades se diferencian principalmente por el monto y, cuando corresponde, por la ubicación.
          .py-3.py-md-4(titulo="Clasificación y orientación")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_4.png')
              .col-md-6
                h4 Clasificación y orientación
                p El acreedor clasifica e informa al deudor al aprobar la operación. Estas modalidades sirven, entre otros fines, para certificar tasas de interés sin sustituir la regulación del microcrédito de la Ley 590 de 2000. La orientación considera características del cliente, finalidad y modalidad asignada.
      //- Cierres Pestanas horizontales
      p.mb-5(data-aos="fade-left") Las características del microcrédito y su aplicación en la atención del cliente se relacionan así:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 1.
                  span Características generales del microcrédito
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Característica
                        th(style="width: 80%") Aplicación en la gestión microcrediticia
                    tbody
                      tr
                        td Orientación productiva
                        td Los recursos se relacionan con el desarrollo o fortalecimiento de una actividad económica.
                      tr
                        td Conocimiento del negocio
                        td Se identifica qué actividad realiza el cliente y cómo genera sus ingresos.
                      tr
                        td Fuente de pago
                        td Se considera principalmente la capacidad de la actividad económica para generar recursos destinados al pago.
                      tr
                        td Información del cliente
                        td Se recopilan y verifican datos personales, comerciales y relacionados con la unidad productiva.
                      tr
                        td Metodología especializada
                        td Puede incluir visitas, referencias, asesoría y verificación directa de la actividad.
                      tr
                        td Seguimiento
                        td La relación con el cliente puede continuar durante la vigencia de la obligación para conocer su comportamiento y evolución.
              //- FinTabla
      p(data-aos="fade-left") La siguiente situación permite relacionar el destino de los recursos con la actividad económica y la fuente de pago:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img3.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-2.fw-bold Ejemplo
          <br>
          <br>
          p Una persona propietaria de una pequeña tienda solicita financiación para aumentar el inventario antes de una temporada de mayores ventas. Para orientar inicialmente la solicitud no basta con conocer el monto requerido. Es necesario identificar la actividad desarrollada, el destino que tendrán los recursos, la forma en que se generan las ventas y la información disponible sobre el funcionamiento del negocio.
          <br>
          <br>
          p En este caso, el propósito productivo de la financiación y la relación entre los ingresos del negocio y el pago de la obligación son elementos propios del análisis microcrediticio. Posteriormente, la entidad deberá verificar la información, aplicar sus políticas institucionales y determinar la clasificación y viabilidad de la operación. De esta manera, el microcrédito se comprende como un proceso de financiación asociado directamente con la realidad económica del cliente y no únicamente como un préstamo de bajo monto.
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Diferencias entre microfinanzas y microcrédito
      p(data-aos="fade-left") Las microfinanzas y el microcrédito se relacionan, pero tienen alcances distintos. Las primeras comprenden soluciones para diferentes necesidades financieras; el segundo corresponde a una alternativa de financiación dirigida a microempresas. Esta distinción permite reconocer la necesidad de cada cliente y orientar un producto o servicio pertinente.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alcance de las microfinanzas frente al microcrédito
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Cada concepto atiende necesidades distintas y requiere una orientación acorde con su alcance:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Microfinanzas")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_1.png')
              .col-md-6
                h4 Microfinanzas
                p Las microfinanzas abarcan soluciones para guardar ingresos, pagar proveedores, recibir transferencias, proteger determinados riesgos o financiar compras de mercancías. Banca de las Oportunidades incluye entre los servicios financieros productos de ahorro, pagos, transferencias, giros, remesas, distintas modalidades de crédito y seguros. La atención microfinanciera puede desarrollarse sin que el cliente adquiera una deuda (Banca de las Oportunidades, s. f.-a).
          .py-3.py-md-4(titulo="Microcrédito")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_2.png')
              .col-md-6
                h4 Microcrédito
                p El microcrédito atiende una necesidad de financiación vinculada con una microempresa. La Ley 590 de 2000 lo define como un sistema de financiamiento dirigido a estas unidades y contempla asesoría técnica, visitas y verificación para estudiar la operación. Cuando se otorga, genera una obligación que debe pagarse según las condiciones acordadas.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Las principales diferencias de alcance, productos, análisis y finalidad se relacionan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 2.
                  span Diferencias entre microfinanzas y microcrédito
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Aspecto
                        th(style="width: 40%") Microfinanzas
                        th(style="width: 40%") Microcrédito
                    tbody
                      tr
                        td Alcance
                        td Comprenden diferentes productos y servicios financieros.
                        td Corresponde específicamente a una alternativa de financiación.
                      tr
                        td Necesidad atendida
                        td Puede responder a necesidades de ahorro, pagos, transferencias, financiación o protección, entre otras.
                        td Atiende una necesidad de recursos vinculada con una microempresa.
                      tr
                        td Productos
                        td Puede incluir depósitos, créditos, pagos, transferencias, giros, remesas y seguros.
                        td Se materializa mediante una operación de crédito.
                      tr
                        td Relación con el cliente
                        td Puede existir sin que el cliente adquiera una deuda.
                        td Genera una obligación que debe ser pagada en las condiciones acordadas.
                      tr
                        td Análisis requerido
                        td Depende del producto o servicio solicitado.
                        td Requiere estudiar al solicitante, la actividad económica y las condiciones de la operación.
                      tr
                        td Finalidad
                        td Facilitar soluciones financieras acordes con las necesidades del cliente.
                        td Proporcionar financiación para la actividad microempresarial.
            //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre ambos conceptos
      //- Título nivel 3 - Imagen
      p.mb-5(data-aos="fade-left") El microcrédito puede formar parte de las microfinanzas cuando la necesidad identificada corresponde a financiación. La relación entre ambos conceptos depende de la finalidad del servicio que requiere el cliente. La relación entre las soluciones disponibles y la elección de un crédito se presenta en tres ideas: 
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta04_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Servicios sin financiación
              p.mb-0 Una persona puede utilizar productos de depósito o canales de pago y transferencia sin solicitar financiación. La atención microfinanciera no siempre origina deuda.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta04_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Microcrédito dentro de las microfinanzas
              p.mb-0 El microcrédito forma parte de las soluciones microfinancieras cuando una microempresa necesita financiación. Su orientación exige identificar la finalidad de los recursos.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t1/tarjeta04_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Selección según la necesidad
              p.mb-0 Banca de las Oportunidades recomienda identificar la necesidad y el uso de los recursos antes de seleccionar un crédito. También se evalúan tasa, plazo y pago (Valderrama Casas, 2021).
      //- Fin Tarjetas
      p.mb-5(data-aos="fade-left") Las necesidades de una pequeña tienda permiten aplicar la relación entre servicios financieros y financiación:
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3.fw-bold Ejemplo aplicado
          p.mb-2 Una persona que posee una pequeña tienda recibe diariamente pagos por sus ventas y necesita organizar mejor el manejo del dinero. Además, realiza transferencias periódicas a sus proveedores y desea disponer de recursos adicionales para incrementar el inventario durante una temporada de mayor demanda.
          p.mb-0 Desde una perspectiva microfinanciera se identifican varias necesidades: administrar los ingresos, realizar pagos y obtener financiación. Los productos de depósito y los mecanismos de transferencia corresponden al ámbito general de las microfinanzas; si posteriormente se estudia una operación destinada a financiar el inventario de la microempresa, el análisis se centra en el microcrédito.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img4.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Características del segmento microfinanciero
      p(data-aos="fade-left") El segmento microfinanciero reúne personas y unidades productivas vinculadas con la agricultura, la manufactura, el comercio, la construcción, el transporte y los servicios. Atender sus necesidades financieras requiere conocer cómo funciona cada actividad, de dónde provienen sus ingresos y qué condiciones territoriales influyen en su relación con las entidades financieras.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diversidad de las unidades económicas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las unidades productivas del segmento no responden a un único modelo. El DANE utiliza la Encuesta de Micronegocios (EMICRON) para estudiar unidades económicas con hasta nueve personas ocupadas y analizar su actividad, ubicación, personal, uso de tecnologías, inclusión financiera, costos, gastos, activos, ventas e ingresos. Estas variables permiten reconocer diferencias de sector, tamaño y necesidades financieras. Las diferencias en ingresos, gastos y necesidades de financiación se reflejan en actividades como las siguientes:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta05_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Tienda de barrio
                            p Una tienda de barrio registra ventas diarias y requiere reposición frecuente de inventario. Estas condiciones influyen en sus gastos y necesidades de financiación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta05_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Actividad agrícola
                            p Una actividad agrícola puede concentrar sus ingresos después de la cosecha. La periodicidad de esos ingresos orienta la recopilación de información.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta05_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Taller
                            p Un taller puede depender de órdenes de servicio y compras de repuestos. Estas condiciones inciden en sus ingresos y gastos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta05_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Unidad dedicada a alimentos
                            p Una unidad dedicada a alimentos puede combinar compra de materias primas, transformación y venta directa. Estas operaciones inciden en sus gastos e ingresos.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t1/img5.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      p(data-aos="fade-left") La actividad económica y sus ciclos de venta o producción también determinan qué información debe recopilarse del cliente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información y conocimiento del negocio
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los micronegocios no siempre cuentan con información financiera organizada de la misma manera. Identificar los registros disponibles y verificar la coherencia de los datos permite comprender la actividad económica antes de avanzar hacia procesos de selección o evaluación crediticia. La información del negocio se reúne mediante los registros disponibles y se contrasta con otras fuentes:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Formas de registro")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_1.png')
              .col-md-6
                h4 Formas de registro
                p Algunos negocios llevan registros organizados de ventas, compras y gastos; otros utilizan libretas, hojas de cálculo, cajas registradoras o mecanismos sencillos de control. La EMICRON incluye entre sus variables la forma en que los micronegocios llevan sus cuentas. Por ello, la atención considera las fuentes de información disponibles en cada caso (DANE, 2026).
          .py-3.py-md-4(titulo="Recopilación y verificación")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_2.png')
              .col-md-6
                h4 Recopilación y verificación
                p La información suministrada por el cliente se relaciona con el funcionamiento del negocio, los documentos disponibles, las referencias y los demás mecanismos definidos por la entidad. Su recopilación y verificación buscan obtener datos suficientes y coherentes para comprender la actividad económica antes de los procesos posteriores de selección o evaluación crediticia.
      //- Cierres Pestanas horizontales
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Condiciones territoriales y de acceso
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las distancias, la disponibilidad de oficinas o corresponsales, la conectividad y el uso de canales digitales influyen en el acceso a servicios financieros en ciudades, municipios intermedios y zonas rurales. El <i>Reporte de Inclusión Financiera 2025</i> analiza la cobertura territorial, el acceso y uso de productos, el crédito y la transaccionalidad en Colombia (Banca de las Oportunidades & Superintendencia Financiera de Colombia, 2026); estos aspectos permiten reconocer diferencias entre territorios y poblaciones. Las características del segmento y sus implicaciones para la atención se sintetizan en la siguiente tabla:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 3.
                  span Características del segmento microfinanciero
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Característica
                        th(style="width: 70%") Implicación en la atención microfinanciera
                    tbody
                      tr
                        td Diversidad de actividades económicas
                        td Requiere conocer cómo funciona cada negocio y de dónde provienen sus ingresos.
                      tr
                        td Pequeña escala de operación
                        td Demanda productos y procedimientos acordes con el tamaño y dinámica de la unidad productiva.
                      tr
                        td Diferentes formas de registro
                        td Hace necesario identificar y verificar las fuentes disponibles de información económica.
                      tr
                        td Ingresos con distinta periodicidad
                        td Requiere reconocer los ciclos de venta, producción o prestación del servicio.
                      tr
                        td Diversidad territorial
                        td Exige considerar condiciones urbanas, rurales, conectividad y disponibilidad de canales.
                      tr
                        td Necesidades financieras particulares
                        td Implica orientar el producto o servicio de acuerdo con la situación concreta del cliente.
            //- FinTabla
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img6.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-2.p-3 La gestión microfinanciera requiere conocer el mercado y al cliente. Un mismo procedimiento comercial no responde por igual a una actividad agrícola, una tienda, un taller o una prestación de servicios. El sector, la ubicación, la forma de generar ingresos y la información disponible constituyen la base para orientar la atención en cada caso.
          p La caracterización requiere identificar ingresos, registros y canales de comercialización antes de orientar un producto financiero. Una actividad de confección reúne estos aspectos:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p.fw-bold Ejemplo aplicado
          <br>
          <br>
          p una persona desarrolla una actividad de confección desde su vivienda y comercializa sus productos directamente y a través de redes sociales. Sus ingresos cambian de acuerdo con los pedidos y las temporadas, utiliza una libreta para registrar las ventas y realiza parte de las compras de materiales en efectivo. Además, no dispone de estados financieros formales.
          <br>
          <br>
          p La atención dentro del segmento microfinanciero requiere reconocer estas condiciones antes de orientar cualquier producto. Se debe identificar cómo funciona la actividad, cuál es la periodicidad de los pedidos, qué información existe sobre ingresos y gastos, qué canales utiliza y cuáles son sus necesidades financieras reales. Este conocimiento permite caracterizar adecuadamente al cliente y preparar la información que posteriormente será utilizada en los procesos de selección y análisis establecidos por la entidad.
      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Entidades financieras vinculadas al segmento de las microfinanzas
      p(data-aos="fade-left") En Colombia, distintas entidades y organizaciones atienden necesidades microfinancieras. Antes de orientar a un cliente, se requiere identificar la naturaleza de la institución, los |productos y operaciones que puede ofrecer, sus requisitos de vinculación y la autoridad que la supervisa, cuando corresponda.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Participantes del segmento microfinanciero
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los reportes de inclusión financiera en Colombia incluyen información de establecimientos de crédito, cooperativas de ahorro y crédito vigiladas por la Superintendencia de la Economía Solidaria (SES) y entidades microfinancieras no vigiladas por esta ni por la Superintendencia Financiera de Colombia (SFC). La oferta para pequeños negocios y unidades productivas, por tanto, no se concentra exclusivamente en los bancos. Los participantes se diferencian por su naturaleza, sus actividades y sus condiciones de supervisión:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Establecimientos de crédito")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta07_1.png')
              .col-md-6
                h4 Establecimientos de crédito
                p Los establecimientos de crédito están vigilados por la Superintendencia Financiera de Colombia. Según la naturaleza y el régimen aplicable a cada tipo de entidad, pueden desarrollar operaciones de captación y colocación de recursos. Algunos incluyen en su portafolio productos de crédito dirigidos a microempresarios y pequeños negocios.
          .py-3.py-md-4(titulo="Cooperativas")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta07_2.png')
              .col-md-6
                h4 Cooperativas
                p Las cooperativas especializadas de ahorro y crédito y las cooperativas multiactivas o integrales con sección de ahorro y crédito pueden ejercer actividad financiera con sus asociados, previa autorización de la Superintendencia de la Economía Solidaria. Las cooperativas financieras, por su parte, se encuentran bajo vigilancia de la Superintendencia Financiera de Colombia.
          .py-3.py-md-4(titulo="Otras entidades microfinancieras")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta07_3.png')
              .col-md-6
                h4 Otras entidades microfinancieras
                p También participan entidades microfinancieras no vigiladas por estas dos superintendencias. Banca de las Oportunidades las incorpora en sus análisis de inclusión financiera junto con establecimientos de crédito y cooperativas de ahorro y crédito, para obtener una visión más amplia del acceso al financiamiento formal en el país.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Las características generales y los referentes de supervisión se sintetizan en la siguiente tabla:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span Principales participantes del segmento microfinanciero
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Tipo de entidad u organización
                        th(style="width: 45%") Característica general
                        th(style="width: 25%") Referente de supervisión
                    tbody
                      tr
                        td Establecimientos de crédito
                        td Pueden ofrecer productos financieros y diferentes modalidades de crédito de acuerdo con su naturaleza y autorización.
                        td Superintendencia Financiera de Colombia
                      tr
                        td Cooperativas financieras
                        td Desarrollan actividad financiera bajo la regulación aplicable al sector financiero cooperativo.
                        td Superintendencia Financiera de Colombia
                      tr
                        td Cooperativas de ahorro y crédito
                        td Captan ahorro y colocan recursos principalmente entre sus asociados, conforme con su autorización.
                        td Superintendencia de la Economía Solidaria
                      tr
                        td Cooperativas multiactivas o integrales con sección de ahorro y crédito
                        td Pueden desarrollar actividad financiera con sus asociados cuando se encuentran autorizadas.
                        td Superintendencia de la Economía Solidaria
                      tr
                        td Entidades microfinancieras no vigiladas por SFC o SES
                        td Participan principalmente en actividades de financiación y atención de segmentos microempresariales según su naturaleza jurídica.
                        td Depende de su estructura y régimen aplicable
            //- FinTabla
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img8.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-3.p-4 Reconocer el tipo de entidad permite identificar los productos, requisitos y procedimientos aplicables, que varían según su naturaleza y las disposiciones que regulan su actividad.
          p Una misma necesidad de financiación puede ser atendida por diferentes entidades. El siguiente caso permite identificar sus requisitos y condiciones antes de comparar alternativas:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img9.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-2.fw-bold Ejemplo
          <br>
          <br>
          p Una  persona propietaria de un pequeño negocio busca financiación para adquirir una nevera y aumentar su inventario. Encuentra tres alternativas: un banco que ofrece una línea para pequeños negocios, una cooperativa de ahorro y crédito de la cual podría hacerse asociada y una organización microfinanciera que atiende directamente comerciantes de su zona.
          <br>
          <br>
          p Antes de comparar montos o cuotas, debe identificarse la naturaleza de cada institución, el tipo de producto que ofrece, los requisitos de vinculación y la autoridad que la supervisa cuando corresponda. Este reconocimiento permite comprender que diferentes entidades pueden atender una misma necesidad financiera mediante procedimientos y condiciones distintas, y que la orientación adecuada debe partir tanto de la necesidad del cliente como de las características de la institución que presta el servicio.
      p(data-aos="fade-left") Las microfinanzas abarcan diversas necesidades financieras, mientras que el microcrédito constituye una alternativa específica para la actividad microempresarial que requiere conocer el negocio y las condiciones del cliente.
</template>

<script>
export default {
  name: 'Tema1',
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