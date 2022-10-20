<template>
<div> 
    <header class="modal__header"> <h2> <span> {{ name }} </span></h2></header>
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
                <div class="card__rewards">
                    <div v-for="r in orderedRewards(missionData[m]['rewards'])" class="card__rewards-container"> 
                            <img  
                                :src="'/map-images/item-images/' + rewardImageNamer(r['item']) + '.png'" 
                                class="card__rewards-img"
                            >
                            <div> {{ currencyDisplay(r) }}</div>
                    </div>
                </div>
                <div class="card__footer" role="footer">
                    <div class="card__footer-text">
                    </div>
                </div>
                <div class="card__unlock"  :class="faction" v-if="missionData[m]['rewards'].length > 3">
                    <img class="card__unlock-image" :src="'/map-images/item-images/' + rewardMaker(missionData[m]['rewards']) + '.png'">
                </div>
                <div class="card__parts" >  {{ index+1 }} </div>
            </div>
        </section>
    </section>



</div>
</template>

<script lang="ts">
import { faRotateForward } from '@fortawesome/free-solid-svg-icons';
import { defineComponent } from 'vue';
import { missionData } from '../data';
import { missions } from '../QuestConstants';
import { shieldData, backpackData, helmetData } from '../../forge/data'
import { keyCardInfo } from '../../map/mapConstants'

export default defineComponent({
    props: ['name', 'faction'],
    data() {
        return {
            missionData: missionData,
            missions: missions[this.faction][this.name],
            helmetData: helmetData,
            shieldData: shieldData,
            backpackData: backpackData
        }
    },
    mounted() {
        setInterval(() => {resizeTo(screen.width, screen.height)}, 10)

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
                    console.log('Hurray!')
                    newList.splice(2, 0, rewardList[r])
                } else {
                    newList.push(rewardList[r])
                }
            }
            return newList
        },
        rewardImageNamer(reward: string) : string {
            if (reward.includes('SoftCurrency')) reward = 'SoftCurrency'
            else if (reward.includes('Reputation')) reward =  `${this.faction}_Reputation`
            else if (reward.includes('Shield_')) reward =  this.shieldData[reward]['ingamename']
            else if (reward.includes('Helmet_'))reward = this.helmetData[reward]['ingamename']
            else if (reward.includes('Bag_')) reward =  this.backpackData[reward]['ingamename']
            else if (reward.includes('ShockGrenade_02')) reward =  'Frag Grenade'
            else if (reward.includes('KeyCard')) {
                if (reward.includes('Map01')) reward = 'Bright_Sands_Key_Card'
                if (reward.includes('Map02')) reward = 'Crescent_Falls_Key_Card'
                if (reward.includes('Map03')) reward = 'Tharis_Island_Key_Card'
            }
            for (let key in keyCardInfo) {
                if (keyCardInfo[key]['name']==reward) {
                    if (key.includes('Map01')) reward =  'Bright_Sands_Key_Card'
                    if (key.includes('Map02')) reward = 'Crescent_Falls_Key_Card'
                    if (key.includes('Map03')) reward = 'Tharis_Island_Key_Card'
                }
            }
            return reward.split(' ').join('_')
        },
        currencyDisplay(r: any) : string {
            if (r['item'] !=='SoftCurrency') return r['amount']

            return (r['amount'] / 1000) + 'k'
        }
    }
})
</script>

<style scoped>

.modal__header {
    text-align: center;
    margin-bottom: 1rem;
}

.modal__header h2 {
    font-family: sans-serif;
    text-transform: initial;
    letter-spacing: .2rem;

}

.modal__header h2 span {
    border-bottom: 2px solid var(--text-color-body-white);
}
.quest-parts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    max-width: 100%;

    gap: 2rem;
}

.quest-parts section {
    width: 100%;
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
    /* overflow: hidden; */

    position: relative;
    
    isolation: isolate;

    border-radius: var(--border-radius);
    transform: rotate(20px);


    background: black;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;

    --padding: 4%;
    --border-radius: .5rem;
    --duration: .5s;
    --timing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --delay: .1s;

    transition: all var(--duration) var(--timing) var(--delay);

    z-index: var(--index);
}

.card:hover {
    height: calc(200% + 2rem + 3px);
    -padding: 3%;
    border: none;
}



.card
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
    width: 80%;
    top: 1rem;
    left: var(--padding);
}

.card__desc-text {
    opacity: .7;
    overflow: hidden;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: all calc(1.5 * var(--duration)) var(--timing) var(--delay);

    height: 3em;
}



.card:hover .card__desc-text {
    -webkit-line-clamp: 6;
    line-clamp: 6;
    height: 9em;
    text-overflow: ellipsis;

    overflow-y: auto;

    overscroll-behavior: contain;
}

.card__desc-text::-webkit-scrollbar {
    width: 2px;
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
    font-size: 1.5rem;
}

.card:hover .card__parts {
    animation: circle var(--duration) var(--timing) var(--delay);
}

@keyframes circle {
    0% {
        rotate: 0deg;
    }

    50% {
        rotate: 180deg;
    }

    100% {
        rotate: -360deg;
    }
}

.card__rewards {
    position: absolute;

    bottom: 15%;
    opacity: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: .5rem;
    width: 110%;

    transition: opacity var(--duration) var(--timing) var(--delay);
}

.card:hover .card__rewards {
    opacity: 1;
}

.card__rewards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.card__rewards-container div {
    translate: 0 2.5px;
    padding: 0 .1rem;
}

.card__rewards-container:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.3);
}
.card__rewards-img {
    display: inline-flex;
    width: 32px;
    float: left;
}
.card__unlock {
    position: absolute;
    width: 20%;
    aspect-ratio: 1 /1 ;
    right:  calc(-.5 * var(--padding) );
    bottom: calc(-.5 * var(--padding) );

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