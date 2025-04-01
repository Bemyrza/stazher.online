<template>
  <div class="mainContainer">
    <h1 class="bestTitle">Как начать сотрудничество?</h1>
    <div class="startFlex">
      <div class="countStart">
        <div class="firstStart">01</div>
        <p class="startDis">
          Зарегистрируйтесь на платформе и разместите кейс бесплатно уже сейчас!
        </p>
      </div>
      <div class="columbCoop">
        <div class="columbStart">
          <div class="firstStart">01</div>
          <p class="startDis">Запросить организацию кейс-чемпионата.</p>
        </div>
        <div class="columbStart">
          <div class="firstStart">01</div>
          <p class="startDis">Связаться с нами для разработки кейс-задачи.</p>
        </div>
      </div>
      <img class="startImage" src="../../../assets/media/img/startImage.png" alt="image" />
    </div>
  </div>
</template>

<style>
.startFlex {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  height: 516px;
  width: 100%;
  gap: 20px;
}

.countStart {
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background-color: #f3eeff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.firstStart {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #8857ff;
  font-size: 24px;
  font-weight: 400;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.startDis {
  font-weight: 400;
  font-size: 30px;
  line-height: 120%;
  color: #000000;
}

.columbStart {
  height: 248px;
  border-radius: 20px;
  background-color: #f3eeff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.columbCoop {
  width: 45%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.startImage {
  border-radius: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}
</style>
