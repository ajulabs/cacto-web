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
            <span class="txt"> {{ buttonLabel }} </span>
        </button>
    </div>
</template>

<style scoped>

.custom-button {
    width: 100%;
    max-width: 212px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .2rem;
    background-color: #ff6600;
    border-radius: 0.625rem;
    border: none;
    color: #FFFFFF;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1.406rem;
    cursor: pointer;
}
.separator {
    width: 1rem;
    color: #FFFFFF;
    font-size: 2.5rem;
    line-height: 2rem;
    margin: 0 0.5rem;
    opacity: 30%;
    text-align: center;
}
.button-icon {
    width: 100%;
    max-width: 19.5px;
    height: auto;
}
.txt {
    color: #FFFFFF;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
}

@media (max-width: 1400px) {
    .custom-button{
        max-width: 190px;
    }
}
@media (max-width: 881px) {
    .custom-button {
        height: 45px;
        max-width: 180px;
    }
}

@media (max-width: 375px) {
    .txt {
        font-size: 1.2rem;
        font-weight: 700;
    }
    .separator {
        font-size: 1.5rem;
    }
    .custom-button img {
        max-width: 16px;
    }
}

@media (max-width: 320px) {
    .custom-button {
        height: 35px;
        max-width: 145px;
    }
}


</style>