<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Perfil del analista y gestión de la relación con el cliente
      p(data-aos="fade-left") La gestión microfinanciera requiere una relación cercana y organizada con el cliente, sustentada en el conocimiento de la persona, su negocio y su entorno. En este proceso, la calidad de la información y de la atención, junto con el seguimiento de las operaciones, contribuye a mantener relaciones sostenibles frente a necesidades que pueden evolucionar con el tiempo (Quintero de Rivas, 2016). 
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Perfil del analista de microcrédito
      p(data-aos="fade-left") El analista de microcrédito enlaza a la entidad con el cliente y conoce productos, políticas y actividades económicas. La metodología de Asomicrofinanzas destaca el conocimiento del cliente y su negocio durante el proceso; esta labor no le otorga autoridad para aprobar operaciones (Quintero de Rivas, 2016).
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones asociadas con la gestión del cliente
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las funciones específicas dependen de la estructura de cada organización y pueden incluir la identificación de clientes potenciales, promoción, entrevistas, visitas, recopilación y verificación de información, elaboración de reportes, seguimiento y mantenimiento de la relación comercial. En estas actividades deben respetarse las responsabilidades asignadas, pues recopilar información o emitir una recomendación no significa necesariamente tener autoridad para aprobar una operación, modificar sus condiciones o autorizar el desembolso. Las principales funciones pueden relacionarse con el propósito que cumplen dentro de la gestión del cliente:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 13.
                  span Funciones asociadas al perfil del analista de microcrédito
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Función
                        th(style="width: 70%") Propósito
                    tbody
                      tr
                        td Promoción
                        td Dar a conocer productos y condiciones generales dentro del mercado objetivo.
                      tr
                        td Identificación
                        td Reconocer clientes potenciales compatibles con el segmento atendido.
                      tr
                        td Entrevista
                        td Obtener información sobre la persona, el negocio y la necesidad financiera.
                      tr
                        td Visita
                        td Conocer directamente la actividad económica cuando el procedimiento lo requiera.
                      tr
                        td Verificación
                        td Contrastar los datos suministrados mediante fuentes permitidas.
                      tr
                        td Orientación
                        td Explicar características, requisitos y etapas del proceso.
                      tr
                        td Seguimiento
                        td Mantener conocimiento sobre la evolución de la relación y de la operación.
                      tr
                        td Registro
                        td Documentar las actuaciones realizadas y la información obtenida.
            //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conocimiento técnico y conocimiento del territorio
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img1.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-2.p-4 El analista necesita conocer los conceptos básicos del producto, las políticas aplicables y las condiciones del territorio donde desarrolla su actividad. Identificar sectores comerciales, ciclos productivos, temporadas de mayores ventas y particularidades de la zona facilita interpretar la información proporcionada por el cliente.
          p Las características de cada actividad aportan elementos para formular preguntas pertinentes y comprender mejor la dinámica del negocio:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img2.png", alt="").img400.m-auto
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Actividades rurales")
                p.mb-4 El conocimiento de los periodos de siembra, producción y cosecha permite comprender particularidades propias de las actividades rurales y orientar las preguntas según sus ciclos productivos.
              .row(titulo="Comercio urbano")
                p.mb-4 La rotación de inventarios y las temporadas de mayor demanda son aspectos relevantes para comprender la dinámica de los establecimientos comerciales y formular preguntas acordes con su funcionamiento.
      //- Fin Accordion 1
      p.bg-color-5.p-4(data-aos="fade-left") Este conocimiento facilita la formulación de preguntas pertinentes y la comprensión de la lógica de la actividad, pero no reemplaza el análisis financiero que corresponde a etapas posteriores. 
      p(data-aos="fade-left") El siguiente caso permite reconocer cómo se integran el conocimiento del negocio, la orientación y el cumplimiento del procedimiento institucional:
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-1
          p.mb-2.fw-bold Ejemplo aplicado:
          p Durante una visita, la propietaria de un pequeño establecimiento manifiesta que necesita financiación para incrementar el inventario. La gestión no se limita a recibir el documento de identidad y registrar el monto solicitado; también requiere conocer qué comercializa, cómo funciona el negocio, cuál es el destino de los recursos y qué información está disponible para sustentar posteriormente la solicitud.
          P El analista registra los datos obtenidos, explica las siguientes etapas y evita anticipar una aprobación. De esta manera, su función combina orientación comercial, recopilación de información y cumplimiento del procedimiento institucional.
        .col-lg-5.d-flex.order-1.order-lg-2
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img3.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Características e idoneidad del analista
      p(data-aos="fade-left") La idoneidad del analista integra conocimientos técnicos, habilidades para la atención y manejo responsable de la información conocida durante la relación con el cliente. En las entidades vigiladas por la Superintendencia Financiera, la debida diligencia exige una atención adecuada y respetuosa e información suficiente, y el Sistema de Atención al Consumidor Financiero contempla la capacitación de quienes realizan labores de asesoría.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Competencias requeridas
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img4.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-7.p-3 El analista requiere conocimientos técnicos y habilidades para comunicarse, formular preguntas, reconocer características de la actividad y detectar inconsistencias. La atención debe adaptarse al tipo de negocio, pues una actividad agrícola puede requerir preguntas diferentes de las utilizadas en un establecimiento comercial o de servicios, sin apartarse de los criterios y procedimientos establecidos. 
          p Las características asociadas con la idoneidad se reflejan en diferentes actuaciones durante la gestión microfinanciera:
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
                          img(src='@/assets/curso/temas/t5/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Conocimiento técnico
                            p.text-center Permite comprender productos, procedimientos y conceptos financieros básicos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Comunicación clara
                            p.text-center Facilita explicar condiciones y obtener información comprensible.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Capacidad de reconocimiento de la actividad
                            p.text-center Ayuda a relacionar la información declarada con las características de la actividad económica.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Organización
                            p.text-center Permite mantener registros, soportes y visitas debidamente documentados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Objetividad
                            p.text-center Favorece decisiones y conceptos sustentados en información verificable.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Confidencialidad
                            p.text-center Protege la información conocida durante la relación con el cliente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Orientación al servicio
                            p.text-center Facilita una atención respetuosa y acorde con las necesidades identificadas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta01_8.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Cumplimiento
                            p.text-center Permite actuar dentro de las políticas, los procedimientos y las facultades asignadas.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t5/img5.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Objetividad e integridad de la información
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img6.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-2.p-3 La objetividad exige que la cercanía con el cliente no conduzca a modificar información, omitir inconsistencias o flexibilizar por iniciativa propia los requisitos establecidos. Los datos registrados deben representar razonablemente la situación identificada y la información obtenida durante entrevistas, consultas y visitas debe manejarse con reserva y utilizarse únicamente para las finalidades autorizadas.
          p El siguiente caso permite reconocer la importancia de mantener criterios técnicos frente a situaciones que pueden afectar la confiabilidad de la información:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0.fw-bold Ejemplo aplicado: 
          <br>
          <br>
          p Durante una visita, una persona solicita que se registre un nivel de ventas superior al realmente sustentado porque considera que así tendrá mayores posibilidades de obtener financiación. Una actuación idónea exige mantener la información que pueda ser razonablemente sustentada y explicar que los datos deben corresponder con la realidad de la actividad.
          <br>
          p Modificar la información para favorecer una solicitud afectaría la confiabilidad del proceso y podría trasladar errores a las etapas posteriores. La idoneidad se demuestra precisamente cuando se mantienen los criterios técnicos aun frente a presiones comerciales o personales.
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Metas del analista y metas institucionales
      p(data-aos="fade-left") Las metas permiten orientar y evaluar la gestión durante un periodo y establecer cómo los resultados individuales contribuyen a los objetivos de la entidad. En instituciones microfinancieras pueden relacionarse con la colocación, la calidad de cartera y el número de créditos, junto con el seguimiento de indicadores de desempeño.
      Separador
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Equilibrio entre crecimiento y calidad
      //- Título nivel 3 - Imagen
      p.bg-color-5.p-4(data-aos="fade-left") Las metas de colocación no deben centrarse únicamente en aumentar la cantidad o el valor de las operaciones, pues esto puede afectar la calidad de la verificación. Por ello, los resultados comerciales pueden combinarse con indicadores de calidad de cartera, cumplimiento de procedimientos y seguimiento al cliente para valorar cuánto se gestionó y cómo se desarrolló esa gestión.
      p(data-aos="fade-left") Los resultados de la gestión pueden analizarse mediante indicadores que permiten valorar diferentes aspectos del desempeño:
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
                          img(src='@/assets/curso/temas/t5/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Clientes atendidos
                            p.text-center Permite conocer el alcance de la gestión comercial.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Clientes nuevos
                            p.text-center Permite conocer la capacidad de vinculación dentro del mercado objetivo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Operaciones gestionadas
                            p.text-center Permite conocer el volumen de solicitudes tramitadas durante el periodo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Valor colocado
                            p.text-center Permite conocer los recursos desembolsados mediante operaciones aprobadas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Calidad de cartera
                            p.text-center Permite conocer el comportamiento de pago de las operaciones administradas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Seguimiento realizado
                            p.text-center Permite conocer el cumplimiento de las actividades posteriores al desembolso.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Renovaciones
                            p.text-center Permite conocer la continuidad de los clientes que mantienen condiciones para nuevas operaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t5/tarjeta02_8.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Fidelización
                            p.text-center Permite conocer la permanencia y utilización responsable de los servicios ofrecidos.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t5/img8.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Planeación y seguimiento de las metas
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img9.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-2.p-3 Las metas institucionales pueden convertirse en objetivos de gestión asignados por zonas, oficinas, equipos o responsables. Su administración requiere organizar la actividad a partir del territorio y realizar un seguimiento periódico que permita identificar oportunidades comerciales y valorar los resultados obtenidos.
          p La planeación y el seguimiento permiten organizar la gestión y revisar sus condiciones cuando los resultados no corresponden con las metas establecidas:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Planeación de la gestión
                p El conocimiento del territorio asignado permite organizar recorridos e identificar oportunidades comerciales. De esta manera, los objetivos institucionales pueden orientar las actividades desarrolladas por las zonas, oficinas, equipos o responsables.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Revisión ante el incumplimiento de una meta
                p Cuando una meta no se cumple, deben revisarse factores como la cobertura, la calidad de los prospectos, la estrategia de promoción, la productividad de las visitas o las condiciones del mercado. Esta revisión no debe conducir a alterar los criterios de selección.
      //- Fin Slideshow
      p(data-aos="fade-left") El siguiente caso permite reconocer cómo ajustar la gestión frente a una meta sin reducir los requisitos establecidos:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-2.fw-bold Ejemplo aplicado
          <br>
          <br>
          p Una entidad establece como objetivo incrementar el número de clientes atendidos durante un trimestre, manteniendo simultáneamente un determinado nivel de calidad de cartera. El responsable de una zona identifica que ha aumentado el número de visitas, pero pocas solicitudes avanzan en el proceso.
          <br><br>
          p En lugar de reducir requisitos para incrementar rápidamente las aprobaciones, revisa la segmentación del territorio, los lugares donde realiza promoción y las características de los clientes contactados. De esta manera, las metas sirven para ajustar la gestión sin sacrificar la calidad ni el cumplimiento de las políticas institucionales.
      Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Fidelización del cliente
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-5.p-3 La fidelización consiste en fortalecer una relación basada en una atención clara, el conocimiento de la actividad económica y la oferta de soluciones pertinentes cuando respondan a las necesidades del cliente. En microfinanzas, estas necesidades pueden cambiar con la evolución del negocio, por lo que su conocimiento contribuye a mantener una relación financiera adecuada a sus circunstancias (Quintero de Rivas, 2016). 
          p Se invita a reproducir el siguiente pódcast para conocer las prácticas que favorecen la fidelización y permiten responder de manera pertinente a las necesidades cambiantes del cliente:
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img11.png', alt='', style="max-width: 800px;")
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Conocer para fidelizar: relaciones que responden a las necesidades del cliente
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")                      
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t5/img-podcast.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Permanencia del cliente en la organización
      p(data-aos="fade-left") La permanencia se relaciona con la continuidad voluntaria y sostenible del cliente dentro de la organización. Esta relación puede mantenerse incluso durante periodos sin crédito y dar lugar al uso de otros productos o a nuevas operaciones cuando exista una necesidad identificada y las condiciones permitan asumirla responsablemente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguimiento de la relación
      //- Título nivel 3 - Imagen
      p.p-4.bg-color-3(data-aos="fade-left") El seguimiento posterior al desembolso permite mantener contacto con el cliente, atender inquietudes e identificar cambios o dificultades que puedan afectar el cumplimiento. El Manual metodológico para microcrédito rural de Asomicrofinanzas relaciona el seguimiento y control con la verificación de obligaciones, la presencia institucional y la posibilidad de considerar posteriormente procesos de renovación cuando correspondan (Quintero de Rivas, 2016).
      p(data-aos="fade-left") Los siguientes factores permiten relacionar diferentes aspectos de la gestión con la continuidad del cliente en la organización:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-10.col-lg-8
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 14.
                  span Factores asociados con la permanencia del cliente
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 30%") Factor
                        th(style="width: 70%") Relación con la permanencia
                    tbody
                      tr
                        td Calidad de la atención
                        td Influye en la experiencia durante toda la relación.
                      tr
                        td Claridad de las condiciones
                        td Reduce diferencias entre lo esperado y lo contratado.
                      tr
                        td Seguimiento oportuno
                        td Permite mantener comunicación durante la vigencia de la operación.
                      tr
                        td Cumplimiento del cliente
                        td Favorece la construcción de un historial dentro de la relación.
                      tr
                        td Productos pertinentes
                        td Permite responder a nuevas necesidades cuando corresponda.
                      tr
                        td Gestión de dificultades
                        td Facilita identificar situaciones que requieren atención temprana.
                      tr
                        td Confianza
                        td Se fortalece cuando ambas partes cumplen sus compromisos.
            //- FinTabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Permanencia y gestión responsable
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img12.png', alt='', style="max-width: 800px;")
        .col-12.col-lg-7(data-aos="fade-left")
          p.mb-3.bg-color-7.p-4 La permanencia debe gestionarse de acuerdo con las condiciones reales del cliente y no únicamente con los objetivos comerciales. Por ello, es necesario conocer los cambios en la relación con la organización y evitar renovaciones automáticas cuando no exista una necesidad identificada o condiciones suficientes para asumir una nueva obligación.
          p La gestión responsable requiere comprender la relación con los clientes y orientar las nuevas operaciones según sus condiciones:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conocimiento del cliente y del mercado
                p El seguimiento del mercado y los clientes se apoya en encuestas de satisfacción, salida e impacto y revisiones de la estrategia comercial. Estas herramientas permiten reconocer por qué las personas permanecen, se retiran o modifican su relación con la organización.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Renovación responsable
                p Renovar automáticamente una obligación únicamente para conservar al cliente dentro de la cartera puede ser contrario a una gestión responsable. Una nueva operación debe responder a una necesidad identificada y a condiciones que permitan asumirla responsablemente.
      //- Fin Slideshow
      p(data-aos="fade-left") El siguiente caso permite reconocer cómo puede mantenerse la relación cuando el cliente decide no asumir inmediatamente una nueva financiación:
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-1
          p.mb-2.fw-bold Ejemplo aplicado:
          p Un cliente ha cumplido oportunamente una obligación utilizada para adquirir herramientas para su negocio. Al aproximarse la finalización del crédito, manifiesta que por el momento no requiere nueva financiación porque desea concentrarse en consolidar la inversión realizada.
          P Una gestión orientada a la permanencia respeta esa decisión y mantiene disponibles los canales de atención para futuras necesidades. La fidelización no exige colocar inmediatamente una nueva obligación. La relación puede conservarse mediante buen servicio, seguimiento y conocimiento del cliente, de forma que una futura vinculación responda nuevamente a una necesidad real.
        .col-lg-5.d-flex.order-1.order-lg-2
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img13.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") El analista articula la atención y verificación con el cumplimiento de políticas y metas comerciales. La fidelización exige seguimiento y soluciones pertinentes a las necesidades reales del cliente.
</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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