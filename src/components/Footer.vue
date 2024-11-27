<script setup>
import CardA from './CardA.vue';
import Line from './Line.vue';

</script>

<template>
    <div class="footer-container">
        <div class="footer-content">
            <CardA/>
        </div>
        <Line/>
        <div class="container-sobre">
            <div class="content-sobre">

                <div class="local-content">
                    <div class="contacto-local">
                        <img src="/src/assets/cacto_logo.svg" alt="">
                    </div>
                    <div class="contacto-local">
                        <h2> CACTO FAROLÂNDIA </h2>
                        <h3> R. Alferes José Pedro de Brito <br> Nº 1170 </h3>
                    </div>
                    <div class="contacto-local">
                        <h2> CACTO FAROL </h2>
                        <h3> R. Leovegildo Martins Fontes <br> Nº 205 </h3>
                    </div>
                    <Line/>
                    <div class="contacto-local">
                        <h2> ATEM TRAINING CENTER </h2>
                        <h3> Av. Gonçalo Rolemberg Leite <br> Nº 1465 </h3>
                    </div>
                    <Line/>
                </div>

                <div class="contacto-content">
                    <h1>CONTATO</h1>
                    <div class="list-footer-contacto">
                        <div class="itens-list-footer">
                            <div class="contacto-name">
                                <div class="background"></div>
                            </div>
                            <div class="item-list">
                                <h3> Nome e nome </h3>
                                <h2> Filipe Cacto </h2>
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
                                <h2> (79) 99888-2399 </h2>
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
    height: 850px;
    margin-top: 4rem;
}
.contacto-local {
    width: 100%;
    max-width: 255px;
    line-height: 1.4rem;
    gap: 1.4rem;
    margin-bottom: .4rem;
    margin-top: .6rem;
}
.contacto-local h2 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    opacity: 50%;
    color: #FFFFFF;
}
.contacto-local h3 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #F1FAEE;
}
.contacto-local img {
    width: 100%;
    max-width: 126.6px;
    height: 36.64px;
    margin-top: 1rem;
}
.container-sobre {
    width: 100%;
    max-width: 1440px;
    height: 313.64px;
    margin: 0 auto;
    margin-top: 2rem;
}
.content-sobre {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.local-content {
    width: 100%;
    max-width: 255px;
}
.contacto-local {
    display: flex;
    flex-direction: column;
}
.contacto-content {
    width: 100%;
    max-width: 255px;
}
.contacto-content h1 { 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: #FFFFFF;
}
.itens-footer {
    width: 100%;
    max-width: 255px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1.5rem 0;
    gap: 2rem;
}
.itens-list-footer {
    width: 100%;
    max-width: 255px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 2rem 0;
}
.itens-footer h3, .itens-list-footer h3 {
    width: 105px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #FFFFFF;
    opacity: 50%;
}
.itens-footer h2, .itens-list-footer h2 {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #F1FAEE;
}
.itens-footer img {
    opacity: 50%;
}
.footer-copy {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 8rem 0;
    gap: 2rem;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #F1FAEE;
    opacity: 50%;
}
.footer-copy p {
    margin-bottom: 2rem;
}
.background {
    width: 65px;
    max-width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #D9D9D9;
}
.footer-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 4rem 0 8rem 0;
}

@media (max-width: 1072px) {
    .footer-content {
        padding: 0;
    }
}

@media (max-width: 768px) {
    .footer-container {
        padding: 0;
        margin: 0 auto;
    }
    .footer-content {
        padding: 0 .2rem;
    }
}


@media (max-width: 600px) {
    .footer-container {
        padding: 0 1rem;
    }
    .content-sobre {
        flex-direction: column;
        justify-content: space-evenly;
        height: 666px;
        margin: 0 auto;
        padding: 1rem 1rem;
    }
}


</style>