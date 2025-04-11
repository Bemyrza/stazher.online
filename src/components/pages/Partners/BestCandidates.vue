<template>
  <Container class="mainContainer">
    <TitleSection>
      Готовы найти лучших <br> кандидатов?
    </TitleSection>
    <div class="bestPlans">
      <div class="bestBlock bestBlock-gsap">
        <div class="topflex">
          <h4 class="statusPlan">Базовый план</h4>
          <p class="conuntPublic">1 публикация</p>
        </div>
        <h2 class="bestPrice">0 ₽</h2>
        <hr class="hrline" />
        <div class="bestList">
          <p class="bestServise">— 5 решений на кейс</p>
          <p class="bestServise">— 1 направление по кейсу</p>
          <p class="bestServise">— до 15 дней длительность публикации </p>
          <p class="bestServise">— Коммуникация с участниками решений</p>
        </div>
        <button class="bestBtn">Выбрать тариф</button>
      </div>
      <div class="bestBlock bestBlock-gsap">
        <div class="topflex">
          <h4 class="statusPlan">Премиум план</h4>
          <p class="conuntPublic">1 публикации</p>
        </div>
        <h2 class="bestPrice">25 000 ₽</h2>
        <hr class="hrline" />
        <div class="bestList">
          <p class="bestServise">—  ∞ кол-во решений на кейс</p>
          <p class="bestServise">—  2 направления по кейсу</p>
          <p class="bestServise">— до 45 дней длительность публикации </p>
          <p class="bestServise">— Визуальное оформление кейс-задачи</p>
        </div>
        <button class="bestBtn">Выбрать тариф</button>
      </div>
      <div class="bestBlock bestBlock-gsap">
        <div class="topflex">
          <h4 class="statusPlan">Стандартный план</h4>
          <p class="conuntPublic">1 публикации</p>
        </div>
        <h2 class="bestPrice">5 000 ₽</h2>
        <hr class="hrline" />
        <div class="bestList">
          <p class="bestServise">— 12 решений на кейс</p>
          <p class="bestServise">— 1 направление по кейсу</p>
          <p class="bestServise">— до 30 дней длительность публикации </p>
          <p class="bestServise">— Визуальное оформление кейс-задачи</p>
        </div>
        <button class="bestBtn">Выбрать тариф</button>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/common/Container.vue';
import TitleSection from '@/components/common/TitleSection.vue';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".bestBlock-gsap", {
    opacity: 0,
    y: 0,
    filter: "blur(10px)",
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".bestPlans",
      start: "top 70%",
      end: "bottom top",
      toggleActions: "play none none none"
    }
  });
});

</script>

<style scoped>
.mainContainer {
  padding: 80px 20px 0 20px;
}

.bestPlans {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 40px;
}

.bestBlock {
  padding: 30px;
  width: 500px;
  height: 571px;
  border-radius: 20px;
  background-color: #f3eeff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bestBlock:hover {
  height: 591px;
  transform: translateY(-10px) !important;
  box-shadow: 0 20px 40px rgba(136, 87, 255, 0.4);
}


.topflex {
  display: flex;
  justify-content: space-between;
  color: #000000;
}

.statusPlan {
  font-weight: 500;
  font-size: 2rem;
  line-height: 100%;
}

.conuntPublic {
  font-size: 1rem;
  font-weight: 400;
  line-height: 120%;
}

.bestPrice {
  font-weight: 400;
  font-size: 4rem;
  line-height: 80%;
  color: #00000099;
  margin-top: 40px;
}

.hrline {
  margin-top: 40px;
  width: 100%;
  height: 2px;
  background-color: #00000066;
}

.bestList {
  margin-top: 60px;
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
}

.bestServise {
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: #000000;
}

.bestBtn {
  margin-top: 80px;
  width: 100%;
  height: 68px;
  background-color: #8857ff;
  font-weight: 600;
  font-size: 18px;
  line-height: 80%;
  color: #ffffff;
  border-radius: 50px;
}

@media (max-width: 1144px) {
  .bestPlans {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .bestBlock {
    width: 100%;
    height: auto;
    padding: 30px;
    margin-bottom: 20px;
  }

  .bestBlock:hover {
    height: auto;
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(136, 87, 255, 0.4);
  }

  .topflex {
    font-size: 2rem;
  }

  .bestPrice {
    font-size: 4rem;
  }

  .bestList {
    height: auto;
    margin-top: 40px;
  }

  .bestServise {
    font-size: 1.5rem;
    margin-top: 5px;
  }

  .bestBtn {
    margin-top: 40px;
    width: 100%;
    height: 60px;
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .bestPlans {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .bestBlock {
    width: 100%;
    padding: 25px;
  }

  .statusPlan {
    font-size: 2.5rem;
  }

  .conuntPublic {
    font-size: 14px;
  }


  .bestList {
    margin-top: 30px;
    height: auto;
  }

  .bestServise {
    font-size: 1.3rem;
    margin-top: 10px;
  }

  .bestBtn {
    margin-top: 40px;
    height: 55px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .bestPlans {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .bestBlock {
    width: 100%;
    padding: 22px;
    margin-bottom: 15px;
  }

  .statusPlan {
    font-size: 1.5rem;
  }

  .conuntPublic {
    font-size: 0.75rem;
  }

  .bestPrice {
    font-size: 3rem;
  }

  .bestList {
    margin-top: 20px;
  }

  .bestServise {
    font-size: 0.90rem;
  }

  .bestBtn {
    margin-top: 30px;
    height: 50px;
    font-size: 14px;
  }
}
</style>
