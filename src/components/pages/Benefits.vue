<template>
  <div class="container">
    <h2 class="title">Преимущества для студентов</h2>
    <div class="cards">
      <div class="card" v-for="benefit in benefits" :key="benefit.id">
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
  </div>
</template>

<script>
import backpackIcon from "../../assets/media/img/backpack.png";
import laptop from "../../assets/media/img/laptop.png";
import student from "../../assets/media/img/student.png";
import sputnick from "../../assets/media/img/sputnick.png";

export default {
  data() {
    return {
      benefits: [
        { id: 1, icon: backpackIcon, text: 'Возможность прокачать навыки и добавить кейсы в портфолио.' },
        { id: 2, icon: laptop, text: 'Получение стажировки или работы без типичного отбора через резюме.' },
        { id: 3, icon: student, text: 'Новые знакомства и работа в команде.' },
        { id: 4, icon: sputnick, text: 'Обратная связь от ведущих работодателей.' }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
  width: 100%;
  max-width: 1500px;
}

.title {
  width: 500px;
  font-size: 2.7rem;
  text-align: start;
  font-weight: bold;
  margin-bottom: 20px;
}

.cards {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
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
  width: 300px;
  font-size: 1.5rem;
  text-align: start;
  margin: 0;
}
</style>