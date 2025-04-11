<template>
    <section class="form-section">
        <Container>
        <div class="form-layout">
            <div class="form-info" data-aos="fade-up">
                <TitleSection class="form-title">Выбирайте только самых <br> талантливых</TitleSection>
                <p class="form-description">
                    Предоставляя кейс-задачи для студентов, вы <br> выращиваете специалистов для вашей компании ещё
                    <br>на этапе
                    обучения в университете. Кейсы <br> интегрируются в образовательный процесс вузов
                </p>
            </div>

            <div class="form-block-b" data-aos="fade-up" data-aos-delay="200">
                <InputForm />
            </div>
        </div>
    </Container>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import InputForm from '@/components/common/InputForm.vue'
import TitleSection from '@/components/common/TitleSection.vue'
import Container from '@/components/common/Container.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
    AOS.init({
        duration: 800,
        once: true,
    });
});

const form = ref({
    orgName: '',
    inn: '',
    fio: '',
    phone: '',
    email: '',
    topic: 'Консультация',
    agree: false
})

const submitForm = () => {
    console.log("Форма отправлена:", form.value)
}
</script>

<style scoped>
.form-section {
    width: 100%;
    min-height: 450px;
    background-color: #1E1E1E;
    padding: 60px 0 10px;
    color: white;
}

.form-layout {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 30px;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }

    @media (max-width: 480px) {
        padding: 16px;
        gap: 30px;
    }
}

.form-block-b {
    background-color: #1E1E1E;
    width: 100%;

    @media (min-width: 900px) {
        max-width: 600px;
    }
}

.input {
    width: 100%;
    padding: 20px;
    border-radius: 38px;
    background-color: #1E1E1E;
    border: 1px solid #FFFFFF66;
    color: white;
    margin-bottom: 8px;
    font-size: 1rem;
}

.form-info {
    max-width: 700px;
    width: 100%;
    text-align: left;

    @media (max-width: 768px) {
        text-align: start;
    }
}

.form-title {
    color: #fff;
    font-size: 3rem;
    font-weight: 600;
    line-height: 110%;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 2.2rem;
        line-height: 120%;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
}

.form-description {
    font-size: 1rem;
    font-weight: 400;
    color: #FFFFFF99;
    line-height: 140%;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
}

[data-aos] {
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
}

[data-aos].aos-animate {
    opacity: 1;
    transform: translateY(0);
}
</style>
