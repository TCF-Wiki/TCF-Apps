<template>
<section ref="card" class="card" @click="addShake(); isModalOpen = true">
    <div class="card__image">
        <img class="card__image-img" :src="'quest-images/MI/' + name.replaceAll(' ','_') + '.png'" v-if="name">
    </div>
    <div class="card__contents"> 
        <header class="card__header" v-if="name"> <h3 class="card__header-text"> {{ name }} </h3></header>
        <section class="card__desc" v-if="desc">
            <div class="card__desc-text"> 
                {{ desc }}
            </div>
        </section>
        <div class="card__footer" role="footer" v-if="footer">
            <div class="card__footer-text">
                {{ footer }}
            </div>
        </div>
        <div class="card__unlock" v-if="unlock" :class="faction">
            <img class="card__unlock-image" :src="'/map-images/item-images/' + unlock.replaceAll(' ','_') + '.png'">
        </div>
        <div class="card__parts" v-if="parts"> {{parts}} </div>
    </div>
</section>

<Teleport to="#modal">
    <Transition name="modal"> 
        <div class="modal__bg" v-if="isModalOpen"> 
            <section class="modal__content" ref="modal">  
                <button @click="isModalOpen = false" class="modal__close-button" aria-label="Close Modal" type="button">x</button>
                    <QuestParts 
                        :name="name" 
                        :faction="faction"
                    />
            </section>
        </div>
    </Transition>
</Teleport>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core';

const isModalOpen = ref(false)
const modal = ref(null)
onClickOutside(modal, () => (isModalOpen.value = false))
    
</script>


<script lang="ts">
import  { defineComponent } from 'vue';
import { missionData } from '../data'
import { missions } from '../QuestConstants'
import QuestParts from './QuestParts.vue'

export default defineComponent({
    props: [
        "name",
        "faction",
        "unlock",
        "footer"
    ],
    data() {
        return {
            missions: missions,
            missionData: missionData,
            desc: '' as string,
            parts: '' as string,
        }
    },
    mounted() {
        const mission = missions[this.faction][this.name] 
        if (mission) {
            this.desc = this.missionData[mission[0]]['chainDescription']
            this.parts = `${mission.length} / ${mission.length}`
        }
    },
    methods: {
        addShake() {
            // const card = this.$refs.card as HTMLElement
            // card.classList.add('apply-rotate')

            // setTimeout(() => { card.classList.remove('apply-rotate')}, 1000)
        }
    },
})
</script>
<style>
.modal__bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
}

.modal__content {
    position: relative;
    width: 75%;
    height: 75%;
    padding: 2rem;
    background-color: var(--background-content-color);
}

.modal__close-button {
    position: absolute;
    top: .75rem;
    right: 1.5rem;

    font-size: 2rem;
    color: var(--text-color-body-white);
    background: none;
    border: none;
    cursor: pointer;
}

.modal-enter-active,
.modal-leave-active {
    transition:  all .25s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    scale: 1.1
}
</style>

<style scoped>
.card {
    width: 100%;
    aspect-ratio: 1.6 / 1;
    /* overflow: hidden; */

    position: relative;
    
    isolation: isolate;

    border-radius: var(--border-radius);
    transform: rotate(20px);


    background: black;

    cursor: pointer;

    --padding: 4%;
    --border-radius: .5rem;
}

.card__image {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow: hidden;

    opacity: .4;
    z-index: -2;

    transition: all .4s;

    transform: rotate(0);

    border-radius: var(--border-radius);

}

.card__image-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    transition: all .4s;
}

.card:hover .card__image-img{
    transform: scale(1.1) !important;
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
    font-family: 'Sora';
    text-transform: none;
    transition: .2s ease-in-out;
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

    transition: .2s ease-in-out;

}
.card:hover .card__header-text::before {
    width: 0px;
}

.card__desc {
    position: absolute;
    width: 80%;
    top: 18%;
    left: var(--padding);
}



.card__desc-text {
    overflow: hidden;

    opacity: .7;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    line-clamp: 2; 
    -webkit-box-orient: vertical;
}


.card:hover .card__desc_text {
    -webkit-line-clamp: 3; 
    line-clamp: 3; 
}

.card__footer {
    position: absolute;
    bottom: var(--padding);
    left: var(--padding);
}
.card__parts {
    position: absolute;
    top: var(--padding);
    right: var(--padding);
    font-size: 1.5rem;

}
.card__unlock {
    position: absolute;
    width: 20%;
    height: 31%;
    right:  -3%;
    bottom: -3%;

    outline: 5px solid red;
    padding: .4rem;

    backdrop-filter: blur(1px);
    border-radius: 50%;

    display: flex;
    justify-content: flex;
}

.card__unlock-image {
    width: 100%;
    z-index: 1;
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

@keyframes rotate {
    10%,
    90% {
        rotate: -1deg;
    }

    20%,
    80% {
        rotate: 2deg;
    }

    30%,
    50%,
    70% {
        rotate: -3deg;
    }

    40%,
    60% {
        rotate: 3deg;

    }
}

.apply-rotate {
    animation: rotate 0.82s ease-in-out both;
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