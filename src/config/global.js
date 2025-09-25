export default {
  global: {
    componenteFormativo: 'Diagnóstico de liquidez en organizaciones solidarias',
    descripcionCurso:
      'Este componente brinda fundamentos conceptuales y técnicos para analizar la liquidez financiera en organizaciones solidarias. Incluye estudio normativo, estructura organizacional, documentación contable y flujos de caja. Desarrolla habilidades para interpretar estados financieros, calcular indicadores y aplicar técnicas de análisis, orientando la gestión hacia sostenibilidad financiera y bienestar colectivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Economía solidaria y su marco normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es la economía solidaria?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Marco legal de las organizaciones solidarias en Colombia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principios y valores que rigen la economía solidaria',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura financiera de las organizaciones solidarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de empresas solidarias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estructura organizacional y políticas contables',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Documentación contable y soportes financieros',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Flujo de caja y movimientos financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y tipos de flujo de caja',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación de ingresos, egresos y excedentes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas para clasificar y analizar flujos de caja',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Liquidez financiera: fundamentos y análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de liquidez y su importancia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estados financieros relacionados con la liquidez',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Indicadores de liquidez: cálculo e interpretación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Técnicas de análisis financiero para el diagnóstico de liquidez',
            hash: 't_4_4',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
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
  complementario: [
    {
      tema: '1. Economía solidaria y su marco normativo',
      referencia:
        'Congreso de la República de Colombia. (1988). <em>Ley 79 de 1988. Por la cual se actualiza la Legislación Cooperativa.</em>',
      tipo: 'Documento legal (Ley)',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9211',
    },
    {
      tema: '4. Liquidez financiera: fundamentos y análisis',
      referencia:
        'Marcillo Parrales, D. V. & Chinga Flores, J. M. (2023, 19 de enero). Indicadores financieros y su influencia en la toma de decisiones del Supermercado Open 24 & 7, Portoviejo. Manabí. <em>Revista FIPCAEC, 8(1), 895-918.</em>',
      tipo: 'Articulo',
      link: 'https://www.fipcaec.com/index.php/fipcaec/article/view/770',
    },
  ],
  glosario: [
    {
      termino: 'Análisis financiero',
      significado:
        'proceso de evaluación de la situación económica y financiera de una empresa, mediante el estudio de sus estados financieros.',
    },
    {
      termino: 'Capital de trabajo',
      significado:
        'diferencia entre los activos corrientes y los pasivos corrientes, que indica la capacidad de la empresa para operar eficientemente.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'grado en que una empresa utiliza recursos financieros de terceros, para financiar sus operaciones.',
    },
    {
      termino: 'Indicadores financieros',
      significado:
        'relaciones matemáticas entre cuentas contables, que permiten medir aspectos clave del desempeño económico de la empresa.',
    },
    {
      termino: 'Liquidez',
      significado:
        'capacidad de una empresa para cumplir sus obligaciones a corto plazo, con los recursos que tiene disponibles.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'capacidad de una empresa para generar utilidades en relación con los recursos utilizados.',
    },
    {
      termino: 'Prueba ácida',
      significado:
        'indicador de liquidez que excluye inventarios del cálculo para mostrar la capacidad inmediata de pago.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burbano Ruiz, J. E. (2011). <em>Presupuestos: un enfoque estratégico, gestión y control de recursos.</em> (4.a ed.). McGraw-Hill Latinoamericana.',
    },
    {
      referencia:
        'León García, O. (2009). <em>Administración Financiera.</em> Prensa Moderna Editores.',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2018). <em>Análisis Financiero Aplicado.</em> Universidad Externado.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
