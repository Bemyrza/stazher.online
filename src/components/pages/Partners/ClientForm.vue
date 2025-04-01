<template>
    <div class="form-container">
      <h2>Форма клиента</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="form.organization" placeholder="Название организации" required />
        <input type="text" v-model="form.inn" placeholder="ИНН" required />
        <input type="text" v-model="form.fullName" placeholder="ФИО" required />
        <input type="tel" v-model="form.phone" placeholder="Номер телефона" required />
        <input type="email" v-model="form.email" placeholder="Электронная почта" required />
        <button type="submit" class="submit-btn">Связаться</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const form = ref({
    organization: "",
    inn: "",
    fullName: "",
    phone: "",
    email: "",
  });
  
  const submitForm = () => {
    console.log("Отправленные данные:", form.value);
    alert("Форма отправлена!");
  };
  </script>
  
  <style>
  .form-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    background: #f3eeff;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .submit-btn {
    width: 100%;
    padding: 10px;
    background: #6a5acd;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-btn:hover {
    background: #483d8b;
  }
  </style>
  