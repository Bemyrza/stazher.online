<template>
  <section class="section">
    <div class="caseTitle">
      <div class="flexCase">
        <h2 class="titleCase">Разработка кейс-задачи под компанию</h2>
        <p class="caseParag">
          Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле
          компании.
        </p>
      </div>
      <div>
        <button @click="prevSlide">
          <img :src="prevIcon" alt="Назад" />
        </button>
        <button class="flexBtn" @click="nextSlide">
          <img :src="nextIcon" alt="Вперед" />
        </button>
      </div>
    </div>
    <div class="sliderFlex">
      <div v-for="(slide, index) in visibleSlides" :key="index" class="slideBloick">
        <img class="imgSlide" :src="slide.img" alt="" />
        <h3 class="titleImage">{{ slide.title }}</h3>
        <p class="titleTxt">{{ slide.description }}</p>
        <button class="btnCase">Посмотреть проект</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import prevIcon from '@/assets/media/icons/prevIcon.svg'
import nextIcon from '@/assets/media/icons/nextIcon.svg'

const slides = ref([
  {
    img: '../../assets/media/img/oneSlide.png',
    title: 'Название проекта 1',
    description:
      'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.'
  },
  {
    img: '@/assets/media/img/twoSlide.png',
    title: 'Название проекта 2',
    description:
      'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.'
  },
  {
    img: '@/assets/media/img/threeSlide.png',
    title: 'Название проекта 3',
    description:
      'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.'
  },
  {
    img: '@/assets/media/img/fourSlide.png',
    title: 'Название проекта 4',
    description:
      'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.'
  }
])

const currentIndex = ref(0)

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

// Вычисляем только два слайда для отображения
const visibleSlides = computed(() => {
  return slides.value.slice(currentIndex.value, currentIndex.value + 2)
})
</script>

<style>
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

.slideBloick {
  width: 100%;
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
