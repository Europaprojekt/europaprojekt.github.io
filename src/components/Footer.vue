<script setup lang="ts">

import { useWindowSize } from '@vueuse/core'


const { width, height } = useWindowSize()

</script>

<template>

    <div class="footer__container">
        <div
            v-if="width >= 900"
            class="footer__content"
        >
            <p>
                Dies ist die Projekt&shy;arbeit zum Europa&shy;projekt von Rufus Sommer
            </p>
            <p>
                Mehr Informa&shy;tionen: <RouterLink to="/about">About</RouterLink>
            </p>
        </div>


        <div v-else>
            Diese Website ist hauptsächlich für desktop devices gedacht und funktioniert erst ab einer Breite von 900 Pixeln. <br>
            <span v-if="height >= 900">
                <i>Bei diesem Gerät reicht das Querformat. <br>
                <b>Drehe Dein Gerät ins Querformat und lade die Seite ggf. neu!</b></i> <br>
            </span>
            Dein aktueller Bildschirm: {{ width }} x {{ height }}px
        </div>
    </div>

</template>

<style lang="scss">

    .footer {

        &__container {
            margin-block-start: auto;

            display: flex;
            flex-direction: column;
            justify-content: center;

            padding-block-start: 63px;
            padding-block-end: 84px;
            padding-inline: 5dvw;
        }

    }


</style>
