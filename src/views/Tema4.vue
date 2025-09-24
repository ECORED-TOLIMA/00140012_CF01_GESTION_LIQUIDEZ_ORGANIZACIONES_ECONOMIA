<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Liquidez financiera: fundamentos y análisis

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") La liquidez financiera se refiere a la capacidad de una organización para cumplir con sus obligaciones inmediatas, utilizando sus recursos disponibles en caja, bancos y activos de alta convertibilidad. Es un indicador clave para medir la salud financiera de cualquier entidad, ya que evidencia si cuenta con el dinero suficiente para cubrir gastos operativos, pagos a proveedores y compromisos con sus asociados. En el caso de las organizaciones solidarias, garantizar la liquidez no solo tiene implicaciones económicas, sino también sociales, ya que su continuidad impacta directamente en el bienestar de la comunidad que atienden.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#E4FFF7")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-02.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Desde una perspectiva técnica, la liquidez se analiza a partir de la relación entre los activos corrientes (como caja, bancos y cuentas por cobrar) y los pasivos corrientes (deudas de corto plazo). Indicadores como la razón corriente, la prueba ácida y el capital de trabajo permiten cuantificar este equilibrio. Como lo explica León García (2009), una liquidez saludable no implica necesariamente tener grandes excedentes de efectivo, sino lograr un balance eficiente que permita operar con estabilidad sin incurrir en riesgos de iliquidez o sobrecapitalización. Es decir, una organización financieramente sólida es aquella que puede responder a sus obligaciones sin sacrificar su capacidad de inversión ni su misión social.

    p.mb-5(data-aos="fade-left") En las organizaciones solidarias, el análisis de liquidez debe considerar también aspectos particulares como los fondos sociales, los aportes de los asociados y la estacionalidad en los ingresos.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 Por ejemplo, una cooperativa puede experimentar altos ingresos en ciertas épocas del año, pero bajos flujos en otras, lo que exige una gestión anticipada del efectivo. 

    .row.justify-content-center.mb-0
      .col-lg-4.col-6.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img-03.png', alt='Imagen decorativa')
      .col-lg-6
        p(data-aos="fade-right") Ortiz Anaya (2018) enfatiza que el diagnóstico de liquidez en este tipo de entidades no puede realizarse con fórmulas estándar exclusivamente; es necesario interpretar los resultados a la luz de la dinámica asociativa y del propósito colectivo que guía sus operaciones.
        p(data-aos="fade-left") Por ello, el análisis de liquidez no debe verse como un ejercicio aislado, sino como un proceso articulado con la planeación financiera, la gestión presupuestal y el seguimiento contable. Las decisiones que se toman a partir de este análisis como aplazar inversiones, ajustar gastos o buscar nuevas fuentes de ingreso, deben estar orientadas por el principio de sostenibilidad solidaria. En últimas, garantizar la liquidez es asegurar que la organización pueda seguir cumpliendo su rol social, manteniendo la confianza de sus asociados y proyectando su permanencia en el tiempo. Esta relación entre liquidez y sostenibilidad será profundizada en los próximos subtemas de este componente formativo.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Concepto de liquidez y su importancia

    p.mb-5(data-aos="fade-right") La liquidez es la capacidad de una organización para disponer de efectivo o de activos fácilmente convertibles en efectivo para cumplir sus obligaciones inmediatas. Esta condición financiera refleja qué tan solvente es una entidad en el corto plazo; es decir, si cuenta con los recursos necesarios para pagar gastos operativos, servicios, proveedores, salarios y compromisos institucionales sin recurrir a endeudamientos innecesarios. Como lo plantea León García (2009), la liquidez es una señal clave de estabilidad financiera y eficiencia administrativa, especialmente en contextos donde los ingresos no son constantes.

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
            .cajon.cajon1.color-primario.p-4.mb-3.order-lg-1.order-2
              p.mb-0 En las organizaciones de economía solidaria, la liquidez adquiere una connotación adicional: garantiza no solo la continuidad operativa, sino también el cumplimiento del compromiso social con sus asociados y comunidades. Un bajo nivel de liquidez puede afectar la entrega de servicios, retrasar beneficios sociales o limitar el acceso a fondos de bienestar y educación. Por esta razón, más allá de una obligación contable, el control de la liquidez debe verse como una #[b herramienta de sostenibilidad institucional y confianza organizacional.] Ortiz Anaya (2018), destaca que una adecuada administración de la liquidez, permite anticiparse a posibles tensiones financieras y responder de forma oportuna y estratégica.
          .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema4/img-04.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") La importancia de la liquidez también se relaciona con la #[b capacidad de adaptación] de la organización, frente a cambios del entorno económico. Factores como inflación, aumento en los costos operativos, variación en el comportamiento de los asociados o disminución de ingresos por servicios, pueden generar presiones sobre el flujo de efectivo. 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img-16.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              p Una organización con buena liquidez puede afrontar estas contingencias sin comprometer su estabilidad. 

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img-17.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              p Por el contrario, la falta de liquidez obliga a tomar decisiones reactivas, como el recorte de programas sociales o la suspensión de inversiones clave.

    p.mb-0(data-aos="fade-left") Finalmente, la gestión de la liquidez debe ser vista como un proceso continuo y no como un diagnóstico esporádico. Requiere planificación, monitoreo constante y participación de los órganos administrativos y de control. Además, debe apoyarse en herramientas como el flujo de caja proyectado, los estados financieros actualizados y los indicadores específicos. La liquidez no se mejora solo con ingresos, sino con una #[b gestión financiera consciente, responsable y alineada con los valores solidarios.] En este sentido, mantener niveles adecuados de liquidez es esencial para que la organización cumpla con su misión, fortalezca la confianza de sus asociados y contribuya de manera efectiva al desarrollo colectivo.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2 Estados financieros relacionados con la liquidez

    p.mb-4(data-aos="fade-left") Los estados financieros son informes contables que reflejan la situación económica y financiera de una organización en un periodo determinado. Dentro de este conjunto, existen algunos que están directamente relacionados con el análisis de la liquidez, ya que permiten identificar la capacidad de la entidad para cumplir con sus obligaciones de corto plazo. Los más relevantes en este contexto son:

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img-05.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") El estado de situación financiera 
            p.text-center.mb-0(style="color:#12263F") (anteriormente llamado balance general).

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img-06.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") El estado de flujo de efectivo.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img-07.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") El estado de resultados integrales.

    p.mb-0(data-aos="fade-left") Cada uno de ellos aporta información clave para diagnosticar y proyectar la estabilidad financiera de una organización solidaria.
    p.mb-4(data-aos="fade-right") A continuación, se da una explicación más detallada de cada uno: 

    .row.justify-content-center.mb-0
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Estado de situación financiera ")
            .col-lg-12.order-lg-1.order-2
              p Muestra el valor total de los activos, pasivos y patrimonio de la organización. Dentro de este informe, los activos corrientes como caja, bancos, cuentas por cobrar a corto plazo e inventarios se comparan con los pasivos corrientes; es decir, las deudas o compromisos exigibles en el corto plazo. Esta comparación es esencial para determinar la solvencia inmediata de la entidad. Como señala León García (2009), un análisis riguroso de este estado permite establecer indicadores como la razón corriente o el capital de trabajo, fundamentales para anticipar necesidades de financiación o ajustar políticas de gasto.

          .row(titulo="Estado de flujo de efectivo")
            .col-lg-12.order-lg-1.order-2
              p Ofrece una visión detallada de cómo se mueve el dinero en la organización. Este estado clasifica las entradas y salidas de efectivo en tres categorías: actividades operativas, de inversión y de financiación. Para las organizaciones solidarias, este informe permite evaluar si los ingresos generados por sus actividades sociales o comerciales son suficientes para cubrir sus egresos, o si dependen de fuentes externas de financiación. Según Ortiz Anaya (2018), este estado no solo muestra el comportamiento real del efectivo, sino que también permite identificar tendencias que podrían poner en riesgo la liquidez si no se gestionan adecuadamente.

          .row(titulo="Estado de resultados integrales")
            .col-lg-12.order-lg-1.order-2
              p Aunque no está enfocado directamente en la liquidez, sí ofrece señales importantes sobre la rentabilidad y la generación de excedentes, lo cual puede incidir en la disponibilidad de efectivo. Por ejemplo, si una organización presenta excedentes recurrentes pero una baja liquidez, esto puede indicar problemas de gestión del efectivo o de cobro de cartera. Por eso, el análisis de la liquidez debe hacerse de manera integrada, considerando la información contenida en todos los estados financieros relevantes. En el caso de las entidades solidarias, este análisis debe estar alineado con los principios de transparencia, equidad y sostenibilidad colectiva que caracterizan al sector.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img-08.png' alt="Imagen decorativa")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_3 4.3 Indicadores de liquidez: cálculo e interpretación

    p(data-aos="fade-left") Los indicadores de liquidez son herramientas financieras que permiten medir la capacidad de una organización, para cubrir sus obligaciones de corto plazo, con los recursos que tiene disponibles. Estos indicadores cuantifican la relación entre activos corrientes y pasivos corrientes, ofreciendo una visión rápida del grado de solvencia inmediata de la entidad. En las organizaciones de economía solidaria, el uso de estos indicadores es fundamental para garantizar la sostenibilidad operativa, la confianza de los asociados y el cumplimiento de los compromisos estatutarios. Su cálculo debe basarse en cifras actualizadas y confiables, extraídas del estado de situación financiera.
    p.mb-4(data-aos="fade-right") Los siguientes son los indicadores que hacen parte de este proceso: 

    .tarjeta.tarjeta--gris.fondo.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center(titulo="a.")
          .col-lg-7.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-09.png', alt='Texto que describa la imagen')
          .col-lg-5
            h4 Razón corriente
            p Se calcula dividiendo los activos corrientes entre los pasivos corrientes. Una razón mayor a 1 indica que la organización tiene suficientes recursos líquidos para cubrir sus deudas inmediatas. Sin embargo, una razón excesivamente alta podría sugerir una acumulación ineficiente de activos sin rentabilidad. 

        .row.justify-content-center(titulo="b.")
          .col-lg-7.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-10.png', alt='Texto que describa la imagen')
          .col-lg-5
            h4 Prueba ácida (o razón rápida)
            p Excluye los inventarios de los activos corrientes antes de realizar la división. Este indicador ofrece una visión más exigente de la liquidez, especialmente útil en entidades donde los inventarios no son de fácil realización en efectivo.

        .row.justify-content-center(titulo="c.")
          .col-lg-7.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img-11.png', alt='Texto que describa la imagen')
          .col-lg-5
            h4 Capital de trabajo 
            p Calculado como la diferencia entre activos corrientes y pasivos corrientes. Este indicador muestra el monto disponible para operar después de cubrir las obligaciones inmediatas. Si el capital de trabajo es positivo, la organización tiene margen de maniobra; si es negativo, enfrenta una posible situación de iliquidez.

    .row.justify-content-center.align-items-center
      .col-lg-3.col-12.mb-3.d-lg-flex.d-none.order-lg-2.order-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img-12.svg', alt='Imagen decorativa')

      .col-lg-7.col-12.mb-3.order-lg-1.order-1(data-aos="fade-right")
        .bloque-texto-b.color-primario.py-4
          .bloque-texto-b__texto
            p Como lo advierte León García (2009), estos indicadores deben interpretarse con cuidado, considerando el ciclo operativo de la entidad, la estacionalidad de sus ingresos y la naturaleza de sus compromisos sociales y financieros.
            br
            br
            p.mb-0 En las organizaciones solidarias, la interpretación de estos indicadores debe ir más allá del análisis numérico. Se debe tener en cuenta el contexto asociativo, el objeto social y la gestión de fondos especiales como los de educación, bienestar y solidaridad. Un buen indicador de liquidez no solo refleja eficiencia administrativa, sino también responsabilidad social en la gestión de los recursos comunes. Por eso, el uso de indicadores debe acompañarse de una lectura crítica que permita tomar decisiones estratégicas alineadas con los principios del sector solidario, tal como lo propone Ortiz Anaya (2018), al abordar la evaluación financiera con enfoque integral.

    p.mb-4(data-aos="fade-left") Los indicadores financieros se calculan a partir de los estados financieros básicos: situación financiera (el balance general), el estado de resultados y el flujo de efectivo. Además, se puede complementar la información con reportes internos, presupuestos y comparativos sectoriales.

    .row.justify-content-center.mb-4  
      .col-lg-10(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-0.d-flex.justify-content-center.align-items-center(style="width:60px; height:60px; border-radius:50%")
            .col-lg-8
              img(src='@/assets/curso/temas/tema4/img-13.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C02
            .p-4
              p.mb-0 Los #[b indicadores de liquidez] son herramientas financieras que permiten medir la capacidad que tiene una empresa para #[b hacer frente a sus compromisos financieros inmediatos]; es decir, sus deudas a corto plazo. Este tipo de análisis es crucial para garantizar la operatividad continua del negocio, ya que una empresa con baja liquidez corre el riesgo de no poder pagar a sus proveedores, empleados, bancos u otras entidades, lo cual puede afectar negativamente su reputación, generar intereses por mora o incluso llevarla a la insolvencia.

    p.mb-4(data-aos="fade-left") Estos indicadores se enfocan en establecer una relación entre: 

    .row.mb-4
      .col-lg-6.mb-lg-0.mb-4
        .tarjeta.tarjeta--BG02.h-100(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema4/img-14.png', alt='Texto que describa la imagen')
          .p-4
            h5 Activos corrientes
            p.mb-0 Aquellos bienes y derechos que pueden convertirse fácilmente en efectivo en menos de un año. Entre los activos corrientes se encuentran el efectivo, las cuentas por cobrar, los inventarios y otros activos líquidos.
      .col-lg-6
        .tarjeta.tarjeta--BG02.h-100(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema4/img-15.png', alt='Texto que describa la imagen')         
          .p-4
            h5 Pasivos corrientes
            p.mb-0 Representan las obligaciones que deben pagarse en ese mismo periodo. Los pasivos corrientes incluyen préstamos bancarios de corto plazo, cuentas por pagar a proveedores y otras deudas próximas a vencerse.

    p(data-aos="fade-left") El análisis de liquidez es especialmente importante en negocios que operan con márgenes ajustados o que tienen una alta rotación de inventarios y cuentas por cobrar. Incluso una empresa rentable puede atravesar problemas financieros si no gestiona adecuadamente su liquidez. Por ejemplo, si una empresa tiene muchas ventas a crédito, pero no logra recaudar a tiempo, puede enfrentar dificultades para cumplir con sus compromisos, a pesar de tener utilidades contables.
    p.mb-4(data-aos="fade-right") Entre los indicadores más representativos de esta categoría se encuentran:  

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img-41.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") La razón corriente
            p.text-center.mb-0(style="color:#12263F") Relaciona los activos corrientes con los pasivos corrientes.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img-42.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") La prueba ácida o razón rápida
            p.text-center.mb-0(style="color:#12263F") Excluye los inventarios del cálculo para mostrar una visión más estricta de la liquidez.

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img-43.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") El capital de trabajo
            p.text-center.mb-0(style="color:#12263F") Indica cuánto exceden los activos líquidos a las obligaciones inmediatas.

    p(data-aos="fade-left") Cada uno de estos indicadores ofrece una perspectiva distinta, pero complementaria, sobre la solidez financiera de corto plazo.
    p(data-aos="fade-right") Según Ortiz (2011), una correcta interpretación de los indicadores de liquidez, permite tomar decisiones acertadas sobre la #[b gestión del efectivo], la #[b política de créditos y cobros], así como la #[b planificación del capital de trabajo.] En contextos de incertidumbre económica o cambios en la demanda, una liquidez adecuada actúa como colchón de seguridad para garantizar la continuidad del negocio. Por ello, estos indicadores deben monitorearse constantemente, compararse con promedios del sector y ajustarse a la realidad operativa de cada empresa.
    p.mb-4(data-aos="fade-left") A continuación, se explica en mayor medida, cada uno de estos indicadores, así como otros aspectos que tienen relevancia:

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema4/icono.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Razón corriente

    .row.justify-content-center.p-4.mb-4(data-aos="fade-right")
      .col-md-7.tarjeta.color-primario.p-3(style="background-color:#FCE898")
        p.text-bold.text-center #[em Fórmula:]
        p.text-bold.text-center #[em Razón Corriente = Activo Corriente / Pasivo Corriente]

    p.mb-5(data-aos="fade-left") La #[b razón corriente] es uno de los indicadores más utilizados para medir la #[b liquidez general de una empresa.] Su fórmula consiste en dividir el total de activos corrientes, entre el total de pasivos corrientes. Esta relación busca responder una pregunta clave: ¿cuántos recursos líquidos o de fácil conversión tiene la empresa por cada peso que debe pagar en el corto plazo?

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
            .cajon.cajon1.color-primario.p-4.mb-3.order-lg-1.order-2
              p.mb-0 En el ejemplo planteado, una empresa con activos corrientes por #[b $80.000.000] y pasivos corrientes por #[b $40.000.000], presenta una #[b razón corriente de 2.0]. Esto significa que por cada peso que debe pagar en el corto plazo, dispone de dos pesos en activos líquidos. A primera vista, esto se interpreta como una #[b posición financiera saludable], ya que indica que la empresa tiene el doble de recursos que deudas inmediatas, lo cual le da margen para operar con tranquilidad.

          .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema4/img-18.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") Sin embargo, es importante tener en cuenta que una #[b razón corriente "alta" no siempre es sinónimo de eficiencia]. Por ejemplo, si buena parte de esos activos corrientes están compuestos por inventarios que no se están vendiendo o por cuentas por cobrar de difícil recaudo, entonces la empresa podría tener una liquidez “aparente”, pero no efectiva. En ese sentido, la calidad de los activos es tan importante como su cantidad.

    .bg-c1.px-md-5.px-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-5.col-6.mb-4.mb-lg-0(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema4/img-19.png', alt='Imagen decorativa')
        .col-lg-5
          p(data-aos="fade-left") Por otro lado, una #[b razón corriente inferior a 1.0] (es decir, cuando los pasivos superan a los activos corrientes), es una señal de alerta, ya que implica que la empresa no tiene suficientes recursos líquidos para cubrir sus deudas inmediatas. Esta situación podría poner en riesgo su operación cotidiana y obligarla a recurrir a financiamiento externo de forma urgente, generalmente con costos financieros más altos.
          p(data-aos="fade-right") De forma ideal, la razón corriente debe situarse en un #[b rango entre 1.5 y 2.5], aunque esto puede variar dependiendo del tipo de industria. Por ejemplo, en sectores con alta rotación de inventarios como el comercio minorista, una razón corriente cercana a #[b 1.2] podría ser aceptable. En contraste, en industrias más estables o con ciclos financieros más largos, se espera una razón corriente más elevada como señal de prudencia financiera.

    p.mb-4(data-aos="fade-left") En conclusión, este indicador no debe analizarse de manera aislada. Es recomendable #[b complementarlo con la prueba ácida, el capital de trabajo y el análisis del flujo de efectivo], para obtener una visión completa de la capacidad real de pago de corto plazo. Además, se debe considerar la naturaleza de los activos, la antigüedad de las cuentas por cobrar y la estacionalidad del negocio; factores que inciden directamente en la interpretación de la liquidez.

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema4/icono.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Prueba ácida
    
    .row.justify-content-center.p-4.mb-4(data-aos="fade-right")
      .col-md-7.tarjeta.color-primario.p-3(style="background-color:#FCE898")
        p.text-bold.text-center #[em Fórmula:]
        p.text-bold.text-center #[em Prueba Ácida = (Activo Corriente - Inventarios) / Pasivo Corriente]
      
    p(data-aos="fade-left") La #[b prueba ácida] es un indicador de liquidez más exigente que la razón corriente, ya que #[b excluye los inventarios del activo corriente] al momento de medir la capacidad de pago de una empresa. Esto se debe a que los inventarios, aunque hacen parte del capital de trabajo, no siempre se pueden convertir en efectivo de forma rápida o segura, especialmente si tienen baja rotación o están compuestos por productos obsoletos.
    p.mb-5(data-aos="fade-right") Este indicador busca responder: ¿qué tan solvente es la empresa si se eliminan los inventarios de la ecuación? En otras palabras, #[b ¿la organización podría pagar sus deudas inmediatas solo con su efectivo, cuentas por cobrar y otros activos más líquidos?] Es una medida más conservadora de la liquidez, útil para detectar situaciones en las que la liquidez aparente podría estar sobreestimada debido a un exceso de inventarios acumulados.

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
            .cajon.cajon1.color-primario.p-4.mb-3.order-lg-1.order-2
              p #[b Ejemplo:] si una empresa tiene un activo corriente de $80.000.000 y dentro de este tiene inventarios por $20.000.000, su activo corriente sin inventarios sería de $60.000.000. Si sus pasivos corrientes suman $40.000.000, entonces:
              p.mb-0 #[b Prueba Ácida = (80.000.000 – 20.000.000) / 40.000.000 = 1.5]

          .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema4/img-20.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") Este resultado significa que la empresa tiene #[b $1,50 por cada $1 de deuda de corto plazo], considerando únicamente sus activos más líquidos (excluyendo los inventarios). Esta es una señal positiva, ya que muestra que, en caso de urgencia, la empresa podría cubrir sus obligaciones sin necesidad de liquidar inventarios, lo que generalmente requiere más tiempo y puede implicar descuentos u otras pérdidas.
    
    .bg-c1.px-md-5.px-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-5.col-6.mb-4.mb-lg-0(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema4/img-21.png', alt='Imagen decorativa')
        .col-lg-5
          p(data-aos="fade-right") Ahora bien, si la prueba ácida resulta inferior a #[b 1.0], la empresa podría estar enfrentando un #[b riesgo real de iliquidez], especialmente si sus inventarios no se venden con facilidad. Esto puede ocurrir en empresas que tienen mucho inventario inmovilizado o que dependen demasiado de ventas a crédito, sin una política de cobranza efectiva.
          p(data-aos="fade-left") Por el contrario, una prueba ácida excesivamente alta, por ejemplo, superior a 3.0 también podría ser motivo de análisis, ya que indicaría que la empresa está acumulando demasiado efectivo o cuentas por cobrar, en lugar de invertir esos recursos de manera productiva. En estos casos, se debe evaluar si se están desaprovechando oportunidades de crecimiento o mejora operativa.

    p.mb-4(data-aos="zoom-in") Según Ortiz (2011), la prueba ácida es uno de los indicadores más confiables para evaluar la liquidez de una empresa, siempre y cuando se complemente con el análisis de la #[b estructura de los activos corrientes], el comportamiento histórico de los cobros y el contexto financiero de la organización. Su interpretación no debe hacerse de forma aislada, sino en conjunto con otros indicadores y datos cualitativos del entorno empresarial.

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema4/icono.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Capital de trabajo

    .row.justify-content-center.p-4.mb-4(data-aos="fade-right")
      .col-md-7.tarjeta.color-primario.p-3(style="background-color:#FCE898")
        p.text-bold.text-center.mb-0 #[em Fórmula:]
        p.text-bold.text-center.mb-0 #[em Capital de Trabajo = Activo Corriente – Pasivo Corriente]

    p(data-aos="fade-left") El #[b capital de trabajo] es uno de los indicadores más fundamentales en la gestión financiera de una empresa, ya que representa la #[b cantidad de recursos líquidos disponibles para operar el negocio una vez se han descontado las obligaciones inmediatas.] En otras palabras, es el “colchón” que tiene la organización para sostener su funcionamiento diario, sin recurrir a financiamiento externo o incurrir en mora con sus compromisos financieros de corto plazo.
    p.mb-5(data-aos="fade-right") Este indicador se calcula simplemente restando los pasivos corrientes (deudas que vencen en menos de un año) de los activos corrientes (efectivo, cuentas por cobrar, inventarios, etc.). 

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
            .cajon.cajon1.color-primario.p-4.mb-3.order-lg-1.order-2
              p.mb-0 #[b Ejemplo:] si una empresa tiene activos corrientes por $80.000.000 y pasivos corrientes por $40.000.000, su capital de trabajo será de $40.000.000. Esto significa que, una vez pagadas todas sus deudas inmediatas, aún le quedarán $40 millones para cubrir operaciones como compras, nómina, pagos de servicios, y otras necesidades operativas.

          .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema4/img-39.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-right") Una lectura positiva del capital de trabajo, implica que la empresa tiene #[b margen de maniobra para operar sin depender exclusivamente de líneas de crédito u otras formas de financiamiento de emergencia.] Sin embargo, un capital de trabajo excesivamente alto podría significar que la empresa tiene recursos ociosos (por ejemplo, mucho efectivo sin invertir o inventarios innecesarios), lo cual también puede ser ineficiente. Por eso, más que su valor absoluto, lo importante es que este indicador esté en #[b equilibrio con el tamaño y tipo de operación de la empresa.]

    .bg-c1.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-6.mb-4.mb-lg-0(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema4/img-23.png', alt='Imagen decorativa')
        .col-lg-5
          p(data-aos="fade-left") Cuando el capital de trabajo es #[b negativo] (es decir, cuando el pasivo corriente supera al activo corriente), la empresa se encuentra en una situación crítica: no tiene suficientes recursos para atender sus compromisos de corto plazo, lo que puede generar problemas de liquidez, pérdida de confianza con los proveedores, dificultades para sostener la operación y eventualmente, insolvencia. Retomando a Ortiz (2011), esta situación es especialmente riesgosa en contextos de alta inflación, incertidumbre económica o baja rotación de cartera.
          p(data-aos="fade-right") Este indicador también tiene una estrecha relación con la #[b gestión del ciclo operativo], ya que un capital de trabajo adecuado facilita:

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#92D8FE")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img-24.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 La adquisición de materias primas.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E4FFF7")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img-25.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 El cumplimiento de la producción.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#92D8FE")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img-26.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 La atención de la demanda.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E4FFF7")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img-27.svg' alt="Imagen decorativa")
        p.text-center.text-bold.mb-0 La administración eficiente del crédito a clientes.

    p(data-aos="fade-left") Es por esto que su monitoreo constante es vital para mantener una operación fluida y evitar interrupciones que afecten la productividad y la satisfacción del cliente.
    p.mb-4(data-aos="fade-right") En síntesis, el capital de trabajo no solo es un reflejo de la liquidez de una empresa, sino también de su #[b capacidad de adaptación, resistencia financiera y eficiencia operativa.] Administrarlo correctamente implica mantener un equilibrio saludable entre las cuentas por cobrar, los inventarios y las cuentas por pagar, de manera que se asegure un flujo de efectivo constante y sostenible a lo largo del tiempo.

    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema4/icono.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Ciclo de Conversión de Efectivo (CCE)

    p(data-aos="fade-left") Es un indicador financiero clave dentro del análisis de eficiencia y gestión operativa de una empresa. Este ciclo mide el #[b tiempo promedio que tarda la empresa en convertir sus inversiones en inventarios y cuentas por cobrar en efectivo proveniente de las ventas], descontando el tiempo que tarda en pagar a sus proveedores. En otras palabras, el CCE permite calcular cuántos días tarda el dinero en dar la vuelta completa al proceso operativo: desde que se invierte en inventario, se vende, se cobra y se vuelve a tener disponible en caja.
    p.mb-4(data-aos="fade-right") Este ciclo se calcula mediante la siguiente fórmula:

    .row.justify-content-center.p-4.mb-4(data-aos="zoom-in")
      .col-md-7.tarjeta.color-primario.p-4(style="background-color:#FCE898")
        p.text-bold.text-center.mb-0 #[em CCE = Días de inventario + Días de cuentas por cobrar – Días de cuentas por pagar]

    p.mb-4(data-aos="fade-left") Cada uno de estos componentes representa una etapa del ciclo financiero-operativo:  

    .row.justify-content-center.mb-3(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/icono-la.svg", alt="alt").img90.m-auto
          h4.text-center Días de inventario
          p.text-center.mb-0 Número promedio de días que tarda la empresa en vender su inventario.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/icono-mo.svg", alt="alt").img90.m-auto
          h4.text-center Días de cuentas por cobrar
          p.text-center.mb-0 Tiempo que tarda en cobrarle a los clientes después de la venta.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/icono-p.svg", alt="alt").img90.m-auto
          h4.text-center Días de cuentas por pagar
          p.text-center.mb-0 Plazo promedio que tiene la empresa para pagar a sus proveedores.

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
            p.mb-4 Por ejemplo, si una empresa tarda en promedio 45 días en vender sus inventarios, 30 días en cobrar a sus clientes y tiene un plazo de 35 días para pagar a sus proveedores, el cálculo sería:
            .col-md-12.tarjeta.color-primario.p-4.mb-4(style="background-color:#FCE898")
              p.text-bold.text-center.mb-0 #[em CCE = 45 + 30 – 35 = 40 días]
            p Esto significa, que, desde el momento en que la empresa invierte en inventario, hasta que recupera el efectivo de la venta, pasan #[b 40 días] en los que debe financiar sus operaciones. Este periodo debe ser gestionado con especial atención, ya que cuanto más corto sea el ciclo de conversión, #[b mayor será la liquidez y eficiencia en el uso del capital de trabajo.]

          .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema4/img-40.png', alt='Imagen decorativa')

    p.mb-4(data-aos="flip-up") Con respecto a los CCE: 

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#D5F1FF")
            .row.justify-content-center.mb-3
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/tema4/img-29.svg', alt='Imagen decorativa')
            
            h4.text-center.mb-5 CCE positivo
            p.mb-0 Indica que la empresa necesita financiar parte del ciclo operativo con recursos propios o con deuda, ya que debe esperar a recuperar el efectivo. 

          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#E4FFF7")
            .row.justify-content-center.mb-3
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/tema4/img-30.svg', alt='Imagen decorativa')
            
            h4.text-center.mb-5 CCE negativo
            p.mb-0 Puede interpretarse favorablemente, ya que implica que la empresa recibe el pago de sus clientes antes de tener que pagar a sus proveedores. 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 Este es el caso típico de grandes cadenas de #[em retail] o supermercados, que venden en efectivo y pagan a sus proveedores a crédito, lo cual mejora significativamente su flujo de caja.

    p(data-aos="fade-left") Ahora bien, un CCE demasiado largo, puede ser una señal de problemas en la rotación de inventarios o en la gestión de cartera, lo que puede provocar escasez de efectivo, mayores costos financieros o incluso frenar el crecimiento del negocio. Por eso, las empresas deben trabajar en estrategias para #[b acelerar las ventas, reducir los plazos de cobro y negociar mejores condiciones con sus proveedores.]
    p.mb-4(data-aos="fade-right") Ortiz (2011), hace referencia a que el ciclo de conversión de efectivo, es un indicador esencial para comprender cómo se está utilizando el capital de trabajo en las operaciones cotidianas. Su análisis, permite anticipar tensiones de liquidez, optimizar procesos logísticos y financieros, además de diseñar políticas de crédito y compras más eficientes. En empresas en crecimiento, controlar el CCE puede marcar la diferencia entre el éxito y el estancamiento.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema4/icono.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Análisis de la liquidez

    p.mb-5(data-aos="fade-left") El análisis de la liquidez es una herramienta fundamental para evaluar la capacidad de una empresa de #[b cumplir con sus compromisos financieros a corto plazo, sin necesidad de recurrir a financiación externa o venta urgente de activos.] Se trata de analizar si la organización dispone de recursos suficientes y con disponibilidad inmediata (o casi inmediata) para afrontar sus obligaciones dentro del ciclo operativo normal.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#E4FFF7")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-31.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Una #[b liquidez insuficiente], evidenciada a través de indicadores como una razón corriente menor a #[b 1.0], una prueba ácida preocupantemente baja o un capital de trabajo negativo, representa una #[b alerta crítica] para la empresa. Esta situación puede derivar en retrasos en los pagos a proveedores, sanciones por incumplimientos contractuales, pérdida de credibilidad en el mercado e incluso, en casos extremos, en una #[b crisis de insolvencia]. Es decir, la empresa podría no tener la capacidad para sostener su operación diaria, a pesar de ser potencialmente rentable desde el punto de vista contable.

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
            p Por ejemplo, una empresa que venda mucho y genere utilidades sobre el papel, pero tenga un largo periodo de recaudo de cartera, podría experimentar dificultades para pagar su nómina, proveedores o impuestos si no cuenta con reservas de liquidez suficientes. Esto ocurre con frecuencia en negocios que ofrecen ventas a crédito, pero no implementan una política efectiva de cobranza. En este caso, la #[b liquidez deficiente puede ser consecuencia de una mala gestión de cuentas por cobrar, más que de falta de ingresos.]
            p En el otro extremo, #[b una liquidez excesiva] también puede ser motivo de análisis. Si una empresa mantiene una razón corriente muy alta (por ejemplo, mayor a #[b 3.0]) o acumula grandes saldos de efectivo sin destinarlos a inversiones productivas, puede estar cayendo en una #[b ineficiencia en el uso de sus recursos.] El capital sin utilizar pierde valor en términos reales (por inflación) y representa oportunidades no aprovechadas para expandirse, mejorar procesos, capacitar personal, adquirir tecnología o aumentar la competitividad. En otras palabras, tener demasiada liquidez puede reflejar una actitud conservadora extrema o una falta de estrategia financiera clara.
            .cajon.cajon1.color-primario.p-4.mb-3.order-lg-1.order-2
              p.mb-0 Lo ideal, como lo plantea Ortiz (2011), es mantener la liquidez en niveles adecuados al tipo de negocio, su ciclo operativo y el contexto del sector. Una empresa comercial, por ejemplo, puede operar cómodamente con una razón corriente cercana a 1.5, mientras que una industria pesada, con mayores riesgos financieros y necesidades de reposición de inventarios, podría requerir niveles de liquidez más altos. #[b No existe un único estándar universal, pero sí debe buscarse un equilibrio sano y sostenible.]

          .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema4/img-32.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-left") En conclusión, el análisis de la liquidez no debe limitarse a la observación de un número o fórmula, sino que debe considerar el comportamiento histórico, la calidad de los activos líquidos, la rotación del capital de trabajo, las políticas de crédito y cobro, así como la planificación financiera de la empresa. Una buena liquidez garantiza estabilidad, confianza y capacidad de maniobra; pero, debe estar alineada con la rentabilidad y eficiencia para no convertirse en una barrera silenciosa al crecimiento.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_4 4.4 Técnicas de análisis financiero para el diagnóstico de liquidez

    p(data-aos="fade-left") El diagnóstico de liquidez requiere la aplicación de técnicas de análisis financiero que permitan comprender, no solo los niveles actuales de solvencia, sino también las tendencias, riesgos y oportunidades que enfrenta una organización solidaria en su gestión del efectivo. Estas técnicas combinan el uso de herramientas cuantitativas, como los indicadores de liquidez, con métodos cualitativos que interpretan la dinámica organizacional, los patrones de comportamiento financiero y las decisiones administrativas. Como señala Ortiz Anaya (2018), el análisis financiero debe ir más allá de las cifras e integrar el contexto económico, social y normativo de cada entidad.
    p.mb-4(data-aos="fade-right") A continuación, se explica cada una de las técnicas: 

    .tarjeta--BG01.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-6.order-2.order-lg-1
              h4 Análisis vertical
              p.mb-0 Consiste en evaluar la proporción que representa cada cuenta dentro de los estados financieros. Por ejemplo, se puede analizar qué porcentaje del activo total está representado por la caja y bancos, o qué parte del pasivo corresponde a deudas a corto plazo. Esta técnica permite identificar concentraciones de riesgo y evaluar si los recursos disponibles son proporcionales a las necesidades operativas. En el diagnóstico de liquidez, el análisis vertical ayuda a visualizar rápidamente la estructura de los recursos líquidos y sus implicaciones.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4  
              figure
                img(src='@/assets/curso/temas/tema4/img-33.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4 Análisis horizontal
              p.mb-0 Examina la evolución de las cuentas financieras a lo largo del tiempo. Permite identificar aumentos o disminuciones en el efectivo disponible, en las cuentas por cobrar o en los pasivos exigibles. Aplicado a la liquidez, este análisis revela tendencias que pueden alertar sobre una posible pérdida de capacidad de pago o, por el contrario, sobre una mejora sostenida en la disponibilidad de recursos. Esta técnica es especialmente útil en organizaciones solidarias que presentan comportamientos financieros estacionales o que han implementado cambios estratégicos recientes.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img-34.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h4 Análisis de sensibilidad
              p.mb-0 Permite simular distintos escenarios ante posibles variaciones en los ingresos, egresos o costos operativos. Esta herramienta es útil para anticipar cómo afectaría la liquidez una disminución en los aportes de los asociados, un aumento en los gastos administrativos o una demora en el recaudo. En el entorno de la economía solidaria, estas simulaciones permiten tomar decisiones preventivas que protejan el equilibrio financiero sin comprometer la misión social.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img-35.png', alt='Imagen decorativa')
        
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 Burbano Ruiz (2011) subraya que el análisis financiero debe ser una práctica habitual en las organizaciones, no solo para cumplir requisitos contables, sino para fortalecer su sostenibilidad y capacidad de respuesta.




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
