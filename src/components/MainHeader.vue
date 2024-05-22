<script setup lang="ts">

import {useRouter} from 'vue-router'
import {useSectionStore} from "@/storages";

const router = useRouter()

const props = defineProps({
    accent: String
})

const section = useSectionStore()

</script>

<template>
    <header class="app__header" :style="$route.fullPath === '/' ? {} : { backgroundColor: '#00000000' }">
        <div class="app__mainHeader">
            <router-link to="/">Europa in einem Zeitstrahl</router-link>
        </div>
        <nav class="app__navbar">
            <router-link to="/about">About</router-link>
            <router-link to="/link2">Link2</router-link>
            <router-link to="/link2">Link2</router-link>
        </nav>
    </header>
</template>

<style lang="scss">
    @import "src/assets/variables.scss";

    .app {
        &__header {
            z-index: 1600;
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            @media (min-width: 951px) {
                position: fixed;
            }
            @media (max-width: 950px) {
                position: absolute;
            }
            top: 0;
            width: 100%;
            max-width: 100dvw;
            min-height: inRange(8dvh, 90px, 200px);

            border-block-end: white 2px;
            border-bottom-style: dashed;

            background-color: color-mix(in srgb, v-bind('section.accent') 60%, transparent);
            transition: background-color .5s ease-in-out;

            & a {
                text-decoration: none;
            }

        }

        &__mainHeader {
            font-size: inRange(6dvh, 40px, 50px);
            font-weight: 900;

            text-shadow: 0 0 2px #ffffff;
            margin-inline-start: 6dvw;
        }

        &__navbar {
            display: flex;
            flex-direction: row;
            gap: 18px;

            font-size: inRange(3dvh, 22px, 24px);
            font-weight: 600;
            //text-shadow: 0 0 1px #ffffff;

            margin-inline-start: auto;
            margin-inline-end: 3dvw;
            padding-inline: 3dvw;
            padding-block: 16px;
            border-inline-start: black 2px solid;
            background-color: rgba(164, 164, 164, 0.42);



            & a {
                transition: font-weight 160ms, text-shadow 300ms;
                &:hover {
                    font-weight: 900;
                    text-shadow: 0 0 18px #ffffff;
                }

                &.router-link-active {
                    text-shadow: 0 0 24px #000000;
                    &:hover {
                        text-shadow: 0 0 24px #000000;
                    }
                }
            }
        }
    }
</style>