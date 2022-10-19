<template>
<section class="quest-parts" :style="{ '--length': length}"> 
    <div v-for="m in missions" class="quest-parts__card">
        {{ missionData[m]['inGameName'] }}
    </div>
</section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { missionData } from '../data';
import { missions } from '../QuestConstants';

export default defineComponent({
    props: ['name', 'faction'],
    data() {
        return {
            missionData: missionData,
            missions: missions[this.faction][this.name]
        }
    },
    mounted() {

    },
    computed: {
        length() {
            const length = this.missions.length

            if (length > 12) {
                return 4
            }
            if (length > 6) {
                return 3
            }
            if (length == 2) {
                return 2
            }
            return 3
        }
    }
})
</script>

<style scoped>
.quest-parts {
    display: grid;
    grid-template-columns: repeat(var(--length), 1fr);
    height: 100%;
}

.quest-parts__card {
    padding: 1em;
}

@media screen and (max-width: 900px) {
    .quest-parts {
        grid-template-columns: 1fr;
        margin: auto;
    }

    .quests-parts__card {
        text-align: center;
    }
}
</style>