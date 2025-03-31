<template>
    <div class="container">
      <h2 class="text-center">Партнеры и кейсы:</h2>
      <div class="grid grid-cols-3 gap-4">
        <a href="#" class="case-card">
          <h3>Sberbank</h3>
          <p>"Цифровизация финансовых услуг"</p>
        </a>
        <a href="#" class="case-card">
          <h3>X5 Retail Group</h3>
          <p>"Оптимизация логистики для гипермаркетов"</p>
        </a>
        <a href="#" class="case-card">
          <h3>L'Oréal</h3>
          <p>"Маркетинговая стратегия для нового продукта"</p>
        </a>
        <a href="#" class="case-card">
          <h3>Sberbank</h3>
          <p>"Цифровизация финансовых услуг"</p>
        </a>
        <a href="#" class="case-card">
          <h3>X5 Retail Group</h3>
          <p>"Оптимизация логистики для гипермаркетов"</p>
        </a>
        <a href="#" class="case-card">
          <h3>L'Oréal</h3>
          <p>"Маркетинговая стратегия для нового продукта"</p>
        </a>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container{
    width: 100%;
    max-width: 1500px;
  }
  .grid {
    display: grid;
    gap: 16px;
    width: 100%;
    margin: 0 auto;
  }
  .text-center{
    font-size: 48px;
    margin-top: 30px;
  }
  .case-card {
    margin-top: 20px;
    background-color: #F3EEFF;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none; 
    color: inherit; 
    display: block;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .case-card:hover {
    transform: translateY(-5px);
  }
  
  .case-card h3 {
    margin-top: 80px;
    font-size: 32px;
    font-family: "Inter", sans-serif;

  }
  
  .case-card p {
    color: #555;
    font-size: 14px;
    margin-top: 8px;
  }
  </style>
  