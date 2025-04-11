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
import five from '@/assets/media/icons/five.svg'
import mask from '@/assets/media/icons/maskgroup.svg'

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

@keyframes scroll-left {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
