<template>
  <main>
    <Carousel />
    <Highlights />
    <OurStory />
    <FeaturedSectionVue />
    <Testimonials />
    <Footer />
  </main>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue';
import Highlights from '@/components/home/Highlights.vue';
import OurStory from '@/components/home/OurStory.vue';
import FeaturedSectionVue from '@/components/global/FeaturedSection.vue';
import Testimonials from '@/components/global/Testimonials.vue';
import Footer from '@/components/global/Footer.vue';

export default {
  name: "Home",
  components: {
    Carousel,
    Highlights,
    OurStory,
    FeaturedSectionVue,
    Testimonials,
    Footer
  }
}
</script>

<style scoped>
main {
  /* border: 1px solid red; */
  margin-top: 62px;
}

@media screen and (max-width: 920px) {
  main {
    margin-top: 58px;
  }
}
</style>
