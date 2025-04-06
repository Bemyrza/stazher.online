<template>
    <Container>
        <TitleSection align="center">Наши достижения <br> и партнеры</TitleSection>
        <p class="description">
            Компании размещают кейсы — реальные задачи из бизнеса.
            Студенты решают кейсы и отправляют решения работодателям.
            Работодатели оценивают решения, выбирают лучших кандидатов
            и приглашают на стажировки или работу.
        </p>
        <div class="cards cards-gsap-7">
            <div class="card card-gsap-7">
                <span class="number">> 500</span>
                <h3>Количество студентов решающих кейсы</h3>
                <p>
                    На нашей платформе зарегистрировано более 500 студентов, активно решающих кейс-задачи и развивающих свои профессиональные навыки, составляющих себе сильное портфолио и выбирающих действительно 
                    <br>
                    <a>
                        ИНТЕРЕСНОЕ МЕСТО РАБОТЫ
                    </a>
                </p>
            </div>
            <div class="card card-gsap-7">
                <span class="number">+10</span>
                <h3>Университеты-партнеры, участвующие в кейс-чемпионатах.</h3>
                <p>
                    В рамках наших кейс-чемпионатов участвуют более 10 университетов-партнеров, среди которых такие вузы, как РЭУ, МГУ, ВАВТ, ГУУ, РАНХиГС  и другие ведущие учебные заведения, интегрирующие кейс-метод в учебный процесс.
                </p>
            </div>
            <div class="card card-gsap-7">
                <span class="number">> 15</span>
                <h3>Компании, уже размещающие свои кейсы у нас на платформе.</h3>
                <p>
                    Мы сотрудничаем с компаниями любого профиля и размера, которые регулярно размещают свои кейсы на платформе. Среди них такие известные бренды, как Sberbank, X5 Retail Group, L'Oréal, Siemens и другие, предоставляющие студентам уникальные бизнес-задачи.
                </p>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
import Container from '@/components/common/Container.vue';
import TitleSection from '@/components/common/TitleSection.vue';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from(".card-gsap-7", {
    opacity: 0,
    y: 0,
    filter: "blur(10px)", 
    duration: 1,
    ease: "power3.out",
    stagger: 0.3, 
    scrollTrigger: {
      trigger: ".cards-gsap-7",
      start: "top 70%",
      end: "bottom top",
      toggleActions: "play none none none"
    }
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');


.description {
    text-align: center;
    font-size: 1rem;
    color: #555;
    line-height: 100%;
    font-weight: 500;
    max-width: 550px;
    margin: 0 auto 40px;
    font-family: "Inter", sans-serif;
    margin-top: 20px;
}

.cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
}

.card {
    background: #F3EEFF;
    padding: 20px;
    border-radius: 20px;
    width: calc(33.33% - 20px);
    text-align: center;
    min-height: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}



.number {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 5rem;
    color: #8857FF;
    position: absolute;
    top: 10px;
    left: 20px;
}

h3 {
    font-size: 2rem;
    font-weight: 600;
    margin: 85px 0 20px;
    line-height: 1.2;
}

p {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    max-width: 100%;
    font-size: 1rem;
    color: #555;
    line-height: 120%;
    margin-top: 30px;
    a{
        color: #5864F5;
    }
}

@media (max-width: 1024px) {
    .cards {
        justify-content: center;
    }

    .card {
        width: calc(50% - 20px);
        min-height: 350px;
    }

    .title {
        font-size: 38px;
    }

    .description {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    h3{
        font-size: 1.4rem;
        margin: 65px 0 0 ;
    }
    .cards {
        flex-direction: column;
        align-items: center;
    }

    .card {
        width: 100%;
        min-height: 300px;
        padding: 30px;
    }

    .number {
        font-size: 3.5rem;
        top: 15px;
        left: 15px;
    }

    .title {
        font-size: 34px;
    }

    .description {
        font-size: 15px;
    }
}
/* 
@media (max-width: 480px) {
    .title {
        font-size: 28px;
    }

    .description {
        font-size: 14px;
    }

    .card {
        padding: 25px;
    }

    .number {
        font-size: 3rem;
        top: 10px;
        left: 10px;
    }

    h3 {
        font-size: 1.3rem;
    }

    p {
        font-size: 0.95rem;
    }
} */
</style>
