<template>
    <TitleSection align="center">Партнеры и кейсы:</TitleSection>
    <div class="grid grid-cols-3 gap-4 cards-gsap-8">
      <a href="#" class="case-card card-gsap-8">
        <img :src="sber" alt="Sberbank">
        <h3>Sberbank</h3>
        <p>"Цифровизация финансовых услуг"</p>
      </a>
      <a href="#" class="case-card card-gsap-8">
        <img :src="sber" alt="X5 Retail Group">
        <h3>X5 Retail Group</h3>
        <p>"Оптимизация логистики для гипермаркетов"</p>
      </a>
      <a href="#" class="case-card card-gsap-8">
        <img :src="sber" alt="L'Oréal">
        <h3>L'Oréal</h3>
        <p>"Маркетинговая стратегия для нового продукта"</p>
      </a>
      <a href="#" class="case-card card-gsap-8">
        <img :src="sber" alt="Sberbank">
        <h3>Sberbank</h3>
        <p>"Цифровизация финансовых услуг"</p>
      </a>
      <a href="#" class="case-card card-gsap-8">
        <img :src="sber" alt="X5 Retail Group">
        <h3>X5 Retail Group</h3>
        <p>"Оптимизация логистики для гипермаркетов"</p>
      </a>
      <a href="#" class="case-card card-gsap-8">
        <img :src="sber" alt="L'Oréal">
        <h3>L'Oréal</h3>
        <p>"Маркетинговая стратегия для нового продукта"</p>
      </a>
    </div>
</template>

<script setup lang="ts">
import Container from '@/components/common/Container.vue';
import TitleSection from '@/components/common/TitleSection.vue';
import sber from "@/assets/media/icons/SBER.svg"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from(".card-gsap-8", {
    opacity: 0,
    y: 100,
    filter: "blur(10px)", 
    duration: 1,
    ease: "power3.out",
    stagger: 0.3, 
    scrollTrigger: {
      trigger: ".cards-gsap-8",
      start: "top 70%",
      end: "bottom top",
      toggleActions: "play none none reverse",
    }
  });
});
</script>

<style scoped>
.grid {
  display: grid;
  gap: 16px;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
}

.text-center {
  font-size: 3rem;
  margin-top: 30px;
}

.case-card {
  background-color: #F3EEFF;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.case-card:hover {
  transform: translateY(-5px);
}

.case-card img {
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 20px; 
}

.case-card h3 {
  font-size: 32px;
  font-family: "Inter", sans-serif;
}

.case-card p {
  color: #555;
  font-size: 14px;
  margin-top: 8px;
}

@media (max-width:1000px) {
    .grid{
      grid-template-columns:repeat(2, minmax(0, 1fr));
    }
}
@media (max-width:768px) {
    .grid{
      grid-template-columns:repeat(1, minmax(0, 1fr));
    }
}

</style>
