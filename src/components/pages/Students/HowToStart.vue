<template>
    <Container class="container">
        <TitleSection class="title">Как начать?</TitleSection>
        <div class="steps">
            <div class="stepstap">
                <div class="step">
                    <div class="step-number">01</div>
                    <img :src="photo1" alt="Step 1" class="step-image" />
                    <p class="step-text">Зарегистрироваться на платформе.</p>
                </div>
                <div class="step">
                    <div class="step-number">02</div>
                    <img :src="photo2" alt="Step 2" class="step-image" />
                    <p class="step-text">Выбрать интересный кейс.</p>
                </div>
            </div>
            <div class="step purple-step">
                <div class="step-number white-bg">03</div>
                <div class="rocket-wrapper">
                    <img :src="raketa" alt="Step 3" class="rocket-img" />
                </div>
                <p class="step-text white-text">Принять участие в кейс- <br>чемпионате.</p>
            </div>
        </div>

        <div class="button-wrapper">
            <button class="register-button">Зарегистрироваться</button>
        </div>
    </Container>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Container from "@/components/common/Container.vue"
import TitleSection from "@/components/common/TitleSection.vue"
import photo1 from "../../../assets/media/img/photo1.png"
import photo2 from "../../../assets/media/img/photo2.png"
import raketa from "../../../assets/media/img/raceta.png"

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.from(".step", {
        scrollTrigger: {
            trigger: ".steps",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
    })

    gsap.from(".rocket-img", {
        scrollTrigger: {
            trigger: ".purple-step",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        transform: "translate(30px, 20px) scale(0.5)",
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
    })
})
</script>

<style scoped>
.title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 32px;
}

.steps {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    justify-content: space-between;
}

.stepstap {
    width: 100%;
    max-width: 750px;
    gap: 20px;
    display: flex;
}

.step {
    width: 100%;
    min-height: 500px;
    background-color: #F3EEFF;
    border-radius: 20px;
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.purple-step {
    background-color: #8857FF;
    color: white;
    flex: 1.5;
    border-radius: 20px;
    padding: 24px;
    min-height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.rocket-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.rocket-img {
    width: 100%;
    height: 510px;
    margin-left: 30%;
    object-fit: contain;
}

.step-number {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8857FF;
    color: white;
    font-weight: 400;
    font-size: 1.3rem;
    width: 48px;
    height: 48px;
    border-radius: 9999px;
}

.purple-step .step-number {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: white;
    color: #7e22ce;
    font-weight: 400;
    font-size: 1.3rem;
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.white-bg {
    background-color: white;
    color: #7e22ce;
}

.step-image {
    margin: 0 auto;
    width: 100%;
    max-width: 260px;
    height: 270px;
    border-radius: 16px;
    margin-bottom: 52px;
}

.step-text {
    font-size: 2rem;
    font-weight: 500;
    line-height: 120%;
    text-align: left;
}

.white-text {
    color: white;
}

.button-wrapper {
    margin-top: 32px;
    display: flex;
    justify-content: center;
}

.register-button {
    background-color: #8857FF;
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 20px 32px;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s;
}

.register-button:hover {
    background-color: #793fff;
}

@media (max-width: 1024px) {
    .steps {
        flex-direction: column;
        gap: 32px;
    }

    .stepstap {
        gap: 32px;
        max-width: 100%;
    }

    .step,
    .purple-step {
        min-height: auto;
    }

    .step-text {
        font-size: 2rem;
    }

    .purple-step .step-text {
        font-size: 1.3rem;
    }

    .rocket-wrapper {
        width: 100%;
        margin: 0 auto 16px auto;
        text-align: center;
    }

    .rocket-img {
        max-width: 100%;
        height: auto;
    }
}

@media (max-width: 768px) {
    .steps {
        flex-direction: column;
        gap: 32px;
    }

    .stepstap {
        gap: 32px;
        max-width: 100%;
        flex-direction: column;
    }

    .step,
    .purple-step {
        min-height: auto;
    }

    .step-text {
        font-size: 1.3rem;
    }

    .purple-step .step-text {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .step-text {
        font-size: 1.1rem;
    }

    .purple-step .step-text {
        font-size: 1.1rem;
    }
}
</style>
