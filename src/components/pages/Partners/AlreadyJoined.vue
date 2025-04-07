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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 100px;
  margin-top: 75px;
}

.joined-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transform: translateY(50px);

  img {
    width: 95px;
    height: 95px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
  }
}

@media (max-width: 1024px) {
  .joined-list {
    gap: 60px;
  }

  .joined-item h3 {
    font-size: 1.5rem;
  }

  .joined-item img {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 768px) {
  .joined-list {
    gap: 40px;
    justify-content: center;
  }

  .joined-item {
    flex-direction: column;
    align-items: center;
  }

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
