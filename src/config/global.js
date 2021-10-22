export default {
  global: {
    componenteFormativo: 'Importación de bienes y servicios',
    descripcionCurso:
      'Las transacciones internacionales, como las importaciones, juegan un papel primordial en la posición competitiva y comparativa de los países. <br>Colombia no es ajeno a estos procesos. La existencia de centenas de pymes que desean internacionalizarse exige que el talento humano se encuentre altamente capacitado en estas temáticas y procesos. En el presente material de formación, logrará conocer el proceso de importación de bienes, sus etapas, modalidades, normativa y beneficios.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proceso de importación de bienes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pasos para importar en Colombia ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Regímenes de importación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Régimen de licencia previa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Régimen de libre exportación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3,3',
            titulo: 'Régimen de prohibida importación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Modalidades de importación en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Documentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Sanciones e infracciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'Proceso de desaduanamiento y zonas de régimen aduanero especial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Normativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Plan Vallejo para la importación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Proceso de importación de servicios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Centro Internacional de Negocios (2011). Trámites para exportar e importar servicios. Cámara de Comercio de Bogotá.',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/11759/1000001453.pdf',
    },
    {
      referencia: 'DANE. (2021a). Boletín Técnico Importaciones (IMPO).',
      link:
        'https://www.dane.gov.co/files/investigaciones/boletines/importaciones/bol_impo_dic20.pdf',
    },
    {
      referencia: 'DANE. (2021b). Importaciones.',
      link:
        'https://www.dane.gov.co/index.php/estadisticas-por-tema/comercio-internacional/importaciones',
    },
    {
      referencia:
        'Decreto 925 de 2013. [Ministerio de Comercio, Industria y Turismo]. Por el cual se establecen disposiciones relacionadas con las solicitudes de registro y licencia de importación. Mayo 9 de 2013. DO. Nº 48.785.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1191327',
    },
    {
      referencia:
        'Decreto 390 de 2016. [Ministerio de Comercio, Industria y Turismo]. Por el cual se establece la regulación aduanera. Marzo 7 de 2016. DO. Nº 49.808.',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/gestion-juridica/decretos/decreto-390-de-2016.aspx',
    },
    {
      referencia: 'DIAN. (2017). Proceso Operación Aduanera.',
    },
    {
      referencia:
        'DIAN. (2008). Zonas de Regulación Aduanera Especial y las Declaraciones de Importación Simplificadas 2005 -2007.',
    },
    {
      referencia:
        'Grupo Bancolombia. (s. f.). ¿En qué consiste la Importación de servicios?',
      link:
        'https://www.grupobancolombia.com/wps/portal/negocios/comercio-internacional/importar/empezar/normatividad/cambiaria/importaciones-de-servicios',
    },
    {
      referencia: 'Junior Aduanas S.A. (s. f.). Territorio aduanero.',
      link:
        'https://junioraduanas.com/herramientas-de-consulta/glosario/135-territorio-aduanero',
    },
    {
      referencia: 'Legis. (2020). Régimen de importación y exportación.',
    },
  ],
  glosario: [
    {
      termino: 'Agente de aduanas',
      significado:
        'Persona jurídica autorizada por la Dirección de Impuestos y Aduanas Nacionales para ejercer actividades auxiliares de la función pública aduanera de naturaleza mercantil y de servicio, orientada a garantizar que los usuarios de comercio exterior que utilicen sus servicios cumplan con las normas legales existentes en materia de importación, exportación y tránsito aduanero y cualquier operación o procedimiento aduanero inherente a dichas actividades.',
    },
    {
      termino: 'Bienes',
      significado:
        'Conjunto de propiedades o riquezas que pertenecen a una persona o grupo',
    },
    {
      termino: 'Bienes de capital',
      significado:
        'Bienes que forman parte del patrimonio de una compañía. Asimismo, permiten producir un bien de consumo que se venderá al público.',
    },
    {
      termino: 'Bien de consumo',
      significado:
        'Un bien de consumo es la mercancía final en un proceso de producción. Así, satisface las necesidades de las personas de manera directa..',
    },
    {
      termino: 'Bien intermedio',
      significado:
        'bien que se utiliza para producir otros bienes (ejemplo: materias primas). Su uso determina si es un bien intermedio o de consumo.',
    },
    {
      termino: 'Declaración de cambio',
      significado:
        'Instrumento legal por el cual un residente en el país, persona nacional o jurídica, está obligado a informar a la autoridad cambiaria, Banco de la República, una operación de cambio, a través de los intermediarios del mercado cambiario, quienes son responsables del procesamiento de la información consignada en ella.',
    },
    {
      termino: 'Divisas',
      significado:
        'Toda moneda extranjera, es decir, monedas oficiales distintas de la moneda legal en el propio país.',
    },
    {
      termino: 'Insumos',
      significado:
        'Toda aquella cosa susceptible de dar servicio y paliar necesidades del ser humano, es decir, hacen referencia a todas las materias primas que son utilizadas para producir nuevos elementos.',
    },
    {
      termino: 'Mandato aduanero',
      significado:
        'Este convenio se encuentra definido en el artículo 1262 del Código de Comercio como el contrato por el cual una parte se obliga a celebrar o ejecutar uno o más actos de comercio por cuenta de otra. El mandato puede ser con o sin representación.',
    },
    {
      termino: 'Materias primas',
      significado:
        'Una materia prima es todo bien que es transformado durante un proceso de producción hasta convertirse en un bien de consumo.',
    },
    {
      termino: 'Zona Franca',
      significado:
        'Territorio caracterizado por contar con una serie de ventajas de tipo legislativo y económico que promueven el desarrollo de actividades de comercio exterior.',
    },
  ],
  complementario: [
    {
      texto: 'DANE Boletín Técnico Importaciones IMPO 2020',
      tipo: 'Informe',
      descarga: '/downloads/ANEXO_1_BOLETIN_TECNICO_IMPO.pdf',
    },
    {
      texto: 'Trámites para importar y exportar servicios',
      tipo: 'Presentación',
      descarga:
        '/downloads/ANEXO_2_PASOS_PARA_ESPORTAR_E_IMPORTAR_SERVICIOS.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Alejandro Acevedo',
        cargo: 'Experta temático',
        centro: 'Centro de Comercio - Regional Antioquia',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Kateryn Dallan Valderrama ',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Zenen Arevalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Alvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
