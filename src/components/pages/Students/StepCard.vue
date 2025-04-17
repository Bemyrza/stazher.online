<template>
    <Container class="steps-container">
        <TitleSection class="steps-title">Как это работает?</TitleSection>

        <div class="steps-grid">
            <div v-for="step in steps" :key="step.id" :class="['step-card', { 'step-card--small': step.id === 4 }]">
                <div class="step-image-wrapper">
                    <div class="step-image-circle">
                        <img :src="step.image" :alt="'Шаг ' + step.id" class="step-image" />

                    </div>
                    <div class="step-badge">
                        {{ step.id.toString().padStart(2, '0') }}
                    </div>
                </div>
                <p class="step-text">
                    {{ step.title }}
                </p>
            </div>
        </div>

        <div class="button-wrapper">
            <button class="register-button">
                Зарегистрироваться
            </button>
        </div>
    </Container>
</template>

<script setup>
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'
import photo1 from "../../../assets/media/img/photo1.png"
import photo2 from "../../../assets/media/img/photo2.png"
import photo3 from "../../../assets/media/img/photo3.png"
import photo4 from "../../../assets/media/img/photo4.png"
import { ref } from 'vue'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const steps = ref([
    {
        id: 1,
        image: photo1,
        title: 'Зарегистрируйся на платформе.',
    },
    {
        id: 2,
        image: photo2,
        title: 'Выбери интересную кейс-задачу.',
    },
    {
        id: 3,
        image: photo3,
        title: 'Реши кейс и отправь решение.',
    },
    {
        id: 4,
        image: photo4,
        title: 'Получи обратную связь и возможность попасть на стажировку или работу.',
    },
])

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  document.querySelectorAll(".step-card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 60%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });
});

</script>

<style scoped>
.steps-container {
    min-height: auto;
    background-color: white;
    padding: 2.5rem 1rem;
    color: black;
    font-family: sans-serif;
    box-sizing: border-box;
}

.steps-title {
    margin-bottom: 2.5rem;
}

.steps-grid {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
}

.step-card {
    width: 100%;
    background-color: #f8f6ff;
    border-radius: 0.75rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    box-sizing: border-box;
    overflow: hidden;
}

.step-image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 1.25rem;
}

.step-image-circle {
    width: 100%;
    max-width: 220px;
    height: auto;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.step-card--small .step-image-circle {
    aspect-ratio: auto;
    max-width: 230px;
    height: auto;
}

.step-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-width: 100%;
    border-radius: 0.5rem;
}

.step-badge {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #8857FF;
    color: white;
    font-size: 1.5rem;
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.step-text {
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 120%;
    word-break: break-word;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
}


.register-button {
    background-color: #8857FF;
    color: white;
    font-weight: 600;
    padding: 20px;
    border-radius: 9999px;
    font-size: 1.2rem;
    width: 100%;
    transition: background-color 0.3s ease;
    border: none;
    cursor: pointer;
}

.register-button:hover {
    background-color: #753bfa;
}

@media (max-width: 1024px) {
    .steps-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .step-text {
        font-size: 1.5rem;
    }

    .step-image-circle {
        max-width: 180px;
        aspect-ratio: 1 / 1;
    }

    .step-card--small .step-image-circle {
        max-width: 200px;
        height: auto;
    }
}

@media (max-width: 768px) {
    .steps-grid {
        grid-template-columns: 1fr;
    }

    .step-image-circle {
        max-width: 150px;
    }

    .step-card--small .step-image-circle {
        max-width: 180px;
    }

    .step-text {
        font-size: 1.2rem;
    }

    .register-button {
        padding: 15px;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .steps-container {
        padding: 2rem 1rem;
    }

    .steps-title {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .steps-grid {
        gap: 1rem;
    }

    .step-card {
        padding: 0.75rem;
    }

    .step-text {
        font-size: 1rem;
        line-height: 1.3;
    }

    .register-button {
        padding: 10px;
        font-size: 0.9rem;
    }
}
</style>
