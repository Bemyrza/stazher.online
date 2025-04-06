<template>
  
  <Container class="mainContainer">

    <TitleSection >
      Готовы найти лучших кандидатов?
    </TitleSection>
    <div class="bestPlans">
      <div class="bestBlock">
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
      <div class="bestBlock">
        <div class="topflex">
          <h4 class="statusPlan">Премиум план</h4>
          <p class="conuntPublic">2 публикация</p>
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
      <div class="bestBlock">
        <div class="topflex">
          <h4 class="statusPlan">Стандартный план</h4>
          <p class="conuntPublic">3 публикация</p>
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
</script>

<style>
.mainContainer {
  padding: 80px 20px 0 20px;
}

.bestTitle {
  width: 745px;
  font-size: 70px;
  font-weight: 500;
  line-height: 90%;
}
.bestPlans {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 40px;
  /* max-width: 1560px; */
}
.bestBlock {
  padding: 30px;
  width: 507px;
  height: 591px;
  border-radius: 20px;
  background-color: #f3eeff;
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
  display: flex;
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
</style>
