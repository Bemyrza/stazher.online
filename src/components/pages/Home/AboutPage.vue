<template>
    <Container class="wrap">
        <TitleSection align="center" class="hero_title">
            Экосистема для взаимодействия <br> работодателей и молодых <br> специалистов через КЕЙС-МЕТОД
        </TitleSection>
        <p ref="description" class="description">
            Привлекайте студентов из лучших вузов, проверяйте их навыки в реальных задачах и находите мотивированных
            сотрудников.
        </p>
        
        <div class="image-wrapper">
            <div v-show="!isLoaded" class="skeleton"></div>
            <img 
                v-show="isLoaded"
                ref="image" 
                :src="interaction" 
                alt="Взаимодействие" 
                class="image-wrapper-gsap-1"
                @load="handleImageLoad"
            >
        </div>
    </Container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import interaction from "@/assets/media/img/Взаимодействие.png";
import Container from "@/components/common/Container.vue";
import TitleSection from "@/components/common/TitleSection.vue";

const description = ref(null);
const image = ref(null);
const isLoaded = ref(false);

const handleImageLoad = () => {
    isLoaded.value = true; 
    // setTimeout(()=>{
    //     isLoaded.value = true; 
    // },10000)
    gsap.from('.image-wrapper-gsap-1', { 
        opacity: 0, 
        scale: 0.9, 
        filter: "blur(5px)", 
        duration: 1, 
        ease: "power2.out" 
    });
};

</script>
<style scoped>
.wrap {
    margin-top: 55px;
}
.hero_title{
    position: relative;
    z-index: -1;
}
.description {
    text-align: center;
    font-size: 1.1rem;
    max-width: 480px;
    margin-top: 30px;
    font-family: "Inter", sans-serif;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.image-wrapper {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin: 0 auto;
}

.skeleton {
    width: 100%;
    height: 850px;
    display: block;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite linear;
    border-radius: 12px;
}   


@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 12px;
    transition: opacity 0.3s ease-in-out;
}

@media (max-width:1280px) {
    .skeleton{
        height: 550px;
    }
}
@media (max-width:768px) {
    .skeleton{
        height: 400px;
    }
}
</style>
