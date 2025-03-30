<template>
  <footer class="footer">
    <div class="footer__container main-container">
      <div class="footer__left">
        <span class="footer__copyright">©2025 Стажер.онлайн</span>
        <p class="footer__copyright">
          ОГРН: 1247700684373 ИНН: 7743458820 КПП: 774301001 <br />

          Юридический адрес: 125581, город Москва, Флотская ул, д. 13 к. 2, кв. 304. <br />
          Электронная почта: info@stazher.online
        </p>
      </div>
      <nav class="footer__nav">
        <router-link to="/terms" target="_blank" class="footer__link">
          Пользовательское соглашение
        </router-link>
        <router-link to="/policy" target="_blank" class="footer__link">
          Политика конфиденциальности
        </router-link>
        <router-link to="/requisites" target="_blank" class="footer__link">
          Реквизиты
        </router-link>
      </nav>
      <div class="footer__social">
        <a href="https://t.me/stazheronline" target="_blank" rel="noopener noreferrer">
          <icon-telegram />
        </a>
        <a href="https://vk.com/stazheronline" target="_blank" rel="noopener noreferrer">
          <icon-vk />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconTelegram from '@/components/icons/IconTelegram.vue'
import IconVk from '@/components/icons/IconVk.vue'
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  margin-top: auto;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__copyright {
    color: $text-sub-600;
    font-size: 14px;
  }

  &__nav {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  &__link {
    color: $text-sub-600;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $primary-color;
    }
  }

  &__social {
    display: flex;
    gap: 16px;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      color: $text-sub-600;
      transition: color 0.3s ease;

      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
