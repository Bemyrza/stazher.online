<template>
  <Container>
    <TitleSection align="center">К нам уже присоединились</TitleSection>
    <div class="scroll-wrapper">
      <div class="scroll-inner">
        <div class="joined-list">
          <div class="joined-item" v-for="(item, index) in dataExtended" :key="index">
            <img :src="item.image" alt="Company Logo" />
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'
import sber from '@/assets/media/icons/SBER.svg'

import five from '@/assets/media/img/FIVE.png'
import mask from '@/assets/media/img/Maskgroup.png'


const baseData = [
  { image: sber, title: 'Sberbank' },
  { image: five, title: 'X5 Retail Group' },
  { image: mask, title: "L'Oréal" },
  { image: sber, title: 'Sberbank' },
  { image: five, title: "L'Oréal" },
  { image: mask, title: "L'Oréal" },
]

const dataExtended = [...baseData, ...baseData]
const data = [
  {
    image: sber,
    title: 'Sberbank'
  },
  {
    image: sber,
    title: 'X5 Retail Group'
  },
  {
    image: sber,
    title: "L'Oréal"
  },
  {
    image: sber,
    title: 'Sberbank'
  }
];

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.joined-item', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.joined-list',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    }
  });
});
</script>
<style scoped>
.scroll-wrapper {
  overflow: hidden;
  width: 100%;
  margin-top: 75px;
}

.scroll-inner {
  display: flex;
  width: max-content;
  animation: scroll-left 40s linear infinite;
}

.joined-list {
  display: flex;
  gap: 100px;
}

.joined-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
  gap: 20px;
}

.joined-item img {
  width: 95px;
  height: 95px;
  object-fit: contain;
}

.joined-item h3 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
}
.joined-list {
  display: flex;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 70px;
  }

  @media (max-width: 768px) {
    gap: 50px;
  }

  @media (max-width: 480px) {
    gap: 30px;
  }
}

.joined-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
  gap: 20px;

  @media (max-width: 1024px) {
    min-width: 120px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    min-width: 100px;
    gap: 14px;
  }

  @media (max-width: 480px) {
    min-width: 80px;
    gap: 10px;
  }
}

.joined-item img {
  width: 95px;
  height: 95px;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    width: 65px;
    height: 65px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
}

.joined-item h3 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}

</style>
