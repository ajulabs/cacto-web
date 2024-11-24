<script setup>
import BtnSejaMemberTwo from './BtnSejaMemberTwo.vue';
import ChekList from './Chek-List.vue';
import TitleText from './TitleText.vue';


</script>

<template>
    <section class="hero-section">
        <div class="hero-content">
            <div class="text-container">
                <div class="text-content txt-content-rigth">
                    <TitleText
                        title="Transforme-se em um ambiente que transforma"
                        description="Na Cacto, você encontra mais do que uma academia: descobre um estilo de vida. Um espaço exclusivo onde o bem-estar físico e mental caminham juntos, e cada treino é uma oportunidade de conexão, superação e crescimento. Com programas personalizados e um ambiente sofisticado, oferecemos uma experiência fitness única enquanto você alcança seus objetivos com eficiência e prazer. Aqui, você é mais que aluno. Você é essencial."
                    />
                    <span class="Btn">
                        <BtnSejaMemberTwo/>
                    </span>
                </div>
            </div>
            <div class="media-container skipping-rope">
                <video src="/src/assets/video1.mp4" autoplay muted loop playsinline></video>
            </div>
        </div>


        <div class="hero-stats">
            <h2>Na Cacto, cada número reflete histórias de transformação e pertencimento</h2>
            <div class="stats-counter">
                <div class="stat-item">
                    <h1>
                        <span class="stat-symbol">+</span>
                        <span class="stat-number">1.000</span>
                    </h1>
                    <h3>
                        <span class="stat-label"> Alunos transformados com treinos personalizados </span>
                    </h3>
                </div>
                <div class="stat-item">
                    <h1>
                        <span class="stat-symbol">+</span>
                        <span class="stat-number">100</span>
                    </h1>
                    <h3> Modalidades Exclusivas </h3>
                </div>
                <div class="stat-item">
                    <h1>
                        <span class="stat-symbol">+</span>
                        <span class="stat-number">68</span>
                        <span class="stat-symbol">%</span>
                    </h1>
                    <h3> de acompanhamento com profissionais certificados </h3>
                </div>
            </div>
        </div>

        <div class="section-checkList">
            <div class="section-check-title">
                <span class="feature-title">
                    <h1>TENHA OS MELHORES RESULTADO COM O MÉTODO E.S.T.E</h1>
                </span>
                <span class="feature-description">
                    <p>Criado por Felipe Garcez, o Método E.S.T.E transforma o seu treino em uma experiência de eficiência e personalização. Na Cacto, acreditamos que cada pessoa é única - e seu treino também deve ser. Nossa abordagem analisa todo o seu ciclo de treinos com precisão, ajustando cada etapa ao seu perfil e ao seu ritmo. Dividido em 6 momentos estratégicos, o Método E.S.T.E garante que você treine sempre na intensidade ideal para alcançar resultados consistentes, respeitando os limites do seu corpo e maximizando os ganhos – seja qual for o seu objetivo.</p>
                </span>
            </div>
            <div class="checkList">
                <ChekList
                title="TENHA OS MELHORES RESULTADO COM O MÉTODO E.S.T.E"
                description="Criado por Felipe Garcez, o Método E.S.T.E transforma o seu treino em uma experiência de eficiência e personalização. Na Cacto, acreditamos que cada pessoa é única - e seu treino também deve ser. Nossa abordagem analisa todo o seu ciclo de treinos com precisão, ajustando cada etapa ao seu perfil e ao seu ritmo. Dividido em 6 momentos estratégicos, o Método E.S.T.E garante que você treine sempre na intensidade ideal para alcançar resultados consistentes, respeitando os limites do seu corpo e maximizando os ganhos – seja qual for o seu objetivo."
                />
            </div>
            <span class="feature-title">
                <h1>com o método E.S.T.E, você não apenas treina - você se transforma</h1>
            </span>
        </div>

        <div class="feature-description p2">
            <p>Fale agora com um especialista e descubra como o Método Exclusivo criado por Felipe Garcez, após anos de estudo, pode levar você ao próximo nível.</p>
        </div>


        <div class="hero-content">
            <div class="media-container">
                <video src="/src/assets/video2.mp4" autoplay muted loop playsinline></video>
            </div>
            <div class="text-container">
                <div class="text-content txt-content-left">
                    <TitleText
                        title="Por que o método E.S.T.E é único?"
                        description="O Método E.S.T.E combina ciência, personalização e prazer em treinar. Com um planejamento exclusivo e etapas ajustadas ao seu perfil, ele garante que cada movimento esteja alinhado às suas metas e limites. É mais do que um treino – é uma experiência única que respeita o seu corpo e maximiza seus resultados."
                    />
                </div>
            </div>
        </div>

        <div class="hero-content">
            <div class="text-container">
                <div class="text-content txt-content-rigth">
                    <TitleText
                        title="Sim! Somos diferentes"
                        description="Porque entendemos suas necessidades e oferecemos um método baseado em ciência e resultados. Desde o acolhimento personalizado até o monitoramento constante, cada detalhe é planejado para garantir que você se sinta parte de algo maior e alcance o melhor de si mesmo, sem abrir mão de conforto e segurança.
                        Venha experimentar a diferença de treinar na Cacto e sinta como é transformar sua rotina com apoio e dedicação em cada movimento."
                    />
                </div>
            </div>
            <div class="media-container">
                <video src="/src/assets/video3.mp4" autoplay muted loop playsinline></video>
            </div>
        </div>

        <div class="Hero-element-five">
            <div>
                <h2>O que você só vai encontrar aqui!</h2>
            </div>
            <div class="five-txt-top">
                <span class="iconIMG">
                    <img src="/src/assets/Line.svg" alt="">
                </span>
                <span class="atendi">
                    <p>Exclusividade e Cuidado: atendimento individualizado que valoriza seus objetivos e respeita a sua evolução.
                        Transformação Real: treinos que envolvem e motivam, com resultados que vão além do corpo, mudando sua mente e hábitos.
                        Comunidade Cacto: um refúgio onde cada aluno se sente valorizado e parte de algo único.
                    </p>
                </span>
            </div>
            <span class="videoFHD">
                <video src="/src/assets/video4.mp4" autoplay muted loop playsinline></video>
            </span>
        </div>

        <div class="Hero-element-six">
            <img class="background-image" src="/src/assets/image-5.png" alt="">
            <div class="content-six-txt">
                <h1>EXPERIÊNCIA CACTO</h1>
                <p>
                    Na Cacto, criamos um ambiente que combina exclusividade e transformação. Aqui, você não apenas treina: você se conecta com um espaço acolhedor, repleto de apoio e motivação.
                </p>
            </div>
            <span class="span-BTN-ELSIX">
                <BtnSejaMemberTwo/>
            </span>
        </div>
    </section>
</template>

<style scoped> 

/* Hero Section */
.hero-section {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}
.hero-content {
    width: 100%;
    height: auto;
    max-width: 1440px;
    margin-top: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.hero-stats {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    max-width: 1440px;
    margin-top: 8rem;
    gap: 1.25rem;
    color: #FFFFFF;
    font-family: 'Poppins';
    padding: 0 0 60px 0;
    border-color: #3A3B3E;
}
.media-container {
    width: 100%;
    max-width: 1440px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.media-container video {
    width: 100%;
    height: 100px;
    max-width: 720px;
    object-fit: cover;
}
.text-container {
    width: 100%;
    max-width: 631px;
}
.text-content h1 {
    position: relative;
    font-size: 3rem;
    font-weight: 600;
    font-family: 'Sofia Sans', sans-serif;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    line-height: 3rem;
}
.text-content h1::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: #ff6600;
}
.text-content h2 {
    width: 39.438rem;
    height: 21.688rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    line-height: 1.8rem;
    text-align: left;
    color: #FFFFFF;
}
.txt-content-rigth {
    padding: 0 2rem;
}
.hero-stats h2 {
    width: 100%;
    max-width: 1170px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.8rem;
}
.stat-item  h3{
    margin-top: .5rem;
    width: 100%;
    max-width: 242px;

}
.stats-counter {
    width: 100%;
    max-width: 1376px;
    /* height: 108px; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 4rem 0;
}
.stats-counter h1 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 6.8rem;
}
.stats-counter h3 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 2rem;
    color: #A0A3AA;
    line-height: 3.2rem;
}
.stat-symbol {
    color: #e65500;
}

/* Features Section */
.section-checkList {
    width: 100%;
    max-width: 1206px;
    margin: 0 auto;
}
.feature-description p {
    width: 100%;
    max-width: 1440px;
    word-wrap: break-word;
    margin-top: 1.5rem;
    line-height: 2.9rem;
    font-family: 'Poppins', serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: #A0A3AA;
}
.checkList {
    margin: 2rem 0;
}
.feature-title h1 {
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 4.294rem;
    line-height: 5.465rem;
}
.p2 {
    width: 100%;
    max-width: 1350px;
    margin: 2rem 0;
}
.p2 p {
    width: 40%;
}
.hero-feature {
    width: 100%;
    max-width: 1376px;
}
.feature-content {
    position: relative;
    width: 100%;
    max-width: 600.57px;
}
.feature-four-container-B {
    margin-top: 3rem;
}
.media-container {
    margin: 0 2rem 2rem 0;
}
.media-container video {
    width: 100%;
    height: auto;
    object-fit: cover;
}

/* Hero 5 */
.Hero-element-five {
    width: 100%;
    max-width: 1440px;
    margin-top: 10rem;
}
.Hero-element-five h2 {
    font-family: 'Sofia Sans';
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 4rem;
    color: #FFFFFF;
}
.Hero-element-five P {
    display: flex;
    align-items: center;
    color: #FFFFFF;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.6rem;
    padding: 0 .6rem;
}
.five-txt-top {
    width: 100%;
    display: flex;
}
.atendi {
    width: 100%;
    max-width: 1277px;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.five-txt-top p {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 3.6rem;
}
.iconIMG img{
    width: 10px;
    margin: 2rem;
}
.videoFHD {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
.videoFHD video {
    width: 100%;
    height: auto;
    object-fit: cover;
}

/* Hero 6 */
.Hero-element-six{
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
    position: relative;
    margin-top: 2rem;
}
.Hero-element-six img {
    width: 100%;
    max-width: 1376px;
    object-fit: cover;
}
.content-six-txt {
    position: absolute;
    width: 100%;
    max-width: 720px;
    height: 649px;
    top: 6.125rem;
    left: 2rem;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0.4rem;
    padding: 80px;
    margin-left: 1rem;
    margin-top: 1rem;
    z-index: 2;
    text-align: start;
}
.content-six-txt h1 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 4.5rem;
    line-height: 5.4rem;
    color: #1c1c1e;
}
.content-six-txt p {
    margin-top: 1.5rem;
    font-family: 'Mulish';
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 4.8rem;
    color: #394B44;
}
.span-BTN-ELSIX {
    position: absolute;
    width: 100%;
    max-width: 290px;
    height: 100%;
    max-height: 87px;
    top: 55rem;
    bottom: 10rem;
    left: 11rem;
    z-index: 3;
}

/* media queries*/
@media (max-width: 1440px) {
    
}
@media (max-width: 1100px) {
    .hero-section {
        max-width: 1100px;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    .bloco-two {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
    .hero-content {
        flex-wrap: wrap;
        gap: 8rem;
        justify-content: center;
        align-items: center;
    }
    .Hero-element-five {
        max-width: 1100px;
        padding: 0 1rem;
    }
    .hero-stats{
        padding: 2rem 8rem;
    }
    .feature-group-one {
        max-width: 1100px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 2rem;
    }
    .feature-group-two {
        max-width: 1100px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 2rem;
    }
    .Hero-element-six {
        max-width: 1100px;
        padding: 0 1rem;
    }
    .content-six-txt {
        max-width: 610px;
        left: 6rem;
        height: 520px;
        padding: 4rem;
    }
    .content-six-txt h1 {
        padding-top: 2rem;
        font-size: 4rem;
    }
    .content-six-txt p {
        font-size: 2.2rem;
        line-height: 4rem;
    }
    .span-BTN-ELSIX{
        max-width: 230px;
        height: 50px;
        top: 40rem;
        left: 11rem;
    }

}

@media (max-width: 375px) {
    .hero-section {
        padding: 0 .2rem;
    }
    .hero-content {
        max-width: 375px;
        margin: 0 auto;
        gap: 0;
    }
    .hero-stats {
        max-width: 375px;
        gap: 0;
        padding: 0 .5rem;
        margin-top: 2rem;
    }
    .hero-stats h2 {
        font-size: 1.2rem;
        line-height: 1.8rem;
    }
    .stats-counter {
        max-width: 344px;
        height: 61px;
        margin: 0;
    }
    .stat-item {
        max-width: 68px;
    }
    .stat-item h1 {
        font-size: 1.6rem;
        line-height: 1.6rem;
    }
    .stat-item h3 {
        font-size: 1rem;
        line-height: 1.6rem;
    }
    .feature-element-one,
    .feature-element-two {
        padding: 0 1rem;
    }
    .feature-group-one {
        max-width: 344px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .feature-group-two {
        max-width: 344px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 2rem auto;
    }
    .feature-group-two .feature-content{
        height: 310px;
    }
    .content-six-txt {
        max-width: 200px;
        height: 200px;
        top: 0;
        left: 1rem;
        padding: 1rem;
    }
    .content-six-txt h1 {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.3rem;
    }
    .content-six-txt p{
        font-size: .9rem;
        font-weight: 600;
        line-height: 1.2rem;
    }
    .span-BTN-ELSIX {
        top: 13rem;
        left: 2rem;
    }
    .Hero-element-five {
        max-width: 375px;
        margin: 0 auto;
        margin-top: 2rem;
        padding: 0 1rem;
    }
    .Hero-element-five h2 {
        padding: 0 .2rem;
        font-size: 2rem;
        line-height: .9rem;
    }
    .five-txt-top {
        max-width: 290px;
    }
    .five-txt-top p {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
    }
    .gradient-overlay {
        width: 100%;
        top: 90px;
        height: 170px;
        border-radius: 10px;
    }
    .feature-card {
        max-width: 140px;
        height: 50px;
        left: 215px;
        bottom: 183px;
        margin-right: 1rem;
    }
    .feature-card h2 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 700;
        padding: 0 .8rem;
    }
    .feature-card img {
        width: 100%;
        max-width: 30.23px;
    }
    .gradient-overlay-B {
        height: 170px;
        border-radius: 10px;
    }
    .image-block img {
        max-width: 295px;
    }
    .image-block-B img {
        max-width: 295px;
        top: 10px;
    }
    .feature-card-B {
        bottom: 183px;
        left: -50px;
        padding: 0 1.5rem;
    }
    .feature-card-B img {
        width: 100%;
        max-width: 100px;
    }
    .media-container {
        margin: 0 auto;
        padding: 0 1rem;
    }
}

@media (max-width: 320px ) {
    .image-block img, .image-block-B img {
        max-width: 275px;
    }
    .gradient-overlay {
        height: 150px;
    }
    .feature-card {
        max-width: 120px;
        height: 40px;
        left: 182px;
        bottom: 163px;
    }
    .feature-group-one {
        max-width: 320px;
        padding: 2rem 0;
    }
    .feature-card {
        padding: 0 .3rem 0 .5rem;
    }
    .feature-card h2 {
        padding: .5rem .2rem ;
        font-size: .9rem;
    }
    .feature-card-B {
        max-width: 90px;
        left: -32px;
        bottom: 115px;
    }
    .feature-card-B img {
        width: 100%;
    }
    .Hero-element-five h2 {
        margin-top: 1rem;
        line-height: 1rem;
        font-size: 1.8rem;
    }
    .content-six-txt {
        max-width: 150px;
        height: 170px;
        padding: 0 1rem 1rem 1rem;
    }
    .content-six-txt h1 {
        padding-top: 1.2rem;
        line-height: 1rem;
    }
    .content-six-txt p {
        margin-top: 1.2rem;
        font-weight: 400;
        line-height: 1rem;
    }
    .span-BTN-ELSIX {
        top: 11.5rem;
        left: 2rem;
    }
}
</style>