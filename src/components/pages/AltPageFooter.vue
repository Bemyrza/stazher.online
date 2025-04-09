<template>
  <footer class="footer">
    <Container>
      <div class="footer-container">
        <div class="footer-main-content">
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
        </div>

        <div class="footer-bottom">
          <img src="../../assets/media/img/Стажер.онлайн.svg" alt="">
        </div>
      </div>
    </Container>
  </footer>
</template>


<script setup lang="ts">
import Container from '../common/Container.vue';
import IconLogo from '@/components/icons/IconLogo.vue'
</script>
<style scoped lang="scss">
.footer {
  border-top: 1px solid #ffffff99;
  width: 100%;
  background-color: #1e1e1e;
  padding: 70px 0;
  color: white;
}

.footer-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer-main-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  padding-bottom: 30px;
  border-bottom: 1px solid #ffffff99;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      background-color: #ffffff99;
      transform: translateX(-0.5px);
    }
  }
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 32px;
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

.footer-policy-links {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }
}

.footer-policy-link {
  color: #ffffff99;
  font-size: 14px;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    color: #8857ff;
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

.logo-bottom {
  justify-content: center;
}
</style>

