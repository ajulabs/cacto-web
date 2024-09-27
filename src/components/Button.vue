<script setup>

const props = defineProps({
    buttonLabel: {
        type: String,
        default: "clique aqui"
    },
    separator: {
        type: String,
        default: "clique aqui"
    },
    buttonIcon: {
        type: String,
        default: ""
    },
});
</script>

<template>
    <div class="Btn-layout">
        <button class="custom-button">
            <img v-if="buttonIcon" :src="buttonIcon" alt="Ícone" class="button-icon" />
            <span class="separator"> {{ separator }}</span>
            {{ buttonLabel }}
        </button>
    </div>
</template>

<style scoped>

.custom-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    background-color: #ff6600;
    width: 13.25rem;
    height: 3.375rem;
    border-radius: 0.625rem;
    border: none;
    color: #FFFFFF;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1.406rem;
    text-align: center;
    cursor: pointer;
}
.separator {
    width: 0.5rem;
    font-size: 1.1rem;
    margin: 0 0.5rem;
    opacity: 30%;
    text-align: center;
}

.button-icon {
    width: 1.3rem;
    height: auto;
}

</style>