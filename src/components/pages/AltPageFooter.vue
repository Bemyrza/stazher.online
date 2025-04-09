<template>
  <footer class="footer">

    <Container custom_class="footer-wrap">
      <div class="footer-container">
        <div class="footer-main-content">
          <div class="footer-divider-top"></div>
          <div class="footer-left">
            <div class="footer-top">
              <router-link to="/" class="footer-logo-link">
                <icon-logo class="logo" />
              </router-link>
              <p class="footer-text">
                Стажер.online — платформа, объединяющая <br />
                студентов, школьников и начинающих специалистов <br />
                с компаниями, готовыми делиться реальными <br />
                задачами.
              </p>
            </div>

            <div class="footer-policy-links">
              <router-link to="/privacy" class="footer-policy-link">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</router-link>
              <router-link to="/data-agreement" class="footer-policy-link">СОГЛАСИЕ ОБРАБОТКИ ДАННЫХ</router-link>
              <router-link to="/offer" class="footer-policy-link">ОФЕРТА</router-link>
            </div>
          </div>
          <div class="footer-divider-ver"></div>
          <div class="footer-links">
            <div class="footer-links-column">
              <router-link to="/cases" class="footer-link">ВСЕ КЕЙСЫ</router-link>
              <router-link to="/about" class="footer-link">О НАС</router-link>
              <router-link to="/students" class="footer-link">СТУДЕНТАМ</router-link>
            </div>
            <div class="footer-links-column">
              <router-link to="/contacts" class="footer-link">КОНТАКТЫ</router-link>
              <router-link to="/partners" class="footer-link">ПАРТНЕРАМ</router-link>
              <router-link to="/login" class="footer-link">ВОЙТИ</router-link>
            </div>
            <div class="footer-contact-column">
              <p class="footer-text">VK: STAZHER.ONLINE</p>
              <p class="footer-text">PLATFORM: STAZHER.ONLINE</p>
              <p class="footer-text">ПОЧТА: INFO@STAZHER.ONLINE</p>
            </div>

   
          </div>
          <div class="footer-divider"></div>
        </div>

        <div class="footer-bottom">
          <img src="../../assets/media/img/Стажер.онлайн.svg" alt="" />
        </div>

      </div>
    </Container>
  </footer>
</template>


<script setup lang="ts">
import Container from '../common/Container.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
</script>

<style scoped lang="scss">
.footer {

  width: 100%;
  background-color: #1e1e1e;
  color: white;
  padding-bottom: 30px;
}

.footer-wrap {
  margin-bottom: 0;
}

.footer-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer-divider {
  height: 1px;
  width: 100vw;
  background: #ffffff99;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.footer-divider-top {
  height: 1px;
  width: 100vw;
  background: #ffffff99;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.footer-divider-ver {
  width: 1px;
  height: 100%;
  background: #ffffff99;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(50%);
}

.footer-main-content {
  width: 100%;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: auto;
  position: relative;
  padding-bottom: 30px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 50%;
}

.footer-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 84px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

.footer-policy-links {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 32px;
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  justify-content: flex-start;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: calc(100% - 100px);
  }
}

.footer-links-column,
.footer-contact-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-logo-link {
  display: block;
}

.logo {
  width: 100px;
  height: auto;
}

.footer-text {
  font-weight: 400;
  color: #ffffff99;
  font-size: 1rem;
  line-height: 120%;
}

.footer-link {
  color: #ffffff99;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s ease;

  &:hover {
    color: #8857ff;
  }
}

.footer-policy-link {
  color: #ffffff99;
  font-size: 14px;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {

  }
}

.footer-bottom {
  width: 100%;
  text-align: center;

  color: #8857ff;
  font-family: 'Roboto Thin', sans-serif;
  margin-top: 30px;
  padding: 0 24px;
}

@media (max-width: 900px) {
  .footer-divider-ver {
    display: none;
  }

  .footer-left {
    max-width: 100%;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

}
</style>
