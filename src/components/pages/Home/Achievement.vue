<template>
  <section class="achievements-container">
    <h2 class="title">Наши достижения и партнеры</h2>
    <p class="description">
      Компании размещают кейсы — реальные задачи из бизнеса. Студенты решают кейсы и отправляют
      решения работодателям. Работодатели оценивают решения, выбирают лучших кандидатов и приглашают
      на стажировки или работу.
    </p>
    <div class="cards">
      <div class="card">
        <span class="number">50 000</span>
        <h3>Количество пользователей платформы (студентов и компаний)</h3>
        <p>
          На нашей платформе зарегистрировано более 50 000 пользователей, включая 30 000 студентов и
          20 000 компаний, активно решающих кейс-задания.
        </p>
      </div>
      <div class="card">
        <span class="number">+100</span>
        <h3>Университеты-партнеры, участвующие в кейс-чемпионатах.</h3>
        <p>В кейс-чемпионатах участвуют более 100 университетов, включая МГУ, СПбГУ и ВШЭ.</p>
      </div>
      <div class="card">
        <span class="number">+500</span>
        <h3>Компании, уже размещающие свои кейсы у нас на платформе.</h3>
        <p>С нами сотрудничают более 500 компаний, включая Sberbank, X5 Retail Group и Siemens.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.achievements-container {
  text-align: center;
  padding: 40px 20px;
  max-width: 1500px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
}

.title {
  font-size: 48px;
  font-weight: 600;
  line-height: 100%;
  color: #000000;
  max-width: 600px;
  margin: 100px auto 40px;
}

.description {
  font-size: 16px;
  font-weight: 400;
  color: #00000099;
  line-height: 120%;
  max-width: 535px;
  margin: 0 auto 40px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
}

.card {
  background: #f3eeff;
  padding: 40px;
  border-radius: 16px;
  width: calc(33.33% - 20px);
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.number {
  font-size: 80px;
  font-weight: 400;
  color: #8857ff;
  line-height: 80%;
  position: absolute;
  top: 20px;
  left: 20px;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 100px 0 20px;
  line-height: 1.2;
}

p {
  max-width: 100%;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-top: 10px;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .cards {
    justify-content: center;
  }

  .card {
    width: calc(50% - 20px);
    min-height: 350px;
  }

  .title {
    font-size: 38px;
  }

  .description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    min-height: 300px;
    padding: 30px;
  }

  .number {
    font-size: 3.5rem;
    top: 15px;
    left: 15px;
  }

  .title {
    font-size: 34px;
  }

  .description {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 28px;
  }

  .description {
    font-size: 14px;
  }

  .card {
    padding: 25px;
  }

  .number {
    font-size: 3rem;
    top: 10px;
    left: 10px;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>
