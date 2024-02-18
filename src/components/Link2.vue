<script setup lang="ts">

</script>

<template>
    <div class="Link2__main">
        @media (min-width: 600px)
        <span class="Link2__false">false</span>
        <span class="Link2__true">true</span>

    </div>
</template>

<style scoped lang="scss">
    @import "../assets/variables";
.Link2 {
    &__main {
        height: $contentHeight;
        display: flex;
        flex-direction: column;
        gap: 8dvh;
        align-items: center;
        justify-content: center;

        font-size: 6dvw;
    }
    &__false {
        font-size: 10dvw;
        background-color: red;
        @media (min-width: 600px) {
            visibility: hidden;
            position: absolute;
        }
    }
    &__true {
        font-size: 10dvw;
        background-color: green;
        visibility: hidden;
        position: absolute;
        @media (min-width: 600px) {
            visibility: visible;
            position: unset;
        }
    }

}
</style>