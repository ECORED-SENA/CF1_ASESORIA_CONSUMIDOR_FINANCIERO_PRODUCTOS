<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") Las microfinanzas atienden necesidades financieras de personas y unidades productivas mediante soluciones acordes con sus condiciones económicas y comerciales. Para orientar estas soluciones, se requiere distinguir el alcance de las microfinanzas y las características del microcrédito, así como reconocer las disposiciones y políticas que delimitan la actuación de las entidades.
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-lg-7.order-2.order-lg-1.p-4(data-aos="fade-left")
          p.bg-color-2.p-3 El conocimiento del mercado objetivo, la zonificación geográfica y la promoción del crédito permiten organizar la gestión comercial e identificar clientes potenciales. La información sobre cada persona y su actividad económica permite caracterizarla, verificar sus datos y avanzar en su selección conforme con los criterios de la organización.
          p.mb-0 En este proceso, el analista orienta al cliente y gestiona una relación que puede fortalecerse mediante la atención, el seguimiento y la oferta de soluciones pertinentes. La fidelización y la permanencia se relacionan con la capacidad de la entidad para atender necesidades que cambian y cumplir las condiciones comunicadas.
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/intro/img1.png', alt='', style="width: 100%; max-width: 500px;")
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
