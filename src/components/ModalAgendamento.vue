<script setup>
import { ref, defineEmits, onBeforeMount, onBeforeUnmount } from 'vue';

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
                        <label for="nome"> Nome <span class="listUl"> * </span> </label>
                        <input type="text" name="nome" id="nome" placeholder="informe seu nome aqui">
                    </span>
                    <span class="list">
                        <label for="whatsapp"> WhatsApp <span class="listUl"> * </span> </label>
                        <input type="tel" name="" id="whatsapp" placeholder="(XX) XXXXX-XXXX">
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
    width: 90rem;
    height: 90rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    transform: translate(-25.4%, -60%);
    z-index: 3000;
    overflow: hidden;
}
.container {
    position: fixed;
    width: 55rem;
    height: 35rem;
    background-color: #FFFFFF;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    z-index: 3000;
    animation: .3s anim-modal;
}
.content-img img {
    width: 23.75rem;
    height: 35rem;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 4px 18px 0px #00000014;
}
.list {
    display: flex;
    flex-direction: column;
    padding: 1rem 2.5rem 0 2.5rem;
}
.title {
    width: 28.75rem;
    display: flex;
    justify-content: space-between;
}
.title h2 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: #1c1c1e;
    padding: 2rem 2rem 0 2.5rem;
}
.closeX {
    font-family: 'Poppins';
    font-size: 1.2rem;
    border: none;
    background: none;
    color: #1c1c1e;
    margin-right: .4rem;
    cursor: pointer;
}
.listUl {
    color: #FF6400;
}
label {
    color: #1c1c1e;
    font-family: 'Poppins';
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.313rem;
}
input, 
select {
    width: 26rem;
    height: 3rem;
    border: solid 1px #e5e5ea;
    border-radius: 10px;
    padding: 1rem;
    margin-top: .5rem;
}
.btnConfirm {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: .9rem;
    line-height: 1.406rem;
    text-align: center;
    cursor: pointer;
    color: #FFFFFF;
    padding: .7rem;
    margin: .8rem 2.5rem;
    border-radius: 10px;
    border: none;
    background-color: #FF6400;
}
.content-form {
    display: flex;
    flex-direction: column;
    text-align: start;
}
@keyframes anim-modal {
    from{
        transform: translateY(100vh);
    }
    to{
        transform: translateY(0);
    }
}
</style>