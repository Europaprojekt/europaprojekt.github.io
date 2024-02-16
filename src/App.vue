<script lang="ts" setup>

import { ref } from "vue"

var currentPage = ref("Home")

const pages: string[] = [
    "Home", "Link2", "Link3", "Link4", "Link5",
]

</script>

<template>
    <header class="App__header">
        <h1>Europaprojekt</h1>
        <nav>
            <a v-for="it in pages" @click="currentPage = it" class="App__navEntry">
                {{ it }}
            </a>
        </nav>
    </header>

    <main class="App__main">
        <img src="/euBackground.jpg" loading="lazy" class="App__bgImg" alt="Picture of multiple flags of the european union">
    </main>
</template>

<style lang="scss">

    .App {
        $headerHeight: min(max(80px, 12dvh), 140px);
        $myBlue: #0042a0;
        $bgBlack: #222222;
        $darkBlack: #1c1c1c;

        &__header {
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
                    transition: background-color .1s;
                    &:hover {
                        background: $myBlue;
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

        &__bgImg {
            height: calc(100dvh - $headerHeight);
            //height: auto;
            //max-height: calc(100dvh - $headerHeight);
            width: 100%;
            object-position: center;
            object-fit: cover;
        }
    }


@media (min-width: 1024px) {

}
</style>
