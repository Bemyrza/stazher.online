<template>
    <div class="interaction-section">
        <img class="bg-left" :src="back2" alt="Background Left" />
        <img class="bg-right" :src="back1" alt="Background Right" />
        <Container>
            <TitleSection class="Title-Company">Форматы взаимодействия</TitleSection>
            <div class="content-wrapper">
                <div class="info-container">
                    <div class="character-wrapper">
                        <img class="character-overlay" :src="dude2" alt="Character" />
                    </div>

                    <div class="info-list">
                        <div class="blockInfo" v-for="(item, index) in formatsBlocks" :key="index">
                            <h2 class="count">{{ (index + 1).toString().padStart(2, '0') }}</h2>
                            <div class="descriptions">
                                <h4 class="theme">{{ item.title }}</h4>
                                <p class="text">{{ item.text }}</p>
                            </div>
                        </div>
                        <hr class="lastInfo" />
                    </div>
                </div>
            </div>


        </Container>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'
import back1 from '../../../assets/media/img/back1.png'
import back2 from '../../../assets/media/img/back2.png'
import dude2 from '../../../assets/media/img/dude2.png'

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const blocks = document.querySelectorAll('.blockInfo');
    blocks.forEach((block) => {
        gsap.from(block.querySelector('.count'), {
            opacity: 0,
            x: -50,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: block,
                start: 'top 60%',
                toggleActions: 'play none none none',
            }
        });

        gsap.from(block.querySelector('.descriptions'), {
            opacity: 0,
            y: 30,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: block,
                start: 'top 60%',
                toggleActions: 'play none none none',
            }
        });
    });

    const character = document.querySelector('.character-overlay');
    if (character) {
        gsap.from(character, {
            opacity: 0,
            x: -100,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: character,
                start: 'top 65%',
                toggleActions: 'play none none none',
            }
        });
    }
});


const formatsBlocks = [
    {
        title: "Форматы взаимодействия",
        text: `Возможность публиковать кейсы и получать решения от студентов.\nКак работает процесс (создание кейса → публикация → получение решений → отбор кандидатов).`,
    },
    {
        title: "Решение отдельных кейсов.",
        text: `Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют её в фирменном стиле компании.\nПримеры уже разработанных кейсов.`,
    },
    {
        title: "Участие в кейс-чемпионатах.",
        text: `Организация соревнований среди студентов для поиска талантов.\nВозможность для компаний провести мастер-классы, лекции и познакомиться с будущими специалистами.`,
    },
    {
        title: "Возможность попасть в команды компаний для работы над реальными проектами.",
        text: `Организация соревнований среди студентов для поиска талантов.\nВозможность для компаний провести мастер-классы, лекции и познакомиться с будущими специалистами.`,
    },
];
</script>

<style scoped>
.interaction-section {
    position: relative;
    overflow: hidden;
    margin-bottom: 50px;
}

.bg-left,
.bg-right {
    position: absolute;
    top: 0;
    height: 100%;
    z-index: -1;
    object-fit: contain;
}

.bg-left {
    left: 0;
}

.bg-right {
    right: 0;
}

.content-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.character-overlay {
    width: 100%;
    max-width: 650px;

    max-height: 580px;
    position: absolute;
    bottom: 0;
    right: 48%;
    z-index: 2;
    pointer-events: none;
}

.info-list {
    position: relative;
    z-index: 1;
}



.informationBlocks {
    margin-top: 50px;
}

.blockInfo {
    display: flex;
    padding: 20px 0;
    width: 100%;
    border-top: 1px solid #00000099;
}

.lastInfo {
    border-top: 1px solid #00000099;
}

.count {
    width: 52px;
    font-weight: 400;
    font-size: 3rem;
    line-height: 80%;
    color: #00000099;
}

.descriptions {
    margin-left: 50%;
    width: 100%;
}

.theme {
    font-weight: 600;
    font-size: 2rem;
    color: #000;
    line-height: 100%;
}

.text {
    font-size: 14px;
    font-weight: 400;
    color: #00000099;
    margin-top: 10px;
}

.Title-Company {
    text-align: start;
    margin-bottom: 50px;
}



@media (max-width: 1224px) {

    .character-overlay {
        position: static;
        width: 100%;
        max-width: 500px;
        right: 30%;

        margin: 0 auto 40px;
    }


}

@media (max-width: 1024px) {
    .content-wrapper {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .character-overlay {
        position: static;
        width: 100%;
        max-width: 400px;
        margin: 0 auto 40px;
    }

    .info-list {
        width: 100%;
    }

    .bg-left,
    .bg-right {
        display: none;
    }

    .descriptions {
        margin-left: 0;
    }

    .blockInfo {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }

    .count {
        font-size: 2.5rem;
        margin-bottom: 15px;
    }
}

@media (max-width: 768px) {
    .character-overlay {
        max-width: 320px;
    }

    .theme {
        font-size: 1.5rem;
    }

    .text {
        font-size: 13px;
    }

    .count {
        font-size: 2rem;
    }

    .Title-Company {
        font-size: 1.8rem;
        margin-bottom: 30px;
    }

    .blockInfo {
        padding: 15px 0;
    }
}

@media (max-width: 480px) {
    .character-overlay {
        max-width: 280px;
    }

    .theme {
        font-size: 1.2rem;
    }

    .text {
        font-size: 12px;
    }

    .bg-left,
    .bg-right {
        display: none;
    }

    .count {
        font-size: 1.8rem;
    }

    .descriptions {
        max-width: 100%;
    }

    .blockInfo {
        flex-direction: column;
        gap: 10px;
    }

    .Title-Company {
        font-size: 1.5rem;
    }
}
</style>
