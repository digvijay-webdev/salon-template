<template>
    <main>
        <LandingArea title="About Us" />
        <Details />
        <FeaturedSection />
        <Footer />
    </main>
</template>

<script>
import LandingArea from '@/components/global/LandingArea.vue';
import Details from '@/components/about/Details.vue';
import FeaturedSection from '@/components/global/FeaturedSection.vue';
import Footer from '@/components/global/Footer.vue';

export default {
  name: "About",
  components: {
    LandingArea,
    Details,
    FeaturedSection,
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
