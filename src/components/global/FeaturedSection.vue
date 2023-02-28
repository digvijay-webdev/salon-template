<template>
    <div class="main">
        <div class="wrapper">
            <div class="overlay"></div>
            <v-container style="z-index: 1; padding: 32px auto;">
                <h2 class="pt-4">Precious</h2>
                <h1 class="white--text">Its all about great experience</h1>
                <p class="white--text para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum obcaecati recusandae dolorem veritatis commodi, aspernatur deserunt repellat nostrum vero reprehenderit accusantium pariatur minima veniam velit minus dolore fugiat, ab sequi? Nemo dolor facilis sit, exercitationem dolorem iure quos sunt accusamus.
                </p>

                <v-btn color="#ef264e" class="white--text mb-4" link href="/services" rounded>View All Services</v-btn>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeaturedSection"
}
</script>

<style scoped>
.main {
    /* border: 1px solid red; */
}

.wrapper {
    height: max-content;
    background: url(https://images.pexels.com/photos/3992863/pexels-photo-3992863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
}

.wrapper .overlay {
    background: #00000084;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
}

h2 {
    color: #FF1644;
    font-size: 28px;
}

.para {
    width: 60%;
}

@media screen and (max-width: 820px) {
    .para {
        width: 100%;
    }
}
</style>
