<template>
  <Container>
    <div class="flexBlock">
      <TitleSection>Отзывы HR-менеджеров</TitleSection>
      <div class="reviewsSection">
        <div v-for="(review, index) in visibleReviews" :key="index" class="reviewsBlocks"
          :class="review.anim && 'anim-block'">
          <div class="flexDetails">
            <img class="profilImg" :src="review.img" alt="profilImg" />
            <div class="infoProf">
              <h3 class="name">{{ review.name }}</h3>
              <p class="text">{{ review.text }}</p>
              <p class="date">{{ review.date }}</p>
            </div>
          </div>
        </div>
        <button class="line" @click="toggleReviews">{{ showMore ? 'Ещё' : 'Скрыть' }}</button>
      </div>
    </div>
    <button class="btn">Разместить кейс бесплатно</button>
  </Container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
  {
    img: new URL('@/assets/media/img/profilImg.png', import.meta.url).href,
    name: 'Иван Иванов',
    text: 'Очень доволен курсами! Обучение было на высшем уровне, отлично подготовленные материалы и индивидуальный подход.',
    date: '24.03.2025',
    anim: true
  },
  {
    img: new URL('@/assets/media/img/threeProfilImg.png', import.meta.url).href,
    name: 'Мария Петрова',
    text: 'Прекрасный курс! Много полезной информации, которую можно сразу применять на практике. Преподаватель отличный!',
    date: '24.03.2025',
    anim: true
  },
];

const visibleReviews = ref(reviews.slice(0, 3));
const showMore = ref(true);

const toggleReviews = () => {
  if (showMore.value) {
    const currentLength = visibleReviews.value.length;
    const nextReviews = reviews.slice(currentLength, currentLength + 2);
    visibleReviews.value = [...visibleReviews.value, ...nextReviews];
  } else {
    visibleReviews.value = reviews.slice(0, 3);
  }
  showMore.value = !showMore.value;
};

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
  transition: all 1s;
}

.flexBlock {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: 'Inter';
}

.reviewsBlocks {
  width: 100%;
  background-color: #f3eeff;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 15px;
}

.anim-block {
  animation: fadeup 1s 0s 1 ease;
}

@keyframes fadeup {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0)
  }
}

.flexDetails {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.infoProf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 538px;
}

.profilImg {
  width: 131px;
  height: 131px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  margin-right: 20px;
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
  transition: all 1s ease-out;
}

.reviewsSection.open {
  max-height: 2000px;
}

.line {
  border-top: 1px solid #00000099;
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
    display: flex;
    flex-direction: row;
  }

  .infoProf {
    height: auto;
    align-self: normal;
  }

  .reviewsSection {
    width: 100%;
    height: auto;
    margin-top: 50px;
  }

  .reviewsBlocks {
    width: 100%;
  }

  .flexDetails {
    flex-direction: column;
    align-items: start;
  }

  .profilImg {
    order: -1;

    width: 100px;
    height: 100px;

  }

  .name {
    margin-top: 20px;
  }

  .text {
    margin-top: 15px;
  }

  .date {
    margin-top: 15px;
  }

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

  .btn {
    height: 50px;
    font-size: 1rem;
  }
}
</style>
