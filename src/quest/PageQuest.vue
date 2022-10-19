<template>
    <div>
        <div class="quest-list">  
            <div class="quest-list__left">
                <QuestCard 
                    title="Race to the Bottom"
                    img="MI_ICA_Race_to_the_Bottom"
                    desc="The ICA has been monitoring a decrease in radiation levels over a small island for some time now, and now they want you to go down there and figure what happened to a group of missing colonists.

Not much is known about the island or why the corps set up shop there, but Marie hopes you'll find clues as to what happened to the colonists at the Korolev and Osiris installations. 
And while you're there, maybe you could look into why the corps were so interested in the island's caverns in the first place..."
                    unlock="Tharis_Island_Key_Card"
                    parts="1/19"
                    footer="Placeholder..."
                    faction="ica" 
                />
            </div>
            <div class="quest-list__left-arrow">
                <ArrowLeft />
            </div>
            <div class="quest-list__center"> 
                <QuestCard 
                    title="The Progenitor Device"
                    img="MI_OSI_The_Progenitor_Device"
                    desc="After decades of storm and hazardous radiation from the Teratomorphic Energy Field enveloping most of the planet, an abandoned Osiris field lab on a remote island has suddenly become accessible. While it was common for Osiris researchers to be the last ones off the planet when the final evac order finally came, there are no recorded survivors from the installation at Tharis Island. Sullivan wants you to investigate the area, find out what happened to the researchers. And more importantly, to their research."
                    unlock="Combat_Stim"
                    parts="1/17"
                    footer="Placeholder..."    
                    faction="osi" 
                />
            </div>
            <div class="quest-list__right-arrow">
                <ArrowRight /> 
            </div>
            <div class="quest-list__right"> 
                <QuestCard 
                    title="A Whole New Ecosystem"
                    img="MI_OSI_A_Whole_New_Ecosystem"
                    desc="Osiris has been studying both the Fauna and Flora on Crescent Falls for years before the Storm made the Area uninhabitable. According to recent reports, that beautiful Ecosystem might slowly become accessible again. Help Osiris reclaim their Research Facilities."
                    parts="1/3"
                    footer="Placeholder..."    
                    faction="kor" 

                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import QuestCard from './components/QuestCard.vue';
import ArrowRight from './icons/ArrowRight.vue'
import ArrowLeft from './icons/ArrowLeft.vue'
export default defineComponent({ 
    components: { QuestCard, ArrowRight, ArrowLeft } 
});
</script>

<style scoped>


@media screen and (max-width: 1100px) {
    div {
        min-height: 100vh;
        justify-content: flex-start;
        gap: 4rem;
    }
}

.quest-list {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr 1fr 3fr;
    gap: .3rem;
    height: 100%;
    margin: 0 2rem;
}

.quest-list__left {
    grid-column: 1  /1;
}

.quest-list__center {
    grid-column: 3 / 3;
}

.quest-list__right {
    grid-column: 5 / 5;
}

.quest-list__left-arrow {
    grid-column: 2 / 2;
    margin: auto;
    width: 50%;
    fill: #a9a9a9;
}

.quest-list__right-arrow {
    grid-column: 4 /4 ;
    margin: auto;
    width: 50%;
    fill: #a9a9a9;
}
</style>
