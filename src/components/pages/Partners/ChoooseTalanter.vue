<template>
    <div class="container">
        <div class="background" :style="{ backgroundImage: `url(${backgroundPhoto})` }">
            <img :src="wave1" class="wave1" alt="Wave 1" />
            <img :src="wave2" class="wave2" alt="Wave 2" />
        </div>

        <div class="content">
            <div class="text-block">
                <TitleSection align="start">
                    <template class="originTitle" #default>
                        <h1 class="main-title">Выбирайте только самых <p class="SmmDes">талантливых</p>
                        </h1>
                    </template>
                </TitleSection>

                <p class="description">
                    Предоставляя кейс-задачи для студентов, вы <br> взращиваете специалистов для вашей компании еще <br>
                    на этапе
                    обучения в университете. Кейсы <br> интегрируются в образовательный процесс вузов
                </p>
                <div class="avatar-info-wrapper">
                    <img :src="ManIcon" alt="Мужик" class="avatar-floating" />
                    <div class="info-box shifted-box">
                        <ul class="info-description">
                            <li class="info-title">Сократили время на поиск стажера в 2 раза.</li>
                            <li class="info-title">Снизили стоимость привлечения стажера на 60%.</li>
                            <li class="info-title">Охват студентов стал выше 17,5 раз.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <InputForm />

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import backgroundPhoto from '@/assets/media/img/object1.png';
import wave1 from '@/assets/media/img/object2.png';
import wave2 from '@/assets/media/img/object3.png';
import ManIcon from '@/assets/media/img/object4.png'
import TitleSection from '@/components/common/TitleSection.vue';
import InputForm from '@/components/common/InputForm.vue';

const form = ref({
    orgName: '',
    inn: '',
    fio: '',
    phone: '',
    email: '',
    topic: 'Консультация',
    agree: false,
});

const submitForm = () => {
    console.log("Форма отправлена:", form.value);
};
</script>
<style scoped>
.container {
    position: relative;
    width: 100%;
    min-height: 922px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    padding: 25px;
}

.main-title {
    font-size: 3rem;
    font-weight: 600;
    color: white;
    margin-top: 20px;
}

.back-title {
    font-size: 3rem;
    font-weight: 600;
    color: black;
}

.background {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-size: cover;
    background-position: center;
}

.title {
    color: #fff;
}

.description {
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    line-height: 120%;
    margin-top: 60px;
}

.SmmDes {
    font-size: 3rem;
    font-weight: 600;
    color: black;
}

.wave1 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70%;
    height: 70%;
    object-fit: cover;
    mix-blend-mode: luminosity;
}

.wave2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 70%;
    object-fit: cover;
    mix-blend-mode: luminosity;
}

.content {
    position: relative;
    z-index: 10;
    display: flex;
    width: 100%;
    background: transparent;
    min-height: 800px;
}

.text-block {
    width: 100%;
    max-width: 50%;
    color: white;
    padding: 16px;
}

.avatar-info-wrapper {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 600px;
    height: auto;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}

.avatar-floating {
    position: absolute;
    bottom: 90px;
    transform: translateX(-40%);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    background-color: white;
    z-index: 2;
}

.info-box {
    position: relative;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 24px 20px;
    border-radius: 16px;
    font-size: 14px;
    color: white;
    z-index: 1;
}

.info-description {
    padding: 20px 0 0 10px;
    list-style: disc;
    line-height: 100%;
}

.info-title {
    color: #fff;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 100%;
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.content {
    animation: fadeInUp 1s ease-out forwards;
}

.main-title,
.back-title {
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: 0.3s;
    opacity: 0;
}

.description {
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: 0.5s;
    opacity: 0;
}

.avatar-info-wrapper {
    animation: fadeInUp 1.2s ease-out forwards;
    animation-delay: 0.7s;
    opacity: 0;
}

@media (max-width: 1224px) {
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
    }

    .text-block {
        max-width: 100%;
        width: 100%;
        text-align: center;
        margin: 0 auto;
        padding: 0 16px;
    }

    .main-title,
    .back-title,
    .description {
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
    }

    .avatar-info-wrapper {
        position: static;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 40px;
        max-width: 100%;
        margin: 0 auto;
    }

    .avatar-floating {
        position: static;
        transform: none;
        margin-bottom: 20px;
        margin: 0 auto;
    }

    .info-box {
        text-align: center;
        margin: 0 auto;
    }

    .form-block {
        margin-top: 40px;
    }

    :deep(.input-form) {
        max-width: 600px;
        margin: 0 auto;
    }
}


@media (max-width: 768px) {
    .description {

        text-align: center;
        font-size: 0.95rem;
        line-height: 140%;
    }

    .main-title,
    .back-title {
        text-align: center;
        font-size: 2rem;
    }
}

@media (max-width: 480px) {

    .main-title,
    .back-title {
        font-size: 1.5rem;
    }

    .avatar-info-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
    }

    .description {
        font-size: 0.9rem;
    }
}
</style>
