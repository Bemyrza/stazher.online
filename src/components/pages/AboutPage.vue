<template>
    <main class="container">
        <h1 class="title">Экосистема для взаимодействия работодателей и молодых специалистов через КЕЙС-МЕТОД</h1>
        <p class="description">
            Привлекайте студентов из лучших вузов, проверяйте их навыки в реальных задачах и находите мотивированных сотрудников.
        </p>
        <img :src="interaction" alt="Взаимодействие" class="image">
    </main>
</template>

<script>
import interaction from "../../assets/media/img/Взаимодействие.png";

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
}

.title {
    font-size: 4.5rem;
    line-height: 100%;
    width: 900px;
    margin-bottom: 10px;
}

.description {
    font-size: 18px;
    max-width: 600px;
    margin-bottom: 20px;
}

.image {
    max-width: 100%;
    height: auto;
}
</style>
