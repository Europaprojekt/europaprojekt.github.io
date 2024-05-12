import {defineStore} from "pinia"

export const pagesStore = defineStore("pages", {
    state: () => ({ currentPage: "Home" }),
    getters: {
        all: (state) => [
            {name: "Home", link: {}},
            {name: "Link2", link: {}},
            {name: "Link3", link: {}},
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

export const useAccentStore = defineStore('accent', {
    state: () => ({ accent: "rgba(0,0,0,0)", transparency: "17%" }),
    actions: {
        setAccent(accent: string) {
            this.accent = accent
        },
        setTransparency(it: string) {
            this.transparency = it
        }
    }
})
