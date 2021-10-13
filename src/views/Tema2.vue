<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Pasos para importar en Colombia

    
    p.mb-4 El proceso de importación parte desde el momento en el cual una empresa requiere de bienes y servicios inexistentes o escasos en su país de origen. Es un proceso ordenado y sistematizado que se desarrolla en diferentes etapas, como se logra evidenciar en la siguiente imagen.

    SlyderE.elemento.mb-5(indicadores="derecha")
      .row.fondo-3.p-5
        .col-lg-8.mb-5.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema2/ico_1.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
            .col-10
              .jumbotron
                p.p-3 Registro ante Cámara de Comercio y  la DIAN (RUT) y obtención del NIT
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema2/ico_2.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
            .col-10
              .jumbotron
                p.p-3 Clasificación arancelaria
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema2/ico_3.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
            .col-10
              .jumbotron
                p.p-3 Estudio de mercado y factibilidad de la importación

        .col-lg-4.mb-5.mb-lg-0  
          img(src='@/assets/curso/images/tema2/img_1.svg' alt="", style="width:400px; display:block; margin:auto 0;")

      .row.fondo-4.p-5
        .col-lg-4.mb-5.mb-lg-0  
          img(src='@/assets/curso/images/tema2/img_2.svg' alt="", style="width:300px; display:block; margin:auto 0;")
        .col-lg-8.mb-5.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema2/ico_9.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
            .col-10
              .jumbotron
                p.p-3 Solicitud de la cotización internacional
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema2/ico_10.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
            .col-10
              .jumbotron
                p.p-3 Aprobación de la licencia previa , en caso de requerirse
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema2/ico_11.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
            .col-10
              .jumbotron
                p.p-3 Recibo de la factura comercial
       
      .row.fondo-5.p-5
        .col-lg-8.mb-5.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema2/ico_4.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
            .col-10
              .jumbotron
                p.p-3  Pago de una importación
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema2/ico_5.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
            .col-10
              .jumbotron
                p.p-3 Expedición del certificado de origen: vendedor o exportador
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/images/tema2/ico_6.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
            .col-10
              .jumbotron
                p.p-3 Contratación de transporte y seguro

        .col-lg-4.mb-5.mb-lg-0  
          img(src='@/assets/curso/images/tema2/img_3.svg' alt="", style="width:400px; display:block; margin:auto 0;")
            
      .row.fondo-6.p-5
          .col-lg-4.mb-5.mb-lg-0  
            img(src='@/assets/curso/images/tema2/img_5.svg' alt="", style="width:300px; display:block; margin:auto 0;")
          .col-lg-8.mb-5.mb-lg-0
            .row.justify-content-center.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/images/tema2/ico_12.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
              .col-10
                .jumbotron
                  p.p-3 Llegada de la mercancía al Territorio Aduanero Nacional (TAN)
            .row.justify-content-center.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/images/tema2/ico_13.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
              .col-10
                .jumbotron
                  p.p-3 Entrada a depósito o zona franca 
            .row.justify-content-center.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/images/tema2/ico_14.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
              .col-10
                .jumbotron
                  p.p-3 Revisión física de mercancía: Agencia de aduanas o declarante

      .row.fondo-7.p-5
          .col-lg-8.mb-5.mb-lg-0
            .row.justify-content-center.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/images/tema2/ico_7.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
              .col-10
                .jumbotron
                  p.p-3   Nacionalización de la mercancía
            .row.justify-content-center.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/images/tema2/ico_8.svg' alt="", style="width:90px; display:block; margin:auto -.8rem;")    
              .col-10
                .jumbotron
                  p.p-3 Reembolso del pago de la importación y diligenciamiento de la declaración de cambio
          .col-lg-4.mb-5.mb-lg-0  
            img(src='@/assets/curso/images/tema2/img_4.svg' alt="", style="width:400px; display:block; margin:auto 0;")      

    p Realizados los procedimientos anteriores, es momento del ingreso de la mercancía al territorio aduanero nacional, en el cual se inspeccionan los bienes para realizar la nacionalización y reembolso del pago de la importación y diligenciamiento de la declaración de cambio. 
   












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

<style lang="sass" scoped></style>
