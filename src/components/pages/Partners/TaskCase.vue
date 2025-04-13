<template>
  <Container class="section">
    <div class="caseTitle">
      <div class="flexCase">
        <TitleSection>Разработка кейс-задачи <br> под компанию</TitleSection>
        <p class="caseParag" v-fade-in>
          Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле
          компании.
        </p>
      </div>
      <div class="MainIcons">
        <button
          class="navButton"
          ref="prevEl"
          @mousedown="isPrevPressed = true"
          @mouseup="isPrevPressed = false"
          @mouseleave="isPrevPressed = false"
          v-fade-in
        >
          <img :src="prevIcon" alt="Назад" />
        </button>

        <button
          class="navButton flexBtn"
          ref="nextEl"
          @mousedown="isNextPressed = true"
          @mouseup="isNextPressed = false"
          @mouseleave="isNextPressed = false"
          v-fade-in
        >
          <img :src="nextIcon" alt="Вперед" />
        </button>
      </div>
    </div>

    <Swiper
      :modules="[Navigation]"
      :slides-per-view="slidesPerView"
      :space-between="20"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      class="sliderFlex"
      v-fade-in
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="slideBlock" v-slide-in>
          <img class="imgSlide" :src="slide.image" alt="" v-fade-in />
          <h3 class="titleImage" v-fade-in>{{ slide.title }}</h3>
          <p class="titleTxt" v-fade-in>{{ slide.description }}</p>
          <button class="btnCase">Посмотреть проект</button>
        </div>
      </SwiperSlide>
    </Swiper>
  </Container>
</template>

<script setup lang="ts">
import { ref, onMounted, Directive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import prevIcon from '@/assets/media/icons/prevIcon.svg'
import nextIcon from '@/assets/media/icons/nextIcon.svg'
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'

const prevEl = ref<HTMLElement | null>(null)
const nextEl = ref<HTMLElement | null>(null)

const isNextPressed = ref(false)
const isPrevPressed = ref(false)

const slides = [
  {
    image: new URL('@/assets/media/img/IIIcon.png', import.meta.url).href,
    title: 'Создание ИИ-помощника',
    description: 'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.'
  },
  {
    image: new URL('@/assets/media/img/GoalCon.png', import.meta.url).href,
    title: 'Разработка маркетинговой стратегии',
    description: 'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.'
  },
  {
    image: new URL('@/assets/media/img/IIIcon.png', import.meta.url).href,
    title: 'Создание ИИ-помощника',
    description: 'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.'
  },
  {
    image: new URL('@/assets/media/img/GoalCon.png', import.meta.url).href,
    title: 'Разработка маркетинговой стратегии',
    description: 'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.'
  },
]

const slidesPerView = ref(2)

const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth <= 1000 ? 1 : 2
}

onMounted(() => {
  updateSlidesPerView()
  window.addEventListener('resize', updateSlidesPerView)
})

// Intersection Observer Directives
const createObserverDirective = (animationClass: string): Directive => ({
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(animationClass)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
  }
})

const fadeInDirective = createObserverDirective('fade-in')
const slideInDirective = createObserverDirective('slide-in')

// Register custom directives
defineExpose({})
</script>

<script lang="ts">
export default {
  directives: {
    fadeIn: {
      mounted(el: HTMLElement) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add('fade-in')
              observer.unobserve(el)
            }
          },
          { threshold: 0.1 }
        )
        observer.observe(el)
      }
    },
    slideIn: {
      mounted(el: HTMLElement) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add('slide-in')
              observer.unobserve(el)
            }
          },
          { threshold: 0.1 }
        )
        observer.observe(el)
      }
    }
  }
}
</script>

<style scoped>
.section {
  font-family: 'Inter';
  padding: 100px 40px 0 40px;
}

.caseTitle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.caseParag {
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
  max-width: 471px;
  color: #00000099;
  margin-top: 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.MainIcons {
  display: flex;
  gap: 15px;
  align-items: center;
}

.navButton {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #00000033;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.navButton img {
  width: 22px;
  height: 24px;
}

.navButton:active {
  background-color: #8857FF;
  transform: scale(0.95);
  box-shadow: 0 2px 4px rgba(136, 87, 255, 0.2);
}

.imgSlide {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.slideBlock {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  height: 565px;
  border-radius: 20px;
  background-color: #f3eeff;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.titleImage,
.titleTxt {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.btnCase {
  width: 100%;
  min-height: 61px;
  background-color: #8857ff;
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 18px;
  transition: background-color 0.2s ease;
}

.btnCase:hover {
  background-color: #7641e6;
}

.sliderFlex {
  display: flex;
  gap: 40px;
  margin-top: 15px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.slide-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@media (max-width: 1024px) {
  .caseParag {
    max-width: 100%;
  }

  .sliderFlex {
    gap: 20px;
  }
}

@media (max-width: 1117px) {
  .section {
    padding: 60px 20px;
  }

  .caseTitle {
    flex-direction: column;
    align-items: center;
    text-align: start;
  }

  .caseParag {
    text-align: start;
    max-width: 100%;
    margin-top: 20px;
  }

  .MainIcons {
    margin-top: 20px;
  }

  .imgSlide {
    height: 250px;
  }

  .slideBlock {
    height: auto;
    padding: 20px;
  }

  .titleImage {
    font-size: 24px;
  }

  .titleTxt {
    font-size: 1rem;
  }

  .btnCase {
    height: 60px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .sliderFlex {
    flex-direction: column;
  }

  .slideBlock {
    width: 100%;
    padding: 20px;
  }

  .titleImage {
    font-size: 1.4rem;
  }

  .btnCase {
    font-size: 14px;
    height: 50px;
  }

  .navButton {
    width: 40px;
    height: 40px;
  }

  .navButton img {
    width: 16px;
    height: 16px;
  }
}
</style>
