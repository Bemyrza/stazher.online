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

            <div class="form-block">
                <form @submit.prevent="submitForm">
                    <div class="input-block">
                        <input v-model="form.orgName" type="text" placeholder="Название организации" class="input" />
                        <input v-model="form.inn" type="text" placeholder="ИНН" class="input" />
                        <input v-model="form.fio" type="text" placeholder="ФИО" class="input" />
                        <input v-model="form.phone" type="text" placeholder="Номер" class="input" />
                        <input v-model="form.email" type="email" placeholder="Почта" class="input" />
                    </div>
                    <div class="checkbox-form">
                        <div class="checkbox-block">
                            <legend>Тема запроса</legend>
                            <div class="label-grid">
                                <label class="label-text"><input type="radio" v-model="form.topic"
                                        value="Консультация" /> Консультация</label>
                                <label class="label-text"><input type="radio" v-model="form.topic" value="Разработка" />
                                    Разработка кейс-задачи</label>
                                <label class="label-text"><input type="radio" v-model="form.topic" value="Чемпионат" />
                                    Организация кейс-чемпионата</label>
                                <label class="label-text"><input type="radio" v-model="form.topic" value="Другое" />
                                    Другое</label>
                            </div>
                        </div>
                    </div>


                    <label class="checkbox">
                        <input type="checkbox" v-model="form.agree" /> Согласие на обработку данных
                    </label>

                    <CTAbutton type="submit" class="submit-button">Связаться</CTAbutton>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import backgroundPhoto from '@/assets/media/img/object1.png';
import wave1 from '@/assets/media/img/object2.png';
import wave2 from '@/assets/media/img/object3.png';
import ManIcon from '@/assets/media/img/object4.png'
import CTAbutton from '@/components/common/CTAbutton.vue';
import TitleSection from '@/components/common/TitleSection.vue';

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


.form-block {
    width: 100%;
    max-width: 790px;
    height: 792px;
    bottom: 0px;
    background-color: black;
    padding: 28px;
    border-radius: 28px;
    color: white;
}

.input-block {
    margin-top: 15px;
}

.label-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 32px;
    margin-top: 16px;
}

.checkbox-form {
    border-radius: 20px;
    width: 100%;
    height: 185px;
    border: 1px solid #FFFFFF66;
}

.checkbox-block {
    padding: 30px;
}

.checkbox-form legend {
    font-weight: 500;
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 8px;
}

.label-text {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 1.1rem;
    color: #fff;
    line-height: 130%;
}


.input {
    width: 100%;
    padding: 20px;
    border-radius: 38px;
    background-color: #000;
    border: 1px solid #FFFFFF66;
    color: white;
    margin-bottom: 8px;
}

input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    width: 18px;
    height: 18px;
    border: 2px solid white;
    background-color: black;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
}

input[type="radio"]:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
}

.input::placeholder {
    color: #FFFFFF99;
    font-weight: 400;
    font-size: 1.1rem;

}

.checkbox {
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #fff;
}

input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    width: 18px;
    height: 18px;
    border: 2px solid white;
    background-color: black;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    margin-right: 10px;
}

input[type="checkbox"]:checked::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 5px;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.submit-button {
    width: 100%;
    background: #8857FF;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 15px;
    margin-top: 10px;
    color: white;
    cursor: pointer;
}
</style>