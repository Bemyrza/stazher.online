<template>
    <main class="container">
        <h1 class="title">
            Экосистема для взаимодействия работодателей и молодых специалистов через КЕЙС-МЕТОД
        </h1>
        <p class="description">
            Привлекайте студентов из лучших вузов, проверяйте их навыки в реальных задачах и находите мотивированных
            сотрудников.
        </p>
        <div class="image-wrapper">
            <img :src="interaction" alt="Взаимодействие" class="image">
        </div>
    </main>
</template>

<script>
import interaction from "@/assets/media/img/Взаимодействие.png";

export default {
    data() {
        return {
            interaction
        };
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.title {
    font-size: 4rem;
    line-height: 100%;
    width: 95%;
    font-family: "Inter", sans-serif;

    margin-bottom: 30px;
}

.description {
    font-size: 1.1rem;
    max-width: 480px;
    margin-top: 30px;
    font-family: "Inter", sans-serif;

    margin-bottom: 50px;
}

.image-wrapper {
    width: 100vw;
    overflow: hidden;
}

.image {
    width: 100%;
    height: auto;
    display: block;
}
</style>
