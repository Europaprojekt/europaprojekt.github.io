<script setup lang="ts">

import { ref, Ref, computed, onMounted } from "vue"
import Section from "@/components/Section.vue";
import {useSectionStore} from "@/storages";
import Entry from "@/components/Entry.vue";
import { useWindowSize } from '@vueuse/core'
import InfoPageLink from "@/components/InfoPageLink.vue";


const { width, height } = useWindowSize()

const sectionStore = useSectionStore()
let background: Ref<string> = ref("/euBackground.jpg")
const bgForCss = computed(() => "url(" + background.value + ")")

function onVis(bg: string, color: string, tr: string, link: string) {
    background.value = bg;
    sectionStore.setAccent(color);
    tr ? sectionStore.setTransparency(tr) : undefined;
    sectionStore.setInfoPage(link)
}

onMounted(() => {
    const imagePaths = [
        '/euBackground.jpg',
        "/rom.jpg",
        "/holland.jpg",
        "/amsterdam.jpg",
        '/knochen.png'
    ]
    imagePaths.map(path => {
        const img = new Image()
        img.src = path
        return img
    })
})

</script>

<template>

    <div
        v-if="width >= 800"
        class="timeline__container"
    >
        <div class="timeline" >
            <Section class="timeline__europe" background="/euBackground.jpg" :theme="'rgb(42,42,255)'" overlay-transparency="4%" :on-visible="onVis" info-page="/about">
                <entry year="2024">
                    Wir befinden uns im 21. Jahrhundert und <b class="extra">Europa</b> blickt zuver&shy;sichtlich in eine Zukunft der engen Zusammen&shy;arbeit, des Fortschritts und des Friedens. Nach einer turbulenten <i>Geschichte</i> steht der Kontinent heute vereinter denn je da.
                </entry>
            </Section>
            <Section background="/rom.jpg" :theme="'rgb(255,194,0)'" :on-visible="onVis" text="rom italien pizza pasta eis gelatto mozzarella"/>
            <Section background="/amsterdam.jpg" :theme="'rgb(255,255,255)'" overlay-transparency="1%" :on-visible="onVis" text="amsterdam -wohl eher schweiz">
                <entry>Text blbllbllsdlblallablablblablaewaqfg wergw e re dysgbdstr jhr mfgt juzgsfru zgfdrjmfg zekzrhvevgz  vegrvgredvejzj re zvekrz gvezg rvkwezrg vkegvz rhetr hsryxy hsr</entry>
            </Section>
            <Section background="/holland.jpg" :theme="'rgba(115,255,0,0.66)'" :on-visible="onVis" text="holland kühe wiese mühlen gouda"/>
            <Section background="/knochen.png" :theme="'rgba(221,116,1,0.66)'" :on-visible="onVis" text="holland kühe wiese mühlen gouda">
                <entry year="vor ca. 45.000">
                    Der Homo sapiens hat nun andere ansässige Menschenarten vertrieben und der <b>moderne Mensch</b> ist aus Mischungen des Homo sapiens mit anderen Arten entstanden.
                </entry>
                <entry year="vor ca. 70.000">
                    Der <b>Homo sapiens</b> beginnt sich von Afrika kommend nach Europa auszubreiten.
                </entry>
                <entry year="vor ca. 800.000">
                    Der <b>Homo erectus</b> (= der aufrecht gehende Mensch) breitet auf der ganzen Welt, und somit auch in Europa aus.
                </entry>
            </Section>
            <!--

            Romulus und Remus gründen der Legende nach Rom. <br>Die tatsächliche Entstehung Roms fand zwar wahrscheinlich über einen längeren Zeitraum statt, dennoch gilt dieses jahr als der Beginn der römischen Zeitrechnung.



            -->
        </div>

        <InfoPageLink/>
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
        //padding-block-start: 20dvh;


        &__container {
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            background-blend-mode: overlay;

            background-image: v-bind(bgForCss);
            background-color: color-mix(in srgb, v-bind('sectionStore.accent') v-bind('sectionStore.transparency'), transparent);

            transition: background-color 400ms cubic-bezier(0.42, 0.0, 0.64, 1.0), background-image 400ms cubic-bezier(0.42, 0.0, 0.64, 1.0);
        }

        & .section {
            margin-block: 24dvh;
        }

        &__europe.section {
            margin-block-start: max(20dvh, 100px);
            margin-block-end: 20dvh;
            height: 60dvh;

            & .entry__positioner {
                width: max(50dvw, 680px);
                @media (max-width: 950px) {
                    width: max(50dvw, 600px);
                    margin-inline-end: 60px;
                    align-self: end;
                }
            }

            & .entry {
                width: max(50dvw, 680px);
                max-width: max(50dvw, 560px);
                padding-inline: 3dvw;
                padding-block: 3dvh;

                @media (max-width: 950px) {
                    font-size: 22px;
                    line-height: 30px;
                }
                font-size: 24px;
                line-height: 33px;
            }
        }



    }
</style>