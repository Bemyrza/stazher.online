<template>
    <Container class="mainContainer">


        <TitleSection class="bestTitle">Как начать <br> сотрудничество?</TitleSection>

        <div class="startFlex">
            <div class="countStart" ref="firstStep">
                <div class="firstStart">01</div>
                <p class="startDis">
                    Зарегистрируйтесь на платформе и разместите кейс бесплатно уже сейчас!
                </p>
            </div>
            <div class="columbCoop">
                <div class="columbStart" ref="secondStep">
                    <div class="firstStart">02</div>
                    <p class="startDis">Запросить организацию кейс-чемпионата.</p>
                </div>
                <div class="columbStart" ref="thirdStep">
                    <div class="firstStart">03</div>
                    <p class="startDis">Связаться с нами для разработки кейс-задачи.</p>
                </div>
            </div>

            <div class="startImageWrapper" ref="startImage">
                <img class="startImageTop" src="../../../assets/media/img/Платформа.jpg" alt="image" />
                <button class="registerBtn">Регистрируйся</button>
            </div>

        </div>
    </Container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'

const firstStep = ref(null)
const secondStep = ref(null)
const thirdStep = ref(null)
const startImage = ref(null)

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)



    gsap.from(firstStep.value, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: firstStep.value,
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    })

    gsap.from(secondStep.value, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: secondStep.value,
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    })


    gsap.from(thirdStep.value, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: thirdStep.value,
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    })

    gsap.from(startImage.value, {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: startImage.value,
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    })
})
</script>

<style scoped>
.startImageWrapper {
    width: 100%;
    height: auto;
    border-radius: 20px;
    overflow: hidden;
}

.bestTitle {
    margin-bottom: 32px;
}


.startFlex {
    margin-top: 48px;
}

.startImageTop {
    width: 100%;
    height: 100%;
    display: block;
}

.registerBtn {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-10%, -29%);
    padding: 15px 40px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    background-color: #8857ff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.registerBtn:hover {
    background-color: #6f42c1;
}

.startFlex {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    height: auto;
    width: 100%;
    gap: 20px;
}

.countStart {
    width: 50%;
    height: auto;
    border-radius: 20px;
    background-color: #f3eeff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.firstStart {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #8857ff;
    font-size: 24px;
    font-weight: 400;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.startDis {
    font-weight: 400;
    font-size: 30px;
    line-height: 120%;
    color: #000000;
    margin: 40px 0 0 0;
}

.columbStart {
    height: auto;
    border-radius: 20px;
    background-color: #f3eeff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.columbCoop {
    width: 45%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
}




.startImage {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 1250px) {
    .registerBtn {
        font-size: 18px;
        padding: 12px 32px;
        transform: translate(-10%, -20%);
    }

    .startFlex {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        width: 100%;
    }

    .countStart {
        width: 100%;
        height: 200px;
    }

    .columbCoop {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .columbStart {
        width: 48%;
        height: 200px;
    }

    .startImage {
        border-radius: 20px;
        width: 100%;
        object-fit: cover;
    }

    .startDis {
        font-size: 24px;
    }

    .firstStart {
        font-size: 20px;
        width: 40px;
        height: 40px;
    }
}


@media (max-width: 768px) {
    .registerBtn {
        font-size: 16px;
        padding: 10px 28px;
        transform: translate(-10%, -20%);
    }

    .startFlex {
        flex-direction: column;
        height: auto;
    }

    .countStart,
    .columbStart {
        width: 100%;
        margin-bottom: 20px;
    }

    .columbCoop {
        width: 100%;
        display: block;
    }

    .startDis {
        font-size: 24px;
    }

    .firstStart {
        font-size: 20px;
        width: 40px;
        height: 40px;
    }

    .startImage {
        width: 100%;
        height: 300px;
    }
}

@media (max-width: 480px) {
    .registerBtn {
        font-size: 14px;
        padding: 8px 24px;
        transform: translate(-10%, -10%);
    }

    .startDis {
        font-size: 20px;
    }

    .firstStart {
        font-size: 18px;
        width: 35px;
        height: 35px;
    }

    .startImage {
        height: 250px;
    }
}
</style>
