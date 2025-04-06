<template>
  <Container class="section">
    <div class="caseTitle">
      <div class="flexCase">
        <TitleSection>Разработка кейс-задачи под компанию</TitleSection>
        <p class="caseParag">
          Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле
          компании.
        </p>
      </div>
      <div>
        <button>
          <img :src="prevIcon" alt="Назад" />
        </button>
        <button class="flexBtn">
          <img :src="nextIcon" alt="Вперед" />
        </button>
      </div>
    </div>
    <div class="sliderFlex">
      <div class="slideBlock">
        <img class="imgSlide" src="../../../assets/media/img/oneSlide.png" alt="" />
        <h3 class="titleImage">Название проекта</h3>
        <p class="titleTxt">
          Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле
          компании.
        </p>
        <button class="btnCase">Посмотреть проект</button>
      </div>
      <div class="slideBlock">
        <img class="imgSlide" src="../../../assets/media/img/twoSlide.png" alt="" />
        <h3 class="titleImage">Название проекта</h3>
        <p class="titleTxt">
          Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле
          компании.
        </p>
        <button class="btnCase">Посмотреть проект</button>
      </div>
    </div>
  </Container>
    
</template>

<script setup lang="ts">
import prevIcon from '@/assets/media/icons/prevIcon.svg'
import nextIcon from '@/assets/media/icons/nextIcon.svg'
import Container from '@/components/common/Container.vue';
import TitleSection from '@/components/common/TitleSection.vue';
</script>

<style scoped>
.section {
  font-family: 'Inter';
  padding: 100px 40px 0 40px;
}
.titleCase {
  font-weight: 600;
  font-size: 48px;
  line-height: 100%;
  color: #000000;
  max-width: 595px;
}

.caseTitle {
  display: flex;
  justify-content: space-between;
}

.caseParag {
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  max-width: 471px;
  color: #00000099;
  margin-top: 30px;
}

.flexBtn {
  margin-left: 15px;
}
.imgSlide {
  width: 100%;
  height: 336px;
  border-radius: 10px;
}

/* .slideBloick {
  width: 100%;
} */

.slideBlock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 40px;
  padding: 1.5%;
  width: 770px;
  height: 614px;
  border-radius: 20px;
  background-color: #f3eeff;
}

.titleImage {
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
}

.titleTxt {
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
}
.btnCase {
  width: 100%;
  height: 68px;
  background-color: #8857ff;
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 80%;
}
.sliderFlex {
  display: flex;
  gap: 40px;
}
</style>
