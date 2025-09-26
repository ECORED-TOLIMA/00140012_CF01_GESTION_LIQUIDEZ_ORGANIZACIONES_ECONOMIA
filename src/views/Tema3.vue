<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Flujo de caja y movimientos financieros

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img-01.png', alt='Imagen decorativa')

    p(data-aos="fade-left") El flujo de caja es una herramienta fundamental para evaluar la salud financiera de cualquier organización y en el caso de las empresas solidarias, adquiere un valor estratégico para asegurar el cumplimiento de sus fines sociales. Representa el movimiento real de entrada y salida de dinero en un período determinado, permitiendo determinar la capacidad de la organización para cubrir sus obligaciones, planear inversiones y distribuir excedentes. Según Ortiz Anaya (2018), un flujo de caja bien estructurado permite anticipar problemas de liquidez y tomar decisiones oportunas para la sostenibilidad operativa.
    p.mb-4(data-aos="fade-right") Los movimientos financieros que componen el flujo de caja se clasifican en: 

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-5(style="background-color:#D5F1FF")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-02.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Ingresos
            p.mb-0 Aportes de asociados, rendimientos financieros, venta de servicios o recuperación de cartera.
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#FFFAE6")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-03.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Egresos
            p.mb-0 Pagos a proveedores, gastos operativos, beneficios sociales, y constitución de fondos.
          .col-xl.col-md-6.tarjeta.color-secundario.p-5(style="background-color:#E4FFF7")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-04.svg', alt='Imagen decorativa')
            h4.text-center.mb-5 Excedentes
            p.mb-0 Son los resultados positivos después de cubrir los costos y gastos, los cuales deben distribuirse conforme a los estatutos y normativas aplicables.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12
        .cajon.cajon.color-primario.p-4
          p.mb-0 La adecuada clasificación de estos movimientos, permite una visión clara del comportamiento financiero de la entidad y facilita la formulación de proyecciones realistas.

    .row.justify-content-center.mb-0
      .col-lg-5.col-sm-7.col-10.mb-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-05.png', alt='Imagen decorativa')
      .col-lg-5(data-aos="fade-left")
        p(data-aos="fade-left") El flujo de caja no debe analizarse de manera aislada, sino como parte integral del sistema contable de la organización. Su elaboración debe estar respaldada por registros contables confiables, soportes documentales y políticas claras sobre el manejo de recursos. Como lo plantea León García (2009), la planeación del flujo de caja debe vincularse directamente con los objetivos institucionales, la estructura de ingresos y gastos, así como las necesidades de financiamiento o inversión. En el caso de las organizaciones solidarias, este análisis se vuelve crucial para garantizar que los compromisos sociales puedan cumplirse sin poner en riesgo la estabilidad financiera.
        p(data-aos="fade-right") Asimismo, el flujo de caja es un insumo clave para evaluar #[b la liquidez], la cual será abordada con más profundidad en la siguiente temática. La información que se obtiene del flujo permite identificar momentos críticos en los que la organización podría experimentar déficit de efectivo, así como oportunidades para optimizar la gestión de tesorería. Una lectura adecuada de los movimientos financieros también contribuye a fortalecer la planeación de actividades, la programación de desembolsos y el seguimiento de los fondos sociales. En este sentido, el flujo de caja no solo es una herramienta contable, sino también una guía práctica para la toma de decisiones responsables y alineadas con los principios de la economía solidaria.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Concepto y tipos de flujo de caja

    p(data-aos="fade-right") El flujo de caja, también conocido como flujo de efectivo, es un informe financiero que muestra las entradas (ingresos) y salidas (egresos) de dinero de una organización en un período determinado. Su principal objetivo es evidenciar la disponibilidad real de recursos líquidos para cubrir las obligaciones operativas, financieras y sociales de la entidad. En el contexto de las organizaciones solidarias, este instrumento resulta clave para mantener el equilibrio entre sostenibilidad financiera y cumplimiento del objeto social, ya que permite anticipar desequilibrios y ajustar la asignación de recursos en función de las necesidades comunitarias.
    p.mb-4(data-aos="fade-left") Existen diferentes tipos de flujo de caja, según el enfoque del análisis: 

    .tarjeta.tarjeta--gris.fondo.p-4.mb-4(data-aos="fade-left")
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center(titulo="a.")
          .col-lg-7.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-06.png', alt='Texto que describa la imagen')
          .col-lg-5
            h4 Flujo de caja operativo
            p Contempla los ingresos y egresos derivados de las actividades misionales de la organización, como el recaudo de aportes, la prestación de servicios o el pago de nómina. Este tipo de flujo es vital para evaluar la capacidad de la organización para sostener su funcionamiento diario. 
        .row.justify-content-center(titulo="b.")
          .col-lg-7.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-07.png', alt='Texto que describa la imagen')
          .col-lg-5
            h4 Flujo de caja de inversión
            p Registra las entradas y salidas asociadas a la compra o venta de activos, inversiones en proyectos productivos o adquisición de bienes duraderos.
        .row.justify-content-center(titulo="c.")
          .col-lg-7.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-08.png', alt='Texto que describa la imagen')
          .col-lg-5
            h4 Flujo de caja de financiación 
            p Incluye operaciones relacionadas con préstamos, aportes de capital y distribución de excedentes.
    
    p.mb-4(data-aos="fade-left") Otra clasificación importante es la que diferencia entre flujo de caja proyectado y flujo de caja realizado: 

    .row.justify-content-center.mb-5
      .col-xl-5.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-09.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Flujo proyectado 
            h5.t2.mb-2 Flujo proyectado 
            p.mb-0 Es una estimación futura de los movimientos financieros y sirve para planificar y anticipar decisiones.  
      .col-xl-5.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-10.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Flujo realizado 
            h5.t2.mb-2 Flujo realizado 
            p.mb-0 Muestra el comportamiento efectivo de los recursos en un período ya transcurrido y se utiliza para evaluar el cumplimiento de las metas financieras.
    
    p(data-aos="fade-left") Como lo explica Ortiz Anaya (2018), la integración de ambos tipos de flujo de caja, permite realizar análisis comparativos y establecer correctivos, lo cual es esencial en organizaciones donde la confianza de los asociados depende de una gestión responsable y transparente.
    p.mb-4(data-aos="fade-right") En el caso de las entidades solidarias, construir y analizar estos distintos tipos de flujo de caja requiere el dominio de criterios técnicos, normativos y sociales. Más allá del registro contable, es indispensable entender cómo los movimientos de efectivo se conectan con los principios de equidad, redistribución y ayuda mutua que rigen a estas organizaciones. Tal como afirma Burbano Ruiz (2011), la gestión financiera debe alinearse con los objetivos estratégicos institucionales, y el flujo de caja es el medio más directo para traducir dichos objetivos en decisiones concretas sobre liquidez, inversión y asignación de recursos. Así, su análisis se convierte en una herramienta de planificación y control al servicio del bienestar colectivo.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <i>Flujo de caja</i>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/figura-v01.svg', alt='Figura 3 que muestra una representación entre las entradas y salidas de gastos, basadas en un informe financiero.')
          figure.movil
            img(src='@/assets/curso/temas/tema3/figura-v01-02.svg', alt='Figura 3 que muestra una representación entre las entradas y salidas de gastos, basadas en un informe financiero.')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Clasificación de ingresos, egresos y excedentes

    p(data-aos="fade-right") La clasificación adecuada de ingresos, egresos y excedentes es fundamental para la elaboración de un flujo de caja coherente y útil para la toma de decisiones. En las organizaciones solidarias, esta clasificación debe reflejar no solo la naturaleza contable de cada transacción, sino también su impacto en el cumplimiento del objeto social y los principios de equidad y redistribución. Como lo señala León García (2009), una estructura financiera clara parte de identificar con precisión de dónde provienen los recursos y en qué se están utilizando, lo que permite evaluar la eficiencia y sostenibilidad de la gestión.
    p.mb-4(data-aos="fade-left") Por lo anterior, aunque ya fueron tratados anteriormente de manera general, a continuación, se da una explicación más detallada de cada uno y su respectiva clasificación: 

    .tarjeta.BGIMG01(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4 Ingresos  
              p Corresponden a todas las entradas de dinero que recibe la organización y pueden clasificarse en operativos y no operativos. Los ingresos operativos incluyen aportes de asociados, ventas de bienes o servicios solidarios, intereses por préstamos internos y rendimientos de inversiones. Los no operativos abarcan donaciones, auxilios externos o ingresos ocasionales. Esta diferenciación es clave para identificar cuáles fuentes son recurrentes y sostenibles en el tiempo, y cuáles podrían representar ingresos extraordinarios o no previsibles en el flujo regular de recursos.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img-11.png' style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4 Egresos
              p Son las salidas de dinero necesarias para el funcionamiento y cumplimiento de las obligaciones de la organización. Se clasifican comúnmente en egresos operativos (como pago de nómina, servicios, mantenimiento, provisiones y aportes a fondos sociales) y egresos de inversión o financieros (como compra de activos, amortización de deudas o intereses). En el contexto de la economía solidaria, algunos egresos también tienen un componente social, como subsidios, becas o apoyos a la comunidad, los cuales deben registrarse y justificarse según la normatividad vigente y los estatutos internos.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img-12.png' style="width: 500px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              h4 Excedentes
              p Representan el resultado positivo entre los ingresos y los egresos al final de un período contable. En las organizaciones solidarias, estos no se consideran utilidades en el sentido tradicional, ya que su destino debe responder a criterios de redistribución, fortalecimiento patrimonial y beneficio colectivo. De acuerdo con la Ley 79 de 1988, los excedentes deben ser aplicados en proporciones establecidas por la Asamblea General a fondos como el de educación, solidaridad y reserva, entre otros. Como lo advierte Ortiz Anaya (2018), la correcta clasificación y aplicación de los excedentes no solo cumple una función técnica, sino que es un reflejo del compromiso ético y social de la organización.
            .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img-13.png' style="width: 500px" ,alt='').m-auto
        
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Técnicas para clasificar y analizar flujos de caja

    p(data-aos="fade-left") El análisis del flujo de caja permite evaluar la capacidad de una organización para generar efectivo, cubrir sus compromisos y proyectar su sostenibilidad financiera. En las organizaciones solidarias, aplicar técnicas adecuadas de clasificación y análisis del flujo de caja es esencial para garantizar el uso eficiente y transparente de los recursos. Este proceso inicia con la correcta identificación y categorización de cada movimiento financiero, lo cual exige que los ingresos y egresos estén debidamente documentados y organizados según su naturaleza (operativa, de inversión o de financiación), frecuencia y destino.
    p.mb-4(data-aos="fade-right") Dentro de este tipo de técnicas se encuentran: 

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Clasificación directa del flujo de caja")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/img-14.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Es una de las técnicas más utilizadas y consiste en listar todas las entradas y salidas reales de dinero, agrupadas por categorías funcionales. Esta técnica facilita el seguimiento de movimientos frecuentes como el recaudo de aportes, el pago de servicios o el desembolso de beneficios. También es útil para establecer relaciones entre tipos de egresos (por ejemplo, cuánto se destina a fondos sociales vs. gastos administrativos).
      .py-3.py-md-4(titulo="Clasificación indirecta")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/img-15.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Es una técnica complementaria, la cual es la que parte de los estados financieros y ajusta los resultados contables con base en variaciones del capital de trabajo, lo cual permite identificar efectos no monetarios sobre la liquidez.
      
    p(data-aos="fade-right") Para el análisis, se recomienda el uso de #[b indicadores de liquidez], como el flujo neto de efectivo, la cobertura de egresos y la proyección de saldo mínimo de caja. Estas métricas ayudan a identificar periodos de excedente o déficit y permiten anticipar decisiones correctivas, como la reprogramación de pagos o el fortalecimiento de las fuentes de ingreso. Como indica Burbano Ruiz (2011), una organización que realiza seguimiento permanente a su flujo de caja está mejor preparada para enfrentar contingencias y responder de manera eficiente a las necesidades de sus asociados y de la comunidad.
    p.mb-4(data-aos="fade-left") Además, el uso de #[b herramientas tecnológicas], como hojas de cálculo dinámicas, sistemas contables integrados o aplicaciones financieras especializadas, potencia la capacidad de análisis y reduce errores en la proyección de flujos. Estas herramientas permiten visualizar tendencias, simular escenarios y generar reportes que apoyan la toma de decisiones estratégicas. 

    .row.justify-content-center.mb-4  
      .col-lg-10(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-0.d-flex.justify-content-center.align-items-center(style="width:60px; height:60px; border-radius:50%")
            .col-lg-8
              img(src='@/assets/curso/temas/tema3/img-16.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C02
            .p-4
              p.mb-0 En el caso de las organizaciones solidarias, el análisis del flujo de caja no debe limitarse al cumplimiento contable, sino que debe integrarse a una cultura de planeación participativa, en la que los resultados financieros se comprendan y se discutan colectivamente, en función del bienestar común.
              


</template>

<script>
export default {
  name: 'Tema3',
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
