<script lang="ts" setup>

    import {ref} from "vue"
    import X from "../public/x.vue";
    import Menu from "../public/menu.vue";
    import {useRouter} from 'vue-router'
    import Link3 from "@/components/Link3.vue";

    function isInWidth(width: number): boolean { return  window.matchMedia('(max-width: ' + width + 'px)').matches }

// const pages = pagesStore()
// const page = computed(() => pages.page())

    const router = useRouter()

    const links = [
        { path: '/', name: 'home' },
        { path: '/link2', name: 'link2' },
        { path: "/link3", name: 'Link3'},
        { path: "/long-name-link4", name: "longName: Link4" },
        { path: "/another-link5", name: "AnotherLink5" }
    ]

    var menuOpen = ref(false)

</script>

<template>
    <header class="App__header">
        <router-link class="App__header__title"
            to="/"
        >Europaprojekt</router-link>
        <nav>
            <router-link
                v-for="it in links"
                class="App__navEntry"
                :to="it.path"
                :class="$route.path == it.path ? 'App__navEntry--active' : ''"
            >
                {{it.name}}
            </router-link>
        </nav>
    </header>

    <div @click="menuOpen = !menuOpen" class="App__menuIconContainer">
        <Menu v-if="!menuOpen"/>
        <X v-else/>
    </div>
    <div v-if="menuOpen" class="App__menu">
        <router-link
            v-for="it in router.getRoutes()"
            to="{{it.name}}"
            @click="menuOpen = !menuOpen"
            :class="$route.name == it.name ? 'App__menuLink--active' : ''"
        >
            {{ it.name }}
        </router-link>
    </div>

    <main class="App__main">
        <RouterView/>
<!--        <page/>-->
    </main>
</template>

<style lang="scss">

    .App {
        @import "assets/variables";

        &__header {
            z-index: 7000;
            position: fixed;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            top: 0;
            left: 0;
            background: $bgBlack;
            width: 100%;
            height: $headerHeight;

            & nav {
                @media (max-width: 900px) {
                    visibility: hidden;
                    position: absolute;
                }

                margin-inline-end: 3dvw;
                min-height: max(34px, 4.5dvh);
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                background: $bgBlack;

                & .App__navEntry {
                    cursor: pointer;
                    user-select: none;
                    width: fit-content;
                    height: 95%;
                    padding-inline: max(12px, 1dvw);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    font-size: $largePFontSize;
                    //background: $darkBlack;
                    color: aliceblue;
                    transition: background-color .3s, font-weight .25s;
                    @media (hover: hover) {
                        &:hover {
                            font-weight: 900;
                            //background: rgba($myBlue, .33);
                        }
                        &:active {
                            //background: $myYellow;
                        }
                    }
                    @media (hover: none) {
                        &:active {
                            //background: $myBlue;
                        }
                    }

                    &--active {
                        font-weight: bold;
                        color: $myYellow;
                    }
                }

            }

            &__title {
                user-select: none;
                font-weight: bold;
                margin: 0;
                margin-block: auto;
                font-size: min(10dvw, calc($headerHeight * .5)); // 10dvw has impact on portrait on mobile
                color: $myBlue;
            }
        }

        &__menuIconContainer {
            @media (min-width: 901px) {
                visibility: hidden;
                position: absolute;
            }
            position: fixed;
            top: calc($headerHeight * .25);
            left: calc(100% - $headerHeight * .75);
            z-index: 8001;
            & svg {
                fill: $darkDarkBlack;
                height: calc($headerHeight * .5);
            }
        }
        &__menu {
            @media (min-width: 901px) {
                visibility: hidden;
                position: absolute;
            }
            position: fixed;
            z-index: 8000;
            top: 0; left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #222222e2;
            font-size: max(4dvw, 4dvh);
            font-weight: bold;
            line-height: max(6dvw, 8dvh);

            & a {
                width: 100%;
                display: flex;
                justify-content: center;
                transition: font-weight .1s;
                cursor: pointer;
                &:hover {
                    font-weight: 900;
                }
            }

            &Link--active {
                color: darken($myYellow, 10%);
            }
        }

        &__main {
            margin-block-start: $headerHeight;
        }
    }

</style>
