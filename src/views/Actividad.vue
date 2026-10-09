<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
        <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos, regulación y gestión comercial de las microfinanzas',
      titulo:
        'Cuestionario de verificación sobre fundamentos, regulación y gestión comercial de las microfinanzas',
      introduccion:
        '<b>Objetivo:</b> verificar la capacidad para reconocer los fundamentos de las microfinanzas y el microcrédito, interpretar el marco regulatorio y los límites de actuación, identificar el mercado objetivo, la zonificación y la promoción del crédito, caracterizar y seleccionar al cliente potencial, y reconocer el perfil del analista y la gestión responsable de la relación con el cliente.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una persona administra un pequeño negocio y necesita recibir pagos, realizar transferencias a proveedores y, posteriormente, evaluar una alternativa de financiación. ¿Qué concepto comprende de manera más amplia estas necesidades?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El microcrédito, porque integra todos los productos y servicios que una microempresa puede necesitar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las microfinanzas, porque integran diversas soluciones financieras según las necesidades del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La zonificación, porque organiza todos los productos financieros según el territorio de la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La selección, porque define todos los servicios financieros que puede utilizar una unidad productiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Las microfinanzas comprenden diversas soluciones financieras ajustadas a las necesidades del cliente y no se limitan al crédito.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una microempresa necesita recursos para comprar materias primas y fortalecer su operación. ¿Qué alternativa corresponde específicamente a esa necesidad de financiación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un producto de depósito para conservar temporalmente los recursos de la actividad económica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un canal de pagos para movilizar recursos entre su comercio, sus proveedores y sus clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un mecanismo de aseguramiento para atender determinados riesgos vinculados con la actividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un microcrédito para financiar necesidades productivas de la operación habitual del negocio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El microcrédito financia necesidades productivas vinculadas con la operación o el fortalecimiento de una microempresa.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál afirmación diferencia correctamente las microfinanzas del microcrédito?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las microfinanzas abarcan varias soluciones; el microcrédito es una financiación para microempresas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las microfinanzas abarcan solo el ahorro; el microcrédito agrupa los servicios de las microempresas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las microfinanzas abarcan el análisis crediticio; el microcrédito define por sí el mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las microfinanzas y el microcrédito abarcan exactamente los mismos productos para pequeños negocios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Las microfinanzas comprenden diferentes soluciones financieras, mientras que el microcrédito corresponde a una alternativa específica de financiación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Un analista atiende negocios con actividades y formas de generación de ingresos diferentes. ¿Qué actuación corresponde al conocimiento del segmento microfinanciero?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Considerar que todas las actividades requieren el mismo procedimiento comercial para ser atendidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Considerar únicamente el monto total solicitado para definir la necesidad financiera de la persona.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Considerar la actividad, los ingresos y las condiciones territoriales antes de orientar al cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Considerar únicamente la localización del negocio para seleccionar el producto financiero adecuado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La atención microfinanciera requiere conocer la actividad, la forma de generar ingresos y las condiciones territoriales para orientar de manera pertinente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la función principal del marco regulatorio dentro de la gestión microfinanciera?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir metas individuales de colocación que debe cumplir cada analista durante cada periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer los documentos que cada entidad decide solicitar a todos los clientes potenciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Delimitar las actividades, operaciones y condiciones de atención que aplican en cada entidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Determinar directamente qué clientes deben recibir financiación tras presentar una solicitud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El marco regulatorio delimita las actividades de las entidades, las operaciones financieras y las condiciones de atención aplicables.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cómo se relacionan la regulación y las políticas institucionales en la gestión microcrediticia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La regulación fija condiciones obligatorias y la política define cómo opera cada entidad dentro de ellas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La regulación define criterios internos y la política sustituye las obligaciones legales de cada entidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La regulación se aplica al producto y la política decide libremente qué normas debe cumplir cada entidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La regulación y la política cumplen la misma función y pueden sustituirse durante la atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La regulación establece condiciones obligatorias y las políticas institucionales determinan cómo actúa la organización dentro de esos límites.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Un cliente solicita que se confirme la aprobación de su crédito antes de terminar las verificaciones previstas. ¿Cuál actuación respeta los límites del proceso?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Confirmar una aprobación preliminar si la información inicial del solicitante resulta consistente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ofrecer un monto reducido mientras se completan las verificaciones exigidas por la propia entidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modificar las condiciones comunicadas para facilitar que la solicitud continúe dentro del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Explicar que la decisión depende de las verificaciones y de la instancia autorizada para resolver.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los límites de actuación impiden anticipar decisiones que dependen de verificaciones o corresponden a una instancia autorizada.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Durante la atención de una solicitud se recopila información personal y económica del cliente. ¿Cuál actuación es coherente con los límites establecidos para su manejo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usar los datos para cualquier propósito empresarial que resulte útil para cada organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usar los datos solo para las finalidades autorizadas y conforme con la regulación aplicable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Compartir los datos con terceros cuando sirvan para promocionar otros productos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conservar todos los datos obtenidos, aunque no se necesiten para el procedimiento realizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La información del cliente debe tratarse únicamente para las finalidades autorizadas y de acuerdo con la regulación y los procedimientos aplicables.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la finalidad de identificar el mercado objetivo en la gestión microfinanciera?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconocer personas y unidades económicas cuyas características coinciden con el segmento atendido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Determinar anticipadamente la capacidad financiera de las personas ubicadas dentro del territorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir qué solicitudes deben aprobarse antes de realizar la caracterización y las verificaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer automáticamente qué producto ofrecer a cualquier negocio ubicado dentro del territorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El mercado objetivo permite reconocer personas y unidades económicas compatibles con el segmento atendido, sin determinar por sí solo una aprobación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué finalidad cumple la zonificación geográfica dentro de la gestión comercial microfinanciera?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asignar los clientes de forma aleatoria entre los analistas para distribuir las solicitudes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reemplazar la caracterización individual mediante una clasificación previa de los comercios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organizar el territorio para facilitar la promoción, las visitas y el seguimiento comercial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Determinar el monto de financiación que puede solicitar cada persona según la zona asignada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La zonificación organiza territorialmente la promoción, la identificación de clientes, las visitas y el seguimiento de la gestión comercial.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Durante un recorrido comercial se identifica un negocio cuya actividad corresponde al mercado objetivo de la entidad. ¿Qué actuación procede inicialmente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Considerar aprobado el crédito porque la actividad coincide con el mercado definido por una entidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reconocerlo como cliente potencial y continuar con las verificaciones previstas en el procedimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Clasificarlo como cliente seleccionado y omitir la información adicional por pertenecer al segmento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Informarle las condiciones definitivas del crédito antes de completar las verificaciones requeridas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Identificar a una persona como cliente potencial es una etapa inicial y no representa aprobación ni selección definitiva.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Durante la promoción de una alternativa de financiación, ¿qué actuación corresponde a una comunicación responsable con el cliente potencial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Prometer una aprobación probable para motivar a cada cliente a entregar la documentación solicitada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reservar las condiciones del producto hasta que el cliente haya completado todas las verificaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modificar las condiciones generales según el criterio de cada cliente para aumentar las solicitudes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comunicar las condiciones vigentes del crédito y aclarar que la solicitud requiere evaluación posterior.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La promoción debe comunicar condiciones reales y evitar generar expectativas equivocadas sobre resultados que dependen de verificaciones posteriores.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué información permite construir de manera más completa el perfil inicial de un cliente microfinanciero?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El monto solicitado y el producto financiero que espera obtener al finalizar todo el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los documentos disponibles y el resultado final que espera recibir de una entidad financiera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El historial de productos utilizados y el criterio del analista sobre la eventual aprobación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La persona, su actividad económica y su relación con los servicios financieros de la entidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El perfil inicial integra características de la persona, de su actividad económica y de su relación con los servicios financieros.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Un cliente informa un dato sobre el funcionamiento de su negocio que debe ser verificado. ¿Qué actuación corresponde a esta etapa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar el dato como comprobado cuando resulte coherente con la descripción general del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contrastar el dato con fuentes permitidas y aclarar las diferencias relevantes antes de continuar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Descartar toda la información cuando aparezca alguna diferencia entre lo declarado y los soportes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Modificar el dato registrado para hacerlo coincidir con los documentos disponibles del expediente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Verificar implica contrastar los datos con fuentes permitidas y aclarar las diferencias relevantes antes de continuar el proceso.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Una entidad tramita financiación para una actividad económica. ¿Qué variables permiten clasificar la modalidad antes de consultar la tasa certificada aplicable?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los ingresos declarados, la antigüedad del negocio y las garantías disponibles para la operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El historial financiero del solicitante, sus ingresos acreditados y las referencias comerciales obtenidas durante la visita.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El destino productivo, el monto y la ubicación rural o urbana de la actividad, cuando corresponda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El plazo solicitado, la capacidad de pago y el número previsto de cuotas del crédito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La modalidad del crédito productivo depende del destino, el monto y, cuando corresponda, de la ubicación de la actividad.',
          mensaje_incorrecto:
            'La tasa certificada debe consultarse para la modalidad correspondiente. Para clasificarla, se consideran el destino productivo, el monto y la ubicación de la actividad.',
        },
        {
          id: 16,
          texto:
            '¿Qué significa que un cliente potencial haya superado la selección inicial prevista por la organización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar que cumple las condiciones iniciales para avanzar al análisis, sin decidir la aprobación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Confirmar que la operación será desembolsada porque la persona ya superó la etapa de identificación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Calcular de inmediato la capacidad definitiva de endeudamiento antes de terminar las verificaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Omitir nuevas comprobaciones cuando el cliente haya utilizado anteriormente productos de la entidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La selección inicial permite continuar hacia el análisis de viabilidad, pero no significa que el crédito esté aprobado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál actuación representa adecuadamente el papel del analista de microcrédito dentro de la gestión del cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aprobar directamente las operaciones cuando la información recopilada en una visita sea suficiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actuar como enlace con el cliente, desarrollar las funciones asignadas y respetar otras instancias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Modificar las condiciones del producto cuando el territorio indique una gran oportunidad comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Autorizar el desembolso cuando el negocio pertenezca al mercado y cumpla las condiciones iniciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El analista actúa como enlace con el cliente y desarrolla las funciones asignadas sin asumir decisiones reservadas a otras instancias.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué comportamiento refleja objetividad e idoneidad en la actuación del analista?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Flexibilizar requisitos cuando el cliente tenga una relación comercial previa con cada organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Priorizar los resultados comerciales cuando existan diferencias menores entre los datos recopilados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Completar los datos faltantes con cifras estimadas por el analista cuando la actividad sea conocida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar información que refleje la situación identificada y mantener criterios técnicos objetivos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La objetividad exige registrar información que represente razonablemente la situación identificada y mantener criterios técnicos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cómo deben relacionarse las metas comerciales con la calidad de la gestión microfinanciera?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Combinar resultados comerciales con calidad de cartera, cumplimiento de procedimientos y seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Concentrar la gestión en aumentar los nuevos créditos y dejar la calidad para una revisión posterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir las verificaciones cuando los resultados de colocación estén por debajo de una meta prevista.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Modificar los criterios de selección para equilibrar rápidamente los resultados propios de las zonas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los resultados comerciales deben relacionarse con la calidad de cartera, el cumplimiento de procedimientos y el seguimiento al cliente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Un cliente termina de pagar su crédito y manifiesta que actualmente no necesita nueva financiación. ¿Qué actuación favorece una relación responsable y sostenible?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ofrecer de inmediato una nueva financiación para evitar que la relación comercial pierda su continuidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Insistir en una renovación automática para conservar al cliente dentro de la cartera de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Respetar la decisión, mantener los canales de atención y ofrecer soluciones cuando exista una necesidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Condicionar la atención futura a que el cliente mantenga la obligación crediticia activa con la entidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La permanencia debe ser voluntaria y sostenible; la relación puede continuar sin mantener al cliente permanentemente endeudado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
