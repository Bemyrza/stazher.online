<template>
  <Container>
    <TitleSection>Реальная польза для вузов:</TitleSection>
    <div class="cards">
      <div class="card" v-for="(benefit, index) in benefits" :key="benefit.id" :class="{ 'wide-card': index === 2 }">
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

<script setup>
import setting from "@/assets/media/img/settings.png";
import building from "@/assets/media/img/building.png";
import backpack from "@/assets/media/img/backpack.png";
import Container from "@/components/common/Container.vue";
import TitleSection from "@/components/common/TitleSection.vue";


const benefits = [
  { id: 1, icon: setting, text: 'Практико-ориентированный образовательный процесс.' },
  { id: 2, icon: building, text: 'Укрепление связей с бизнесом.' },
  { id: 3, icon: backpack, text: 'Улучшение показателей трудоустройства выпускников.' },
]


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
  padding: 40px;
  border-radius: 10px;
  width: calc(25% - 20px);
  min-width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  /* Обрезка контента, если он выходит за пределы блока */
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
  width: 320px;
  font-size: 1.5rem;
  text-align: start;
  margin: 0;
  word-wrap: break-word;
  /* Разрыв длинных слов */
  overflow: hidden;
  /* Прячем переполненный текст */
  text-overflow: ellipsis;
  /* Многоточие в случае переполнения */
}

.wide-card {
  width: calc(50% - 10px);
  /* Увеличиваем ширину третьего блока */
}

/* Адаптивность */
@media (max-width: 1500px) {
  .title {
    font-size: 2.2rem;
    width: 100%;
    text-align: center;
  }

  .cards {
    justify-content: center;
  }

  .card {
    width: calc(33% - 20px);
    /* 3 карточки в ряд на экранах средних размеров */
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .cards {
    justify-content: center;
  }

  .card {
    width: calc(50% - 20px);
    /* 2 карточки в ряд на экранах маленьких размеров */
    margin-bottom: 20px;
  }

  .icon-wrapper {
    width: 70px;
    height: 70px;
  }

  .icon img {
    width: 40px;
    height: 40px;
  }

  .text {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }

  .cards {
    justify-content: center;
  }

  .card {
    width: 100%;
    /* 1 карточка в ряд на самых маленьких экранах */
    margin-bottom: 20px;
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
  }

  .icon img {
    width: 35px;
    height: 35px;
  }

  .text {
    font-size: 1.1rem;
  }
}
</style>