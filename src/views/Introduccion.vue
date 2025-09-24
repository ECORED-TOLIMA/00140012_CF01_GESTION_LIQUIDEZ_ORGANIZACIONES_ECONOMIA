<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-left") La gestión eficiente de los recursos financieros es un pilar fundamental para la sostenibilidad de las organizaciones solidarias. En este contexto, el diagnóstico de liquidez adquiere especial relevancia, ya que permite evaluar la capacidad de la entidad para responder oportunamente a sus obligaciones, garantizar la operatividad y cumplir con su misión social. Este componente formativo ofrece a los aprendices un recorrido estructurado por los principales conceptos, herramientas y técnicas relacionadas con el análisis de liquidez, partiendo desde la comprensión del modelo solidario y su marco normativo, hasta el estudio detallado de los flujos de caja y los estados financieros.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Imagen decorativa')
          .col-lg-6.col-12.order-lg-2.order-2
            .cajon.cajon.color-primario.p-4.mb-3
              p.mb-0 Además, está orientado al fortalecimiento de competencias que permitan interpretar adecuadamente los movimientos financieros, clasificar la información contable, aplicar indicadores clave y emplear metodologías de análisis que faciliten la toma de decisiones en entornos reales. Además, se enfatiza la importancia de alinear la gestión financiera con los principios de equidad, transparencia y participación que caracterizan al sector solidario.
            p.mb-0 No solo busca desarrollar habilidades técnicas, sino también fomentar una visión crítica y comprometida con el uso responsable de los recursos, reconociendo el papel estratégico de la liquidez en el cumplimiento de los fines sociales y económicos de las organizaciones de economía solidaria.

    p.mb-4(data-aos="fade-left") Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/wFBVlK_3DQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
