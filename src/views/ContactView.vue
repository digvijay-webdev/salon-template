<template>
    <main>
        <LandingArea title="Contact Us" />
        <Details />
        <Footer />
    </main>
</template>

<script>
import LandingArea from '@/components/global/LandingArea.vue';
import Details from '@/components/contact/Details.vue';
import Footer from '@/components/global/Footer.vue';

export default {
    name: "ContactView",
    components: {
        LandingArea,
        Details,
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
