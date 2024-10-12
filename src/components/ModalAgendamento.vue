<script setup>
import { ref, defineEmits } from 'vue';

    const emit = defineEmits();

    const selectedModality = ref('');
    const selectedUnit = ref('');
    const isVisible = ref(true);

    const closeModal = () => {
        console.log("Modal fechado");
        isVisible.value = false;
        emit('close');
    };

    const confirm = () => {
        console.log("Modalidade selecionada:", selectedModality.value);
        console.log("Unidade selecionada:", selectedUnit.value);
        closeModal();
    };
</script>

<template>
    <div v-if="isVisible" class="overlay">
        <div class="container">
            <div class="content-img">
                <img src="/src/assets/Modal.png" alt="">
            </div>
            <div class="container-form">
                <div class="title">
                    <h2> Agende sua experiência </h2>
                    <button class="closeX" @click="closeModal"> X </button>
                </div>
                <div class="content-form">
                    <span class="list">
                        <label for=""> Nome <span class="listUl"> * </span> </label>
                        <input type="text" name="" id="" placeholder="informe seu nome aqui">
                    </span>
                    <span class="list">
                        <label for=""> WhatsApp <span class="listUl"> * </span> </label>
                        <input type="text" name="" id="" placeholder="(XX) XXXXX-XXXX">
                    </span>

                    <span class="list">
                        <label for=""> Se você já decidiu a modalidade que deseja praticar, escolha abaixo. Caso ainda esteja indeciso, selecione "Ainda não sei".</label>
                        <select id="modality" v-model="selectedModality">
                            <option value="" disabled> Modalidade  </option>
                            <option value="exclusive"> CACTO EXCLUSIVE </option>
                            <option value="mmt"> CACTO MMT </option>
                            <option value="run"> CACTO RUN </option>
                            <option value="beach_tenis"> BEACH TENIS </option>
                        </select>
                    </span>

                    <span class="list">
                        <label for=""> Selecione a unidade Cacto desejada</label>
                        <select id="unit" v-model="selectedUnit">
                            <option value="" disabled> Unidade </option>
                            <option value=""> Cacto 13 de julho </option>
                            <option value=""> Cacto Alamenda </option>
                            <option value=""> Cacto 13 de julho </option>
                        </select>
                    </span>

                    <button class="btnConfirm" @click="confirm"> Confirmar </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.container {
    width: 57.5rem;
    max-height: 93.4vh;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 18px 0px #00000014;
    display: flex;
}
.container-form {
    padding: 1.5rem;
}
.content-form {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 1.5rem;
}
.title {
    width: 28.75rem;
    display: flex;
    justify-content: space-between;
    margin-left: 1.4rem;
}
.title h2 {
    padding-top: 1.5rem;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: #1c1c1e;
}
.list {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 1rem 0;
}
.listUl {
    color: #FF6400;
}
label {
    padding-bottom: 1rem;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.313rem;
    color: #1c1c1e;
}
input, select {
    width: 28.75rem;
    height: 3.438rem;
    border: solid 1px #E5E5EA;
    border-radius: 10px;
    padding: 1.2rem;
}

.btnConfirm {
    padding: 1rem;
    border-radius: 10px;
    border: none;
    background: #FF6400;
    color: #FFFFFF;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: .9rem;
    line-height: 1.406rem;
    text-align: center;
    margin-top: .4rem;
    cursor: pointer;
}
.closeX {
    font-family: 'poppins', sans-serif;
    color: #1c1c1e;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    background: none;
}


</style>