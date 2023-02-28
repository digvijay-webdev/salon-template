<template>
    <div class="main">
        <v-carousel class="carousel" cycle delimiter-icon="mdi-minus" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item src="https://images.pexels.com/photos/1654834/pexels-photo-1654834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                <div class="wrapper">
                    <div class="wrapper-content" data-aos="fade-up" data-aos-delay="600">
                        <h1>This is title</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sit amet consequatur rerum, harum culpa sunt, facere ipsa, nam neque ad?
                        </p>
                    </div>
                </div>
            </v-carousel-item>
            <v-carousel-item src="https://images.pexels.com/photos/3331486/pexels-photo-3331486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                <div class="wrapper">
                    <div class="wrapper-content" data-aos="fade-up" data-aos-delay="600">
                        <h1>This is title</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sit amet consequatur rerum, harum culpa sunt, facere ipsa, nam neque ad?
                        </p>
                    </div>
                </div>
            </v-carousel-item>
            <v-carousel-item src="https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                <div class="wrapper">
                    <div class="wrapper-content" data-aos="fade-up" data-aos-delay="600">
                        <h1>This is title</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sit amet consequatur rerum, harum culpa sunt, facere ipsa, nam neque ad?
                        </p>
                    </div>
                </div>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
import aosMixin from "@/mixins/aos.js";

export default {
    name: "Carousel",
    mixins: [aosMixin],
}
</script>

<style scoped>
.carousel {}

.wrapper {
    position: relative;
    height: 100%;
    width: 50%;
    margin: 0 auto;
    /* border: 1px solid green; */
}

.wrapper .wrapper-content {
    /* border: 1px solid blue; */
    background: #00000079;
    padding: 18px 16px 60px 18px;
    position: absolute;
    bottom: 0;
}

.wrapper .wrapper-content h1 {
    color: #fefefe;
}

.wrapper .wrapper-content p {
    color: #fefefe;
}

/* media queries */
@media screen and (max-width: 960px) {
    .wrapper {
        width: 100%;
    }
}

</style>
