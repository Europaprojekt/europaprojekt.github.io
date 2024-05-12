<script lang="ts" setup>

import {ref} from "vue"
import {useRouter} from 'vue-router'
import MainHeader from "@/components/MainHeader.vue";
import Footer from "@/components/Footer.vue";

const accent = ref("white")

    const router = useRouter()

    const links = [
        { path: '/', name: 'home' },
        { path: '/link2', name: 'link2' },
        { path: "/link3", name: 'Link3'},
        { path: "/long-name-link4", name: "longName: Link4" },
        { path: "/another-link5", name: "AnotherLink5" }
    ]


</script>

<template>
    <div class="app__container">

        <MainHeader/>

        <RouterView/>

        <Footer/>



<!--        <div class="app__more">-->
<!--            <span>m</span>-->
<!--            <span>o</span>-->
<!--            <span>r</span>-->
<!--            <span>e</span>-->
<!--            <span>-</span>-->
<!--            <span>c</span>-->
<!--            <span>o</span>-->
<!--            <span>n</span>-->
<!--            <span>t</span>-->
<!--            <span>e</span>-->
<!--            <span>n</span>-->
<!--            <span>t</span>-->
<!--        </div>-->

    </div>

</template>

<style lang="scss">

    #app .app {
        @import "assets/variables";

        &__container {
            display: flex;
            flex-direction: column;
            min-height: 100dvh;
        }


        &__more {
            position: relative;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            align-items: center;

            & span {
                font-size: 18dvh;
            }
        }


    }

</style>
