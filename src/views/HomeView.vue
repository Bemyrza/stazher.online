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
  font-size: 70px;
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


@media (max-width: 1024px) {
  .title {
    font-size: 50px;
    max-width: 90%;
  }

  .subtitle {
    font-size: 16px;
    max-width: 80%;
  }

  .primary, .secondary {
    padding: 16px 40px;
    font-size: 16px;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 36px;
  }

  .subtitle {
    font-size: 14px;
  }

  .buttons {
    flex-direction: column;
  }

  .primary, .secondary {
    width: 100%;
  }
}
</style>
