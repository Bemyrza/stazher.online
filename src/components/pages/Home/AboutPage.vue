<template>
    <Container class="wrap">
        <TitleSection align="center">
            Экосистема для взаимодействия <br> работодателей и молодых <br> специалистов через КЕЙС-МЕТОД
        </TitleSection>
        <p class="description">
            Привлекайте студентов из лучших вузов, проверяйте их навыки в реальных задачах и находите мотивированных
            сотрудников.
        </p>
        <div class="image-wrapper">
            <img :src="interaction" alt="Взаимодействие" class="image">
        </div>
    </Container>
</template>

<script setup lang="ts">
import interaction from "@/assets/media/img/Взаимодействие.png";
import Container from "@/components/common/Container.vue";
import TitleSection from "@/components/common/TitleSection.vue";
</script>

<style scoped>
.wrap{
    margin-top: 55px;
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
}

.image {
    width: 100%;
    height: auto;
    display: block;
}

@media (max-width: 768px) {
    .title{
        font-size: 2rem;
    }
    
}
</style>
