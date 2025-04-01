<template>
  <div class="mainContainer">
    <div class="flexBlock">
      <h2 class="mainTitle">Отзывы HR-менеджеров</h2>
      <div class="reviewsSection">
        <div class="reviewsBlocks">
          <div class="flexDetails">
            <img class="profilImg" src="../../../assets/media/img/profilImg.png" alt="profilImg" />
            <div class="infoProf">
              <h3 class="name">Анна Андреева</h3>
              <p class="text">
                Хочу выразить большую благодарность Петру! Курсы прошли на высшем уровне. Занятия
                всегда проходили очень круто и качественно. Петр всегда был отзывчив и всегда
                помогал!
              </p>
              <p class="date">24.03.2025</p>
            </div>
          </div>
        </div>
        <div class="reviewsBlocks">
          <div class="flexDetails">
            <img
              class="profilImg"
              src="../../../assets/media/img/twoProfilImg.png"
              alt="profilImg"
            />
            <div class="infoProf">
              <h3 class="name">Бальжинимаева Оюна</h3>
              <p class="text">
                Благодарю за обучение! Очень интересно. Отдельное спасибо преподавателю Марине
                Семеновне! Очень много жизненных примеров, ориентация на человека, много что
                получила для себя лично.
              </p>
              <p class="date">24.03.2025</p>
            </div>
          </div>
        </div>
        <div class="reviewsBlocks">
          <div class="flexDetails">
            <img
              class="profilImg"
              src="../../../assets/media/img/threeProfilImg.png"
              alt="profilImg"
            />
            <div class="infoProf">
              <h3 class="name">Коллектив СПб ГУП "Горэлектротранс"</h3>
              <p class="text">
                Хотим выразить благодарность за объем и подачу материала. Уверены, что переданные
                знания и навыки будут отличным подспорьем в работе и в понимании логики
                автоматизации бизнес-процессов средаствами Ms Excel
              </p>
              <p class="date">24.03.2025</p>
            </div>
          </div>
        </div>
        <button class="line">Ещё</button>
      </div>
    </div>
    <button class="btn">Разместить кейс бесплатно</button>
  </div>
</template>

<style>
.section {
  margin: 50px 20px;
}
.mainTitle {
  font-size: 48px;
  font-weight: 600;
  line-height: 100%;
  color: #000000;
}
.flexBlock {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: 'Inter';
  /* margin: 50px 40px; */
}
.reviewsBlocks {
  width: 100%;
  background-color: #f3eeff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 15px;
}

.flexDetails {
  display: flex;
  justify-content: space-between;
}

.infoProf {
  max-width: 538px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 116px;
  align-self: center;
}

.profilImg {
  width: 131px;
  height: 131px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
}
.name {
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: #000000;
}

.text {
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #00000099;
}

.date {
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #000000;
}
.reviewsSection {
  width: 770px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.line {
  border-top: 1px solid #00000099;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

.btn {
  margin-top: 50px;
  width: 100%;
  height: 68px;
  background-color: #8857ff;
  font-weight: 600;
  font-size: 18px;
  line-height: 80%;
  color: #ffffff;
  border-radius: 50px;
}
</style>
