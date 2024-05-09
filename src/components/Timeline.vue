<script setup lang="ts">

import { ref, Ref, computed } from "vue"
import Section from "@/components/Section.vue";
import {useAccentStore} from "@/storages";
import Entry from "@/components/Entry.vue";


const accentStore = useAccentStore()
let background: Ref<string> = ref("/metro.jpg")
const bgForCss = computed(() => "url(" + background.value + ")")

function onVis(it: string, j: string, k: string) {
    background.value = it;
    accentStore.setAccent(j);
    k ? accentStore.setTransparency(k) : undefined;
}


</script>

<template>

    <div
        class="timeline__container"
        @click="background = '/metro.jpg'"
    >
        <div class="timeline" >
            <Section background="/rom.jpg" :theme="'rgb(255,194,0)'" :on-visible="onVis" text="rom italien pizza pasta eis gelatto mozzarella"/>
            <Section background="/amsterdam.jpg" :theme="'rgb(255,255,255)'" overlay-transparency="1%" :on-visible="onVis" text="amsterdam -wohl eher schweiz">
                <entry>Text blbllbllsdlblallablablblablaewaqfg wergw e re dysgbdstr jhr mfgt juzgsfru zgfdrjmfg zekzrhvevgz  vegrvgredvejzj re zvekrz gvezg rvkwezrg vkegvz rhetr hsryxy hsr</entry>
            </Section>
            <Section background="/holland.jpg" :theme="'rgba(115,255,0,0.66)'" :on-visible="onVis" text="holland kühe wiese mühlen gouda"/>
        </div>
    </div>

</template>

<style lang="scss">

    .timeline {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;

        &__container {
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            background-blend-mode: overlay;

            background-image: v-bind(bgForCss);
            background-color: color-mix(in srgb, v-bind('accentStore.accent') v-bind('accentStore.transparency'), transparent);

            transition: background-color 400ms cubic-bezier(0.42, 0.0, 0.64, 1.0), background-image 400ms cubic-bezier(0.42, 0.0, 0.64, 1.0);
        }

        & .section {
            min-height: 500px;
            padding: 20px;
        }


    }
</style>