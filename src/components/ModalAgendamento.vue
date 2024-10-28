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
        <div class="box">
            <div class="img-box">
                <img src="/src/assets/Modal.png" alt="">
            </div>

            <div class="form-box">
                    <div class="title">
                        <h2> Agende sua experiência </h2>
                        <button class="closeX" @click="closeModal"> X </button>
                    </div>

                    <form class="content-form">
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
                    </form>

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
    overflow: hidden;
}
.box {
    width: 100%;
    max-width: 920px;
    display: flex;
    margin: 0 auto;
}
.img-box {
    width: 60%;
    display: flex;
    align-items: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
}
.img-box img {
    width: 100%;
    max-width: 1440px;
    object-fit: cover;
}
.form-box {
    width: 100%;
    padding: 20px;
    background: #FFFFFF;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.title {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.title h2 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 4.5rem;
    color: #1c1c1e;
    padding: 1rem 0 2rem 0;
}
.closeX {
    align-self: baseline;
    font-family: 'poppins';
    font-size: 2.4rem;
    border: none;
    background: none;
    color: #1c1c1e;
    cursor: pointer;
}
.list {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 1rem 2.5rem 0 2.5rem;
}
.list label {
    color: #1c1c1e;
    font-family: 'Poppins';
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.1rem;
}
.listUl {
    color: #FF6400;
}
input,
select {
    width: 100%;
    max-width: 1400px;
    border: solid 1px #e5e5ea;
    border-radius: 5px;
    padding: 1rem;
    outline: none;
    margin-top: .5rem;
}
.BTN-container {
    display: flex;
    margin: 0 2.5rem;
}
.btnConfirm {
    width: 100%;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    cursor: pointer;
    color: #FFFFFF;
    padding: 1.7rem;
    margin-top: 2rem;
    border-radius: 10px;
    border: none;
    background-color: #FF6400;
}

@keyframes anim-modal {
    from{
        transform: translateY(100vh);
    }
    to{
        transform: translateY(0);
    }
}
@media (max-width:930px) {
    .img-box {
        display: none;
    }
    .box {
        width: 700px;
    }
    .form-box {
        width: 100%;
        border-radius: 20px;
    }
}
@media (max-width: 740px) {
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem;
        height: auto;
    }
}
@media (max-width: 425px){
    .form-box {
        height: 620px;
    }
    .title h2, .closeX {
        font-size: 4rem;
        margin-top: .2rem;
    }
    .list input,
    .list select {
        font-size: 2rem;
        padding: 2rem;
    }
    .list label {
        font-size: 2.5rem;
        line-height: 4.5rem;
    }
    .btnConfirm {
        padding: 2rem;
        font-weight: 600;
        font-size: 2.5rem;
    }
}
@media (max-width: 375px){
    .form-box {
        height: 650px;
    }
    .title h2, .closeX {
        font-size: 6rem;
        margin-top: .4rem;
        margin-bottom: 4rem;
    }
    .list input,
    .list select {
        font-size: 4rem;
        padding: 2.5rem;
    }
    .list label {
        font-size: 3.5rem;
        line-height: 4.5rem;
    }
    .btnConfirm {
        padding: 6rem;
        font-weight: 600;
        font-size: 4.5rem;
    }
}
</style>