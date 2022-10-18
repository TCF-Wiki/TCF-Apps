<template>
<section class="card">
    <img class="card__image" :src="'quest-images/' + img + '.png'" v-if="img">
    <div class="card__contents"> 
        <header class="card__header" v-if="title"> <h3 class="card__header-text"> {{ title }} </h3></header>
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
        <div class="card__unlock" v-if="unlock">
            <img class="card__unlock-image" :src="'/map-images/item-images/' + unlock + '.png'">
        </div>
        <div class="card__parts" v-if="parts"> {{parts}} </div>
    </div>
</section>


{{ title }}
{{ desc }}
{{ img }}
{{ parts }}
{{ unlock }}
{{ footer }}
</template>
<script lang="ts">
import  { defineComponent } from 'vue';

export default defineComponent({
    props: [
        "title",
        "desc",
        "img",
        "parts",
        "unlock",
        "footer"
    ]
})
</script>

<style scoped>
.card {
    width: 100%;
    aspect-ratio: 1.6 / 1;
    overflow: hidden;

    position: relative;
    
    isolation: isolate;

    border-radius: 10px;
    transform: rotate(20px);


    background: black;

    --padding: 4%;
}

.card__image {
    position: absolute;
    width: 100%;
    height: 100%;
    

    opacity: .4;
    z-index: -2;

    transition: all .4s;

    transform: rotate(0);
}

.card__image img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
}

.card:hover .card__image{
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

    border-bottom: 1px solid rgba(255, 255, 255, .8);
}

.card__desc {
    position: absolute;
    width: 80%;
    top: 16%;
    left: var(--padding);
}
.card__desc-text {
    overflow: hidden;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    line-clamp: 2; 
    -webkit-box-orient: vertical;
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
    right:  -3%;
    bottom: -3%;
    z-index: 3;
    overflow: visible;
    
    outline: 5px solid #3fa321;
    padding: .4rem;

    backdrop-filter: blur(1px);
    border-radius: 50%;
}
</style>