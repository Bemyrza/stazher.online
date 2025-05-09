<template>
  <Container>
    <TitleSection>Преимущества для <br> студентов</TitleSection>
    <div class="cards cards-gsap-4">
      <div class="card card-gsap-4" v-for="(benefit, index) in benefits" :key="benefit.id">
        <div class="icon-wrapper">
          <div class="icon">
            <img :src="benefit.icon" alt="icon" />
          </div>
        </div>
        <div class="text-wrapper">
          <p class="text">{{ benefit.text }}</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import backpackIcon from "@/assets/media/img/backpack.png";
import laptop from "@/assets/media/img/laptop.png";
import student from "@/assets/media/img/student.png";
import sputnick from "@/assets/media/img/sputnick.png";
import Container from "@/components/common/Container.vue";
import TitleSection from "@/components/common/TitleSection.vue";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { id: 1, icon: backpackIcon, text: 'Возможность прокачать навыки и добавить кейсы в портфолио.' },
  { id: 2, icon: laptop, text: 'Получение стажировки или работы без типичного отбора через резюме.' },
  { id: 3, icon: student, text: 'Новые знакомства и работа в команде.' },
  { id: 4, icon: sputnick, text: 'Обратная связь от ведущих работодателей.' }
];

onMounted(() => {
  gsap.from(".card-gsap-4", {
    opacity: 0,
    y: 100,
    filter: "blur(10px)", 
    duration: 1,
    ease: "power3.out",
    stagger: 0.3, 
    scrollTrigger: {
      trigger: ".cards-gsap-4",
      start: "top 70%",
      end: "bottom top",
      toggleActions: "play none none none" 
    }
  });
});
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
}

.card {
  background: #F3EEFF;
  padding: 30px;
  border-radius: 20px;
  width: 375px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;  
  position: relative;
}

.icon-wrapper {
  position: absolute;
  top: 25px;
  left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #8857FF66;
  border-radius: 50%;
}

.icon img {
  width: 45px;
  height: 45px;
}

.text {
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 120%;
  text-align: start;
  margin: 0;
}

@media (max-width:1280px) {
    .card{
      width: calc(50% - 10px);
      max-width: 100%;
    }
    .cards{
      flex-wrap: wrap;
    }
}

@media (max-width:768px) {
    .card{
      width:100%;
      height: auto;
      padding-top: 140px;
    }
    .text{
      font-size: 1.5rem;
    }
}
</style>
