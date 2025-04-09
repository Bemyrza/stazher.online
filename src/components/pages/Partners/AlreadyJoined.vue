<template>
  <Container>
    <TitleSection align="center">К нам уже присоединились</TitleSection>
    <div class="joined-list">
      <div class="joined-item" v-for="(item, index) in data" :key="index">
        <img :src="item.image" alt="Company Logo" class="company-logo" />
        <h3 class="company-title">{{ item.title }}</h3>
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
.joined-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 60px;
  margin-top: 75px;
  justify-items: center;
}

.joined-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    width: 95px;
    height: 95px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
}

@media (max-width: 1024px) {
  .joined-item h3 {
    font-size: 1.5rem;
  }

  .joined-item img {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 768px) {
  .joined-item h3 {
    font-size: 1.3rem;
  }

  .joined-item img {
    width: 70px;
    height: 70px;
  }
}

@media (max-width: 480px) {
  .joined-item h3 {
    font-size: 1rem;
  }

  .joined-item img {
    width: 60px;
    height: 60px;
  }
}
</style>
