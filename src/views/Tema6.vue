<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Sanciones e infracciones

    p.mb-3 El Decreto 390 de 2016, instrumento que fomenta también la promoción del comercio exterior, contempla la siguiente clasificación de las sanciones e infracciones: 

    .row.justify-content-center.align-items-center.p-5.mb-3
      .col-12
        img(src='@/assets/curso/images/tema6/img_1.svg' alt="", style="width:1000px; display:block; margin:auto;")
    
    p.mb-3 Para determinar el valor de las sanciones e infracciones, es necesario conocer el valor de la Unidad de Valor Tributario (UVT) del año en vigencia. La UVT es la unidad de medida de referencia para cobros, sanciones, multas, tasas, tarifas y estampillas, en Colombia. Por ejemplo, en el año 2021, el valor de las UVT era de $35.607.

    p.mb-3 A continuación, se presentan las sanciones e infracciones tanto de los operadores de comercio exterior como las de los declarantes, importadores y exportadores, según la normativa aduanera, con sus respectivas multas: 

    p.mb-3 Conozca las <b>infracciones de los operadores de comercio exterior - Artículo 527 del Decreto 390/2016:</b>

    .row.justify-content-center.align-items-center.p-5.mb-3
      .col-12
        img(src='@/assets/curso/images/tema6/img_2.svg' alt="", style="width:900px; display:block; margin:auto;")

    p.mb-3 Ahora, un análisis de las infracciones de los declarantes, importadores y exportadores- Artículo 528 del decreto 390/2016 

    .row.justify-content-center.align-items-center.p-5.mb-5
      .col-12
        img(src='@/assets/curso/images/tema6/img_3.svg' alt="", style="width:900px; display:block; margin:auto;")

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/images/tema6/ico_1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Decreto 390 de marzo de 2016.
                  p.text-small Para ampliar la información, se recomienda leer el  Decreto 390 de marzo de 2016.  
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Decreto_390_de_2016.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    p.mb-5 Errores admisibles

    .row.fondo-9
        .col-lg-6.mb-5.mb-lg-0
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-md-8.col-lg-8.col-xl-10
              
              p.mb-0 Son los no sancionables (Artículo 523, Decreto 390/2016), y entre estos se encuentran: 

          .col-10.p-4
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Los que no afecten la determinación y liquidación de impuestos, derechos, sanciones y/o rescate, restricciones legales o administrativas o el control aduanero.
              li 
                i.fas.fa-angle-right
                | Los errores u omisiones de transcripción de la información transmitida en los documentos del viaje.
              li 
                i.fas.fa-angle-right
                | Errores de transcripción de la información entregada a través de los servicios informáticos electrónicos que no corresponda con la contenida en los documentos que la soportan. 
        .col-lg-6.mb-5.mb-lg-0 
            img.my-3(src="@/assets/curso/images/tema6/img_4.svg", alt="", style="width:400px; display:block; margin:0 auto;")

















</template>

<script>
export default {
  name: 'Tema6',
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
