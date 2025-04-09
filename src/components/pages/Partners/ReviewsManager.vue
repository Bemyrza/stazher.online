<template>
  <Container>
    <div class="flexBlock">
      <TitleSection>Отзывы HR-менеджеров</TitleSection>
      <div class="reviewsSection">
        <div v-for="(review, index) in reviews" :key="index" class="reviewsBlocks">
          <div class="flexDetails">
            <img class="profilImg" :src="review.img" alt="profilImg" />
            <div class="infoProf">
              <h3 class="name">{{ review.name }}</h3>
              <p class="text">{{ review.text }}</p>
              <p class="date">{{ review.date }}</p>
            </div>
          </div>
        </div>
        <button class="line">Ещё</button>
      </div>
    </div>
    <button class="btn">Разместить кейс бесплатно</button>
  </Container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Container from '@/components/common/Container.vue';
import TitleSection from '@/components/common/TitleSection.vue';

const reviews = [
  {
    img: new URL('@/assets/media/img/profilImg.png', import.meta.url).href,
    name: 'Анна Андреева',
    text: 'Хочу выразить большую благодарность Петру! Курсы прошли на высшем уровне. Занятия всегда проходили очень круто и качественно. Петр всегда был отзывчив и всегда помогал!',
    date: '24.03.2025',
  },
  {
    img: new URL('@/assets/media/img/twoProfilImg.png', import.meta.url).href,
    name: 'Бальжинимаева Оюна',
    text: 'Благодарю за обучение! Очень интересно. Отдельное спасибо преподавателю Марине Семеновне! Очень много жизненных примеров, ориентация на человека, много что получила для себя лично.',
    date: '24.03.2025',
  },
  {
    img: new URL('@/assets/media/img/threeProfilImg.png', import.meta.url).href,
    name: 'Коллектив СПб ГУП "Горэлектротранс"',
    text: 'Хотим выразить благодарность за объем и подачу материала. Уверены, что переданные знания и навыки будут отличным подспорьем в работе и в понимании логики автоматизации бизнес-процессов средствами Ms Excel',
    date: '24.03.2025',
  },
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.reviewsBlocks', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.reviewsSection',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    },
  });

  gsap.from('.line', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.reviewsSection',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    },
  });

  gsap.from('.btn', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.btn',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    },
  });
});
</script>

<style scoped>
.section {
  margin: 50px 20px;
}

.mainTitle {
  font-size: 3rem;
  font-weight: 600;
  line-height: 100%;
  color: #000000;
}

.flexBlock {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: 'Inter';
}

.reviewsBlocks {
  width: 100%;
  /* height: auto; */
  background-color: #f3eeff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 15px;
}

.flexDetails {
  display: flex;
  justify-content: space-between;
}

.infoProf {
  max-width: 538px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 116px;
  align-self: center;
}

.profilImg {
  width: 131px;
  height: 131px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
}

.name {
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 100%;
  color: #000000;
}

.text {
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
  color: #00000099;
}

.date {
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
  color: #000000;
}

.reviewsSection {
  width: 770px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.line {
  border-top: 1px solid #00000099;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

.btn {
  margin-top: 50px;
  width: 100%;
  height: 68px;
  background-color: #8857ff;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 80%;
  color: #ffffff;
  border-radius: 50px;
}

@media (max-width: 1424px) {
  .reviewsSection {
    width: 100%;
    margin-top: 50px;
  }

  .reviewsBlocks {
    width: 100%;
    height: auto;
    padding: 15px;
    margin-bottom: 10px;
  }

  .profilImg {
    width: 110px;
    height: 110px;
  }

  /* .name {
    font-size: 1.4rem;
  }

  .text {
    font-size: 1rem;
  }

  .date {
    font-size: 0.875rem;
  } */

  .line {
    margin-top: 20px;
  }

  .btn {
    width: 100%;
    height: 60px;
  }
}

@media (max-width: 768px) {
  .flexBlock {
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
  }

  .mainTitle {
    margin-top: 50px;
  }
  .infoProf{
    height: auto;
    align-self:normal;
  }
  .reviewsSection {
    width: 100%;
    height: auto;
    margin-top: 50px;
  }

  .reviewsBlocks {
    width: 100%;
    /* height: 300px; */
  }

  .flexDetails {
    flex-direction: column;
    /* align-items: center; */
  }

  .profilImg {
    width: 100px;
    height: 100px;
  }
  .name {
    margin-top: 20px;
  }
  .text{
    margin-top: 15px;
  }
  .date{
    margin-top: 15px;
  }

  /* .name {
    margin-top: 10px;
    font-size: 1.4rem;
  }

  .text {
    font-size: 1rem;
    margin-top: 10px;
  }

  .date {
    font-size: 1rem;
  } */

  .btn {
    width: 100%;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .reviewsBlocks {
    padding: 10px;
  }

  .profilImg {
    width: 90px;
    height: 90px;

  }

/* 

  .text {
    font-size: 0.85rem;
  }

  .date {
    font-size: 0.75rem;
  } */

  .btn {
    height: 50px;
    font-size: 1rem;
  }
}
</style>
