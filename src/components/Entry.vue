<script setup lang="ts">

import {useAccentStore} from "@/storages";

const props = defineProps({
    year: Number || String
})



const pos = Math.random() * 40 + 5 + "dvw"
const accentStore = useAccentStore()

</script>

<template>

    <div class="entry__outerContainer">
        <div class="entry__year">
            {{ year ? year : 2024 }}
        </div>

        <div class="entry__positioner">
            <div class="entry__content entry">
                <slot>

                </slot>
            </div>
        </div>

    </div>

</template>

<style lang="scss">

.entry {

    &__outerContainer {
        width: 100%;
        margin-block: 8dvh;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &__year {
        font-weight: 900;
        font-size: 33px;
        margin-inline-start: 42px;
        max-width: 7.5dvw;
        text-shadow: 0 0 3px white;
    }

    &__positioner {
        width: 42dvw;
        margin-inline-end: v-bind(pos);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    &__content {
        align-items: center;
        justify-content: center;
        width: fit-content;
        max-width: 40dvw;
        padding: 12px;
        border: 5px solid;
        border-radius: 16px;
        box-shadow: 0 0 24px 0 rgba(62, 62, 62, 0.42) inset;

        font-size: 18px;
        font-weight: bold;
        & b {
            font-weight: 900;
        }

    }


}


</style>