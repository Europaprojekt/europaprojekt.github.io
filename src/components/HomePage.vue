<script setup lang="ts">

    import { pagesStore } from "../storages"; // checking doesn't work shorthanded

    const pages = pagesStore()

</script>

<template>

    <div class="HomePage__imgContainer">
        <img src="/euBackground.jpg" loading="lazy" class="HomePage__bgImg" alt="Picture of multiple flags of the european union">
        <div class="HomePage__imgOverlay">
            <a @click="pages.setTo('Link3')">
                ImportantLink (Link3)
            </a>
        </div>

    </div>

    <div class="HomePage__more">
        <span>m</span>
        <span>o</span>
        <span>r</span>
        <span>e</span>
        <span>-</span>
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
    </div>

</template>

<style lang="scss">
    @import "../assets/variables";

    .HomePage {
        &__imgContainer {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: $contentHeight;
            width: 100%;
        }
        &__bgImg {
            position: absolute;
            z-index: -1;
            height: 100%;
            width: 100%;
            object-position: center;
            object-fit: cover;
            @media (max-width: $smallDeviceLimitIncl) {  // fahnen weiter oben
                height: 120%;
                object-position: bottom;
            }
        }
        &__imgOverlay {
            position: absolute;
            background: #000000aa;
            color: aliceblue;

            display: flex;
            align-items: center;
            justify-content: center;

            // for large:
            @media (min-width: calc($smallDeviceLimitIncl + 1px)) {
                margin-inline-end: 5dvw;
                align-self: end;
                height: 100%;
                width: 30%;
            }

            // for small:
            @media (max-width: $smallDeviceLimitIncl) {
                height: 30%;
                width: 100%;
                margin-inline-end: unset;
                margin-block-end: 15dvh;
            }

            & a {
                cursor: pointer;
                padding: 14px;
                background: #00000088;
            }

        }


        &__more {
            position: relative;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            align-items: center;

            & span {
                font-size: 18dvh;
            }
        }
    }
</style>