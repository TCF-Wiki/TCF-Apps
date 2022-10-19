<template>
    <div class="text">
        Start
    </div>
</template>
<script lang="ts">
import  { defineComponent } from 'vue';
import ArrowDown from '../icons/ArrowDown.vue'
export default defineComponent({
    components: {
        ArrowDown,
    }
})
</script>

<style scoped>
.text {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: .4rem;

    background-color: var(--background-button-color);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
}


</style>

