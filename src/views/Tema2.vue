<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Estructura financiera de las organizaciones solidarias

    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-right") La estructura financiera de una organización solidaria está directamente relacionada con su naturaleza jurídica, su modelo asociativo y su propósito social. A diferencia de las empresas con fines de lucro, las organizaciones solidarias deben estructurar sus finanzas de manera que garanticen el equilibrio entre sostenibilidad económica y cumplimiento de su misión social. Esto implica definir con claridad los flujos de recursos, las fuentes de ingreso, la destinación de excedentes y los mecanismos de financiación solidaria, como los aportes de los asociados o los fondos comunes. Como lo señala Ortiz Anaya (2018), la evaluación financiera de estas organizaciones debe integrar no solo el análisis técnico de indicadores, sino también la valoración de su impacto social y su coherencia con los principios de solidaridad y equidad.

    .bg-c1.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-sm-7.col-10.mb-4(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema2/img-02.svg', alt='Imagen decorativa')
        .col-lg-5(data-aos="fade-left")
          p(data-aos="fade-left") En términos contables, estas entidades deben implementar políticas claras sobre el manejo de aportes, reservas y excedentes, así como establecer controles internos que permitan asegurar la transparencia y trazabilidad del uso de los recursos. Esta estructura debe reflejarse en los estados financieros, los cuales deben ser elaborados conforme a las normas contables vigentes y permitir la toma de decisiones informadas. León García (2009), resalta que una gestión contable eficaz es indispensable para evaluar la viabilidad de cualquier organización, ya que permite identificar oportunidades de mejora, prevenir riesgos y proyectar escenarios financieros de manera responsable.

    p.mb-5(data-aos="fade-right") Además, la estructura financiera de las organizaciones solidarias incluye elementos específicos como el fondo de solidaridad, el fondo de educación y el fondo de bienestar, los cuales están definidos por la normativa del sector y responden a finalidades colectivas. Estos fondos deben ser planeados, ejecutados y monitoreados con rigurosidad técnica, ya que representan compromisos adquiridos con los asociados y con la comunidad. 

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 En consecuencia, el diagnóstico de liquidez y la evaluación de los flujos financieros deben considerar estas particularidades, pues de ellas depende en gran medida la sostenibilidad institucional y la confianza en la gestión administrativa.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Tipos de empresas solidarias

    p.mb-4(data-aos="fade-right") En Colombia, las empresas solidarias se agrupan en diferentes categorías: 

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-03.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") Según su naturaleza
            p.text-center.mb-0(style="color:#12263F") Son organizaciones sin ánimo de lucro, basadas en la solidaridad, la autogestión y la ayuda mutua, cuyo fin es el bienestar colectivo antes que la ganancia individual.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-04.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") Según su objeto social
            p.text-center.mb-0(style="color:#12263F") Pueden orientarse a actividades económicas, sociales, culturales, educativas o de previsión, siempre con el propósito de satisfacer necesidades comunes de sus asociados y la comunidad.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-05.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E4FFF7")
            h4.text-center.mt-5(style="color:#12263F") Según su forma jurídica
            p.text-center.mb-0(style="color:#12263F") Se estructuran como cooperativas, fondos de empleados, asociaciones mutuales, precooperativas, entre otras figuras reconocidas por la legislación solidaria.

    p(data-aos="fade-right") Entre las más representativas se encuentran las #[b cooperativas], los #[b fondos de empleados] y las #[b asociaciones mutuales], todas ellas reguladas por la #[b Ley 79 de 1988] y complementadas por normas específicas. Estas entidades comparten principios comunes de solidaridad, ayuda mutua y gestión democrática, pero difieren en aspectos como su base asociativa, servicios ofrecidos, estructura operativa y condiciones de afiliación. Reconocer estos tipos es fundamental para comprender cómo se configuran sus estructuras financieras y cómo se deben evaluar sus flujos económicos.
    p.mb-4(data-aos="fade-left") A continuación, se dan sus respectivas explicaciones: 

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Cooperativas")
            .col-lg-12.order-lg-1.order-2
              p Son organizaciones de propiedad conjunta y control democrático, creadas para satisfacer necesidades económicas, sociales o culturales de sus asociados mediante una empresa de propiedad colectiva. Existen diversos tipos, como las cooperativas de ahorro y crédito, de trabajo asociado, multiactivas, especializadas o integrales. Cada una tiene particularidades financieras distintas, por ejemplo, las de ahorro y crédito gestionan recursos del público bajo regulación financiera más estricta. Como lo explica Ortiz Anaya (2018), estas diferencias influyen directamente en el diseño del flujo de caja, la medición de la liquidez y la estructura de fondos institucionales.
          .row(titulo="Fondos de empleados")
            .col-lg-12.order-lg-1.order-2
              p Son entidades creadas por trabajadores de una misma empresa o sector económico, que promueven el ahorro y brindan servicios financieros y sociales a sus miembros. Su estructura financiera suele centrarse en el manejo de aportes obligatorios y voluntarios, la colocación de créditos internos y el desarrollo de actividades de bienestar. A pesar de ser organizaciones de menor escala, requieren prácticas contables sólidas y políticas claras de distribución de excedentes. La correcta gestión de sus recursos fortalece la cohesión interna y la permanencia del fondo, y exige herramientas de análisis similares a las empleadas en cooperativas, aunque adaptadas a su tamaño y complejidad.
          .row(titulo="Asociaciones mutuales")
            .col-lg-12.order-lg-1.order-2
              p Se enfocan en la prestación de servicios de previsión, salud, educación o recreación a sus asociados, quienes contribuyen económicamente, mediante cuotas periódicas. Aunque no persiguen lucro, estas organizaciones deben garantizar la sostenibilidad financiera de sus servicios, por lo cual requieren una planeación adecuada de ingresos, egresos y reservas técnicas. Como lo plantea León García (2009), toda entidad, incluso las de orientación social necesita estructurar sus operaciones sobre fundamentos financieros sólidos, alineados con su objeto misional. Por ello, al analizar la liquidez de cualquier organización solidaria, es crucial considerar su tipo jurídico y operativo para aplicar el diagnóstico financiero más pertinente.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-06.png' alt="Imagen decorativa")

    p.mb-4(data-aos="fade-left") Para complementar lo anterior, a continuación, se relaciona todo lo que tiene que ver con cada uno de estos tipos de empresas:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1.
      span  #[i Tipos de empresas solidarias]
    .tabla-a.color-acento-contenido
      table
        thead
          tr(data-aos="fade-right")
            th(style="width: 15%; background-color: #FFFAE6;") Tipo de empresa solidaria
            th(style="width: 25%; background-color: #FFFAE6;") Definición
            th(style="width: 20%; background-color: #FFFAE6;") Ejemplos y subtipos
            th(style="width: 20%; background-color: #FFFAE6;") Características financieras clave
            th(style="width: 20%; background-color: #FFFAE6;") Marco normativo
        tbody
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[b Cooperativas]
            td(style="background-color: #F6F6F6;") Organizaciones de propiedad conjunta y control democrático que buscan satisfacer necesidades económicas, sociales o culturales de sus asociados.
            td(style="background-color: #F6F6F6;") Ahorro y crédito, trabajo asociado, multiactivas, especializadas, integrales.
            td(style="background-color: #F6F6F6;") Manejo colectivo de recursos, regulación financiera estricta en ahorro y crédito, fondos institucionales.
            td(style="background-color: #F6F6F6;") Ley 79 de 1988 + normas sectoriales (ej. Supersolidaria).
          tr(data-aos="fade-right")
            td.text-center #[b Fondos de empleados]
            td Entidades creadas por trabajadores de una misma empresa o sector para promover el ahorro y ofrecer servicios financieros y sociales.
            td Fondos internos de ahorro y crédito, programas de bienestar.
            td Aportes obligatorios y voluntarios, créditos internos, distribución de excedentes según políticas internas.
            td Ley 79 de 1988 + normatividad específica.
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[b Asociaciones mutuales]
            td(style="background-color: #F6F6F6;") Organizaciones que prestan servicios de previsión, salud, educación o recreación a sus asociados, sin fines de lucro.
            td(style="background-color: #F6F6F6;") Mutual de salud, mutual educativa, mutual recreativa.
            td(style="background-color: #F6F6F6;") Cuotas periódicas, planeación de ingresos y egresos, reservas técnicas para sostenibilidad.
            td(style="background-color: #F6F6F6;") Ley 79 de 1988 + reglamentos sectoriales.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Estructura organizacional y políticas contables

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#E4FFF7")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-07.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La estructura organizacional de las empresas solidarias responde a una lógica participativa y democrática que diferencia su funcionamiento del de las empresas tradicionales. Estas organizaciones suelen estar conformadas por una Asamblea General como máxima autoridad, un Consejo de Administración encargado de la gestión estratégica, una Junta de Vigilancia que ejerce control social y comités de apoyo que promueven la participación activa de los asociados. Esta configuración institucional garantiza la descentralización en la toma de decisiones y fortalece el principio de autogestión, permitiendo que los recursos financieros se administren con corresponsabilidad y transparencia.

    p.mb-5(data-aos="fade-left") Desde el punto de vista contable, las organizaciones solidarias deben contar con #[b políticas definidas] que regulen aspectos como la contabilización de aportes, el tratamiento de los excedentes, el registro de ingresos y egresos, la conformación de fondos sociales y el manejo de reservas legales. Estas políticas deben estar alineadas con el marco legal vigente y reflejar fielmente las particularidades del modelo solidario. Según León García (2009), unas políticas contables claras y coherentes no solo contribuyen a la transparencia financiera, sino que también facilitan la evaluación de la liquidez, el flujo de caja y la sostenibilidad institucional a largo plazo.

    .row.justify-content-center.mb-4
      .col-lg-5.col-sm-7.col-10.order-lg-1.order-2(data-aos="fade-right")
        .cajon.cajon1.color-primario.p-4.mb-3.order-lg-1.order-2
          p.mb-0 La implementación de políticas contables adecuadas implica también la adopción de normas técnicas, como las #[b Normas Internacionales de Información Financiera para PYMES (NIIF para PYMES)], aplicables a gran parte de estas entidades en Colombia. Estas normas permiten estandarizar la información financiera y generar reportes comparables que sirven de base para la toma de decisiones. Como lo señala Ortiz Anaya (2018), aplicar las NIIF contribuye a que los estados financieros reflejen la realidad económica de la organización, lo cual es esencial para realizar diagnósticos de liquidez y solvencia con fundamento técnico y legal.
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img-08.svg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-left") Una estructura organizacional bien definida y respaldada por políticas contables claras también es crucial para garantizar el control interno y mitigar riesgos financieros. En el contexto de la economía solidaria, este control no solo se ejerce desde lo administrativo, sino también desde la base asociativa, que tiene el derecho y el deber de supervisar el uso de los recursos. Esto refuerza el principio de responsabilidad compartida y la necesidad de contar con información contable confiable, oportuna y comprensible. Por tanto, la relación entre estructura organizativa, prácticas contables y análisis financiero es inseparable en la gestión de las organizaciones solidarias.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Documentación contable y soportes financieros

    p.mb-4(data-aos="fade-left") La documentación contable es un pilar fundamental en la gestión financiera de las organizaciones solidarias, ya que permite registrar, sustentar y verificar todas las operaciones económicas realizadas. Esta documentación incluye facturas, recibos de caja, comprobantes de egreso, extractos bancarios, actas de decisiones financieras, nóminas, comprobantes de contabilidad y otros soportes que dan cuenta del origen y destino de los recursos. Estos documentos son indispensables tanto para la elaboración de los estados financieros como para los procesos de control interno y auditoría. Como lo establece Ortiz Anaya (2018), una contabilidad sin soporte documental carece de validez técnica y expone a la organización a riesgos administrativos, fiscales y reputacionales.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#E4FFF7")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-09.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La correcta clasificación, archivo y digitalización de los documentos contables, garantiza la trazabilidad de la información financiera y facilita el acceso oportuno a los datos requeridos para la toma de decisiones. Además, estos soportes permiten identificar con claridad los ingresos, egresos y excedentes generados por la organización, lo cual es fundamental para realizar un diagnóstico de liquidez acertado. Las organizaciones solidarias deben implementar procedimientos estandarizados para la gestión documental, utilizando formatos validados y ajustados a las normas contables vigentes. Tal como lo señala León García (2009), la documentación contable es la base sobre la cual se construye la confiabilidad de toda la información financiera.

    p.mb-4(data-aos="fade-left") Los soportes financieros también tienen implicaciones normativas. De acuerdo con la legislación colombiana y en especial con lo establecido en el Decreto 2649 de 1993 (antes de la plena implementación de NIIF), todo hecho económico debe ser comprobado con un soporte válido, el cual debe cumplir requisitos de integridad, autenticidad y legalidad. Hoy en día, bajo las NIIF y el marco de las Normas de Aseguramiento de la Información, las organizaciones están llamadas a mantener archivos organizados, seguros y auditables, que respalden no solo sus registros contables, sino también los informes financieros que entregan a asociados, autoridades de control y demás partes interesadas.

    .row.justify-content-center.mb-5
      .col-lg-5.col-sm-7.col-10.mb-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema2/img-10.png', alt='Imagen decorativa')
      .col-lg-5(data-aos="fade-left")
        .cajon.cajon.color-primario.p-4.mb-3
          p.mb-0 En el contexto de la economía solidaria, la gestión de los soportes contables adquiere una dimensión adicional: fortalecer la transparencia y la confianza entre los asociados. La claridad documental contribuye a que la comunidad vinculada a la organización comprenda cómo se gestionan sus aportes, se distribuyen los excedentes y se toman decisiones financieras clave. Por ello, al diagnosticar la liquidez o al estructurar el flujo de caja, no basta con revisar cifras globales; es imprescindible validar los documentos que respaldan dichas cifras. Esta práctica fortalece el principio de control social, pilar esencial de las organizaciones solidarias y asegura una administración responsable y conforme con los fines colectivos.



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
