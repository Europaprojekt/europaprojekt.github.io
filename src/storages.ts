import { defineStore } from "pinia"
// @ts-ignore dunno Y
import HomePage from "./components/HomePage.vue";

export const pagesStore = defineStore("pages", {
    state: () => ({ currentPage: "Home" }),
    getters: {
        all: (state) => [
            {name: "Home", link: HomePage},
            {name: "Link2", link: {}},
            {name: "Link3", link: {}},
            {name: "Link4", link: {}},
            {name: "Link5", link: {}}
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
