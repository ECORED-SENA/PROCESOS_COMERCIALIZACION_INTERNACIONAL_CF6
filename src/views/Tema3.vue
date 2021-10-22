<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Regímenes de importación
    
    p.mb-3 Antes de iniciar con los regímenes de importación, es necesario definir el concepto de régimen, el cual se considera como el tratamiento aplicable a las mercancías sometidas al control y vigilancia de la autoridad aduanera -DIAN-, mediante el cual se le asigna un destino específico dentro del comercio internacional. 

    p.mb-5 Los regímenes de importación en Colombia son: 

    .row.justify-content-center.align-items-center.mb-3
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex
        .bg-1
          .tarjeta_Sp-1.p-4
            br
            h6.text-center.mt-5 Régimen de licencia previa

      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex
        .bg-2
          .tarjeta_Sp-2.p-4
            br
            h6.text-center.mt-5 Régimen de libre importación
  
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.d-flex
        .bg-3
          .tarjeta_Sp-3.p-4
            br
            h6.text-center.mt-5 Régimen de prohibida importación

    Separador
    
    #t_3_1.titulo-segundo
      .h4 3.1 Régimen de licencia previa
    
    p.mb-5 Acto administrativo mediante el cual se otorga autorización por parte del Gobierno Nacional a ciertas mercancías para la importación al territorio aduanero nacional.  Las importaciones sometidas a este régimen, según el artículo 14 del Decreto 925 de 2013, son: 
    
    .row.mb-5.fondo-8
        .col-lg-6.mb-5.mb-lg-0 
            img.my-3(src="@/assets/curso/images/tema3/img_1.svg", alt="", style="width:400px; display:block; margin:0 auto;")
        .col-lg-6.mb-5.mb-lg-0
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span a
                | La importación de los productos clasificados por las subpartidas arancelarias para las cuales el Gobierno Nacional ha establecido este régimen, relacionadas en el Anexo 1.
              li 
                .lista-ol--cuadro__vineta
                  span b
                | La importación de saldos.
              li 
                .lista-ol--cuadro__vineta
                  span c
                | La importación de productos en condiciones especiales de mercado.
              li 
                .lista-ol--cuadro__vineta
                  span d
                | La importación de bienes en la que se solicite exención de gravamen arancelario.
              li 
                .lista-ol--cuadro__vineta
                  span e
                | La importación de productos controlados por el Fondo Nacional de Estupefacientes -FNE, el Consejo Nacional de Estupefacientes -CNE-y la Industria Militar INDUMIL.
              li 
                .lista-ol--cuadro__vineta
                  span f
                | Las importaciones destinadas a las Fuerzas Militares y a la Policía Nacional, cuando se trate de bienes para seguridad y defensa nacional o material de guerra o reservado, conforme a lo previsto en el artículo 3.2.8.1 del Decreto 734 de 2012 y las normas que lo aclaren, modifiquen o adicionen
              li 
                .lista-ol--cuadro__vineta
                  span g
                | Las importaciones que utilicen el Sistema de Licencia Anual.

    .row.justify-content-center.align-items-center.mb-3
        .col-12
          .bloque-texto-a.color-custom.p-3.mb-5
            .row.m-4.align-items-center.justify-content-between
                .col-lg-5.mb-4.mb-lg-12
                    p.mb-3 <b> Por otro lado, los parágrafos 1 y 2 del mismo artículo establecen lo siguiente, respectivamente: </b>
                .col-lg-7
                  .bloque-texto-a__texto.p-4
                    .col-sm.mt-3   
                       ul.lista-ul
                        li 
                          i.fas.fa-angle-right
                          | El Gobierno Nacional determinará los casos en los cuales los desperdicios, residuos, desechos o chatarra, requieren de licencia previa.
                        li 
                          i.fas.fa-angle-right
                          | Para la importación de las mercancías remanufacturadas establecidas en los acuerdos comerciales internacionales vigentes, no se requerirá licencia de importación, siempre que dichos acuerdos así lo contemplen y se cumplan las condiciones establecidas en los mismos. (Decreto 925 de 2013)
                        
            
    #t_3_2.titulo-segundo
      .h4 3.2 Régimen de libre exportación

    .row.mb-3.fondo-9
        .col-lg-6.mb-5.mb-lg-0
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-md-8.col-lg-8.col-xl-10
              .cajon.color-custom.p-4.mb-4
                p.mb-0 Por regla general, la exportación de bienes a Colombia no requiere autorizaciones previas. 

          p.mb-3 Desde principios de 1990, el gobierno colombiano adoptó un modelo de desarrollo económico denominado #[strong(style="background-color:#FFE3C8; padding:3px 5px;") “programa de internacionalización de la economía colombiana”,] donde los objetivos básicos son:
          .col-10.p-4
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Exponer a la industria nacional a una mayor competencia internacional
              li 
                i.fas.fa-angle-right
                | Buscar su modernización.
              li 
                i.fas.fa-angle-right
                | Tratar de igualar los precios internos con los internacionales.  
        .col-lg-6.mb-5.mb-lg-0 
            img.my-3(src="@/assets/curso/images/tema3/img_2.svg", alt="", style="width:400px; display:block; margin:0 auto;")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.color-custom-1.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular En desarrollo de este modelo, las autoridades de comercio exterior han liberado la casi totalidad del universo arancelario colombiano, quedando prácticamente abolidos los regímenes de licencia previa y prohibida importación. No obstante, es importante tener en cuenta que, para aquellas mercancías que requieran requisito, permiso o autorización, es obligatorio el Registro de Importación.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Decreto 925 de 2013)

    #t_3_3.titulo-segundo
      .h4 3.3 Régimen de prohibida importación

    .row.mb-5.fondo-8
        .col-lg-6.mb-5.mb-lg-0 
          img.my-3(src="@/assets/curso/images/tema3/img_3.svg", alt="", style="width:400px; display:block; margin:0 auto;")
        .col-lg-6.mb-5.mb-lg-0
          p.mb-3 Con el fin de proteger la salubridad pública, las buenas costumbres, la familia, la vida y en general aquellos derechos considerados fundamentales para el sostenimiento y desarrollo social de los colombianos, el gobierno se reserva la facultad de impedir el ingreso al territorio colombiano de algunas mercancías que puedan vulnerar estos principios. 

          p.mb-3 Algunas de las mercancías contempladas en este régimen son: 
       
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Armas químicas, biológicas y nucleares.
            li 
              i.fas.fa-angle-right
              | Desechos nucleares y desechos tóxicos.
            li 
              i.fas.fa-angle-right
              | Juguetes bélicos, entre otros.


























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
