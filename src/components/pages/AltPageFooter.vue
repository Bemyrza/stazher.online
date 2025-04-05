<template>
  <footer class="footer">
    <Container>
      <div class="footer-container">
        <div class="footer-left">
          <router-link to="/" class="footer-logo-link">
            <icon-logo class="logo" />
          </router-link>
          <p class="footer-text">
            Стажер.online — платформа, объединяющая <br> студентов, школьников и начинающих специалистов <br> с
            компаниями,
            готовыми делиться реальными <br> задачами.
          </p>

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
        <div class="footer-bottom">
          <div class="footer-policy-links">
            <router-link to="/privacy" class="footer-policy-link">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</router-link>
            <router-link to="/data-agreement" class="footer-policy-link">СОГЛАСИЕ ОБРАБОТКИ ДАННЫХ</router-link>
            <router-link to="/offer" class="footer-policy-link">ОФЕРТА</router-link>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <img src="../../assets/media/img/Стажер.онлайн.svg" alt="">
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
  border: 1px solid #FFFFFF99;
  border-left: none;
  border-right: none;
  border-bottom: none;
  width: 100%;
  background-color: #1E1E1E;
  padding: 70px 0;
  color: white;
}

.footer-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}

.footer-bottom {
  display: flex;
  justify-content: start;
  width: 100%;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  line-height: 120%;

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
    color: #FFFFFF99;
    font-size: 14px;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      color: #8857FF;
    }
  }
}

.footer-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 84px;
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
  color: #FFFFFF99;
  font-size: 1rem;
  line-height: 120%;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer-links-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-contact-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  color: #FFFFFF99;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s ease;

  &:hover {
    color: #8857FF;
  }
}

.footer-bottom {
  width: 100%;
  text-align: center;
  color: #8857FF;
  font-family: 'Roboto Thin', sans-serif;
  margin-top: 30px;
  padding: 0 24px;
}
</style>
