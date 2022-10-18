<template>
    <div>
        <div class="quest-list"> 
            <div class="quest-list__center"> 
                <QuestCard 
                    title="The Progenitor Device"
                    desc="..."
                    img="Combat_Stim.png"
                    parts="1/17"
                    footer="Placeholder..."    
                />
            </div>
            <div class="quest-list__right"> 
                <QuestCard 
                    title="The Progenitor Device"
                    desc=""
                    img="Combat_Stim.png"
                    parts="1/17"
                    footer="Placeholder..."    
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import QuestCard from './components/QuestCard.vue';
export default defineComponent({ 
    components: { QuestCard } 
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
    gap: 1rem;
    height: 100%;
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
}

.quest-list__right-arrow {
    grid-column: 4 /4 ;
}
</style>
