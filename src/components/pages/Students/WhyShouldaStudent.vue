<template>
    <Container class="case-section">
        <div class="left-content">
            <TitleSection>Зачем студенту<br />решать кейсы?</TitleSection>
            <div class="trophies">
                <img :src="Cups" alt="Трофей 1" class="trophy" />
            </div>
        </div>

        <div class="right-content">
            <p class="description">
                Проблемы: отсутствие практического опыта, непонимание <br> карьерного пути, сложность поиска
                работы без опыта.<br />
                Как «Стажер.онлайн» помогает в этом: реальный опыт, <br> обратная связь от работодателей, стажировки и
                <br>
                предложения о работе.
            </p>
            <div class="image-wrapper">
                <div class="bg-container">
                    <img :src="backround" alt="Фон" class="background-img" />
                    <img :src="Dude" alt="Парень с оффером" class="dude" />
                </div>
                <img :src="suitcase" alt="Портфель" class="suitcase" />
            </div>

        </div>
    </Container>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'
import Cups from '../../../assets/media/img/cups.png'
import backround from '../../../assets/media/img/backroundCups.png'
import suitcase from '../../../assets/media/img/suitcase.png'
import Dude from '../../../assets/media/img/Dude.png'

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.background-img', {
        opacity: 0,
        scale: 1.05,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.image-wrapper',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none',
        },
    });

    gsap.from('.suitcase', {
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.image-wrapper',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none',
        },
    });

    gsap.from('.description', {
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.image-wrapper',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none',
        },
    });

    gsap.from('.trophy', {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.trophies',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none',
        },
    });
});
</script>


<style scoped>
.case-section {
    display: flex;
    margin-top: 50px;
    gap: 20px;
}

.left-content {
    flex: 1;
    min-width: 300px;
}

.trophies {
    gap: 20px;
}

.trophy {
    width: 550px;
    height: auto;
}

.right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
}

.image-wrapper {
    display: flex;
    margin-left: -40px;
    position: relative;
    width: fit-content;
    margin-bottom: 20px;
}

.background-img {
    width: 100vw;
    max-width: 100%;
    height: 490px;
    display: block;
}

.dude {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -54%);
    width: 100%;
    max-width: 620px;
    z-index: 1;
}

.suitcase {
    position: absolute;
    top: 55px;
    right: 45px;
    width: 166px;
    height: 154px;
    z-index: 2;
}

.description {
    font-weight: 400;
    font-size: 1rem;
    line-height: 120%;
}

@media (max-width: 1200px) {
    .left-content {
        min-width: 250px;
    }

    .trophy {
        width: 450px;
    }

    .background-img {
        height: 420px;
    }

    .dude {
        width: 90%;
        max-width: 500px;
    }

    .suitcase {
        top: 45px;
        right: 30px;
    }
}

@media (max-width: 900px) {
    .case-section {
        flex-direction: column;
        gap: 30px;
    }

    .left-content {


        min-width: 250px;
    }

    .trophy {
        display: flex;
        justify-content: center;
        width: 450px;
        margin: 0 auto;
    }

    .background-img {
        height: 420px;
    }

    .dude {
        width: 90%;
        max-width: 500px;
    }

    .suitcase {
        top: 45px;
        right: 30px;
    }
}

@media (max-width: 768px) {
    .case-section {
        flex-direction: column;
        gap: 30px;
    }

    .left-content,
    .right-content {
        width: 100%;
    }

    .trophy {
        width: 80%;
    }

    .background-img {
        height: 300px;
    }

    .dude {
        max-width: 400px;
    }

    .suitcase {

        width: 140px;
        height: 130px;
        top: 40px;
        right: 20px;
    }

    .description {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .left-content {
        min-width: 200px;
    }

    .trophy {
        width: 350px;
    }

    .background-img {
        height: 250px;
    }

    .dude {
        max-width: 300px;
    }

    .suitcase {
        width: 120px;
        height: 110px;
        top: 35px;
        right: 15px;
    }

    .description {
        font-size: 0.8rem;
    }
}
</style>
