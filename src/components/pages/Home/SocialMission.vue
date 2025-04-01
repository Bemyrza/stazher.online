<template>
    <div class="container">
      <div class="contain">
        <div class="title">Социальная миссия:</div>
        <div class="content">
          <div v-for="(item, index) in missionItems" :key="index" class="mission-item">
            <div class="icon-container">
              <img :src="item.icon" alt="icon" class="icon" />
            </div>
            <p class="text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import student from "@/assets/media/img/FeStudent.png"
  import teacher from "@/assets/media/img/tarcher.png"
  import track from "@/assets/media/img/track.png"
  export default {
    data() {
      return {
        missionItems: [
          {
            icon: student,
            text: 'Мы формируем новую культуру взаимодействия между образованием и бизнесом, сокращая кадровый дефицит и снижая "трудовой гостинг" среди молодежи.'
          },
          {
            icon: teacher,
            text: 'Для преподавателей: ограниченные возможности по включению практических заданий в образовательный процесс.'
          },
          {
            icon: track,
            text: 'Решение снижает нагрузку на преподавателей, позволяя интегрировать в образовательный процесс кейсы от бизнеса, повышая практико-ориентированность обучения и конкурентоспособность'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    padding: 2rem;
  }
  
  .contain {
    display: flex;
        gap: 2rem;
  }
  
  .title {
    width: 50%;
    font-weight: bold;
    font-size: 2.5rem;
  }
  
  .content {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .mission-item {
    display: flex;
    align-items: start;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #d1d5db;
  }
  
  .icon-container {
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
    background-color: #e9d5ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon {
    width: 3rem;
    height: 3rem;
  }
  
  .text {
    width: 350px;
    line-height: 120%;
    margin-left: 80px;
    color: #4b5563;
  }
  
  /* Мобильная адаптивность */
  @media (max-width: 768px) {
    .contain {
      flex-direction: column;
      align-items: center;
    }
  
    .title {
      width: 100%;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1.5rem;
    }
  
    .content {
      width: 100%;
    }
  
    .mission-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #d1d5db;
    }
  
    .icon-container {
      width: 4rem;
      height: 4rem;
    }
  
    .icon {
      width: 2.5rem;
      height: 2.5rem;
    }
  
    .text {
      width: 100%;
      text-align: center;
      margin-left: 0;
    }
  }
  
  @media (max-width: 480px) {
    .title {
      font-size: 1.8rem;
    }
  
    .text {
      font-size: 0.9rem;
    }
  }
  </style>
  