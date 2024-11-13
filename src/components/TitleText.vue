<script setup>
import Line from './Line.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="text-image-layout">
        <h2>{{ title }}</h2>
        <Line/>
        <p>{{ description }}</p>
    </div>
</template>

<style scoped>

.text-image-layout {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2.4rem;
    color: #FFFFFF;
    line-height: 2.4rem;
    width: 631px;
}
.text-image-layout h2 {
    position: relative;
    font-size: 8rem;
    font-weight: 600;
    font-family: "Sofia Sans";
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    line-height: 9.6rem;
}
.text-image-layout h2::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 1rem;
    height: 8rem;
    width: 4px;
    background-color: #ff6600;
}
.text-image-layout p {
    overflow-wrap: break-word;
    margin-top: 1rem;
}

@media (max-width:1440px) {
    .text-image-layout p {
        overflow-wrap: break-word;
    }
    .text-image-layout {
        width: 600px;
        height: 575px;
    }
}


</style>
