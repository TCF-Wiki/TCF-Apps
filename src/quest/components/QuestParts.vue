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
        <div v-for="m, index in missions" class="container">
            <QuestCardPart 
                :mission="m"
                :zIndex="missions.length-index"
                :index="index"
                :faction="faction"
                :name="name"
            />
        </div>
    </section>



</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { missionData, stringTables, locationData } from '../data';
import QuestCardPart from './QuestPartsCard.vue'
import { missions } from '../QuestConstants';


export default defineComponent({
    props: ['name', 'faction'],
    components: {
        QuestCardPart
    },
    data() {
        return {
            missionData: missionData,
            missions: missions[this.faction][this.name],
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

@media screen and (max-width: 900px) {
    .modal__header h2 {
        font-size: 2rem;
    }

    .modal__header-image {
        display: none;
    }

    .modal__description {
        max-width: 90%;
    }

}
.quest-parts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    max-width: 100%;

    gap: 3rem;
    margin-bottom: 20rem;
}

@media screen and (max-width: 1500px) {
    .quest-parts {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (max-width: 1200px) {
    .quest-parts {
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 900px) {
    .quest-parts {
        grid-template-columns: 1fr;
        margin: auto;
    }
}

.container {
    position: relative;
}


</style>