<template>
  <div class="requisites flex w-full flex-col gap-4">
    <header class="main-container text-2xl font-bold flex items-center justify-center">
      РЕКВИЗИТЫ КОМПАНИИ
    </header>

    <div class="main-container grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="requisites-card">
        <h3 class="requisites-title">Наименование</h3>
        <p class="requisites-value">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТАЖЕР.ОНЛАЙН"</p>
      </div>

      <div class="requisites-card">
        <h3 class="requisites-title">ИНН</h3>
        <p class="requisites-value">7743458820</p>
      </div>

      <div class="requisites-card">
        <h3 class="requisites-title">КПП</h3>
        <p class="requisites-value">774301001</p>
      </div>

      <div class="requisites-card">
        <h3 class="requisites-title">Расчётный счёт</h3>
        <p class="requisites-value">40702810820000148617</p>
      </div>

      <div class="requisites-card">
        <h3 class="requisites-title">Название банка</h3>
        <p class="requisites-value">ООО "Банк Точка"</p>
      </div>

      <div class="requisites-card">
        <h3 class="requisites-title">БИК</h3>
        <p class="requisites-value">044525104</p>
      </div>

      <div class="requisites-card">
        <h3 class="requisites-title">Корреспондентский счёт</h3>
        <p class="requisites-value">30101810745374525104</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.requisites {
  background-color: #f1f0f3;
  min-height: 100vh;

  header {
    color: $primary-color;
  }
}

.requisites-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

.requisites-title {
  color: $text-sub-600;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.requisites-value {
  color: $text-strong-950;
  font-size: 16px;
  font-weight: 500;
  word-break: break-word;
}
</style>
