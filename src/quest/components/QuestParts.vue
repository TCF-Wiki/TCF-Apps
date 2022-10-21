<template>
<div> 
    <header class="modal__header"> 
        <h2>  
            <div> 
                <img :src="'/map-images/item-images/'+ faction + '_Reputation.png'" class="modal__header-image"> 
                {{ name }} 
                <img :src="'/map-images/item-images/'+ faction + '_Reputation.png'" class="modal__header-image"> 
            </div>
        </h2>
    </header>
    <section class="modal__description"> 
        <div class="modal__description-text">
            {{ desc }}
        </div>
    </section>
    <section class="quest-parts"> 
        <section v-for="m, index in missions" class="card" :style="{'--index': missions.length-index}">
            <div class="card__image">
                <img 
                    :src="'/quest-images/Parts/' + m + '.png'" 
                    :key="index"
                    class="card__image-img"
                >
            </div>
            <div class="card__contents"> 
                <header class="card__header"> <h3 class="card__header-text"> {{}}</h3></header>
                <section class="card__desc">
                    <div class="card__desc-text"> 
                        {{ missionData[m]['description'].replaceAll('"','') }}
                    </div>
                </section>
                <section class="card__tasks">
                    <header> <h3> <span> Objectives </span> </h3></header>
                    <div v-for="t, i in missionData[m]['objectives']" class="card__tasks-container">
                        <img 
                            :src="'/map-images/item-images/' + taskImage(t) + '.png'"
                            class="card__tasks-image" 
                        >
                        <div> 
                            {{ taskText(t, m, i) }}
                        </div>
                    </div>
                </section>
                <div class="card__rewards" :style="{'--length': orderedRewards(missionData[m]['rewards']).length}">
                    <div v-for="r in orderedRewards(missionData[m]['rewards'])" class="card__rewards-container"> 
                        <img  
                            :src="'/map-images/item-images/' + rewardImageNamer(r['item']) + '.png'" 
                            class="card__rewards-image"
                        >
                        <div> 
                            {{ currencyDisplay(r) }}
                        </div>
                    </div>
                </div>
                <div class="card__footer" role="footer">
                    <div class="card__footer-text">
                    </div>
                </div>
                <!-- <div class="card__unlock"  :class="faction" v-if="missionData[m]['rewards'].length > 3">
                    <img class="card__unlock-image" :src="'/map-images/item-images/' + rewardMaker(missionData[m]['rewards']) + '.png'">
                </div> -->
                <div class="card__parts" >  {{ index+1 }} </div>
            </div>
        </section>
    </section>



</div>
</template>

<script lang="ts">
import { faRotateForward } from '@fortawesome/free-solid-svg-icons';
import { defineComponent } from 'vue';
import { missionData, stringTables, locationData } from '../data';
import { missions } from '../QuestConstants';
import { shieldData, backpackData, helmetData, itemData } from '../../forge/data'
import { keyCardInfo } from '../../map/mapConstants'
import { creatureNames } from '../QuestConstants';
import { locationNameManager, killCreatureOrPlayer } from '../utils'

for (let m in missionData) {
    if (missionData[m]['rewards'].length > 4) {
        console.log(m)
    }
}
export default defineComponent({
    props: ['name', 'faction'],
    data() {
        return {
            missionData: missionData,
            missions: missions[this.faction][this.name],
            helmetData: helmetData,
            shieldData: shieldData,
            backpackData: backpackData,
            stringTable: stringTables['Objectives'],
            locations: locationData,
            desc: '' as string,
        }
    },
    mounted() {
        const mission = missions[this.faction][this.name] 
        if (mission) {
            this.desc = this.missionData[mission[0]]['chainDescription']
        }        
    },
    computed: {
    },
    methods: {
        rewardMaker(rewardData: any) {
            const usefulRewards : string[] = []

            for (let r in rewardData) {
                let reward = rewardData[r]['item']
                if (reward.includes('Currency') || reward.includes('Scrip') || reward.includes('Reputation')) continue
                

                reward = this.rewardImageNamer(reward)
                usefulRewards.push(reward)
            }

            if(usefulRewards.length == 1) {
                let finalReward = usefulRewards[0].replace('Tactical_','').replace('Restoration_','').replace('Altered_','')
                return finalReward.split(' ').join('_')
            } 
            console.log(usefulRewards)
            return usefulRewards[0].split(' ').join('_')
        },
        orderedRewards(rewardList: any) : any {
            let newList : any = []

            for (let r in rewardList) {
                if (rewardList[r]['item'] === 'SoftCurrency') {
                    newList.splice(0, 0, rewardList[r])
                } else if (rewardList[r]['item'].includes('Reputation')) {
                    newList.splice(1, 0, rewardList[r])
                } else if (rewardList[r]['item'].includes('Scrip')) {
                    newList.splice(2, 0, rewardList[r])
                } else {
                    newList.push(rewardList[r])
                }
            }
            return newList
        },
        rewardImageNamer(reward: string) : string {
            if (reward.includes('SoftCurrency'))    reward = 'SoftCurrency'
            else if (reward.includes('Reputation')) reward =  `${this.faction}_Reputation`
            else if (reward.includes('Shield_'))    reward =  this.shieldData[reward]['ingamename']
            else if (reward.includes('Helmet_'))    reward = this.helmetData[reward]['ingamename']
            else if (reward.includes('Bag_'))       reward =  this.backpackData[reward]['ingamename']
            else if (reward.includes('ShockGrenade_02')) reward =  'Frag Grenade'
            else if (reward.includes('Scrip'))      reward = reward
            else if (reward.includes('HardDrive'))  reward = 'Data Drive Tier 1'
            else if (reward.includes('KeyCard')) {
                if (reward.includes('Map01'))       reward = 'Bright_Sands_Key_Card'
                if (reward.includes('Map02'))       reward = 'Crescent_Falls_Key_Card'
                if (reward.includes('Map03'))       reward = 'Tharis_Island_Key_Card'
            } else {
                if (itemData[reward]) {
                    reward = itemData[reward]['ingamename']
                }
            }
            for (let key in keyCardInfo) {
                if (keyCardInfo[key]['name']==reward) {
                    if (key.includes('Map01')) reward = 'Bright_Sands_Key_Card'
                    if (key.includes('Map02')) reward = 'Crescent_Falls_Key_Card'
                    if (key.includes('Map03')) reward = 'Tharis_Island_Key_Card'
                }
            }
            if (reward.includes('Fusion Cartridge')) reward = 'Fusion_Cartridge_Batteries'
            if (reward.includes('OrbitalCanonTarget')) reward = 'Orbital_Cannon_Beacon'
            
            return reward.split(' ').join('_').replace('#', '%23')
        },
        currencyDisplay(r: any) : string {
            if (r['item'] !=='SoftCurrency' || !r['item'].includes('Reputation')) {
                if (r['amount'] > 999) return (r['amount'] / 1000) + 'k'
            }
            return r['amount']
        },
        taskText(task : any, mission: string, index: number) {
            const type = task['type']

            if (type=='OwnNumOfItem') {
                let item = task['itemToOwn']
                if (itemData[item]) {
                    return `${task['maxProgress']} ${itemData[item]['ingamename']}`
                }

                if (stringTables['Materials'][item]) item = stringTables['Materials'][item]['name']
                item = item
                    .replace('HardDrive_uncommon','Data Drive Tier 2')
                    .replace('HardDrive_rare','Data Drive Tier 3')
                    .replace('HardDrive_epic','Data Drive Tier 4')
                    .replace('HardDrive_legendary','Data Drive Tier 5')
                
                item.replace('the Tharis Files','Gregor\'s Dossier')
                return `${task['maxProgress']} ${item}`
            }

            if (type=='VisitArea') {
                console.log(task['locationConditions'])
                let keys = Object.keys(this.stringTable)
                let newKeys : string[] = [];
                newKeys = keys.filter(a => a.toLowerCase().includes(mission.toLowerCase()))

                if (newKeys.length == 1) {
                    if (this.stringTable[newKeys[0]] !=='') {
                        let text =this.stringTable[newKeys[0]]
                        text.replace('the Tharis Files','Gregor\'s Dossier')

                        if (text) return this.stringTable[newKeys[0]]
                    }
                } else if (newKeys.length > 1) {
                    if (this.stringTable[newKeys[index]] !=='') {

                    return this.stringTable[newKeys[index]]
                        .replace('the Tharis Files','Gregor\'s Dossier')
                    }
                }

                let location = '';
                if (task['locationConditions']) location = locationNameManager(task['locationConditions'])
                return 'Visit ' + location
            }

            if (type=='Kills') {
                return killCreatureOrPlayer(task)
            }
            if (type=='DeadDrop') {
                let keys = Object.keys(this.stringTable)

                let newKeys : string[] = [];
                newKeys = keys.filter(a => a.toLowerCase().includes(mission.toLowerCase()))

                if (newKeys.length == 1) {
                    let text = this.stringTable[newKeys[0]]
                    if (text.includes('Stash an')) return text
                    return text.replace('Stash ',`Stash ${task['maxProgress']} `)
                } else if (newKeys.length > 1) {
                    let text = this.stringTable[newKeys[0]]
                    if (text.includes('Stash an')) return text
                    
                    // Stringtable is incomplete T_T
                    if (mission == 'Main-ICA-OilPump-1') text += ' at Nutrion Office'

                    return text
                        .replace('Stash ',`Stash ${task['maxProgress']} `)
                        .replace('the Tharis Files','Gregor\'s Dossier')
                }
                return task['locationConditions']
            }

            return type
        },
        taskImage(task: any) {
            const type = task['type']
            if (type=='OwnNumOfItem') {
                return this.rewardImageNamer(task['itemToOwn']).split('"').join('')
            }

            if (type=='VisitArea') {
                return 'VisitArea'
            }

            if (type=='Kills') {
                let killType = task['killConditions']['m_killTarget']

                if (killType.includes('Creatures')) return 'KillCreature'
                else return 'KillPlayer'
            }

            return type
        }
    }
})
</script>

<style scoped>


.modal__header h2 {
    font-family: sans-serif;
    text-transform: initial;
    letter-spacing: .2rem;
}

.modal__header h2 div {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.modal__header-image {
    margin: 0;
    scale: 0.7;
    translate: 0 -.5rem;
}


.modal__description {
    max-width: 75%;
    margin: 1.5rem auto;
    border-bottom: 0px solid var(--text-color-body-white);
}
.quest-parts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    max-width: 100%;

    gap: 3rem;
    margin-bottom: 20rem;
}

@media screen and (max-width: 900px) {
    .quest-parts {
        grid-template-columns: 23%;
        margin: auto;
    }

    .quests-parts__card {
        text-align: center;
    }
}

.card {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 1.6 / 1;
    height: 100%;
    overflow: hidden;

    position: relative;
    
    isolation: isolate;

    border-radius: var(--border-radius);
    transform: rotate(0px);


    background: black;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;

    --padding: 4%;
    --border-radius: .5rem;
    --duration: .25s;
    --timing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --delay: .1s;

    transition: all var(--duration) var(--timing) var(--delay);

    z-index: var(--index);
}

.card:hover {
    height: calc(200% + 3rem + 3px);
    -padding: 3%;
    border: none;
}


.card__image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;

    opacity: .4;
    z-index: -2;

    transition: all var(--duration) var(--timing) var(--delay);

    rotate: 0deg;

    border-radius: var(--border-radius);

}

.card__image-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    transition: all var(--duration) var(--timing)  var(--delay);
}

.card__contents {
    max-width: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: visible;
}
.card__header {
    position: absolute;
    top: var(--padding);
    left: var(--padding);
}

.card__header-text {
    font-family: sans-serif;
    text-transform: none;
    transition: var(--duration) var(--timing)  var(--delay);
}

.card:hover .card__header-text {
    letter-spacing: .005rem;
}
.card__header-text::before {
    content: '';
    width: 100%;
    height: 2%;
    bottom: 0;
    position: absolute;
    background-color: rgba(255, 255, 255, .8);

    transition: var(--duration) var(--timing) var(--delay);

}
.card:hover .card__header-text::before {
    width: 0px;
}

.card__desc {
    position: absolute;
    max-width: 100%;
    top: 1rem;
    left: var(--padding);
}

.card__desc-text {
    max-width: 85%;
    opacity: .7;
    overflow:auto;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: all calc(1.5 * var(--duration)) var(--timing) var(--delay);

    height: 3em;
}



.card:hover .card__desc-text {
    max-width: 85%;
    -webkit-line-clamp: 6;
    line-clamp: 6;
    height: 9em;
    text-overflow: ellipsis;

    overflow-y: auto;

    overscroll-behavior: contain;
}

.card__desc-text::-webkit-scrollbar {
    width: 5px;
    border-top: none;
    border-bottom: none;
    cursor: pointer;
    opacity: 0;
}

/* Track */
.card__desc-text::-webkit-scrollbar-track {
    background: rgba(0,0,0,0);
}

/* Handle */
.card__desc-text::-webkit-scrollbar-thumb {
    background-color: var(--text-color-body-white);
    border-radius: 2px;
    cursor: pointer;
}

/* Handle on hover */
.card__desc-text::-webkit-scrollbar-thumb:hover {
    filter: brightness(300%);
}
.card__footer {
    position: absolute;
    bottom: var(--padding);
    left: var(--padding);
}
.card__parts {
    position: absolute;
    top: .4rem;
    right: var(--padding);
    font-size: 1.7rem;
    
}

.card:hover .card__parts {
    animation: circle var(--duration) var(--timing) var(--delay);
}

@keyframes circle {
    0% {
        rotate: 0deg;
    }

    50% {
        rotate: 0deg;
    }

    100% {
        rotate: 0deg;
    }
}

.card__tasks {
    position: absolute;
    top: 50%;
    left: 5%;
    width: 90%;
    opacity: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: .5rem;

    /* border-top: 1px dashed var(--text-color-body-white);
    padding-top: 5%; */
    transition: opacity var(--duration) var(--timing) var(--delay);
}

.card__tasks-container {
    width: 100%;
    text-align: center;

    display: grid;
    grid-template-columns: 10% 90%;
}

.card__tasks-container div {
    text-align: left;
}
.card:hover .card__tasks {
    color: rgba(255, 255, 255, 1);
    opacity: .7;
    pointer-events: all;
}

.card__tasks header {
    display: none;
    text-align: left;
    width: 100%;
    opacity: .8;
}

.card__tasks header h3 {
    font-family: sans-serif;
    text-transform: initial;
    letter-spacing: .2rem;
}

.card__tasks header h3 span {
    border-bottom: 2px solid var(--text-color-body-white);
}

.card__tasks-image {
    display: inline-block;
    width: 24px;
    opacity: .8;
}
.card__rewards {
    position: absolute;

    bottom: 3%;
    left: 5%;
    opacity: 0;

    /* display: grid;
    grid-template-columns: repeat(var(--length), 1fr); */

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 90%;
    gap: .5rem;
    justify-content: center;
    transition: opacity var(--duration) var(--timing) var(--delay);

    pointer-events: none;
}

.card:hover .card__rewards {
    opacity: .7;
    color: rgba(255, 255, 255, 1);
    pointer-events: all;
}

.card__rewards-container {
    width: calc(90% / 4);
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.card__rewards-container img {
    height: 100%;
}

.card__rewards-container div {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.card__rewards-container:not(:last-child) div::before {
    content: '';

    position: absolute;
    width: 2px;
    height: 80%;
    background-color: var(--text-color-body-white);
    opacity: .5;
    right: -12%;

    border-radius: 100px;
    background: rgb(224,219,219);
    background: linear-gradient(180deg, rgba(224,219,219,1) 0%, rgba(196,196,196,1) 38%, rgba(136,130,130,1) 100%);

}

.card__unlock {
    display: none !important;
    position: absolute;
    width: 20%;
    aspect-ratio: 1 /1 ;
    right:  calc(.75 *var(--padding));
    bottom: .5rem;

    outline: 5px solid red;
    padding: .4rem;

    backdrop-filter: blur(1px);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity var(--duration) var(--timing) var(--delay);

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

}

.card__unlock-image {
    width: 100%;
    z-index: 1;
}

.card:hover:nth-child(1) ~ .card:nth-child(5)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(2) ~ .card:nth-child(6)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(3) ~ .card:nth-child(7)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(4) ~ .card:nth-child(8)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(5) ~ .card:nth-child(9)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(6) ~ .card:nth-child(10)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(7) ~ .card:nth-child(11)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(8) ~ .card:nth-child(12)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(9) ~ .card:nth-child(13)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(10) ~ .card:nth-child(14)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(11) ~ .card:nth-child(15)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(12) ~ .card:nth-child(16)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(13) ~ .card:nth-child(17)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(14) ~ .card:nth-child(18)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(15) ~ .card:nth-child(19)  .card__unlock {
    opacity: 0;
}

.card:hover:nth-child(16) ~ .card:nth-child(20)  .card__unlock {
    opacity: 0;
}

.osi {
    outline-color: #3fa321;
}

.ica {
    outline-color: #082cd1;
}

.kor {
    outline-color: #d65c1f;
}

@media screen and (max-width: 900px) {
    .card__header-text {
        font-size: 1rem;
    }
    .card__desc {
        display: none;
    }

    .card__parts {
        font-size: .8rem;
    }
}

</style>