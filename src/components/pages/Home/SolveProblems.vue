<template>
  <Container class="solutions">
    <TitleSection class="solutions-title">Как мы решаем проблемы <br> на рынке труда</TitleSection>
    <div class="solution-item" v-for="(item, index) in solutions" :key="index">
      <div class="solution-header">
        <span class="solution-number">{{ item.number }}</span>
        <span class="problem-text">{{ item.problem }}</span>
      </div>
      <div class="solution-text">
        <div class="solution-icon-wrapper">
          <img class="solution-icon" src="/src/components/icons/point.svg" alt="Arrow Icon" />
        </div>
        <div class="solution-text-wrap">
          <span class="solution-title">{{ item.solutionTitle }}</span>
          <p class="solution-description">{{ item.solutionDescription }}</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { ref } from "vue";
import TitleSection from "@/components/common/TitleSection.vue";
import Container from "@/components/common/Container.vue";

const solutions = ref([
  {
    number: "01",
    problem: "Сложно найти заинтересованных специалистов",
    solutionTitle: "Размещение кейс-задач",
    solutionDescription:
      "Вы публикуете кейс-задачи, которые решают только талантливые, амбициозные студенты. На основе их решений отбираете лучших к себе в команду."
  },
  {
    number: "02",
    problem: "Нехватка практико-ориентированного подхода в обучении",
    solutionTitle: "Интеграция кейсов в образование",
    solutionDescription:
      "Кейсы публикуются на платформе, используются преподавателями в процессе обучения студентов. Вы можете вырастить специалистов для своей компании ещё до их выхода на работу."
  },
  {
    number: "03",
    problem: "Низкая узнаваемость компании среди студентов",
    solutionTitle: "Прямой доступ к студентам РФ",
    solutionDescription:
      "Студенты из разных городов и вузов участвуют в наших кейс-чемпионатах и решают кейсы компаний."
  }
]);
</script>

<style scoped>



.solution-item {
  text-align: start;
  align-items: start;
  border-top: 2px solid #ccc;
  padding: 30px 0 ;
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.solution-header {
  display: flex;
  align-items: start;
  gap: 40px;
}

.solution-number {
  font-size: 3rem;
  color: #666;
  line-height: 90%;
}

.problem-text {
  flex-grow: 1;
  font-size: 2rem;
  line-height: 100%;
  font-weight: bold;
  color: black;
}

.solution-text-wrap {
  display: flex;
  flex-direction: column;
}

.solution-icon-wrapper {
  width: 30px;
  height: 30px;
  background-color: #8857ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.solution-icon {
  width: 20px;
  height: 20px;
}

.solution-text {
  display: flex;
  gap: 20px;
}

.solution-title {
  font-size: 2rem;
  font-weight: bold;
  line-height: 100%;
  margin-bottom: 20px;
}

.solution-description {
  width: 700px;
  font-size: 0.9rem;
  color: #666;
  margin-top: 5px;
}
.solutions-title{
  margin-bottom: 40px;
}

@media (max-width: 1024px) {
  .solutions-title {
    font-size: 2rem;
    width: 100%;
  }

  .solution-item {
    padding: 20px 0;
  }

  .solution-number {
    font-size: 2.5rem;
  }

  .problem-text {
    font-size: 1.8rem;
  }

  .solution-title {
    font-size: 1.8rem;
  }

  .solution-description {
    width: 100%;
    font-size: 0.85rem;
  }

  .solution-icon-wrapper {
    width: 28px;
    height: 28px;
    padding: 5px;
  }

  .solution-icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 768px) {
  .solutions-title {
    font-size: 1.5rem;
    width: 100%;
  }

  .solution-item {
    padding: 15px 0;
    flex-direction: column;
  }

  .solution-text{
    margin-left: 42px;
  }

  .solution-number {
    font-size: 2rem;
  }

  .problem-text {
    font-size: 1.5rem;
    margin-left: 15px;
  }

  .solution-title {
    font-size: 1.5rem;
  }

  .solution-description {
    width: 100%;
    font-size: 0.8rem;
  }

  .solution-icon-wrapper {
    width: 25px;
    height: 25px;
  }

  .solution-icon {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 500px) {
  .solutions-title {
    font-size: 1.25rem;
  }

  .solution-item {
    padding: 15px 0;
    flex-direction: column;
  }

  .solution-header {
    flex-direction: column;
    align-items: start;
  }

  .solution-number {
    font-size: 1.8rem;
  }

  .problem-text {
    font-size: 1.3rem;
    margin-left: 0;
  }

  .solution-title {
    font-size: 1.3rem;
  }

  .solution-description {
    width: 100%;
    font-size: 0.75rem;
  }

  .solution-icon-wrapper {
    width: 22px;
    height: 22px;
  }

  .solution-icon {
    width: 16px;
    height: 16px;
  }

  /* .solution-text {
    order: 2;
  }

  .solution-number,
  .problem-text {
    order: 1;
  } */
}
</style>
