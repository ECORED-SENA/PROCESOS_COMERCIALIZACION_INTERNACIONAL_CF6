<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 10
      h1 Proceso de importación de servicios
    
    .row.mb-5.fondo-9
        .col-lg-6.mb-5.mb-lg-0
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-md-8.col-lg-8.col-xl-10
              
              p.mb-0 La palabra servicio se define de manera general, como la actividad o acción que vincula a dos agentes económicos y en la cual una de las partes realiza una actividad por la otra parte, a cambio de una remuneración o contraprestación en dinero o en especie.

              p Los servicios cumplen con las siguientes características: 
          
            ul.lista-ul.p-5
              li 
                i.fas.fa-angle-right
                | Intangibilidad: no se pueden ver ni tocar. 
              li 
                i.fas.fa-angle-right
                | Inseparabilidad: requiere de la interacción productor/consumidor.
              li 
                i.fas.fa-angle-right
                | Simultaneidad en la producción/consumo.
        .col-lg-6.mb-3.mb-lg-0.d-none.d-lg-block 
            img.my-3(src="@/assets/curso/images/tema10/img_1.svg", alt="", style="width:350px; display:block; margin:0 auto;")
    
    .row.justify-content-center.align-items-center
      .col-12
        p.mb-5 El pago por la importación de servicios se considera una operación de mercado libre, por lo tanto, su canalización es voluntaria. El pago de los servicios asociados a la importación de bienes, tales como gastos de transporte, seguros, bodegaje, embalaje, y cualquier otro que no corresponda al valor FOB de la mercancía, es considerado del mercado libre o no regulado. (Grupo Bancolombia, 2020) 

    p.mb-3 <b> Modalidades de prestación de servicios </b>

    p.mb-5 Consisten en las formas en las cuales se puede llevar a cabo el momento del servicio. En el proceso de importación, se establecen las siguientes: 

    .row.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='AvatarTop')
          .tarjeta.color-tarjeta
            .p-4
              h4 Suministro fronterizo
              p Suministrado desde el territorio nacional a cualquier otro país, sin necesidad de movilizarse
   
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema10/ico_2.svg' alt='AvatarTop')
          .tarjeta.color-tarjeta
            .p-3
              h4 Presencial comercial
              p Se suministra por medio del desplazamiento del proveedor hacia el territorio del consumidor, por medio de un establecimiento comercial o profesional.  
      .col-lg-6

        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema10/ico_3.svg' alt='AvatarTop')
          .tarjeta.color-tarjeta
            .p-4
              h4 Consumo en el exterior
              p Suministrado por el país proveedor con desplazamiento del consumidor. 

        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema10/ico_4.svg' alt='AvatarTop')
          .tarjeta.color-tarjeta
            .p-3
              h4.mb-4 Movimiento personas físicas
              p Suministro por medio del desplazamiento temporal del proveedor al territorio de otro miembro. 






















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
