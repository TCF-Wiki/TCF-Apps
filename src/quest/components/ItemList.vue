<template>
<p v-if="Object.keys(currentList).length > 0"> Complete missions to update the list </p>
<p v-else class="complete"> You have completed every mission.</p>
<section class="list__container">
    <div v-for="amount, index in currentList" :key="index" class="item__row">
        <img :src="'/map-images/item-images/' + itemName(index, true) + '.png'" class="item__image"> 
        <span>
            {{ amount }}
            {{ itemName(index) }}
        </span> 
    </div>
</section>
</template>

<script lang="ts">
import { armorData } from "@/calc/data";
import { backpackData, helmetData, itemData, shieldData } from "@/forge/data";
import { keyCardInfo } from "@/map/mapConstants";
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";
import { missionData, stringTables } from "../data";
import { missions } from "../QuestConstants";
import { progress } from "../trackProgress";

export default defineComponent({
    data() {
        return {
            progressData: progress,
            currentList: {},
            previousList: {},
            shieldData: shieldData,
            helmetData: helmetData,
            backpackData: backpackData,
            itemData: itemData,
            keycardInfo: keyCardInfo,
            stringTables: stringTables['Materials']
        }
    },
    mounted() {
        this.getIncompleteParts()
    },
    methods: {
        getIncompleteParts() : void {

            let newData : any = {} 
            for (let f in missions) {
                for (let m in missions[f]) {

                    const length = missions[f][m].length
                    const progress = this.progressData.get()[f][m]

                    if (progress >= length) {
                        // we have already completed this mission
                    } else {
                        // we have yet to complete this mission in full, so we get the data 
                        for (let p in missions[f][m]) {
                            const part = missions[f][m][p]

                            // we have not completed this part of the mission yet
                            if (progress < parseInt(p)+1) {
                                const partData = missionData[part]

                                // just in case, if the data exists
                                if (partData) {
                                    // get the total items we use for this mission
                                    let data = this.getItemsOfMission(partData['objectives'])

                                    // save the items, adding duplicate entries together
                                    for (let item in data) {
                                        if (newData[item]) {
                                            newData[item] = newData[item] + data[item]
                                        } else {
                                            newData[item] = data[item]
                                        }
                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }

            // sort our items by value, https://stackoverflow.com/questions/1069666/sorting-object-property-by-values#comment130783332_16794116
            const sortedData = Object.keys(newData).sort((a,b) => newData[b]-newData[a]).reduce((r, k) => ({...r, [k]: newData[k]}), {});

            // save it
            this.previousList = {...this.currentList} 
            this.currentList = sortedData

            this.sendNotification()
            
        },
        getItemsOfMission(data: any) : any {
            let returnInfo : any = {}
            for (let t in data) {
                const pData = data[t]
                const type = pData['type']

                if (type == 'OwnNumOfItem') {
                    const item = pData['itemToOwn']
                    if (returnInfo[item]) {
                        returnInfo[item] = returnInfo[item] + pData['maxProgress']
                    } else {
                        returnInfo[item] = pData['maxProgress']
                    }
                } 

                if (type == 'DeadDrop') {
                    const item = pData['deadDropItem']
                    if (returnInfo[item]) {
                        returnInfo[item] = returnInfo[item] + pData['maxProgress']
                    } else {
                        returnInfo[item] = pData['maxProgress']
                    }
                }
            }            
            return returnInfo
        },

        sendNotification() : void {
            // send out a function to inform the user that the item list changed when they change if they finished a mission or not

            // JS compares objects by reference type, so two objects with the same 
            // keys and values are always different. Therefore we convert to a string to check if before is same as after. 
            // The order of the object is always the same.
            // https://stackoverflow.com/questions/11704971/why-are-two-identical-objects-not-equal-to-each-other
            const before = JSON.stringify(this.previousList)
            const after = JSON.stringify(this.currentList)

            if (before === after) return;

            const toast = useToast()

            toast.info('Item list updated', {timeout: 2000})
            
        },

        itemName(item: string, urlFormat?: boolean) : string {
            console.log(item)
            // This function gets the name of the image when given an item name. Handles edge cases.
            if (item.includes('Shield_'))    item =  this.shieldData[item]['ingamename']
            else if (item.includes('Helmet_'))    item = this.helmetData[item]['ingamename']
            else if (item.includes('Bag_'))       item =  this.backpackData[item]['ingamename']
            else if (item.includes('ShockGrenade_02')) item =  'Frag Grenade'
            else if (item.includes('SmokeGrenade_01')) item = 'Smoke Grenade'
            else if (item.includes('Consumable_Health')) item = 'Weak Medkit'
            else if (item.includes('Scrip'))      item = item
            else if (item.includes('HardDrive'))  item = 'Data Drive Tier 1'
            else if (item.includes('VadimPredecessorItem')) item = 'Gregor\'s Dossier'
            else {
                if (itemData[item]) {
                    item = itemData[item]['ingamename']
                } else {
                    if (this.stringTables[item]) item = this.stringTables[item]['name']
                }
            }
            if (item.includes('Fusion Cartridge')) item = 'Fusion Cartridge Batteries'
            if (item.includes('OrbitalCanonTarget')) item = 'Orbital Cannon Beacon'
            
            
            if (urlFormat) return item.split(' ').join('_').replace('#', '%23')
            return item
        },

    },
    watch: {
        progressData: {
            deep: true,
            handler() {
                this.getIncompleteParts()
            }
        }
    }
})
</script>

<style scoped>
p {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.6rem;
    border-bottom: 2px dotted var(--text-color-body-white);
}

p.complete {
    border-bottom: none;
    margin-bottom: none;
}
.list__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
}

.item__row {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: .5rem;

    height: 2rem;
}

.item__row span {
    text-overflow: ellipsis;
}

.item__image {
    height: 2rem;
}

@media screen and (max-width: 1500px) {
    .list__container {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (max-width: 1200px) {
    .list__container {
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 900px) {
    .list__container {
        grid-template-columns: 1fr;
        margin: auto;
    }
}

.comment {
    text-align: center;
}
</style>