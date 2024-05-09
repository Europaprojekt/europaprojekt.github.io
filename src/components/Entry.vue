<script setup lang="ts">

import {useAccentStore} from "@/storages";

const props = defineProps({
    year: Number
})



const pos = Math.random() * 40 + 5 + "dvw"
const accentStore = useAccentStore()

</script>

<template>

    <div class="entry__container">
        <div class="entry__year">
            {{ year ? year : 2024 }}
        </div>

        <div class="entry__content entry">
            <slot>

            </slot>
        </div>

    </div>

</template>

<style lang="scss">

.entry {

    &__container {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &__year {
        font-weight: 900;
        font-size: 33px;
        padding-inline: 42px;
        text-shadow: 0 0 3px white;
    }

    &__content {
        max-width: 40dvw;
        margin-inline-end: v-bind(pos);
        padding: 12px;
        border: 5px solid;
        border-radius: 16px;
    }


}


</style>