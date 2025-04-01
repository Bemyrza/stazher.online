<template>
    <Container >
        <div class="hero-container">
            <div class="hero-content">
                <div class="text-block">
                    <div class="title-wrapper">
                        <!-- <h1 class="title">Стажер.online — платформа, где таланты встречаются с бизнесом</h1> -->
                         <TitleSection align="left">
                            Стажер.online — платформа, <br> где таланты встречаются с бизнесом
                        </TitleSection>
                    </div>
                    <p class="description">
                        Современное образование не всегда соответствует требованиям рынка: выпускникам не хватает
                        практических навыков, а работодателям — удобного инструмента для отбора стажеров.
                        Стажер.online решает эту проблему с помощью кейс-метода.
                    </p>
                </div>
            </div>
            <div class="important-block">
                <div class="cards">
                    <div class="card" v-for="(card, index) in cards" :key="index">
                        <span class="card-number">{{ card.number }}</span>
                        <div class="avatar-container">
                            <img :src="card.avatar" :alt="card.alt" class="avatar">
                        </div>
                        <p class="card-text">{{ card.text }}</p>
                    </div>
                </div>
                <div class="image-block">
                    <img :src="backgroundPhoto" alt="Фоновое изображение" class="hero-image">
                </div>
            </div>
            <CTAbutton class="register-button">Зарегистрироваться</CTAbutton>
        </div>
    </Container>
</template>

<script setup>
import { ref } from "vue";
import Container from "@/components/common/Container.vue";
import TitleSection from "@/components/common/TitleSection.vue";

import studentAvatar from "@/components/icons/students.svg";
import employerAvatar from "@/components/icons/employer.svg";
import backgroundPhoto from "@/assets/media/img/Rectangle.png";
import CTAbutton from "@/components/common/CTAbutton.vue";

const cards = ref([
    {
        number: "01",
        avatar: studentAvatar,
        alt: "Студент",
        text: "Для студентов — возможность применять знания на практике, решая реальные задачи бизнеса, прокачать навыки и получить работу мечты."
    },
    {
        number: "02",
        avatar: employerAvatar,
        alt: "Работодатель",
        text: "Для работодателей — эффективный способ оценить кандидатов в деле, находить мотивированных стажеров и выращивать будущих специалистов."
    }
]);
</script>

<style scoped>
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1500px;
    padding: 10px;
    margin-left: 15px;
}

.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.text-block {
    width: 100%;
    text-align: left;
    display: flex;
}

/* .title {
    width: 600px;
    font-size: 2.5rem;
    font-family: "Inter", sans-serif;
    line-height: 120%;
} */

.description {
    font-size: 1.1rem;
    font-family: "Inter", sans-serif;
    color: #666;
    line-height: 140%;
    width: 500px;
    margin-left: 19%;
}

.important-block {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(280px, 1fr));
    gap: 20px;
    max-width: 850px;
}

.card {
    background: #F3EEFF;
    padding: 37px;
    border-radius: 12px;
    text-align: center;
    position: relative;
}

.card-number {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 3rem;
    color: #000000;
}

.avatar-container {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 80px;
    height: 80px;
    background-color: #8857FF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatar {
    width: 70px;
    height: 70px;
}

.card-text {
    font-size: 1.2rem;
    color: #333;
    margin-top: 50%;
    text-align: start;
}

.image-block {
    flex: 1;
}

.hero-image {
    height: 420px;
}

.register-button {
    display: block;
    width: 100%;
    padding: 15px;
    margin: 20px auto;
    font-size: 1.2rem;
    font-family: "Inter", sans-serif;
    color: white;
    background: #7b61ff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
}

.register-button:hover {
    background: #634dff;
}

@media (max-width: 1000px) {
    .hero-content {
        flex-direction: column;
        text-align: center;
    }

    .text-block {
        text-align: center;
        align-items: center;
        width: 100%;
    }

    .title {
        width: 90%;
        font-size: 2rem;
        text-align: center;
    }

    .description {
        width: 90%;
        font-size: 1rem;
        margin-left: 0;
        text-align: center;
    }

    .cards {
        grid-template-columns: 1fr;
    }

    .card-text {
        font-size: 1.1rem;
        margin-top: 55%;
    }

    .important-block {
        flex-direction: column;
    }

    .image-block {
        order: 1;
        width: 100%;
        text-align: center;
    }

    .hero-image {
        width: 100%;
        height: auto;
    }
}
@media (max-width: 768px) {
    .hero-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .text-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
    }

    .title {
        font-size: 1.5rem;
        width: 90%;
    }

    .description {
        font-size: 0.9rem;
        width: 90%;
        margin-top: 10px; /* Добавляет отступ между title и description */
    }
}


</style>