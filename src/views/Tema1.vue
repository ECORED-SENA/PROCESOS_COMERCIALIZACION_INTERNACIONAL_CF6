<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Proceso de importación de bienes
    br
    br
    br
    .row.align-items-center.fondo-1.p-3.mb-5.d-none.d-lg-block
      .col-lg-12.mb-3.mb-lg-0.d-none.d-lg-block
        p.p-4 La importación consiste en la adquisición e introducción de bienes o servicios provenientes del exterior al territorio aduanero nacional, este último definido como la demarcación dentro de la cual se aplica la legislación aduanera; cubre todo el territorio nacional, incluyendo el subsuelo, el mar territorial, la zona contigua, la plataforma continental, la zona económica exclusiva, el espacio aéreo, el segmento de la órbita geoestacionaria, el espectro electromagnético y el espacio donde actúa el estado colombiano, de conformidad con el derecho internacional o con las leyes colombianas a falta de normas internacionales.

        h5.text (Junior Aduanas S.A., s. f.)
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.d-none.d-lg-block
        img(src="@/assets/curso/images/tema1/img_1.svg" alt='AvatarTop', style="width:450px; display:block; margin:-405px 43rem;")
    .row
      .col-lg-11.d-block.d-lg-none
        .tarjeta-avatar
          img(src="@/assets/curso/images/tema1/img_1.svg" alt='AvatarTop')
          .tarjeta.fondo-2
            .p-4
              p La importación consiste en la adquisición e introducción de bienes o servicios provenientes del exterior al territorio aduanero nacional, este último definido como la demarcación dentro de la cual se aplica la legislación aduanera; cubre todo el territorio nacional, incluyendo el subsuelo, el mar territorial, la zona contigua, la plataforma continental, la zona económica exclusiva, el espacio aéreo, el segmento de la órbita geoestacionaria, el espectro electromagnético y el espacio donde actúa el estado colombiano, de conformidad con el derecho internacional o con las leyes colombianas a falta de normas internacionales.

    p.mb-3 En Colombia, según el último Boletín Técnico de Importaciones (IMPO) del Departamento Administrativo Nacional de Estadística, DANE, estos fueron los productos más importados en el año 2020:

    .row.justify-content-center.align-items-center.p-5.mb-3
      .col-lg-6.mb-3.mb-lg-0
        img(src='@/assets/curso/images/tema1/img_2.svg' alt="", style="width:400px; display:block; margin:auto 0;")
      .col-lg-6.mb-3.mb-lg-0
        img(src='@/assets/curso/images/tema1/ico_1.svg' alt="", style="width:400px; display:block; margin:auto 0;")
        img(src='@/assets/curso/images/tema1/ico_3.svg' alt="", style="width:400px; display:block; margin:auto 0;")
        img(src='@/assets/curso/images/tema1/ico_4.svg' alt="", style="width:400px; display:block; margin:auto 0;")
        img(src='@/assets/curso/images/tema1/ico_5.svg' alt="", style="width:400px; display:block; margin:auto 0;")
        img(src='@/assets/curso/images/tema1/ico_6.svg' alt="", style="width:400px; display:block; margin:auto 0;")
        img(src='@/assets/curso/images/tema1/ico_7.svg' alt="", style="width:400px; display:block; margin:auto 0;")
        img(src='@/assets/curso/images/tema1/ico_8.svg' alt="", style="width:400px; display:block; margin:auto 0;")
        img(src='@/assets/curso/images/tema1/ico_9.svg' alt="", style="width:400px; display:block; margin:auto 0;")
        img(src='@/assets/curso/images/tema1/ico_10.svg' alt="", style="width:400px; display:block; margin:auto 0;")

    p Dicho esto, es importante señalar que el proceso de importación trae consigo retos y oportunidades para los productores colombianos, los cuales se deben regular y controlar por las entidades estatales. Por ende, en materia aduanera y en todo lo relacionado con la importación, Colombia se rige actualmente por el Decreto Ley 2685 de 1999, con sus modificaciones y adiciones, así como por la Resolución Reglamentaria 4240 de 2000, también con sus modificaciones y adiciones. Finalmente, el Estatuto Aduanero fundamenta su articulado en el numeral 25 del artículo 189 de la Constitución Política, con sujeción a los artículos 3 de la Ley 6 de 1971 y 2 de la Ley 7 de 1991.


    









  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

<style lang="sass" scoped></style>
