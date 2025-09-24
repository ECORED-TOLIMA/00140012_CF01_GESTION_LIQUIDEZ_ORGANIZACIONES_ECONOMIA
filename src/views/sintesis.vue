<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El diagnóstico de liquidez en organizaciones solidarias es un proceso clave para garantizar su sostenibilidad y capacidad de respuesta frente a compromisos financieros. A lo largo de este componente formativo, se abordaron los fundamentos de la economía solidaria y su marco normativo, así como la estructura financiera y contable que soporta su operatividad. Se profundizó en el análisis del flujo de caja, la clasificación de ingresos y egresos, y la documentación de los movimientos financieros, integrando herramientas técnicas para una lectura adecuada de la realidad económica de la organización.
    p Asimismo, se exploraron los principales estados financieros asociados a la liquidez, los indicadores que permiten su evaluación y las técnicas de análisis que facilitan la toma de decisiones oportunas. Este conocimiento, aplicado con un enfoque solidario y ético, permite fortalecer la gestión financiera desde la base asociativa, garantizando transparencia, eficiencia y compromiso con el bienestar colectivo.
    p.mb-5 En conclusión, el desarrollo de este componente prepara al aprendiz para comprender, evaluar y diagnosticar la liquidez como parte esencial de la planeación y el control financiero en el sector solidario, contribuyendo al cumplimiento de su misión económica y social.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Diagnóstico de liquidez en organizaciones solidarias, se aborda el concepto de economía solidaria, su marco legal en Colombia y los principios y valores que la sustentan. Se describen los tipos de empresas solidarias, su estructura organizacional, las políticas y soportes contables que garantizan transparencia. También se analiza el flujo de caja, sus tipos, la clasificación de ingresos, egresos y excedentes, así como las técnicas para su evaluación. Finalmente, se estudia la liquidez financiera, su importancia, los estados e indicadores que la reflejan y los métodos de análisis que permiten diagnosticar la capacidad de las organizaciones para cumplir sus obligaciones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
