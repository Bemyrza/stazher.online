<template>
  <Container>
    <TitleSection>Реальная польза для вузов:</TitleSection>
    <div class="cards cards-gsap-6">
      <div class="card card-gsap-6" v-for="(benefit, index) in benefits" :key="benefit.id" :class="{ 'wide-card': index === 2 }">
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
import setting from "@/assets/media/img/settings.png";
import building from "@/assets/media/img/building.png";
import backpack from "@/assets/media/img/backpack.png";
import Container from "@/components/common/Container.vue";
import TitleSection from "@/components/common/TitleSection.vue";
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const benefits = [
  { id: 1, icon: setting, text: 'Практико-ориентированный образовательный процесс.' },
  { id: 2, icon: building, text: 'Укрепление связей с бизнесом.' },
  { id: 3, icon: backpack, text: 'Улучшение показателей трудоустройства выпускников.' },
]
onMounted(() => {
  gsap.from(".card-gsap-6", {
    opacity: 0,
    y: 100,
    filter: "blur(10px)", 
    duration: 1,
    ease: "power3.out",
    stagger: 0.3, 
    scrollTrigger: {
      trigger: ".cards-gsap-6",
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
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}

.card {
  background: #F3EEFF;
  padding: 30px;
  border-radius: 20px;
  width:calc(25% - 20px);
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  
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

.text-wrapper {
  width: 100%;
}

.text {
  max-width: 320px;
  font-size: 1.5rem;
  width: 100%;
  text-align: start;
  margin: 0;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wide-card {
  width: calc(50% - 10px);
}


@media (max-width: 1500px) {
}

@media (max-width: 1300px) {
  .card{
    width: calc(50% - 10px);
  }
  .wide-card{
    width: 100%;
  }
}
@media (max-width:768px) {
  .card{
    width: 100%;
    height: auto;
    padding-top: 120px;
  }
  .wide-card{
    width: 100%;
  }
}
</style>