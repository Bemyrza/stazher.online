<template>
    <div class="container">
        <h2 class="title">Наши направления работы</h2>
        <div class="top-section">
            <div v-for="(item, index) in topDirections" :key="index" class="card">
                <span class="card-badge">{{ item.id }}</span>
                <p class="card-text">{{ item.text }}</p>
            </div>
        </div>
        <div class="bottom-section">
            <div v-for="(item, index) in bottomDirections" :key="index" class="card">
                <span class="card-badge">{{ item.id }}</span>
                <p class="card-text">{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            topDirections: [
                { id: '01', text: 'Публикация кейсов в боте и на платформе.' },
                { id: '02', text: 'Мы создаем структурированные и визуально оформленные кейс-задачи для компаний.' }
            ],
            bottomDirections: [
                { id: '03', text: 'Проведение кейс-чемпионатов.' },
                { id: '04', text: 'Организуем онлайн и офлайн мероприятия.' },
                { id: '05', text: 'Организуем онлайн и офлайн мероприятия, помогающие выявить перспективных кандидатов.' },
            ]
        };
    }
};
</script>

<style scoped>
.container {
    padding: 1.5rem;
    width: 100%;
    max-width: 1500px;
    min-height: 100vh;
    margin-top: 50px;
}

.title {
    font-size: 2.5rem;
    font-family: "Inter", sans-serif;
    margin-bottom: 24px;
}

.top-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.bottom-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 16px;
}

.card {
    padding: 16px;
    height: 300px;
    background-color: #ede9fe;
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
}

.card-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: #8857FF;
    color: #fff;
    padding: 13px 16px;
    font-size: 1rem;
    border-radius: 9999px;
}

.card-text {
    max-width: 100%;
    font-size: 1.5rem;
    color: #374151;
    margin-top: 30%;
    word-wrap: break-word; 
    overflow-wrap: break-word;
    white-space: normal;
}
</style>