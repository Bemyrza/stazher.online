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
            <div class="form-container">
                <InputForm />
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
.form-container {
    max-width: 700px;
    height: 600px;
    padding: 28px;
    background: #1E1E1E;
    border-radius: 30px;
    margin-bottom: 50px;
    
}

.container {
    position: relative;
    width: 100%;

    height: auto;

    max-width: 100%;
    display: flex;  
    align-items: center;
    justify-content: center;
    padding: 25px;
}

.main-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: white;

}

.back-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: black;
}

.background {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-size: cover;
    background-position: center;
    height: 700px;
}

.title {
    color: #fff;
}

.description {
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    line-height: 120%;
    margin-top: 30px;
}

.SmmDes {
    font-size: 2.5rem;
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
    animation: wave1 1s ease-in-out 0.6s 1 forwards;
}

.wave2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 70%;
    object-fit: cover;
    mix-blend-mode: luminosity;
    animation: wave2 1s ease-in-out 1s 1 forwards;
}



.content {
    position: relative;
    z-index: 10;
    display: flex;
    width: 100%;
    background: transparent;
    min-height: 800px;

    margin-top: 20px;

}

.text-block {
    width: 100%;
    max-width: 50%;
    color: white;
    padding: 16px;
}

.avatar-info-wrapper {
    position: absolute;
    bottom: 200px;
    left: 0;
    width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}

.avatar-floating {
    position: absolute;
    bottom: 90px;
    transform: translateX(-80%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    background-color: white;
    z-index: 2;
}

.info-box {
    transform: translateX(-12%);

    position: relative;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px 30px;
    border-radius: 16px;
    font-size: 14px;
    color: white;
    z-index: 1;
}

.info-description {
    padding: 0px 0 0 10px;
    list-style: disc;
    line-height: 100%;
    font-size: 1rem;
}

.info-title {
    color: #fff;
    font-weight: 700;
    line-height: 100%;
    text-transform: uppercase;
    text-align: start;
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
.info-title{
    margin-top: 3px;
}

@media (max-width: 1224px) {
  .container {
    flex-direction: column;
    align-items: start;
    padding: 20px;
    margin-top: 30px;
  }

  .content {
    flex-direction: column;
    align-items: center;
    text-align: start;
    margin-top: 0;
  }
  .background{
    height: auto;
  }
  .text-block {
    max-width: 100%;
    padding: 0 16px;
    text-align: start;
  }

  .main-title,
  .back-title,
  .description {
    text-align: start;
    margin: 20px auto 0;
  }

  .avatar-info-wrapper {
    position: static;
    max-width: 100%;
    padding-top: 40px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar-floating {
    position: relative;
    bottom: 0;
    transform: none;
    margin: 0 auto;
    width: 150px;
    height: 150px;
  }

  .info-box {
    transform: none;
    margin-top: 20px;
    padding: 16px;
    text-align: center;
  }

  .form-container {
    height: auto;
    margin-top: 40px;
    width: 100%;
    max-width: 600px;
  }
  .wave1,
  .wave2{
    width: 100%;
    height: 50%;
  }
}

@media (max-width: 768px) {
  .main-title,
  .back-title {
    font-size: 1.8rem;
  }

  .description {
    font-size: 1rem;
    line-height: 140%;
    text-align: start;
  }

  .info-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .main-title,
  .back-title {
    font-size: 1.5rem;
  }

  .description {
    font-size: 0.9rem;
  }

  .avatar-floating {
    width: 150px;
    height: 150px;
  }

  .info-box {
    padding: 12px;
  }

  .form-container {
    padding: 20px;
  }
}

</style>
