<template>
  <Container>
    <TitleSection>Преимущества для <br> бизнеса</TitleSection>
    <div class="cards">
      <div class="card" v-for="benefit in benefits" :key="benefit.id">
        <div class="text-wrapper">
          <h3 class="card-title">{{ benefit.title }}</h3>
          <p class="card-text">{{ benefit.text }}</p>
        </div>
        <div class="icon-wrapper">
          <img :src="benefit.icon" alt="icon" class="icon" />
        </div>
      </div>
    </div>
    <button class="cta-button">Доступ к базе мотивированных студентов, <br> заинтересованных в сфере компании.</button>
  </Container>
</template>

<script setup>
import hourglassIcon from "@/assets/media/img/watch.png";
import graduateIcon from "@/assets/media/img/FeStudent.png";
import briefcaseIcon from "@/assets/media/img/backpack.png";
import starIcon from "@/assets/media/img/star.png";
import Container from "@/components/common/Container.vue";
import TitleSection from "@/components/common/TitleSection.vue";

const benefits = [
  { id: 1, icon: hourglassIcon, title: 'Экономия времени и средств на поиск сотрудников.', text: 'Процесс поиска и отбора действительно заинтересованного сотрудника сокращается в 2 раза!' },
  { id: 3, icon: briefcaseIcon, title: 'Формирование HR-бренда среди молодежи.', text: 'Размещая кейсы для студентов, вы показываете себя как инновационную компанию, которая заботится о профессиональном развитии молодежи.' },
  { id: 2, icon: graduateIcon, title: 'Возможность прямого выхода на большое количество студентов.', text: 'Нет необходимости делать информационные рассылки на каждый вуз. Здесь собраны студенты всех ведущих университетов!' },
  { id: 4, icon: starIcon, title: 'Оценка soft и hard skills кандидатов в реальных рабочих задачах.', text: 'Благодаря кейсам вы можете оценить и профессиональные навыки, и навыки коммуникации, работы в команде.' }
]


</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.card {
  width: 100%;
  height: 162px;
  background: #F3EEFF;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.icon-wrapper {
  min-width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C8B2FF;
  border-radius: 50%;
  overflow: hidden;
}

.icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.card-title {
  max-width: 500px;
  width: 100%;
  font-size: 1.7rem;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  margin-bottom: 20px;
}

.card-text {
  max-width: 500px;
  font-size: 1rem;
  margin: 5px 0 0;
  list-style: 1;
}

.cta-button {
  margin-top: 20px;
  width: 100%;
  background: #8857FF;
  color: white;
  border: none;
  padding: 25px;
  font-size: 2rem;
  line-height: 100%;
  border-radius: 10px;
  cursor: pointer;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
    /* 2 карточки в ряду */
  }

  .card {
    width: 100%;
  }

  .card-title {
    font-size: 1.5rem;
    width: 100%;
  }


  .cta-button {
    font-size: 1.2rem;
    padding: 12px;
  }
}

@media (max-width: 768px) {

  .cards {
    grid-template-columns: 1fr;
    /* 1 карточка в ряду */
  }

  .card {
    width: 100%;
    padding: 15px;
  }

  .card-title {
    font-size: 1.4rem;
  }


  .cta-button {
    font-size: 1.1rem;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .cards {
    grid-template-columns: 1fr;
    /* 1 карточка в ряду */
  }

  .card {
    width: 100%;
    padding: 15px;
  }

  .card-title {
    font-size: 1.3rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 10px;
  }
}
</style>