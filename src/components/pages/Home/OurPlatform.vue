<template>
    <Container>
        <div>
            <div class="text-font">
                <TitleSection class="font-bold">Как работает наша платформа?</TitleSection>
                <p class="text-description ">
                    Компании размещают кейсы — реальные задачи из бизнеса. <br>
                    Студенты решают кейсы и отправляют решения работодателям. <br>
                    Работодатели оценивают решения, выбирают лучших кандидатов <br>
                    и приглашают на стажировки или работу.
                </p>
            </div>
            <div class="mt-6 space-y-3">
                <div v-for="(item, index) in items" :key="index" class="accordion-item">
                    <div class="accordion-header flex items-start p-6 cursor-pointer" @click="toggle(index)">
                        <span class="accordion-number">{{ item.number }}</span>
                        <div class="accordion-content flex-1">
                            <h3 class="accordion-title">{{ item.title }}</h3>
                            <transition name="accordion">
                                <p v-if="activeIndex === index" class="accordion-description">
                                    {{ item.description }}
                                </p>
                            </transition>

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
    if (activeIndex.value === index) {
        activeIndex.value = null;
    } else {
        activeIndex.value = index;
    }
};


</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
    transition: opacity 0.3s ease, max-height 0.3s ease-in-out;
    max-height: 200px;
}

.accordion-enter-from,
.accordion-leave-to {
    opacity: 0;
    max-height: 0;
}

.text-font {
    display: flex;
    align-items: center;
    text-align: start;
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
    text-align: start;
    margin-left: 23.5%;
}

.accordion-item {
    background-color: #F3EEFF;
    border-radius: 0.75rem;
    transition: all 1s ease-in-out;
    padding: 0.25rem;
    position: relative;
}

.accordion-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    position: relative;
    transition: all 1s ease-in-out;

}

.accordion-number {
    font-size: 3rem;
    color: #888;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-family: "Inter", sans-serif;
}

.accordion-content {
    flex: 1;
    margin-left: 3rem;

}

.accordion-title {
    font-size: 1.5rem;
    color: #333;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    max-width: 350px;
    line-height: 100%;
    margin-left: 50%;
}

.accordion-description {
    font-size: 1rem;
    color: #666;
    margin-top: 1.5rem;
    width: 100%;
    max-width: 450px;
    margin-left: 50%;
    font-weight: 400;
    font-family: "Inter", sans-serif;


}

.accordion-toggle {
    border: none;
    background: transparent;
    cursor: pointer;
    transition: all 1s ease-in-out;

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