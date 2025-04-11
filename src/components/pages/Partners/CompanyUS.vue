<template>
  <Container>
    <TitleSection class="Title-Company">Зачем компаниям <br> Стажер.онлайн?</TitleSection>
    <div class="informationBlocks">
      <div class="blockInfo" v-for="(item, index) in infoBlocks" :key="index">
        <h2 class="count">{{ (index + 1).toString().padStart(2, '0') }}</h2>
        <div class="discriptions">
          <h4 class="theme">{{ item.title }}</h4>
          <p class="text">{{ item.text }}</p>
        </div>
      </div>
      <hr class="blockInfo" />
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'

onMounted(() => {

  gsap.registerPlugin(ScrollTrigger);

  const blocks = document.querySelectorAll('.blockInfo');

  blocks.forEach((block, index) => {
    gsap.from(block.querySelector('.count'), {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: block,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    gsap.from(block.querySelector('.discriptions'), {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: block,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

  });
});

const infoBlocks = [
  {
    title: "Эффектиный метод отбора действительно ценных кадров",
    text: `Кейс-метод позволяет глубже оценить навыки кандидатов, их способность решать актуальные для вашего бизнеса проблемы. Это способ позволет эффективно проверить hard и soft-skills, помогая избежать субъективных ошибок и выбрать тех, кто действительно подходит для вашей команды.`,
  },
  {
    title: "Решение бизнес-задач с помощью свежих идей",
    text: `Используя платформу, вы можете представить свои актуальные проблемы и задачи. Студенты и специалисты со всей страны будут работать над ними, предлагая решения, которые могут быть полезны для вашего бизнеса. Это отличный способ получить инновационные идеи и решения для различных аспектов работы вашей компании.`,
  },
  {
    title: "Создание уникальных кейсов на заказ",
    text: `Мы разрабатываем индивидуальные кейс-задачи, которые соответствуют специфике вашего бизнеса и задач. Вы получите возможность оценить навыки и креативность участников через задачи, ориентированные именно на ваш рынок и отрасль.`,
  },
  {
    title: "Проведение онлайн и офлайн кейс-чемпионатов",
    text: `Организация кейс-чемпионатов поможет вашей компании не только выявить перспективных кандидатов, но и повысить узнаваемость вашего бренда среди молодых специалистов. Мы поддерживаем мероприятия любого масштаба, будь то онлайн-чемпионаты или большие офлайн события.`,
  },
  {
    title: "Обучение и развитие сотрудников",
    text: `С помощью кейс-метода можно развивать сотрудников компании, ставя перед ними реальные задачи для решения. Это повышает уровень вовлеченности и мотивации команды, а также помогает выявить скрытые таланты.`,
  },
  {
    title: "Уменьшаем период адаптации новых сотрудников",
    text: `Студенты, которые решают ваши кейсы уже знакомы с задачами ваших отделов. Они понимают с чем им предстоит работать и какие результаты от них ожидаются.`,
  },
  {
    title: "Интеграция ваших задач в образовательный процесс вузов",
    text: `Наши кейсы используются преподавателями в процессе обучения, что позволяет работодателю повысить узнаваемость компании, привлечь к себе заинтересованных студентов и, самое главное, обучить их под задачи своей компании с минимальными усилиями.`,
  },
]
</script>

<style scoped>
.mainContainer {
  padding: 100px 20px 0 20px;
}

.informationBlocks {
  margin-top: 100px;
}

.blockInfo {
  display: flex;
  padding: 30px 0;
  width: 100%;
  border-top: 1px solid #00000099;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

.count {
  width: 52px;
  font-weight: 400;
  font-size: 3rem;
  line-height: 80%;
  letter-spacing: 2%;
  color: #00000099;
}

.discriptions {
  margin-left: 50%;
  max-width: 507px;
}

.theme {
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  color: #000000;
}

.text {
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  color: #00000099;
  margin-top: 20px;
}

@media (max-width: 1024px) {
  .informationBlocks {
    margin-top: 30px;
  }

  .blockInfo {
    flex-direction: column;
    align-items: start;
    text-align: start;
    padding: 30px 0;
    border-top: 1px solid #00000099;
  }

  .count {
    text-align: start;
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  .discriptions {
    margin-left: 0;
    max-width: 100%;
  }

  .theme {
    font-size: 24px;
  }

  .text {
    font-size: 15px;
  }
}
</style>
