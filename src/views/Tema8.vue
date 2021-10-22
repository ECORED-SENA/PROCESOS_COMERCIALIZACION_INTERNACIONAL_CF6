<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Normativa

    p.mb-5 A continuación, se encuentra la normativa relacionada con el proceso de importación: 

    .row.justify-content-center.align-items-center.p-5.mb-5
      .col-lg-6.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema8/img_1.svg' alt="", style="width:900px; display:block; margin:auto;")
      .col-lg-6.mb-5.mb-lg-0
        LineaTiempoD.color-line-time.p-4
          p.text-small(numero="2020" titulo="Decreto 285 de 2020") "Por el cual se establecen las disposiciones que rigen los Sistemas Especiales de Importación -Exportación y se derogan los Decretos 2331 de 2001, 2099 y 2100 de 2008".
          
          p.text-small(numero="2016" titulo="Decreto 390 de 2016") "Por la cual se establece la regulación aduanera".
          
          p.text-small(numero="2005" titulo="Decreto 4553 de 2005") "Por el cual se adoptan medidas transitarias para la terminación de la modalidad de importación temporal para perfeccionamiento activo en desarrollo de sistemas especiales de importación - exportación cuando hay certificación de cumplimiento total de los compromisos de exportación".
          
          p.text-small(numero="1999" titulo="Decreto 2685 de 1999") "Por el cual se modifica la Legislación Aduanera".

          p.text-small(numero="1985" titulo="Decreto 631 de 1985") "Por la cual se dictan normas referentes a los Sistemas Especiales de Importación- Exportación".

          p.text-small(numero="1957" titulo="Decreto- Ley 444 de 1957") "Creación Plan Vallejo.












</template>

<script>
export default {
  name: 'Tema8',
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
