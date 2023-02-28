<template>
    <div class="main my-4">
        <v-container>
            <v-row>
                <v-col v-for="service in services" :key="service.id" cols="12" sm="12" md="6" lg="4">
                    <v-card class="card">
                        <v-img :src="service.src" height="250" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                            <v-card-title class="white--text">
                                {{ service.name }}
                            </v-card-title>
                        </v-img>

                        <div class="hidden-desc white--text">
                            <div class="context-wrapper pa-4">
                                <p class="title">
                                    {{ service.desc.title }}
                                </p>
                                <p class="caption">
                                    {{ service.desc.subtitle }}
                                </p>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "ServiceCards",
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: "Hair Cut",
                    src: "https://images.pexels.com/photos/4783333/pexels-photo-4783333.jpeg?auto=compress&cs=tinysrgb&w=800",
                    desc: {
                        title: "Best Haircut in the area",
                        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eius dolore facilis quae consectetur laborum laboriosam optio temporibus!"
                    }
                },
                {
                    id: 2,
                    name: "Hair Dressing",
                    src: "https://images.pexels.com/photos/973403/pexels-photo-973403.jpeg?auto=compress&cs=tinysrgb&w=800",
                    desc: {
                        title: "Best Hair Dressing",
                        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eius dolore facilis quae consectetur laborum laboriosam optio temporibus, facilis quae consectetur laborum."
                    }
                },
                {
                    id: 3,
                    name: "Eyelashes",
                    src: "https://images.pexels.com/photos/1769467/pexels-photo-1769467.jpeg?auto=compress&cs=tinysrgb&w=800",
                    desc: {
                        title: "Eyelashes by Experts",
                        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eius dolore facilis quae consectetur laborum laboriosam optio temporibus, facilis quae consectetur laborum."
                    }
                },
                {
                    id: 4,
                    name: "Nail Art",
                    src: "https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=800",
                    desc: {
                        title: "Nails by Experts",
                        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eius dolore facilis quae consectetur laborum laboriosam optio temporibus, facilis quae consectetur laborum."
                    }
                },
                {
                    id: 5,
                    name: "Padicure",
                    src: "https://images.pexels.com/photos/6663599/pexels-photo-6663599.jpeg?auto=compress&cs=tinysrgb&w=800",
                    desc: {
                        title: "Padicure Treatment",
                        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eius dolore facilis quae consectetur laborum laboriosam optio temporibus, facilis quae consectetur laborum."
                    }
                },
                {
                    id: 6,
                    name: "Facial",
                    src: "https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&w=800",
                    desc: {
                        title: "Facial Treatment",
                        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eius dolore facilis quae consectetur laborum laboriosam optio temporibus, facilis quae consectetur laborum."
                    }
                },
                {
                    id: 7,
                    name: "Hair Removal",
                    src: "https://images.pexels.com/photos/5563665/pexels-photo-5563665.jpeg?auto=compress&cs=tinysrgb&w=800",
                    desc: {
                        title: "Hair Removal",
                        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eius dolore facilis quae consectetur laborum laboriosam optio temporibus, facilis quae consectetur laborum."
                    }
                },
                {
                    id: 8,
                    name: "Massage",
                    src: "https://images.pexels.com/photos/3760262/pexels-photo-3760262.jpeg?auto=compress&cs=tinysrgb&w=800",
                    desc: {
                        title: "Massage & Therapies",
                        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eius dolore facilis quae consectetur laborum laboriosam optio temporibus, facilis quae consectetur laborum."
                    }
                },
            ]
        }
    }
}
</script>

<style scoped>
.card {
    position: relative;
}

.card .hidden-desc {
    overflow: hidden;
    background: #e84393d6;
    position: absolute;
    bottom: 0;
    height: 0;
    width: 100%;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    transition: all .3s ease;
}

.card:hover > .hidden-desc {
    height: 100%;
}
</style>
