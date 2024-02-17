<script lang="ts" setup>

import { ref, computed } from "vue"
import { pagesStore } from "./storages";

const pages = pagesStore()
const page = computed(() => pages.page())

</script>

<template>
    <header class="App__header">
        <h1>Europaprojekt</h1>
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
            z-index: 9000;
            position: fixed;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            top: 0;
            left: 0;
            background: $bgBlack;
            width: 100%;
            height: $headerHeight;

            & nav {
                min-height: 40px;
                display: flex;
                gap: 2px;
                align-content: space-evenly;
                align-items: center;
                background: $bgBlack;

                & .App__navEntry {
                    cursor: pointer;
                    user-select: none;
                    width: 100%;
                    height: calc(100% - 2px);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    background: $darkBlack;
                    color: aliceblue;
                    transition: background-color .3s;
                    @media (hover: hover) {
                        &:hover {
                            background: $myBlue;
                        }
                        &:active {
                            background: $myYellow;
                        }
                    }
                    @media (hover: none) {
                        &:active {
                            background: $myBlue;
                        }
                    }

                    &--active {
                        font-weight: bold;
                        color: $myYellow;
                    }
                }

            }

            & h1 {
                margin: 0;
                font-size: min(8dvw, calc($headerHeight * .5));
                color: $myBlue;
                align-self: start;
            }
        }

        &__main {
            margin-block-start: $headerHeight;
        }
    }


@media (min-width: 1024px) {

}
</style>
