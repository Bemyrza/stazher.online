<template>
  <div class="mainContainer">
    <h2 class="title">Зачем компаниям Стажер.онлайн?</h2>
    <div class="flexChamp">
      <img class="champImg" src="../../../assets/media/img/Champ.png" alt="image" />
      <div class="flexdis">
        <div class="txtChamp">
          <p>Организация соревнований среди студентов для поиска талантов.</p>
        </div>
        <div class="txtChamp">
          <p>
            Возможность для компаний провести мастер-классы, лекции и познакомиться с
            будущимиспециалистами.
          </p>
        </div>
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

.txtChamp {
  display: flex;
  align-items: flex-end;
  border-radius: 20px;
  padding: 20px;
  width: 770px;
  height: 100%;
  background-color: #f3eeff;
}

.txtChamp p {
  max-width: 621px;
  font-weight: 400;
  font-size: 30px;
  line-height: 120%;
}
.flexdis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
</style>
