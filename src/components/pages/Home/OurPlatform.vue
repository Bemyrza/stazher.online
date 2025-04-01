<template>
    <Container>
        <div>
            <div class="text-font">
                <TitleSection class="font-bold">Как работает наша платформа?</TitleSection>
                <p class="text-description ">
                    Компании размещают кейсы — реальные задачи из бизнеса.
                    Студенты решают кейсы и отправляют решения работодателям.
                    Работодатели оценивают решения, выбирают лучших кандидатов
                    и приглашают на стажировки или работу.
                </p>
            </div>
            <div class="mt-6 space-y-3">
                <div v-for="(item, index) in items" :key="index" class="accordion-item">
                    <div class="accordion-header flex items-start p-6 cursor-pointer" @click="toggle(index)">
                        <span class="accordion-number">{{ item.number }}</span>
                        <div class="accordion-content flex-1">
                            <h3 class="accordion-title">{{ item.title }}</h3>
                            <p v-if="activeIndex === index" class="accordion-description">{{ item.description }}</p>
                        </div>
                        <button class="accordion-toggle" :class="{ 'active-icon': activeIndex === index }">
                            <div class="icon-circle">
                                <img :src="plus" alt="Toggle" class="icon" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <button class="register-btn">Зарегистрироваться</button>
        </div>
    </Container>
</template>
<script setup>
import { ref } from 'vue';
import plus from "@/assets/media/icons/plus.svg";
import TitleSection from "@/components/common/TitleSection.vue";
import Container from '@/components/common/Container.vue';

const activeIndex = ref(null);

const items = ref([
    { number: "01", title: "Публикация кейсов в боте и на платформе.", description: "Мы публикуем уникальные кейс-задачи в наших ботах и на платформе..." },
    { number: "02", title: "Разработка кейсов на заказ", description: "Создаем кастомные кейсы под запросы бизнеса." },
    { number: "03", title: "Проведение кейс-чемпионатов", description: "Организуем соревнования среди участников для поиска талантов." },
    { number: "04", title: "Сотрудничество с университетами", description: "Работаем с вузами, чтобы студенты могли решать реальные задачи." }
]);

const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>


.text-font {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.font-bold {
    font-size: 2.5rem;
    width: 100%;
    max-width: 400px;
}

.text-description {
    color: #4B5563;
    margin-top: 0.5rem;
    max-width: 42rem;
    text-align: center;
}

.accordion-item {
    background-color: #F3EEFF;
    border-radius: 0.75rem;
    transition: all 0.3s ease-in-out;
    padding: 0.25rem;
    position: relative;
}

.accordion-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    position: relative;
}

.accordion-number {
    font-size: 2rem;
    color: #888;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
}

.accordion-content {
    flex: 1;
    margin-left: 3rem;
}

.accordion-title {
    font-size: 1.5rem;
    color: #333;
    width: 100%;
    max-width: 350px;
}

.accordion-description {
    font-size: 1rem;
    color: #666;
    margin-top: 1.5rem;
    width: 100%;
    max-width: 450px;
}

.accordion-toggle {
    border: none;
    background: transparent;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.icon-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #00000033;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease-in-out;
}

.accordion-toggle.active-icon .icon-circle {
    background-color: #8857FF;
}

.accordion-toggle .icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease-in-out;
}

.accordion-toggle.active-icon .icon {
    transform: rotate(45deg);
}

.register-btn {
    background-color: #8857FF;
    color: white;
    border-radius: 1.875rem;
    padding: 0.875rem;
    text-align: center;
    width: 100%;
    font-size: 1.125rem;
    margin-top: 1.25rem;
}

@media (max-width: 768px) {
    .accordion-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .accordion-title,
    .accordion-description {
        margin-left: 0;
    }

    .text-font {
        text-align: center;
    }

    .accordion-number {
        font-size: 1.5rem;
    }

    .register-btn {
        font-size: 1rem;
    }
}
</style>