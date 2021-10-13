<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Modalidades de importación en Colombia
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.lg-6.mb-5.mb-lg-0
        .jumbotron-2
          LineaTiempoB.p-4.mb-5(:datos="datosLineaTiempoB")


























</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Importación ordinaria',
        texto:
          'En esta modalidad, las mercancías que ingresan al territorio nacional se quedan de manera definitiva, es decir, quedan a disposición del comprador para fines pertinentes.',
        icono: require('@/assets/curso/images/tema4/ico_1.svg'),
      },
      {
        titulo: 'Importación temporal para perfeccionamiento activo',
        texto:
          'Modalidad que permite la importación temporal de bienes de capital, así como sus partes y repuestos con destino a ser reexportados en un plazo no superior a 6 meses, después de haber sido sometidos a procesos de reparación o acondicionamiento.',
        icono: require('@/assets/curso/images/tema4/ico_2.svg'),
      },
      {
        titulo: 'Importación temporal en desarrollo de sistemas especiales ',
        texto:
          'Modalidad que permite el ingreso de mercancías al territorio aduanero nacional con destino a ser exportadas total o parcialmente en un tiempo determinado, posterior a la transformación, elaboración o reparación de la misma o de alguno de sus insumos.',
        icono: require('@/assets/curso/images/tema4/ico_3.svg'),
      },
      {
        titulo: 'Importación temporal para procesamiento industrial ',
        texto:
          'En esta modalidad se importan temporalmente materias primas o insumos para ser sometidos a procesos de transformación, procesamiento o manufactura industrial  por parte de industrias conocidas como Usuarios Altamente Exportadores. ',
        icono: require('@/assets/curso/images/tema4/ico_4.svg'),
      },
      {
        titulo: 'Importación para transformación y/o ensamble',
        texto:
          'Modalidad bajo la cual se importan mercancías que van a sufrir procesos de transformación o ensamble, por parte de industrias reconocidas como tales por la autoridad competente y autorizadas por la Unidad Administrativa Especial de Impuestos y Aduanas Nacionales- DIAN. ',
        icono: require('@/assets/curso/images/tema4/ico_5.svg'),
      },
      {
        titulo: 'Tráfico postal y envíos urgentes',
        texto:
          'En esta modalidad se encuentran los envíos de correspondencia, los envíos que lleguen al territorio nacional por medio de la red oficial de correos y envíos urgentes, siempre y cuando su valor no supere dos mil dólares americanos (US$2.000). ',
        icono: require('@/assets/curso/images/tema4/ico_6.svg'),
      },
      {
        titulo: 'Importación de petróleo y combustibles químicos derivados ',
        texto:
          'Esta modalidad permite el ingreso de petróleo  y combustibles líquidos al territorio nacional a través de la conexión de un poliducto u oleoducto.',
        icono: require('@/assets/curso/images/tema4/ico_7.svg'),
      },
      {
        titulo: 'Importación con franquicia',
        texto:
          'Importación que goza de la exención total o parcial de tributos aduaneros, por la existencia de algún acuerdo, tratado, convenio o ley y con base en la cual la mercancía queda en disposición restringida.',
        icono: require('@/assets/curso/images/tema4/ico_8.svg'),
      },
      {
        titulo: 'Importación en cumplimiento de garantía',
        texto:
          'Modalidad que permite la importación de mercancías sin el pago de tributos aduaneros debido a que se le han realizado reparaciones en el exterior o remplace a otra previamente exportada, que haya resultado averiada, defectuosa o impropia para el fin que fue importada. ',
        icono: require('@/assets/curso/images/tema4/ico_9.svg'),
      },
      {
        titulo: 'Reimportación en el mismo estado',
        texto:
          'Modalidad que regula la salida temporal de mercancías nacionales o nacionalizadas del territorio aduanero nacional, para atender una finalidad específica en el exterior, en un plazo determinado, durante el cual deberán ser reimportadas sin haber experimentado modificación alguna, con excepción del deterioro normal originado en el uso que de ellas se haga.',
        icono: require('@/assets/curso/images/tema4/ico_10.svg'),
      },
      {
        titulo: 'Reimportación por perfeccionamiento pasivo',
        texto:
          'La reimportación de mercancía exportada temporalmente para elaboración, reparación o transformación, causará tributos aduaneros sobre el valor agregado en el exterior, incluidos los gastos complementarios a dichas operaciones, para lo cual se aplicarán las tarifas correspondientes a la subpartida arancelaria del producto terminado que se importa.',
        icono: require('@/assets/curso/images/tema4/ico_11.svg'),
      },
      {
        titulo: 'Importación temporal para reexportación en el mismo estado',
        texto:
          'Modalidad que contempla la importación al territorio aduanero nacional, con suspensión de tributos aduaneros, de determinadas mercancías destinadas a la reexportación en un plazo señalado, sin haber experimentado modificación alguna.',
        icono: require('@/assets/curso/images/tema4/ico_12.svg'),
      },
      {
        titulo: 'Importación temporal de mercancías en arrendamiento',
        texto:
          'Modalidad que permite introducir al territorio aduanero nacional, con pago diferido de los derechos y/o impuestos a la importación, bienes de capital bajo un contrato de alquiler o arrendamiento con opción de compra leasing, destinados a la reexportación en un plazo establecido, sin experimentar modificación alguna, admitiendo solo la depreciación normal originada por el uso que de ellos se haga.  ',
        icono: require('@/assets/curso/images/tema4/ico_13.svg'),
      },
    ],
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
