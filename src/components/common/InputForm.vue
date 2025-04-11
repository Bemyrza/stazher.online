<template>
    <div class="form-block">
      <form @submit.prevent="submitForm">
        <div class="input-block">
          <input v-model="form.orgName" type="text" placeholder="Название организации" class="input" />
          <input v-model="form.inn" type="text" placeholder="ИНН" class="input" />
          <input v-model="form.fio" type="text" placeholder="ФИО" class="input" />
          <input v-model="form.phone" type="text" placeholder="Номер" class="input" />
          <input v-model="form.email" type="email" placeholder="Почта" class="input" />
        </div>
  
        <div class="checkbox-form">
          <div class="checkbox-block">
            <legend>Тема запроса</legend>
            <div class="label-grid">
              <label class="label-text">
                <input type="radio" v-model="form.topic" value="Консультация" /> Консультация
              </label>
              <label class="label-text">
                <input type="radio" v-model="form.topic" value="Разработка" /> Разработка кейс-задачи
              </label>
              <label class="label-text">
                <input type="radio" v-model="form.topic" value="Чемпионат" /> Организация кейс-чемпионата
              </label>
              <label class="label-text">
                <input type="radio" v-model="form.topic" value="Другое" /> Другое
              </label>
            </div>
          </div>
        </div>
  
        <label class="checkbox">
          <input type="checkbox" v-model="form.agree" /> Согласие на обработку данных
        </label>
  
        <CTAbutton type="submit" class="submit-button">Связаться</CTAbutton>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import CTAbutton from '@/components/common/CTAbutton.vue'
  
  const form = ref({
    orgName: '',
    inn: '',
    fio: '',
    phone: '',
    email: '',
    topic: 'Консультация',
    agree: false
  })
  
  const submitForm = () => {
    console.log("Форма отправлена:", form.value)
  }
  </script>
  
  <style scoped>
  .form-block {
    width: 100%;
    max-width: 600px;
    background-color: #1E1E1E;

    border-radius: 28px;
    color: white;
  }
  
  .input-block {
    margin-top: 5px;
  }
  
  .input {
    width: 100%;
    padding: 12px;
    border-radius: 38px;
    background-color: #1E1E1E;
    border: 1px solid #FFFFFF66;
    color: white;
    margin-bottom: 8px;
  }
  
  .input::placeholder {
    color: #FFFFFF99;
    font-weight: 400;
    font-size: 1rem;
  }
  
  .checkbox-form {
    border-radius: 20px;
    width: 100%;
    border: 1px solid #FFFFFF66;
  }
  
  .checkbox-block {
    padding: 15px;
  }
  
  .checkbox-form legend {
    font-weight: 500;
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 8px;
  }
  
  .label-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 32px;
  }
  
  .label-text {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
    line-height: 130%;
  }
  
  input[type="radio"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid white;
    background-color: black;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
  }
  
  input[type="radio"]:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
  }
  
  .checkbox {
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    margin-top: 25px;
    color: #fff;
  }
  
  input[type="checkbox"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid white;
    background-color: black;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    margin-right: 10px;
  }
  
  input[type="checkbox"]:checked::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 5px;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  
  .submit-button {
    width: 100%;
    background: #8857FF;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 15px;
    margin-top: 10px;
    color: white;
    cursor: pointer;
  }
  </style>
  