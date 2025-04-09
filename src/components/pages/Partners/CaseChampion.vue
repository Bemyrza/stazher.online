<template>
  <Container>
    <TitleSection align="center">Зачем компаниям Стажер.онлайн?</TitleSection>

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
    duration: 1.5,
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
  justify-content: center;
  gap: 20px;
  height: 658px;
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
  max-width: 621px;
  font-weight: 400;
  font-size: 30px;
  line-height: 120%;
}

.flexdis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 50%;
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
  height: 658px;
  width: 50%;
  position: relative;
}

.video-wrap video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  z-index: 0;
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
    aspect-ratio: 16/9;
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
