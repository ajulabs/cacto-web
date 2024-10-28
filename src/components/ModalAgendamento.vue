<script setup>
import { ref, defineEmits} from 'vue';

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
    <Teleport to="body">
        <div v-if="isVisible" class="overlay">
            <div class="content">
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

                        <span class="BTN-container">
                            <button class="btnConfirm" @click="confirm"> Confirmar </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 200;
}
.content {
    width: 100%;
    max-width: 900px;
    height: 100%;
    max-height: 585px;
    display: flex;
    overflow: hidden;
    background-color: #FFFFFF;
    border-radius: 10px;
    animation: .3s anim-modal;
    box-shadow: 0px 4px 18px 0px #00000014;
    margin: 0 auto;
}
.content-img {
    width: 100%;
    height: auto;
    max-width: 320px;
}
.content img {
    width: 100%;
    height: auto;
    max-width: 320px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    object-fit: cover;
}
.list {
    display: flex;
    flex-direction: column;
    padding: 1rem 2.5rem 0 2.5rem;
}
.title {
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title h2 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.5rem;
    color: #1c1c1e;
    padding: 4rem 0 2rem 0;
}
.closeX {
    font-family: 'poppins';
    font-size: 2.4rem;
    border: none;
    background: none;
    color: #1c1c1e;
    cursor: pointer;
    margin-right: 4rem;
}
.listUl {
    color: #FF6400;
}

label {
    color: #1c1c1e;
    font-family: 'Poppins';
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.1rem;
}
input,
select {
    width: 100%;
    max-width: 460px;
    height: 100%;
    max-height: 100px;
    border: solid 1px #e5e5ea;
    border-radius: 10px;
    padding: 2rem;
    margin-top: .5rem;
}
.BTN-container {
    width: 100%;
    max-width: 510px;
    display: flex;
    justify-content: center;
    align-content: center;
}
.btnConfirm {
    width: 100%;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    cursor: pointer;
    color: #FFFFFF;
    padding: 1.7rem;
    margin: 1.5rem 2.5rem;
    border-radius: 10px;
    border: none;
    background-color: #FF6400;
}
.content-form {
    width: 100%;
    max-width: 640px;
    height: 100%;
    max-height: 450px;
    text-align: start;
    padding: 0 2rem;
}

@keyframes anim-modal {
    from{
        transform: translateY(100vh);
    }
    to{
        transform: translateY(0);
    }
}
@media (max-width:910px) {
    .content {
        margin: 0 4rem;
    }
    .input,
    select {
        margin: 1.5rem;
    }
}
</style>