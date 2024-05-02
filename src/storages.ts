import { defineStore } from "pinia"
// @ts-ignore dunno Y
import HomePage from "./components/HomePage.vue";
// @ts-ignore dunno Y
import Link2 from "./components/Link2.vue";
import Link3 from "./components/Link3.vue";

export const pagesStore = defineStore("pages", {
    state: () => ({ currentPage: "Home" }),
    getters: {
        all: (state) => [
            {name: "Home", link: HomePage},
            {name: "Link2", link: Link2},
            {name: "Link3", link: Link3},
            {name: "longName: Link4", link: {}},
            {name: "AnotherLink5", link: {}}
        ],
        current: (state) => state.currentPage
    },
    actions: {
        linkOf(str: String): {} {
            return this.all.filter((it) => it.name == str)[0].link
        },
        page(): {} {
            return this.linkOf(this.current)
        },
        setTo(name: String) {
            this.currentPage = name
        }
    }
})

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
