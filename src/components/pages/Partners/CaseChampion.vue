<template>
  <Container>
    <TitleSection align="left">Проведение кейс- <br> чемпионатов</TitleSection>

    <div class="flexChamp">
      <div class="video-wrap">
        <div class="video-player" @click="clickplay">
          <img src="../../../assets/media/icons/play-icon.svg" alt="play" class="imgPhoto" />
        </div>
        <video ref="videoRef" src="../../../assets/media/video/IMG_6075.MP4"></video>
      </div>

      <div class="flexdis">
        <div class="txtChamp">
          <p>Организация соревнований среди студентов для поиска талантов.</p>
        </div>  
        <div class="txtChamp">
          <p>
            Возможность для компаний провести мастер-классы, лекции и познакомиться с
            будущими специалистами.
          </p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'

const videoRef = ref<HTMLVideoElement | null>(null)

const clickplay = (event: MouseEvent) => {
  event.stopPropagation()
  const target = event.currentTarget as HTMLElement
  target.classList.add('hidden')

  if (videoRef.value) {
    videoRef.value.controls = true
    videoRef.value.play()
  }
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from('.txtChamp', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.flexChamp',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    }
  });

  gsap.from('.video-player', {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.flexChamp',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    }
  });
})
</script>

<style scoped>
.flexChamp {
  margin-top: 40px;
  display: flex;
  justify-content: start;
  gap: 20px;
  height: 580px;
}

.txtChamp {
  display: flex;
  align-items: flex-end;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #f3eeff;
}

.txtChamp p {
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 120%;
}

.flexdis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.video-player {
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  background: rgb(255, 255, 255);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}

.video-wrap {
  width: 100%;
  max-width: 360px;
  aspect-ratio: 9 / 16;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
}

.video-wrap video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  background: #000; 
}

/* Кнопка Play */
.video-player {
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}

.imgPhoto {
  width: 40px;
  height: auto;
}

/* Адаптив */
@media (max-width: 1024px) {
  .video-player {
    width: 80px;
    height: 80px;
  }

  .imgPhoto {
    width: 30px;
  }
}

@media (max-width: 768px) {
  .flexChamp {
    flex-direction: column;
    height: auto;
  }

  .video-wrap {
    width: auto;
    height: 100vh; 
    aspect-ratio: auto;
    max-width: none;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video-wrap video {
    height: 100%;
    width: auto; 
    object-fit: contain; 
    background: #000;
  }

  .video-player {
    width: 70px;
    height: 70px;
  }

  .imgPhoto {
    width: 28px;
  }
}

@media (max-width: 480px) {
  .video-player {
    width: 60px;
    height: 60px;
  }

  .imgPhoto {
    width: 24px;
  }
}

.hidden {
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
}


@media (max-width: 1024px) {
  .txtChamp p {
    font-size: 24px;
  }

  .imgPhoto {
    height: 101px;
  }
}

@media (max-width: 768px) {
  .flexChamp {
    flex-direction: column;
    height: auto;
  }

  .imgPhoto {
    height: 61px;
  }

  .video-wrap {
    width: 100%;
    height: auto;
  }

  .video-wrap video {
    height: auto;
  }

  .flexdis {
    width: 100%;
  }

  .txtChamp {
    height: auto;
    padding: 16px;
  }

  .txtChamp p {
    font-size: 20px;
  }

  .video-player {
    width: 90px;
    height: 90px;
    font-size: 60px;
  }
}

@media (max-width: 480px) {
  .txtChamp p {
    font-size: 18px;
  }

  .video-player {
    width: 70px;
    height: 70px;
    font-size: 50px;
  }
}

.imgPhoto {
  height: 41px;
}

.hidden {
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
