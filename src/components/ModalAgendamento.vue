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

                        <button class="btnConfirm" @click="confirm"> Confirmar </button>
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