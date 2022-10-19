<template>
    <div class="quest-line__container">
        <div class="quest-line__selector">
            <div @click="currentSlide(1)">
                ICA
            </div>

            <div @click="currentSlide(2)"> 
                Korolev
            </div>

            <div @click="currentSlide(3)">
                Osiris
            </div> 
        </div>

        <div class="quest-line__container-inner fade">        
            <div class="quest-line">
                ICA
            </div>
        </div>

      
        <div class="quest-line__container-inner fade">        
            <div class="quest-line"> 
                <div class="quest-list">
                    <div class="quest-list__left">
                        <QuestCard 
                            name="Time to Punch In"
                            faction="kor"
                        />
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="What a Tool!"
                            faction="kor"
                        />
                    </div>
                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Good Honest Work"
                            faction="kor"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__left">
                        <QuestCard 
                            name="Veltecite for the Masses"
                            faction="kor"
                        />
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Titan Hunter"
                            faction="kor"
                        />
                    </div>
                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Focused on Crystals"
                            faction="kor"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__left">
                        <QuestCard 
                            name="A Powerful Discovery"
                            faction="kor"
                        />
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Time for More Work"
                            faction="kor"
                        />
                    </div>
                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Research Costs"
                            faction="kor"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__left">
                        <QuestCard 
                            name="In a Deep Dark Hole"
                            faction="kor"
                        />
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Crafting Better Bags"
                            faction="kor"
                        />
                    </div>
                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Heavy Construction"
                            faction="kor"
                        />
                    </div>
                </div>
                <div class="quest-list">
                    <div class="quest-list__left">
                        <QuestCard 
                            name="Crush Hazard"
                            faction="kor"
                        />
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="The Test Run"
                            faction="kor"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="quest-line__container-inner fade">        
            Even more Testing!
        </div>


    </div>



</template>

<script lang="ts">
import {defineComponent} from 'vue';
import QuestCard from './components/QuestCard.vue';
import ArrowRight from './icons/ArrowRight.vue'
import ArrowLeft from './icons/ArrowLeft.vue'
export default defineComponent({ 
    components: { QuestCard, ArrowRight, ArrowLeft },
    data() {
        return {
            slideIndex: 1
        }
    },
    methods: {
        plusSlides(n: number) {
            this.showSlides(this.slideIndex +=n)
        },
        
        currentSlide(n: number) {
            this.showSlides(this.slideIndex = n)
        },

        showSlides(n: number) {
            let i;
            let slides = document.getElementsByClassName("quest-line__container-inner") as any;
            if (n > slides.length) {
                this.slideIndex = 1
            }    
            if (n < 1) {
                this.slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }

            slides[this.slideIndex-1].style.display = "block";  

        }
    }
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


.quest-line__container {
    max-width: 100%;
    position: relative;
    margin: auto;
}

.quest-line__container-inner {
    display: none;
}

.quest-line__selector {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    text-align: center;

    margin: 0 2rem 1rem;

    border: 3px solid var(--background-button-color);

    cursor: pointer;
}

.quest-line__selector div {
    text-transform: uppercase;
    letter-spacing: .4rem;
}

.quest-line__selector div:nth-child(2) {
    border: 4px solid var(--background-button-color);
    border-top: none;
    border-bottom: none;
}
.quest-line__selector div:hover {
    background-color: var(--background-stripe-color);
}
.quest-list {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr 1fr 3fr;
    gap: .3rem;
    height: 100%;
    margin: 2rem 2rem;
}

.quest-list:first-child {
    margin-top: 0;
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


.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
</style>
