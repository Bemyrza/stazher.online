<template>
  <Container class="solutions">
    <TitleSection class="solutions-title">Как мы решаем проблемы <br> на рынке труда</TitleSection>
    <div
      class="solution-item"
      v-for="(item, index) in solutions"
      :key="index"
      ref="solutionItems"
      :class="{ 'visible': item.visible }"
      :style="{ '--delay': `${index * 0.2}s` }"
    >
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

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import TitleSection from "@/components/common/TitleSection.vue";
import Container from "@/components/common/Container.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const solutions = ref([
  {
    number: "01",
    problem: "Сложно найти заинтересованных специалистов",
    solutionTitle: "Размещение кейс-задач",
    solutionDescription:
      "Вы публикуете кейс-задачи, которые решают только талантливые, амбициозные студенты. На основе их решений отбираете лучших к себе в команду.",
    visible: false
  },
  {
    number: "02",
    problem: "Нехватка практико-ориентированного подхода в обучении",
    solutionTitle: "Интеграция кейсов в образование",
    solutionDescription:
      "Кейсы публикуются на платформе, используются преподавателями в процессе обучения студентов. Вы можете вырастить специалистов для своей компании ещё до их выхода на работу.",
    visible: false
  },
  {
    number: "03",
    problem: "Низкая узнаваемость компании среди студентов",
    solutionTitle: "Прямой доступ к студентам РФ",
    solutionDescription:
      "Студенты из разных городов и вузов участвуют в наших кейс-чемпионатах и решают кейсы компаний.",
    visible: false
  }
]);


const solutionItems = ref<HTMLElement[]>([]);

onMounted(() => {
  
  solutionItems.value.forEach((item, index) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
        filter: "blur(8px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0)",
        duration: 0.5,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 100%",
          end: "bottom top",
          toggleActions: "play none none none",
          markers: false,
          
        }
      }
    );
  });
});
</script>

<style scoped>
.solution-item {
  opacity: 0;
  transform: translateY(50px) scale(0.95);
  filter: blur(8px);
  transition: opacity 0.8s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease-out;
  transition-delay: var(--delay, 0s);
}

.solution-item.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

/* Основные стили */
.solution-item {
  text-align: start;
  align-items: start;
  border-top: 2px solid #ccc;
  padding: 30px 0;
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
  width: 40px;
  min-width: 40px;
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

.solutions-title {
  margin-bottom: 40px;
}

@media (max-width: 1024px) {
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
  .solution-item {
    padding: 15px 0;
    flex-direction: column;
  }

  .solution-text {
    margin-left: 50px;
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
</style>
