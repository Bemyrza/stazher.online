<template>
  <footer class="bg-black text-white py-10">
    <div class="max-w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="flex flex-col items-start space-y-4">
        <router-link to="/" class="header__logo">
          <icon-logo class="logo-size" />
        </router-link>
        <p class="footer__p">
          Стажер.online — платформа, объединяющая студентов, школьников и начинающих специалистов с компаниями,
          готовыми делиться реальными задачами.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <div>
          <router-link to="/cases" class="footer__link">ВСЕ КЕЙСЫ</router-link>
          <router-link to="/about" class="footer__link block mt-2">О НАС</router-link>
          <router-link to="/students" class="footer__link block mt-2">СТУДЕНТАМ</router-link>
        </div>
        <div>
          <router-link to="/contacts" class="footer__link">КОНТАКТЫ</router-link>
          <router-link to="/partners" class="footer__link block mt-2">ПАРТНЕРАМ</router-link>
          <router-link to="/login" class="footer__link block mt-2">ВОЙТИ</router-link>
        </div>
        <div>
          <p class="footer__p">VK: STAZHER.ONLINE</p>
          <p class="footer__p">PLATFORM: STAZHER.ONLINE</p>
          <p class="footer__p">ПОЧТА: INFO@STAZHER.ONLINE</p>
        </div>
      </div>
    </div>
    <div class="text-center footer__title px-6">
      <img src="../../assets/media/img/Стажер.онлайн.svg" alt="">
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<style scoped lang="scss">
footer {
  background-color: #1E1E1E;
  padding: 70px 0; 
}

.footer__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%; 
  margin: 0 auto;
}

.footer__p {
  color: #FFFFFF99;
  font-size: 14px;
  line-height: 1.5;
  text-align: start;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.footer__link {
  color: #FFFFFF99;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s ease;
}

.footer__link:hover {
  color: #8857FF;
}

.footer__title {
  width: 99%;
  color: #8857FF;
  font-weight: Roboto Thin;
  margin-top: 30px;
}

.logo-size {
  width: 100px;
  height: auto;
}
</style>
