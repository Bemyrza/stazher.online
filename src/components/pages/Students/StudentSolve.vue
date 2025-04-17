<template>
    <Container class="container">
        <TitleSection class="title">Зачем студенту решать <br> кейсы?</TitleSection>

        <div class="content">
            <div class="left">
                <div class="card purple-card">
                    <div class="card-number">01</div>
                    <div class="card">
                        <div class="card-content">
                            <div class="card-text">
                                <div class="card-content1">
                                    <h2 class="card-title">Проблемы:</h2>
                                    <p class="card-description">
                                        Отсутствие практического <br> опыта, непонимание <br> карьерного пути, сложность
                                        <br> поиска работы без опыта.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card purple-card">
                    <div class="card-number">02</div>
                    <div class="card">
                        <div class="card-content">
                            <div class="card-text">
                                <div class="card-content">
                                    <h2 class="card-title">Как «Стажер.онлайн» <br> помогает:</h2>
                                    <p class="card-description">
                                        Реальный опыт, обратная связь <br> от работодателей, стажировки <br> и
                                        предложения о
                                        работе.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="right">
                <h2 class="right-title">Как это работает?</h2>
                <ol class="steps">
                    <li class="step">
                        <div class="step-number">01</div>
                        <p class="step-text">Выбери интересную кейс-задачу.</p>
                    </li>
                    <li class="step">
                        <div class="step-number">02</div>
                        <p class="step-text">Реши кейс и отправь решение.</p>
                    </li>
                    <li class="step">
                        <div class="step-number">03</div>
                        <p class="step-text">Получи обратную связь и возможность попасть на стажировку или работу.</p>
                    </li>
                </ol>
            </div>
        </div>
    </Container>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    const cards = document.querySelectorAll('.left .purple-card')
    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                toggleActions: 'play none none none',
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
        })
    })

    const steps = document.querySelectorAll('.right .step')
    steps.forEach((step, index) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 65%',
                toggleActions: 'play none none none',
            },
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
        })
    })

    gsap.from('.right-title', {
        scrollTrigger: {
            trigger: '.right-title',
            start: 'top 60%',
            toggleActions: 'play none none none',
        },
        y: -20,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
    })
})

</script>


<style scoped>
.container {
    padding: 24px;
    background-color: white;
}

.title {
    font-size: 3rem;
    margin-bottom: 54px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

@media (min-width: 768px) {
    .content {
        flex-direction: row;
    }
}

.left,
.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.card {
    width: 100%;
    height: auto;
    min-height: 200px;
    position: relative;
    border-radius: 16px;
    padding: 24px;
    color: white;
    box-sizing: border-box;
    overflow-wrap: break-word;
    word-break: break-word;
}


.purple-card {
    min-height: 275px;
    background-color: #8857FF;
}

.card-number {
    color: #ffffffc0;
    position: absolute;
    top: 0px;
    left: 16px;
    font-size: 8rem;
    opacity: 0.2;
    font-weight: 300;
}

.card-text {
    display: flex;
    justify-content: flex-end;
    text-align: start;
}

.card-content1 {
    margin-right: 40px;
    max-width: 100%;
}

.card-title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 8px;
    word-wrap: break-word;
}

.card-description {
    color: #fff;
    font-size: 1rem;
    opacity: 0.9;
    line-height: 1.4;
    word-wrap: break-word;
}

.card-description,
.card-title,
.step-text {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
}

.right {
    width: 100%;
    height: auto;
    background-color: #f3edff;
    border-radius: 16px;
    padding: 24px;
}

.right-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 16px;
}

.steps {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.step {
    align-items: flex-start;
    gap: 12px;
}

.step-number {
    width: 48px;
    height: 48px;
    background-color: #8857FF;
    color: white;
    font-weight: 400;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.step-text {
    color: #00000099;
    font-size: 2rem;
    font-weight: 500;
    line-height: 100%;
    margin-top: 15px;
    flex: 1;
}

@media (max-width: 1124px) {
    .content {

        flex-direction: column;
    }

    .left {

        order: 1;
    }

    .right {
        order: 2;
        height: auto;
    }

    .card {
        height: auto;
    }

    .card-number {
        font-size: 6rem;
    }

    .card-title {
        font-size: 1.25rem;
    }

    .card-description {
        font-size: 0.95rem;
    }

    .right-title {
        font-size: 2.2rem;
    }

    .step-text {
        font-size: 1.8rem;
    }
}


@media (max-width: 768px) {
    .content {
        flex-direction: column;
    }



    .card-content1 {
        margin-right: 0;
    }

    .card-title {
        font-size: 1.2rem;
    }

    .card-description {
        font-size: 0.95rem;
    }

    .right-title {
        font-size: 2rem;
    }

    .step-text {
        font-size: 1.3rem;
    }

    .right {
        height: auto;
        padding: 16px;
    }

}

@media (max-width: 480px) {
    .card {
        padding: 16px;
    }
    .title{
        font-size: 1.9rem;
    }


    .card-number {
        font-size: 4rem;
    }

    .card-title {
        font-size: 1rem;
    }

    .card-description {
        font-size: 0.85rem;
    }

    .step-number {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
    }

    .step-text {
        font-size: 1rem;
    }

    .card-text {
        flex-direction: column;
        align-items: flex-start;
    }

    .card-number {
        position: relative;
        top: 0;
        margin-bottom: 8px;
        font-size: 3rem;
        opacity: 0.4;
    }

    .card-content1 {
        margin-right: 0;
        margin-left: 0;
    }

}
</style>