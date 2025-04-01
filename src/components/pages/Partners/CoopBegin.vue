<template>
  <div class="mainContainer">
    <h2 class="mainTitle">Как начать сотрудничество?</h2>
    <div class="flexChamp">
      <div class="flexdis">
        <div class="txtCoop">
          <p>Заполнить форму и разместить кейс.</p>
          <img src="../../../assets/media/img/coopOne.png" alt="image" />
        </div>
        <div class="txtCoop">
          <p>Запросить организацию кейс-чемпионата.</p>
          <img src="../../../assets/media/img/coopTwo.png" alt="image" />
        </div>
      </div>
      <div class="txtCoopLux">
        <img src="../../../assets/media/img/coopThree.png" alt="image" />
        <p>Связаться с нами для разработки кейс-задачи.</p>
      </div>
    </div>
  </div>
</template>

<style>
.champImg {
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
}

.flexChamp {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 658px;
}

.txtCoop {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 20px;
  padding: 20px;
  width: 770px;
  height: 100%;
  background-color: #f3eeff;
}

.txtCoopLux {
  display: flex; /* Делаем flex-контейнер */
  flex-direction: column; /* Элементы располагаются в колонку */
  border-radius: 20px;
  padding: 20px;
  width: 770px;
  height: 100%;
  background-color: #f3eeff;
}

.txtCoopLux img {
  width: auto;
  height: 385px;
  margin: auto;
}

.txtCoopLux p {
  width: 390px;
  font-weight: 400;
  font-size: 30px;
  line-height: 120%;
  margin-top: auto; 
}

.txtCoop p {
  max-width: 390px;
  font-weight: 400;
  font-size: 30px;
  line-height: 120%;
}

.txtCoop img {
  width: auto;
  height: 250px;
  margin-bottom: 30px;
}

.flexdis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
</style>
