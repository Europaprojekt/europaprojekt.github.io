<script lang="ts" setup>

import { ref, computed } from "vue"
import { pagesStore } from "./storages";

const pages = pagesStore()
const page = computed(() => pages.page())

</script>

<template>
    <header class="App__header">
        <h1
            @click="pages.setTo('Home')"
        >Europaprojekt</h1>
        <nav>
            <a
                v-for="it in pages.all"
                @click="pages.setTo(it.name)"
                class="App__navEntry"
                :class="pages.current == it.name ? 'App__navEntry--active' : ''"
            >
                {{ it.name }}
            </a>
        </nav>
    </header>

    <main class="App__main">
        <page/>
    </main>
</template>

<style lang="scss">

    .App {
        @import "assets/variables";

        &__header {
            z-index: 7000;
            position: fixed;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            top: 0;
            left: 0;
            background: $bgBlack;
            width: 100%;
            height: $headerHeight;

            & nav {
                margin-inline-end: 3dvw;
                min-height: max(34px, 4.5dvh);
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                background: $bgBlack;

                & .App__navEntry {
                    cursor: pointer;
                    user-select: none;
                    width: fit-content;
                    height: 95%;
                    padding-inline: max(12px, 1dvw);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    font-size: $largePFontSize;
                    //background: $darkBlack;
                    color: aliceblue;
                    transition: background-color .3s, font-weight .25s;
                    @media (hover: hover) {
                        &:hover {
                            font-weight: 900;
                            //background: rgba($myBlue, .33);
                        }
                        &:active {
                            //background: $myYellow;
                        }
                    }
                    @media (hover: none) {
                        &:active {
                            //background: $myBlue;
                        }
                    }

                    &--active {
                        font-weight: bold;
                        color: $myYellow;
                    }
                }

            }

            & h1 {
                user-select: none;
                margin: 0;
                margin-block: auto;
                font-size: min(10dvw, calc($headerHeight * .5)); // 10dvw has impact on portrait on mobile
                color: $myBlue;
                align-self: center;
            }
        }

        &__main {
            margin-block-start: $headerHeight;
        }
    }

</style>
