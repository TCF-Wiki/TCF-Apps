<template>
    <div class="quest-line__container">
        <div class="quest-line__selector">
            <div @click="currentSlide(1)" :class="{'active-slide': slideIndex === 1 }">
                ICA
            </div>

            <div @click="currentSlide(2)" :class="{'active-slide': slideIndex === 2 }"> 
                Korolev
            </div>

            <div @click="currentSlide(3)" :class="{'active-slide': slideIndex === 3 }">
                Osiris
            </div> 
        </div>

        <!-- ICA -->
        <div class="quest-line__container-inner fade">       
            <div class="quest-line"> 
                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestStart />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__left"> 
                        <QuestCard 
                            name="Audiophiles Beware"
                            faction="ica"
                        />
                    </div>

                    <div class="quest-list__left-line">
                        <div class="quest-list__left-line-content">
                            Part 5
                        </div>
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Your Civic Duty"
                            faction="ica"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Doing the Work"
                            faction="ica"
                        />
                    </div>

                    <div class="quest-list__right-line">
                        <div class="quest-list__right-line-content">
                            Part 6
                        </div>
                    </div>
                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Toxic Love"
                            faction="ica"
                            unlock="Gas Grenade"
                        />
                    </div>
                </div>

                <div class="quest-list">

                    <div class="quest-list__left"> 
                        <QuestCard 
                            name="Race to the Bottom"
                            faction="ica"
                        />
                    </div>

                    <div class="quest-list__left-line">
                        <div class="quest-list__left-line-content">
                            Part 7
                        </div>
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Project Fireball"
                            faction="ica"
                        />
                    </div>

                    <div class="quest-list__right-line">
                        <div class="quest-list__right-line-content">
                            Part 5
                        </div>
                    </div>
                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Working for the Community"
                            faction="ica"
                        />
                    </div>

                </div>

                <div class="quest-list">
                    <div class="quest-list__left"> 
                        <QuestCard 
                            name="Private Business"
                            faction="ica"
                        />
                    </div>

                    <div class="quest-list__left-line">
                        <div class="quest-list__left-line-content">
                            Part 3
                        </div>
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Never Give Up"
                            faction="ica"
                        />
                    </div>

                </div>

                <div class="quest-list">
                    <div class="quest-list__center">
                        <QuestCard 
                            name="Back to Basics"
                            faction="ica"
                        />
                    </div>

                    <div class="quest-list__right-line">
                        <div class="quest-list__right-line-content">
                            Part 4
                        </div>
                    </div>

                    <div class="quest-list__right">
                        <QuestCard
                            name="The Community Needs You"
                            faction="ica"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__center">
                        <QuestCard 
                            name="An Eye for Oil"
                            faction="ica"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__center">
                        <QuestCard 
                            name="Put to the Test"
                            faction="ica"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- KOROLEV -->
        <div class="quest-line__container-inner fade">        
            <div class="quest-line"> 
                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestStart />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Time to Punch In"
                            faction="kor"
                        />
                    </div>

                    <div class="quest-list__right-line">
                        <div class="quest-list__right-line-content">
                            Part 5
                        </div>
                    </div>
                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="What a Tool!"
                            faction="kor"
                            unlock="Heavy Mining Tool"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__left">
                        <QuestCard 
                            name="Veltecite for the Masses"
                            faction="kor"
                            unlock="Scanning Module Veltecite"
                        />
                    </div>

                    <div class="quest-list__left-line">
                        <div class="quest-list__left-line-content">
                            Part 1
                        </div>
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Good Honest Work"
                            faction="kor"
                        />
                    </div>

                    <div class="quest-list__right-line">
                        <div class="quest-list__right-line-content">
                            Part 2
                        </div>
                    </div>

                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Titan Hunter"
                            faction="kor"
                            unlock="Scanning Module Titan Ore"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__left">
                        <QuestCard 
                            name="Focused on Crystals"
                            faction="kor"
                            unlock="Scanning Module Focus Crystal"
                        />
                    </div>

                    <div class="quest-list__left-line-diagonal">
                        <div class="quest-list__left-line-diagonal-content">
                            Part 7
                        </div>
                    </div>


                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="A Powerful Discovery"
                            faction="kor"
                        />
                    </div>

                    <div class="quest-list__right-line">
                        <div class="quest-list__right-line-content">
                            Part 2
                        </div>
                    </div>


                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Time for More Work"
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

                    <div class="quest-list__left-line">
                        <div class="quest-list__left-line-content">
                            Part 5
                        </div>
                    </div>


                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Research Costs"
                            faction="kor"
                        />
                    </div>

                    <div class="quest-list__right-line">
                        <div class="quest-list__right-line-content">
                            Part 3
                        </div>
                    </div>

                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Crafting Better Bags"
                            faction="kor"
                            unlock="Heavy-Duty Backpack"
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

                    <div class="quest-list__left-line">
                        <div class="quest-list__left-line-content">
                            Part 6
                        </div>
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Heavy Construction"
                            faction="kor"
                            unlock="Laser Drill Beacon"
                        />
                    </div>
                </div>

                
                <div class="quest-list">

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="The Test Run"
                            faction="kor"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- OSIRIS -->
        <div class="quest-line__container-inner fade">        
            <div class="quest-line"> 
                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestStart />
                    </div>
                </div>

                <div class="quest-list">

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Dangerous Science"
                            faction="osi"
                        />
                    </div>

                </div>

                <div class="quest-list">
                    <div class="quest-list__left"> 
                        <QuestCard 
                            name="A Whole New Ecosystem"
                            faction="osi"
                        />
                    </div>

                    <div class="quest-list__left-line">
                        <div class="quest-list__left-line-content">
                            Part 5
                        </div>
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Field Research"
                            faction="osi"
                        />
                    </div>

                    <div class="quest-list__right-line">
                        <div class="quest-list__right-line-content">
                            Part 2
                        </div>
                    </div>

                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Stimulating Developments"
                            faction="osi"
                            unlock="Strong_Stim"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__left">
                        <QuestCard 
                            name="The Progenitor Device"
                            faction="osi"
                        />
                    </div>

                    <div class="quest-list__left-line">
                        <div class="quest-list__left-line-content">
                            Part 5
                        </div>
                    </div>

                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Lost Knowledge"
                            faction="osi"
                        />
                    </div>

                    <div class="quest-list__right-line-diagonal">
                        <div class="quest-list__right-line-diagonal-content">
                            Part 10
                        </div>
                    </div>

                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Storm Rider"
                            faction="osi"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__left">
                        <QuestCard 
                            name="The Needs of the One"
                            faction="osi"
                        />
                    </div>

                    <div class="quest-list__left-line">
                        <div class="quest-list__left-line-content">
                            Part 2
                        </div>
                    </div>


                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Explosive Delivery"
                            faction="osi"
                        />
                    </div>

                </div>

                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Laser Show"
                            faction="osi"
                        />
                    </div>

                </div>

                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Path to Strong Medkits"
                            faction="osi"
                            unlock="Strong Medkit"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Building a better Death Ray"
                            faction="osi"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Satellite Master"
                            faction="osi"
                        />
                    </div>

                    <div class="quest-list__right-line">
                        <div class="quest-list__right-line-content">
                            Part 3
                        </div>
                    </div>

                    <div class="quest-list__right"> 
                        <QuestCard 
                            name="Combat Ready"
                            faction="osi"
                            unlock="Combat_Stim"
                        />
                    </div>
                </div>

                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Orbital Repairs"
                            faction="osi"
                            unlock="Orbital Cannon Beacon"
                        />
                    </div>
                </div>
                
                <div class="quest-list">
                    <div class="quest-list__center"> 
                        <QuestCard 
                            name="Breaking and Entering"
                            faction="osi"
                        />
                    </div>
                </div>
            </div>

        </div>


    </div>


    <a class="back-to-top" href="#top"> <div class="back-to-top-text"> Back To Top </div></a>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import QuestCard from './components/QuestCard.vue';
import QuestStart from './components/QuestStart.vue'

export default defineComponent({ 
    components: { QuestCard, QuestStart  },
    data() {
        return {
            slideIndex: 2
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
    },
    mounted() {
        this.showSlides(this.slideIndex)
    }
});
</script>

<style scoped>


.quest-line__container {
    max-width: 100%;
    position: relative;
    margin: auto;
}

.quest-line .quest-list:first-child {
    margin-bottom: .5rem
}
.quest-line .quest-list:nth-child(2) {
    margin-top: .5rem
}
.quest-line__container-inner {
    display: none;
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

.quest-list * {
    --border-color: var(--text-color-body-gray);
    --border-width: 6px;
}
.quest-list:not(:last-child):not(:nth-child(1)) .quest-list__center::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 200%;
    left: 0%;
    border-right: var(--border-width) dotted var(--border-color);
}

.quest-list__left-line::before {
    content: '';
    position: absolute;
    width: 140%;
    top: 0%;
    left: -3%;
    height: 53%;

    border-bottom: var(--border-width) dotted var(--border-color);
}

.quest-list__left-line-content {
    position: absolute;
    width: 100%;
    height: 100%;

    top: 43.7%;
    left: 32%;
}

.quest-list__right-line::before {
    content: '';
    position: absolute;
    width: 140%;
    top: 0%;
    left: -3%;
    height: 53%;

    border-bottom: var(--border-width) dotted var(--border-color);
}

.quest-list__right-line-content {
    position: absolute;
    width: 100%;
    height: 100%;

    top: 43.7%;
    left: 32%;
}

.quest-list__left-line-diagonal,
.quest-list__right-line-diagonal {
    position: relative;
}
.quest-list__left-line-diagonal::before {
    content: '';
    position: absolute;
    width: 120%;
    top: -54%;
    left: -35%;
    height: 53%;

    rotate: -30deg;
    border-bottom: var(--border-width) dotted var(--border-color);
}

.quest-list__left-line-diagonal-content {
    position: absolute;
    width: 100%;
    height: 100%;

    rotate: -30deg;

    top: -30%;
    left: 72%;
}

.quest-list__right-line-diagonal::before {
    content: '';
    position: absolute;
    width: 120%;
    top: -54%;
    right: -35%;
    height: 53%;

    rotate: 30deg;
    border-bottom: var(--border-width) dotted var(--border-color);
}

.quest-list__right-line-diagonal-content {
    position: absolute;
    width: 100%;
    height: 100%;

    rotate: 30deg;

    top: -14%;
    right: 19%;
}

.quest-list__left {
    grid-column: 1  /1;
}

.quest-list__center {
    grid-column: 3 / 3;
    position: relative;
}

.quest-list__right {
    grid-column: 5 / 5;
}

.quest-list__left-line {
    grid-column: 2 / 2;
    position: relative;
}

.quest-list__right-line {
    grid-column: 4 /4 ;
    position: relative;
}

.quest-list__center svg {
    width: 15%;
    display: flex;
    margin: auto;
}


.fade {
    animation-name: fade-in;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.320, 1)	;
}

@keyframes fade-in {
    from {
        opacity: .4;
        translate: 0 30rem
        
    } 
    to {
        opacity: 1;
        translate: 0 0
    }
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

    padding: .5rem;

    position: relative;
}

.quest-line__selector div:nth-child(2) {
    border: 4px solid var(--background-button-color);
    border-top: none;
    border-bottom: none;
}


.quest-line__selector div:not(.active-slide)::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid transparent;

    transition: .4s ease-in-out;
}

.quest-line__selector div:hover:not(.active-slide)::before {
    border-bottom-color: var(--link-body-color);
    color: red;
}
.active-slide::before:hover {
    border-bottom-color: var(--link-body-color) !important;
}

.active-slide::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid var(--link-body-color);

    transition: .4s ease-in-out;
}

.active-slide:hover::before {
    border-bottom-color: var(--button-accent-color);
}

.back-to-top-text {
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    background-color: var(--background-stripe-color);
    padding: .3rem;
    text-transform: uppercase;
    letter-spacing: .3rem;

    border-radius: .3rem;
}

a.back-to-top {
    transition: .2s ease-in-out;
}

a.back-to-top:hover  {
    color: var(--link-body-color);
}
</style>
