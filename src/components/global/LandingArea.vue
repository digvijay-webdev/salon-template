<template>
    <div class="main">
        <div class="wrapper">
            <div class="overlay"></div>
            <v-container style="z-index: 1;">
                <h1 class="text-center white--text">
                    {{ title }}
                </h1>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name: "LandingArea",
    props: {
        title: String
    }
}
</script>

<style scoped>
.main {
    /* border: 1px solid red; */
}

.wrapper {
    height: 320px;
    background: url(https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.wrapper .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #00000078;
    z-index: 0;
}
</style>
