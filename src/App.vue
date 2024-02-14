<script lang="ts" setup>

import { ref } from "vue"

var currentPage = ref("home")



</script>

<template>
    <header class="App__header">
        <h1>Europaprojekt</h1>

    </header>

    <main class="App__main">
        <img src="/euBackground.jpg" class="App__bgImg" alt="Picture of multiple flags of the european union">
    </main>
</template>

<style lang="scss">

    .App {
        $headerHeight: max(100px, 10dvh);

        &__header {
            position: fixed;
            justify-content: center;
            display: flex;
            top: 0;
            left: 0;
            background: white;
            width: 100%;
            height: $headerHeight;

            & h1 {
                font-size: min(8dvw, calc($headerHeight * .6));
                color: #0042a4;
                align-self: center;
            }
        }

        &__main {
            margin-block-start: $headerHeight;
        }

        &__bgImg {
            height: auto;
            max-height: calc(100dvh - $headerHeight);
            width: 100%;
            object-position: center;
            object-fit: cover;
        }
    }


@media (min-width: 1024px) {

}
</style>
