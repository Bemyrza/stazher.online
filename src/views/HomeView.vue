<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CTAbutton from '@/components/common/CTAbutton.vue'
import '../assets/main.scss'

const router = useRouter()

onMounted(() => {
  // router.push('/cases')
})
</script>

<template>
  <main class="container">
    <h1 class="title">
      Найдите молодых талантов для вашей компании с помощью кейс-метода
    </h1>
    <p class="subtitle">
      Привлекайте студентов из лучших вузов, проверяйте их навыки в реальных задачах и находите мотивированных
      сотрудников.
    </p>
    <div class="buttons">
      <CTAbutton class="primary">Разместить кейс бесплатно</CTAbutton>
      <CTAbutton class="secondary">Заказать разработку кейса</CTAbutton>
    </div>
    <div class="background"></div>
</main>
</template>

<style scoped>
.main-router {
  background-color: #fff !important;
}
.container {
  text-align: center;
  padding: 60px 20px;
  display: block;
  flex-direction: column;
  align-items: center;
  width: 100vw; 
  max-width: 100%;
  background-color: #fff !important;
  overflow: hidden;
}

.title {
  text-align: center;
  line-height: 1.1;
  max-width: 1000px;
  font-size: 4px;
  margin-bottom: 32px; 
  margin: 0 auto;
}

.subtitle {
  padding: 40px 40px;
  line-height: 1.5;
  max-width: 600px;
  font-size: 18px;
  color: #666;
  margin-bottom: 50px; 
  margin: 0 auto;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap; 
}

.primary, .secondary {
  padding: 18px 50px;
  border-radius: 35px;
  font-size: 18px;
}

.primary {
  border: 2px solid #8857FF;
  background-color: #8857FF;
  color: white;
}

.primary:hover {
  background-color: white;
  color: #8857FF;
}

.secondary {
  background-color: white;
  border: 2px solid #8857FF;
  color: #8857FF;
}

.secondary:hover {
  background-color: #8857FF;
  color: white;
}
.background {
  display: block;
  margin-top: 100px;
  width: 100vw;
  height: 400px;
  background-image: url('../assets/media/img/background.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.title {
  font-size: 4.375rem; /* 70px */
  max-width: 1000px;
  text-align: center;
  line-height: 1.1;
  margin-bottom: 2rem; /* 32px */
  margin: 0 auto;
}

.subtitle {
  font-size: 1.125rem; /* 18px */
  max-width: 600px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 3.125rem; /* 50px */
  margin: 0 auto;
}

/* --- Адаптивная версия --- */

@media (max-width: 1024px) {
  .title {
    font-size: 3.125rem; /* 50px */
    max-width: 90%;
  }

  .subtitle {
    font-size: 1rem; /* 16px */
    max-width: 80%;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem; /* 40px */
    max-width: 100%;
  }

  .subtitle {
    font-size: 0.9375rem; /* 15px */
    max-width: 90%;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 2rem; /* 32px */
    max-width: 100%;
  }

  .subtitle {
    font-size: 0.875rem; /* 14px */
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.75rem; /* 28px */
  }

  .subtitle {
    font-size: 0.8125rem; /* 13px */
  }
}

@media (max-width: 360px) {
  .title {
    font-size: 1.5rem; /* 24px */
  }

  .subtitle {
    font-size: 0.75rem; /* 12px */
  }
}



</style>
