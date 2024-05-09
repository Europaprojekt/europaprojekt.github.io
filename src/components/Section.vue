<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { vIntersectionObserver } from '@vueuse/components'
import Entry from "@/components/Entry.vue";

const props = defineProps({
    background: String,
    theme: String,
    overlayTransparency: String,
    onVisible: Function,
    text: String,
})


const target = ref(null)

let handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            props.onVisible(props.background, props.theme, props.overlayTransparency ? props.overlayTransparency : "17%")
        }
        console.log(entry)
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
    });
};

let observer = null

onMounted(() => {
    observer = useIntersectionObserver(
        target.value,
        handleIntersection,
        {
            // rootMargin: '-300px', // Offset von 100px
            threshold: 1 // 50% des Elements müssen sichtbar sein
        }
    )
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})

</script>

<template>
    <div class="section" ref="target" style="padding-inline: 0">
        <slot>
            <entry>
                {{ text }}
            </entry>
        </slot>
    </div>
</template>

<style lang="scss">

    .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        & .entry {
            background-color: color-mix(in srgb, v-bind(theme) 71%, transparent);
            border-color: color-mix(in srgb, v-bind(theme) 100%, transparent);
        }

    }

</style>