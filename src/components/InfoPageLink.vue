<script setup lang="ts">


import {useSectionStore} from "@/storages";

const sectionStore = useSectionStore()

</script>

<template>

    <router-link :to="sectionStore.infoPage" class="infoPageLink" title="Hier geht's zum ausführlichen Artikel">
        i
    </router-link>

</template>

<style lang="scss">

.infoPageLink {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: max(4dvh, 26px);
    text-decoration: none;
    user-select: none;
    cursor: pointer;

    text-shadow: color-mix(in srgb, v-bind('sectionStore.accent') 60%, transparent) 0 0 1dvh;
    box-shadow: v-bind('sectionStore.accent') 0 0 max(3dvh, 24px) .7dvh inset, black 0 0 8dvh -1dvh;

    border-radius: 100%;
    position: fixed;
    bottom: 3dvh; right: 3dvh;
    width: max(8dvh, 50px);
    aspect-ratio: 1;

    transition: border 400ms ease-in-out, box-shadow 400ms ease-in-out, text-shadow 400ms ease-in-out;
}

</style>