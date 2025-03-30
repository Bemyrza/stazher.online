<script setup>
import CTAbutton from '@/components/common/CTAbutton.vue'
</script>

<template>
  <div class="form-container">
    <h2 class="form-title">Заполнить форму для связи</h2>
    <form class="form">
      <input type="text" placeholder="Ваше ФИО" class="form-input" />
      <input type="tel" placeholder="Ваш номер телефона" class="form-input" />
      <input type="email" placeholder="Ваш email" class="form-input" />
      <CTAbutton class="form-button">Организовать кейс-чемпионат</CTAbutton>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  background-color: #F3EEFF;
  padding: 24px;
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  text-align: center;
  margin: auto;
}

.form-title {
  font-weight: 500px;
  line-height: 100%;
  width: 300px;
  font-size: 32px;
  margin-bottom: 76px;
  color: #000;
  text-align: start;  
}

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 16px;
  background-color: #F3EEFF;
}

.form-button {
  background-color: #8857FF;
  color: white;
  font-size: 16px;
  border-radius: 25px;
  margin-top: 25px;
  padding: 14px;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.form-button:hover {
  background-color: #6a42cc;
}
</style>
