<template>
  <Container class="mainContainer">
    <TitleSection>
      Готовы найти лучших кандидатов?
    </TitleSection>
    <div class="bestPlans">
      <div class="bestBlock bestBlock-gsap">
        <div class="topflex">
          <h4 class="statusPlan">Базовый план</h4>
          <p class="conuntPublic">1 публикация</p>
        </div>
        <h2 class="bestPrice">5 000 ₽</h2>
        <hr class="hrline" />
        <div class="bestList">
          <p class="bestServise">— 30 решений на кейс</p>
          <p class="bestServise">— Возможность продления кейса</p>
          <p class="bestServise">— Более 30 решений на кейс задачу</p>
          <p class="bestServise">— Коммуникация с участниками решений</p>
          <p class="bestServise">— Что нибудь еще</p>
        </div>
        <button class="bestBtn">Выбрать тариф</button>
      </div>
      <div class="bestBlock bestBlock-gsap">
        <div class="topflex">
          <h4 class="statusPlan">Премиум план</h4>
          <p class="conuntPublic">2 публикации</p>
        </div>
        <h2 class="bestPrice">100 000 ₽</h2>
        <hr class="hrline" />
        <div class="bestList">
          <p class="bestServise">— 30 решений на кейс</p>
          <p class="bestServise">— Возможность продления кейса</p>
          <p class="bestServise">— Более 30 решений на кейс задачу</p>
          <p class="bestServise">— Коммуникация с участниками решений</p>
          <p class="bestServise">— Что нибудь еще</p>
        </div>
        <button class="bestBtn">Выбрать тариф</button>
      </div>
      <div class="bestBlock bestBlock-gsap">
        <div class="topflex">
          <h4 class="statusPlan">Стандартный план</h4>
          <p class="conuntPublic">3 публикации</p>
        </div>
        <h2 class="bestPrice">5 000 ₽</h2>
        <hr class="hrline" />
        <div class="bestList">
          <p class="bestServise">— 30 решений на кейс</p>
          <p class="bestServise">— Возможность продления кейса</p>
          <p class="bestServise">— Более 30 решений на кейс задачу</p>
          <p class="bestServise">— Коммуникация с участниками решений</p>
          <p class="bestServise">— Что нибудь еще</p>
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
  margin-top: 60px;
  margin-bottom: 40px;
}

.bestBlock {
  padding: 30px;
  width: 507px;
  height: 591px;
  border-radius: 20px;
  background-color: #f3eeff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bestBlock:hover {
  height: 607px;
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(136, 87, 255, 0.4);
}


.topflex {
  display: flex;
  justify-content: space-between;
  color: #000000;
}

.statusPlan {
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
}

.conuntPublic {
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
}

.bestPrice {
  font-weight: 400;
  font-size: 64px;
  line-height: 80%;
  color: #00000099;
  margin-top: 40px;
}

.hrline {
  margin-top: 40px;
  width: 100%;
  height: 1px;
  background-color: #00000066;
}

.bestList {
  margin-top: 60px;
  display: flex;
  height: 180px;
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
  margin-top: 60px;
  width: 100%;
  height: 68px;
  background-color: #8857ff;
  font-weight: 600;
  font-size: 18px;
  line-height: 80%;
  color: #ffffff;
  border-radius: 50px;
}

@media (max-width: 1024px) {
  .bestPlans {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .bestBlock {
    width: 100%;
    height: auto;
    padding: 20px;
    margin-bottom: 20px;
  }

  .bestPrice {
    font-size: 48px;
  }

  .bestList {
    height: auto;
    margin-top: 40px;
  }

  .bestServise {
    font-size: 18px;
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
    width: 90%;
    padding: 15px;
  }

  .statusPlan {
    font-size: 28px;
  }

  .conuntPublic {
    font-size: 14px;
  }

  .bestPrice {
    font-size: 40px;
  }

  .bestList {
    margin-top: 30px;
    height: auto;
  }

  .bestServise {
    font-size: 16px;
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
    width: 90%;
    padding: 15px;
    margin-bottom: 15px;
  }

  .statusPlan {
    font-size: 24px;
  }

  .conuntPublic {
    font-size: 14px;
  }

  .bestPrice {
    font-size: 32px;
  }

  .bestList {
    margin-top: 20px;
  }

  .bestServise {
    font-size: 14px;
  }

  .bestBtn {
    margin-top: 30px;
    height: 50px;
    font-size: 14px;
  }
}
</style>
