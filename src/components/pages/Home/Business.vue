<template>
  <Container>
    <div class="hero-container hero-container-gsap">
      <div class="hero-content">
        <div class="text-block">
          <div class="title-wrapper">
            <TitleSection align="left">
              Стажер.online — платформа, <br />
              где таланты встречаются<br />
              с бизнесом
            </TitleSection>
          </div>
          <p class="description description-gsap-2">
            Современное образование не всегда соответствует <br />
            требованиям рынка: выпускникам не хватает <br />
            практических навыков, а работодателям — удобного <br />
            инструмента для отбора стажеров. Стажер.online <br />
            решает эту проблему с помощью кейс-метода.
          </p>
        </div>
      </div>
      <div class="important-block">
        <div class="cards">
          <div class="card card-gsap-2" v-for="(card, index) in cards" :key="index">
            <span class="card-number">{{ card.number }}</span>
            <div class="avatar-container">
              <img :src="card.avatar" :alt="card.alt" class="avatar" />
            </div>
            <p class="card-text">{{ card.text }}</p>
          </div>
        </div>
        <div class="image-block">
          <img :src="backgroundPhoto" alt="Фоновое изображение" class="hero-image" />
        </div>
      </div>
      <CTAbutton class="register-button">Зарегистрироваться</CTAbutton>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'
import studentAvatar from '@/components/icons/students.svg'
import employerAvatar from '@/components/icons/employer.svg'
import backgroundPhoto from '@/assets/media/img/Rectangle.png'
import CTAbutton from '@/components/common/CTAbutton.vue'

gsap.registerPlugin(ScrollTrigger)

const cards = ref([
  {
    number: '01',
    avatar: studentAvatar,
    alt: 'Студент',
    text: 'Для студентов — возможность применять знания на практике, решая реальные задачи бизнеса, прокачать навыки и получить работу мечты.'
  },
  {
    number: '02',
    avatar: employerAvatar,
    alt: 'Работодатель',
    text: 'Для работодателей — эффективный способ оценить кандидатов в деле, находить мотивированных стажеров и выращивать будущих специалистов.'
  }
])

onMounted(() => {
  gsap.from('.hero-container-gsap', {
    opacity: 0.5,
    y: 30,
    filter: 'blur(10px)',
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.hero-container-gsap',
      start: 'top 140%',
      end: 'top -10%',
    }
  })
})
</script>
<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1500px;
  padding: 10px;
  margin-left: 15px;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.text-block {
  width: 100%;
  text-align: left;
  display: flex;
}

.description {
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  color: #00000099;
  font-weight: 400;
  margin-left: 6%;
  line-height: 120%;
  text-align: start;
}

.important-block {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 120px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 20px;
  max-width: 900px;
}

.card {
  background: #f3eeff;
  padding: 20px 20px 54px 20px;
  border-radius: 20px;
  height: 516px;
  max-width: 375px;
  display: flex;
  align-items: end;
  text-align: center;
  position: relative;
}

.card-number {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 3.5rem;
  color: #00000099;
}

.avatar-container {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 96px;
  height: 96px;
  background-color: #8857ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 85px;
  height: 85px;
}

.card-text {
  font-size: 1.4rem;
  color: #000000;
  /* margin-top: 70%; */
  text-align: start;
}

.image-block {
  flex: 1;
}

.hero-image {
  width: 770px;
  height: 516px;
  /* object-fit: cover; */
}

.register-button {
  display: block;
  width: 100%;
  padding: 20px;
  margin: 20px auto;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  color: white;
  background: #8857ff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 40px;
}

.register-button:hover {
  background: #634dff;
}

@media (max-width: 1280px) {
  .important-block {
    flex-direction: column;
  }
  .card {
    max-width: 100%;
  }
  .cards {
    max-width: 100%;
  }
  .image-block {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

@media (max-width: 1000px) {
  .important-block {
    margin-top: 40px;
  }
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .text-block {
    width: 100%;
  }

  .title {
    width: 90%;
    font-size: 2rem;
    text-align: center;
  }

  .description {
    width: 90%;
    font-size: 1rem;
    margin-left: 0;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .card-text {
    font-size: 1.5rem;
    /* margin-top: 55%; */
  }

  .important-block {
    flex-direction: column;
  }

  .image-block {
    order: 1;
    width: 100%;
    text-align: center;
  }

  .hero-image {
    width: 100%;
    height: auto;
  }
}
@media (max-width: 768px) {
  .card{
    height: 450px;
  }
  .hero-content {
    
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text-block {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
  }

  .description {
    font-size: 0.8rem;
    margin-top: 20px;
    br {
      display: none;
    }
  }
}



.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
