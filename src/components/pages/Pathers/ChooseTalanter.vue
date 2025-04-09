<template>
    <div class="container">
        <div class="background" :style="{ backgroundImage: `url(${backgroundPhoto})` }">
            <img :src="wave1" class="wave1" alt="Wave 1" />
            <img :src="wave2" class="wave2" alt="Wave 2" />
        </div>

        <div class="content">
            <div class="text-block">
                <TitleSection class="title">Выбирайте только самых <h1>талантливых</h1>
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
    margin-top: 40px;
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
</style>
