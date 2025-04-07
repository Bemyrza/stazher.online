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
      <div class="slideBlock" v-for="(slide, index) in slides" :key="index">
        <img class="imgSlide" :src="slide.img" alt="Слайд" />
        <h3 class="titleImage">{{ slide.title }}</h3>
        <p class="titleTxt">{{ slide.text }}</p>
        <button class="btnCase">Посмотреть проект</button>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import prevIcon from '@/assets/media/icons/prevIcon.svg'
import nextIcon from '@/assets/media/icons/nextIcon.svg'
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'

const slides = [
  {
    img: new URL('@/assets/media/img/oneSlide.png', import.meta.url).href,
    title: 'Название проекта',
    text: 'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.',
  },
  {
    img: new URL('@/assets/media/img/twoSlide.png', import.meta.url).href,
    title: 'Название проекта',
    text: 'Кейс-менеджеры помогают сформулировать задачу, а дизайнеры оформляют ее в фирменном стиле компании.',
  },
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from('.slideBlock', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.sliderFlex',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    }
  });

  gsap.from('.imgSlide', {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.sliderFlex',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    }
  });

  gsap.from('.titleImage', {
    opacity: 0,
    y: 30,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.slideBlock',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    }
  });

  gsap.from('.titleTxt', {
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.slideBlock',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    }
  });

  gsap.from('.btnCase', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.slideBlock',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    }
  });
})
</script>

<style scoped>
.section {
  font-family: 'Inter';
  padding: 100px 40px 0 40px;
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

.slideBlock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

@media (max-width: 1024px) {
  .section {
    padding: 60px 20px 0 20px;
  }

  .caseTitle {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .sliderFlex {
    flex-direction: column;
    gap: 30px;
  }

  .slideBlock {
    width: 100%;
    height: auto;
  }

  .imgSlide {
    height: auto;
  }
}

@media (max-width: 768px) {
  .caseParag {
    font-size: 14px;
    max-width: 100%;
  }

  .titleImage {
    font-size: 24px;
  }

  .titleTxt {
    font-size: 14px;
  }

  .btnCase {
    height: 56px;
    font-size: 16px;
  }

  .slideBlock {
    padding: 20px;
  }

  .imgSlide {
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 40px 16px 0 16px;
  }

  .btnCase {
    height: 48px;
    font-size: 14px;
  }

  .titleImage {
    font-size: 20px;
  }

  .titleTxt {
    font-size: 13px;
  }

  .caseTitle {
    gap: 16px;
  }

  .flexBtn,
  .caseTitle button {
    width: 40px;
    height: 40px;
    padding: 0;
  }

  .caseTitle img {
    width: 100%;
    height: auto;
  }
}
</style>
