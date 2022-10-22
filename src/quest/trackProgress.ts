import { missions } from './QuestConstants'
import { reactive } from 'vue'
type progressionList = {
    [key: string]: { 
        [key: string]: number
            // which part the user is on
    }
}


let storage = {};
if (!localStorage.getItem('progress') || localStorage.getItem('progress') === '{}') {
    let progressList : progressionList = {}

    for (let f in missions) { 
        console.log(f)
        progressList[f] = {}
        for (let m in missions[f]) {
            console.log(m)
            progressList[f][m] = 0
        }
    }

    localStorage.setItem('progress', JSON.stringify(progressList))
    storage = progressList
} else {
    storage = JSON.parse(localStorage.getItem('progress') ?? '')
}

export const progress = reactive({
    list: storage as progressionList,
    get() : progressionList {
        return this.list
    },
    toggle(faction: string, name: string) {
        const mission = this.list[faction][name]
        const length = missions[faction][name].length
        if (mission >= length) {
            this.incomplete(faction, name)
        } else {
            this.complete(faction, name)
        }
    },
    complete(faction: string, name: string) : void {
        // Fully completes a mission
        const length = missions[faction][name].length
        this.list[faction][name] = length
        localStorage.setItem('progress', JSON.stringify(this.list))
    },
    
    incomplete(faction: string, name: string) : void {
        // Sets progress in a mission back to 0
        this.list[faction][name] = 0
        localStorage.setItem('progress', JSON.stringify(this.list))
    },

    setPart(faction : string, name : string, part: number) : void {
        // sets the part of a specific mission to that number
        const length = missions[faction][name].length

        if (!length) return
        // if the part number is (greater than) the maximum, set it to maximum
        if (part >= length) {
            this.list[faction][name]= length
            localStorage.setItem('progress', JSON.stringify(this.list))
        } else if (part >= 0) {
            // else if it is a less then the maximum but above zero, set it to that part
            this.list[faction][name]= part
            localStorage.setItem('progress', JSON.stringify(this.list))
        }
    },


})
