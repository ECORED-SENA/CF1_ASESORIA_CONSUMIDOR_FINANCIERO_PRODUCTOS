export default {
  global: {
    Name: 'Fundamentos, regulación y gestión comercial de las microfinanzas',
    Description:
      'Este componente formativo aborda los fundamentos de las microfinanzas y el microcrédito, el marco regulatorio y los límites de actuación, así como el mercado objetivo, la zonificación y la promoción del crédito. También desarrolla la caracterización y selección de clientes potenciales, el perfil del analista y la gestión de la relación con el cliente, incluida su fidelización y permanencia.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de las microfinanzas y el microcrédito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fundamentos y concepto de las microfinanzas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto y características del microcrédito',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diferencias entre microfinanzas y microcrédito',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Características del segmento microfinanciero',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Entidades financieras vinculadas al segmento de las microfinanzas',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco regulatorio y límites de actuación en microfinanzas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Marco regulatorio de las microfinanzas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Normatividad aplicable a las operaciones microfinancieras',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Políticas institucionales aplicables al microcrédito',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Límites de actuación en la gestión microfinanciera',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Aplicación del marco regulatorio y de las políticas vigentes',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mercado objetivo, zonificación y promoción del crédito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Mercado objetivo de las microfinanzas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Área de trabajo y zonificación geográfica',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Identificación de clientes potenciales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Promoción del crédito en el mercado objetivo',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Estrategias institucionales de búsqueda y obtención de información',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Caracterización y selección del cliente microfinanciero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Perfil del cliente microfinanciero',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Información inicial del cliente y su actividad económica',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Información y orientación al cliente de acuerdo con las políticas de microcrédito',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Verificación de la información suministrada por el cliente',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Clasificación y selección del cliente potencial',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Perfil del analista y gestión de la relación con el cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Perfil del analista de microcrédito',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características e idoneidad del analista',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Metas del analista y metas institucionales',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Fidelización del cliente',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Permanencia del cliente en la organización',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Analista de microcrédito',
      significado:
        'Persona encargada de gestionar la relación con el cliente, recopilar y verificar información, orientar sobre los productos y realizar las actividades asignadas dentro del proceso microcrediticio.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'Persona o unidad económica que se encuentra en una etapa previa a la contratación y presenta características compatibles con los productos o servicios ofrecidos por la organización.',
    },
    {
      termino: 'Crédito productivo',
      significado:
        'Financiación destinada al desarrollo de una actividad económica, clasificada de acuerdo con criterios como el monto, la finalidad y, cuando corresponda, la ubicación de la actividad.',
    },
    {
      termino: 'Entidad microfinanciera',
      significado:
        'Organización que ofrece productos o servicios financieros dirigidos principalmente a personas, microempresas y pequeñas unidades productivas.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Proceso orientado a fortalecer la relación con el cliente mediante atención adecuada, seguimiento y oferta de soluciones financieras pertinentes.',
    },
    {
      termino: 'Inclusión financiera',
      significado:
        'Acceso y uso de productos y servicios financieros adecuados que permiten atender las necesidades de personas y unidades económicas.',
    },
    {
      termino: 'Información crediticia',
      significado:
        'Datos relacionados con el comportamiento y las obligaciones financieras de una persona, utilizados conforme con las finalidades y condiciones establecidas por la normativa.',
    },
    {
      termino: 'Marco regulatorio',
      significado:
        'Conjunto de leyes, decretos, reglamentos e instrucciones que establecen las condiciones aplicables al funcionamiento y desarrollo de las operaciones financieras.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'Grupo de personas o unidades económicas cuyas características corresponden con el segmento que una organización ha definido para ofrecer sus productos y servicios.',
    },
    {
      termino: 'Microcrédito',
      significado:
        'Sistema de financiación dirigido a microempresas y relacionado con las características de su actividad económica y la generación de ingresos.',
    },
    {
      termino: 'Microempresa',
      significado:
        'Unidad económica de pequeña escala que desarrolla actividades de producción, comercio o prestación de servicios y cumple los criterios establecidos para su clasificación.',
    },
    {
      termino: 'Microfinanzas',
      significado:
        'Conjunto de productos, servicios y soluciones financieras orientados a atender las necesidades de personas y pequeñas unidades económicas.',
    },
    {
      termino: 'Políticas institucionales',
      significado:
        'Lineamientos internos que establecen criterios, requisitos, responsabilidades y procedimientos para desarrollar la gestión microfinanciera dentro de una organización.',
    },
    {
      termino: 'Verificación de información',
      significado:
        'Proceso de contrastar los datos suministrados por el cliente con documentos, visitas, registros, referencias u otras fuentes autorizadas.',
    },
    {
      termino: 'Zonificación geográfica',
      significado:
        'Organización del territorio en áreas de trabajo para facilitar la identificación, promoción, atención y seguimiento de clientes potenciales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banca de las Oportunidades. (s. f.-a). Preguntas frecuentes.',
      link: 'https://www.bancadelasoportunidades.gov.co/es/preguntas-frecuentes',
    },
    {
      referencia: 'Banca de las Oportunidades. (s. f.-b). Quiénes somos.',
      link: 'https://www.bancadelasoportunidades.gov.co/es/quienes-somos',
    },
    {
      referencia: 'Banca de las Oportunidades. (s. f.-c). Reportes anuales.',
      link: 'https://www.bancadelasoportunidades.gov.co/es/publicaciones/reportes-anuales',
    },
    {
      referencia:
        'Banca de las Oportunidades. (2026, 16 de julio). 24 arquetipos de micronegocios: una nueva mirada para su inclusión financiera.',
      link: 'https://www.bancadelasoportunidades.gov.co/es/node/1256',
    },
    {
      referencia:
        'Banca de las Oportunidades, & Superintendencia Financiera de Colombia. (2026, 24 de agosto). Reporte de inclusión financiera 2025.',
      link: 'https://www.bancadelasoportunidades.gov.co/es/node/1263',
    },
    {
      referencia:
        'Decreto 222 de 2020 [Presidencia de la República de Colombia]. (2020, 14 de febrero). Por el cual se modifica el Decreto 2555 de 2010 en lo relacionado con los corresponsales, las cuentas de ahorro electrónicas, los depósitos electrónicos, el crédito de bajo monto y se dictan otras disposiciones.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=106654',
    },
    {
      referencia:
        'Decreto 2555 de 2010 [Presidencia de la República de Colombia]. (2010, 15 de julio). Por el cual se recogen y reexpiden las normas en materia del sector financiero, asegurador y del mercado de valores y se dictan otras disposiciones.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=40032',
    },
    {
      referencia:
        'Decreto 455 de 2023 [Presidencia de la República de Colombia]. (2023, 29 de marzo). Por el cual se modifica el Decreto 2555 de 2010 en relación con las modalidades de crédito cuyas tasas de interés deben certificarse.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=205884',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (2026). Encuesta de Micronegocios (EMICRON): información 2025.',
      link: 'https://www.dane.gov.co/index.php/estadisticas-por-tema-2/mercado-laboral/micronegocios',
    },
    {
      referencia:
        'Ley 590 de 2000. (2000, 10 de julio). Por la cual se dictan disposiciones para promover el desarrollo de las micro, pequeñas y medianas empresas. Diario Oficial 44.078.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=12672',
    },
    {
      referencia:
        'Ley 1266 de 2008. (2008, 31 de diciembre). Por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. Diario Oficial 47.219.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34488',
    },
    {
      referencia:
        'Ley 1328 de 2009. (2009, 15 de julio). Por la cual se dictan normas en materia financiera, de seguros, del mercado de valores y otras disposiciones. Diario Oficial 47.411.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36841',
    },
    {
      referencia:
        'Ley 1581 de 2012. (2012, 17 de octubre). Por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial 48.587.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Ley 2157 de 2021. (2021, 29 de octubre). Por medio de la cual se modifica y adiciona la Ley Estatutaria 1266 de 2008, y se dictan disposiciones generales del hábeas data con relación a la información financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. Diario Oficial 51.842.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=173246',
    },
    {
      referencia:
        'Quintero de Rivas, L. (2016). Manual metodológico para microcrédito. Asociación Colombiana de Instituciones Microfinancieras (Asomicrofinanzas).',
      link: 'https://asomicrofinanzas.com.co/wp-content/uploads/2019/pdfs/Manual%20Metodologico%20para%20Microcredito.pdf',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2023, 20 de noviembre). Preguntas frecuentes: actividad financiera en cooperativas.',
      link: 'https://www.supersolidaria.gov.co/es/node/4244',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (s. f.). Tasas y desembolsos por modalidad de crédito. Recuperado el 26 de septiembre de 2026.',
      link: 'https://www.superfinanciera.gov.co/powerbi/reportes/536/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2008, 7 de febrero). Consumidor financiero.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/11331/consumidor-financiero-11331/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2012a, 18 de diciembre). Régimen de protección al consumidor financiero.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/11407/normativaproteccion-al-consumidor-financierosobre-el-regimen-especifico-de-proteccion-al-consumidor-financieroregimen-de-proteccion-al-consumidor-financiero-11407/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2012b, 19 de diciembre). Principios.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/11169/normativaproteccion-al-consumidor-financierosobre-el-regimen-especifico-de-proteccion-al-consumidor-financieroregimen-de-proteccion-al-consumidor-financieroprincipios-11169/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2015a, 13 de abril). Microcrédito, monto máximo, comisiones, honorarios (Concepto 2014056513-007).',
      link: 'https://www.superfinanciera.gov.co/publicaciones/10084639/normativanormativa-generalboletin-juridico-superintendencia-financierasarlft-lista-clinton-negacion-de-servicios-financieros-valoracion-del-riesgo-por-parte-de-cada-entidadmicrocredito-monto-maximo-comisiones-honorarios-10084639/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2015b, 24 de abril). Derechos de los consumidores financieros.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/11171/normativaproteccion-al-consumidor-financierosobre-el-regimen-especifico-de-proteccion-al-consumidor-financieroregimen-de-proteccion-al-consumidor-financieroderechos-de-los-consumidores-financieros-11171/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2024, 13 de enero). Establecimientos de crédito.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/13070/industrias-supervisadasestablecimientos-de-credito-13070/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2025, 25 de junio). Circular Básica Jurídica (C. E. 006/25).',
      link: 'https://www.superfinanciera.gov.co/publicaciones/10115528/circular-basica-juridica-ce-00625/',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2026, 24 de agosto). Reporte de inclusión financiera 2025: avances en depósitos, crédito, cobertura y transacciones.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/10116222/reporte-de-inclusion-financiera-2025-avances-en-depositos-credito-cobertura-y-transacciones/',
    },
    {
      referencia:
        'Trujillo, V., & Navajas, S. (2016). Inclusión financiera y desarrollo del sistema financiero en América Latina y el Caribe: datos y tendencias. Banco Interamericano de Desarrollo.',
      link: 'https://doi.org/10.18235/0000608',
    },
    {
      referencia:
        'Valderrama Casas, J. A. (2021, 19 de abril). ¿Cómo escoger adecuadamente un producto de crédito? Banca de las Oportunidades.',
      link: 'https://www.bancadelasoportunidades.gov.co/es/blogs/blog-de-bdo/como-escoger-adecuadamente-un-producto-de-credito',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
