<script setup>
import CardA from './CardA.vue';
import Line from './Line.vue';

</script>

<template>
    <div class="footer-container">
        <div class="footer-content">
            <CardA/>
            <!-- <CardA/> -->
        </div>
        <Line/>
        <div class="container-sobre">
            <div class="content-sobre">
                <div class="local-content">
                    <div class="contacto-local">
                        <img src="/src/assets/cacto_logo.svg" alt="">
                    </div>
                    <div class="contacto-local">
                        <h2> CACTO ALAMENDA </h2>
                        <H3> [endereço] Lorem ipsum dolar sit <br> amet, consectetur </H3>
                    </div>
                    <div class="contacto-local">
                        <h2> CACTO 13 DE JULHO </h2>
                        <H3> [endereço] Lorem ipsum dolar sit <br> amet, consectetur </H3>
                    </div>
                    <Line/>
                    <div class="contacto-local">
                        <h2> CACTO 13 DE JULHO </h2>
                        <H3> [endereço] Lorem ipsum dolar sit <br> amet, consectetur </H3>
                    </div>
                    <Line/>
                </div>
                <div class="contacto-content">
                    <h1>CONTATO</h1>
                    <div class="list-footer-contacto">
                        <div class="itens-footer">
                            <div class="contacto-name">
                                <div class="background"></div>
                            </div>
                            <div class="item-list">
                                <h3> Nome e nome </h3>
                                <h2> João Silva </h2>
                            </div>
                            <div class="item-list">
                                <img src="/src/assets/Next slide.svg" alt="">
                            </div>
                        </div>
                        <Line/>
                        <div class="itens-footer">
                            <div class="contacto-fone">
                                <img src="/src/assets/fone.svg" alt="">
                            </div>
                            <div class="item-list">
                                <h3> Telefone </h3>
                                <h2> (79) XXXXX-XXXX </h2>
                            </div>
                        </div>
                        <Line/>
                        <div class="itens-footer">
                            <div class="contacto-emai">
                                <img src="/src/assets/emai.svg" alt="">
                            </div>
                            <div class="item-list">
                                <h3> Email: </h3>
                                <h2> email@gmail.com </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer-copy">
                <p>© 2024 Todos os direitos reservados </p>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.footer-container {
    margin-top: 4rem;
}
.contacto-local {
    line-height: 1.4rem;
    gap: 1.4rem;
    margin-bottom: .4rem;
    margin-top: .6rem;
}
.contacto-local h2 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1rem;
    opacity: 50%;
    color: #FFFFFF;
}
.contacto-local h3 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1rem;
    color: #F1FAEE;
}
.contacto-local img {
    width: 126.6px;
    height: 36.64px;
    margin-top: 1rem;
}
.container-sobre {
    width: 89rem;
    margin-top: 2rem;
}
.content-sobre {
    display: flex;
    justify-content: center;
    gap: 12.5rem;
}

.contacto-local {
    display: flex;
    flex-direction: column;
}
.contacto-content {
    display: flex;
    flex-direction: column;
}

.contacto-content h1 { 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 2.2rem;
    color: #FFFFFF;
}

.itens-footer {
    display: flex;
    align-items: center;
    margin: 1.5rem 4rem 1rem 0;
    gap: 2rem;
}
.itens-footer h3 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.3rem;
    color: #FFFFFF;
    opacity: 50%;
}
.itens-footer h2 {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.3rem;
    color: #F1FAEE;
}
.itens-footer img {
    opacity: 50%;
}

.footer-copy {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 1rem 0;
    gap: 2rem;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.3rem;
    color: #F1FAEE;
    opacity: 50%;
}

.background {
    width: 4.063rem;
    height: 4.063rem;
    border-radius: 50%;
    background-color: #D9D9D9;
}
.footer-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 4rem 0 4rem 0;
}

</style>