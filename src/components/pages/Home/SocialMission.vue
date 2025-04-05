<template>
  <Container class="container">
    <div class="contain">
      <TitleSection class="title">Социальная миссия:</TitleSection>
      <div class="content content-gsap-1">
        <div v-for="(item, index) in missionItems" :key="index" class="mission-item">
          <div class="icon-container">
            <img :src="item.icon" alt="icon" class="icon" />
          </div>
          <p class="text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import student from "@/assets/media/img/FeStudent.png"
import teacher from "@/assets/media/img/tarcher.png"
import track from "@/assets/media/img/track.png"
import TitleSection from "@/components/common/TitleSection.vue"
import Container from "@/components/common/Container.vue"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue"
gsap.registerPlugin(ScrollTrigger)
const missionItems = [
  {
    icon: student,
    text: 'Мы формируем новую культуру взаимодействия между образованием и бизнесом, сокращая кадровый дефицит и снижая "трудовой гостинг" среди молодежи.'
  },
  {
    icon: teacher,
    text: 'Для преподавателей: ограниченные возможности по включению практических заданий в образовательный процесс.'
  },
  {
    icon: track,
    text: 'Решение снижает нагрузку на преподавателей, позволяя интегрировать в образовательный процесс кейсы от бизнеса, повышая практико-ориентированность обучения и конкурентоспособность'
  }
]

onMounted(() => {
  gsap.from(".mission-item", {
    opacity: 0,
    y: 100,
    filter: "blur(10px)", 
    duration: 1,
    ease: "power3.out",
    stagger: 0.3, 
    scrollTrigger: {
      trigger: ".content-gsap-1",
      start: "top 70%",
      end: "bottom top",
      toggleActions: "play none none none"
    }
  });
});

</script>

<style scoped>
.contain {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
}


.content {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative; 
}

.content::before {
  content: "";
  position: absolute;
  top: -30px; 
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #d1d5db; 
}

.mission-item {
  display: flex;
  align-items: start;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #d1d5db;
}

.icon-container {
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
  background-color: #e9d5ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 3rem;
  height: 3rem;
}

.text {
  width: 350px;
  line-height: 120%;
  margin-left: 80px;
  color: #4b5563;
}

@media (max-width: 1280px) {
  .contain{
    flex-direction: column;
  }
  .title{
    margin-bottom: 100px;
  }
  .content{
    width: 100%;
  }
  .text{
    margin-left: 0;
  }
  .mission-item{
    gap: 40px;
  }
}
</style>
