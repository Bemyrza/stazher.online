<template>
    <Container class="platform-container">
        <div class="text-content">
            <TitleSection class="title">Стажер.online — платформа, где таланты встречаются с бизнесом</TitleSection>
            <p class="description">
                Современное образование не всегда соответствует требованиям рынка: выпускникам не хватает
                практических навыков, а работодателям — удобного инструмента для отбора стажеров. Стажер.online решает
                эту проблему с помощью кейс-метода.
            </p>
        </div>

        <di v class="cards-and-form">
            <div class="info-cards">
                <div class="info-card">
                    <div class="mainCircle">
                        <div class="circle">01</div>
                        <div class="circles"></div>
                    </div>
                    <p class="topTitle">
                        Для студентов — возможность применять знания на практике, решая реальные задачи бизнеса,
                        прокачать навыки и получить работу мечты.
                    </p>
                </div>
                <div class="info-card">
                    <div class="mainCircle">
                        <div class="circle">02</div>
                        <div class="circles"></div>
                    </div>
                    <p class="topTitle">
                        Для работодателей — эффективный способ оценить кандидатов в деле,
                        находить мотивированных стажеров и выращивать будущих специалистов.
                    </p>
                </div>
            </div>

            <div class="form-container">
                <h2 class="form-title">Заполнить форму для связи</h2>
                <form class="form">
                    <input type="text" placeholder="Ваше ФИО" class="form-input" />
                    <input type="tel" placeholder="Ваш номер телефона" class="form-input" />
                    <input type="email" placeholder="Ваш email" class="form-input" />
                    <CTAbutton class="form-button">Организовать кейс-чемпионат</CTAbutton>
                </form>
            </div>
        </di>
    </Container>
</template>

<script setup>

import Container from '@/components/common/Container.vue';
import TitleSection from '@/components/common/TitleSection.vue';
import CTAbutton from '@/components/common/CTAbutton.vue';


</script>

<style scoped>
.platform-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 32px;
}

.text-content {
    display: flex;
    max-width: 100%;
    text-align: start;
}


.description {
    width: 500px;
    font-size: 1rem;
    color: #555;
    margin-top: 12px;
    margin-left: 1%;
    line-height: 120%;
}

.cards-and-form {
    display: flex;
    gap: 24px;
    width: 100%;
    margin-top: 60px;
}

.info-cards {
    display: flex;
    gap: 16px;
    flex: 1;
}

.info-card {
    background-color: #F3EEFF;
    padding: 14px;
    border-radius: 16px;
    flex: 1;
    text-align: center;
}

.mainCircle{
    display: flex;
}
.circles{
    width: 90px;
    height: 90px;
    background-color: #8857FF;
    color: #00000099;
    font-size: 18px;
    border-radius: 50%;
    margin: 0 auto 12px 0 10px;
}
.circle {
    color: black;
    font-size: 35px;
    border-radius: 50%;
    margin: 0 auto 12px 10px;
}

.form-container {
    background-color: #F3EEFF;
    padding: 24px;
    border-radius: 16px;
    flex: 1;
    text-align: center;
}

.form-title {
    font-weight: 500px;
    line-height: 100%;
    width: 300px;
    font-size: 32px;
    margin-bottom: 76px;
    color: #000;
    text-align: start;
}

.topTitle {
    text-align: start;
    margin-top: 55%;
    font-size: 20px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.form-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 16px;
    background-color: #F3EEFF;
}

.form-button {
    background-color: #8857FF;
    color: white;
    font-size: 16px;
    border-radius: 25px;
    margin-top: 25px;
    padding: 14px;
    width: 100%;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.form-button:hover {
    background-color: #6a42cc;
}

@media (max-width: 768px) {
    .cards-and-form {
        flex-direction: column;
        gap: 16px;
    }

    .info-cards {
        flex-direction: column;
    }
}
</style>