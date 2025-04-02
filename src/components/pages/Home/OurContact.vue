<template>
  <Container class="contacts-container">
    <TitleSection class="contacts-title">Наши контакты</TitleSection>
    <div class="contacts-cards">
      <div class="contacts-card" v-for="contact in contacts" :key="contact.id">
        <div class="contacts-icon-wrapper">
          <img :src="contact.icon" alt="icon" class="contacts-icon" />
        </div>
        <div class="contacts-text-wrapper">
          <p class="contacts-text">{{ contact.text }}</p>
          <a :href="contact.link" target="_blank" class="contacts-link">{{ contact.link }}</a>
        </div>
        <a :href="contact.link" target="_blank" class="contacts-button">
          <img :src="transitionIcon" alt="Перейти" class="transition-icon" />
        </a>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import stasherIcon from "@/assets/media/icons/stasherIcon.svg";
import telegramIcon from "@/assets/media/icons/telegramIcon.svg";
import WKicon from "@/assets/media/icons/WkIcon.svg";
import transitionIcon from "@/assets/media/icons/transition.svg";
import { ref } from "vue";
import Container from "@/components/common/Container.vue";
import TitleSection from "@/components/common/TitleSection.vue";
const contacts = ref([
  { id: 1, icon: stasherIcon, text: "Наша платформа", link: "https://stazher.online" },
  { id: 2, icon: telegramIcon, text: "ТГ канал", link: "https://t.me/stazheronline" },
  { id: 3, icon: WKicon, text: "VKontakte", link: "https://vk.com/stazheronline" },
  { id: 4, icon: telegramIcon, text: "ТГ Бот", link: "https://t.me/Stazher_online_bot" }
]);

const transitionIconRef = ref(transitionIcon);
</script>


<style scoped>
.contacts-title{
  margin-left: 30px;
}

.contacts-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
}

.contacts-card {
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 340px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  background: white;
  transition: transform 0.3s ease;
}

.contacts-card:hover {
  transform: translateY(-5px);
}

.contacts-icon-wrapper {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  background-color: #8857FF;
  border-radius: 50%;
}

.contacts-icon {
  width: 30px;
  height: 30px;
}

.contacts-text {
  
  font-size: 1.2rem;
  text-align: start;
  margin: 0 auto;
}

.contacts-link {
  font-size: 1rem;
  color: #555;
  text-decoration: none;
  margin-top: 5px;
  display: block;
}

.contacts-link:hover {
  text-decoration: underline;
}

.contacts-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.transition-icon {
  width: 30px;
  height: 30px;
}

@media (max-width: 1024px) {
  .contacts-cards {
    justify-content: center;
  }

  .contacts-card {
    width: calc(50% - 20px);
    min-width: 280px;
  }

  .contacts-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .contacts-card {
    width: 100%;
    min-width: 250px;
  }

  .contacts-title {
    font-size: 2rem;
  }
}

</style>