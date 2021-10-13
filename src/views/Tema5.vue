<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Documentación
    
    p.mb-3 En los procesos de comercialización internacional, es de vital importancia el uso y diligenciamiento de los formatos y documentos establecidos para cada operación inmersa en este sistema, y la importación no es la excepción. Los declarantes están obligados a obtener, antes de la presentación y aceptación de la declaración y a conservarlos por un periodo de cinco años, los siguientes documentos para importación:

    p.BorTit.mb-5 Documentos para la importación

    .row.fondo-10.mb-5.p-4
      .col-lg-5.mb-5.mb-lg-0
          img(src="@/assets/curso/images/tema5/img_1.svg" alt="", style="width:400px; display:block; margin:0 auto;")
      .col-lg-7.mb-5.mb-lg-0
        .col-sm.mb-5.mb-sm-0.fondo-11.p-4
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Registros o licencias de importación.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Factura comercial, cuando hubiera lugar.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Documento de transporte: aéreo (guía aérea), marítimo (conocimiento de embarque) y terrestre (carta porte)
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Pruebas de origen - certificado de origen
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Certificados de sanidad y aquellos documentos exigibles por normas especiales
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Lista de empaque      
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Mandato aduanero, cuando se emplee agente aduanero
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Declaración Andina de Valor, cuando el valor de la mercancia sea superior a USD5.000.
            li 
              .lista-ol--cuadro__vineta
                span 9
              | Los demás que contempla el Decreto 1165 de 2019. Artículo 177
                

























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

<style lang="sass" scoped></style>
