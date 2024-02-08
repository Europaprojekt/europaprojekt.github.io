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

        &__header {
            position: fixed;
            top: 0;
            left: 0;
            background: white;
            width: 100%;
            height: 100px;

            color: purple;
        }

        &__main {
            margin-block-start: 100px;
        }

        &__bgImg {
            height: auto;
            max-height: calc(100dvh - 100px);
            width: 100%;
            object-position: center;
            object-fit: cover;
        }
    }


@media (min-width: 1024px) {

}
</style>
