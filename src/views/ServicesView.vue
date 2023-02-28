<template>
    <main>
        <LandingArea title="Services" />
        <ServiceCards />
        <Footer />
    </main>
</template>
  
<script>
import LandingArea from '@/components/global/LandingArea.vue';
import ServiceCards from '@/components/services/ServiceCards.vue';
import Footer from '@/components/global/Footer.vue';

export default {
  name: "services",
  components: {
    LandingArea,
    ServiceCards,
    Footer
  }
}
</script>
  
<style scoped>
main {
  margin-top: 62px;
}

@media screen and (max-width: 920px) {
  main {
    margin-top: 58px;
  }
}
</style>
