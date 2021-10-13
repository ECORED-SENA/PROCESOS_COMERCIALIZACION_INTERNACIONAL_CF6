<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 9
      h1 Plan Vallejo para la importación
    
    .row.mb-3.fondo-9
        .col-lg-6.mb-5.mb-lg-0
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-md-8.col-lg-8.col-xl-10
              
              p.mb-0 El Plan Vallejo es un mecanismo existente en el régimen aduanero colombiano, que permite la importación de bienes con exención o suspensión parcial o total de derechos e impuestos de importación, o con el diferimiento del pago del IVA. 

              p Esos bienes deben cumplir con la condición de ser incorporados a través de proceso industrial o en un bien final con destino a ser exportado. Asimismo, dentro de las mercancías que se pueden importar con beneficios del plan, están: 
 
          
            ul.lista-ul.p-5
              li 
                i.fas.fa-angle-right
                | Insumos.
              li 
                i.fas.fa-angle-right
                | Materias primas.
              li 
                i.fas.fa-angle-right
                | Bienes intermedios.
              li 
                i.fas.fa-angle-right
                | Bienes de capital.  
        .col-lg-6.mb-5.mb-lg-0 
            img.my-3(src="@/assets/curso/images/tema9/img_1.svg", alt="", style="width:400px; display:block; margin:0 auto;")
    
    p.mb-3 Finalmente, las etapas del proceso para poder ser beneficiario de este plan son: 

    .row.justify-content-center.align-items-center.p-5
      .col-12
        img(src='@/assets/curso/images/tema9/img_2.svg' alt="", style="width:900px; display:block; margin:auto;")



















</template>

<script>
export default {
  name: 'Tema9',
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
