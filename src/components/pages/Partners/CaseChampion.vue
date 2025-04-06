<template>
    <Container>
    <TitleSection>Зачем компаниям Стажер.онлайн?</TitleSection>
    <div class="flexChamp">
      <div class="video-wrap">
        <div class="video-player" @click="clickplay"><img src="../../../assets/media/icons/play-icon.svg" alt=""></div>
        <video ref="videoRef" src="../../../assets/media/video/IMG_6075.MP4"></video>
      </div>
      <div class="flexdis">
        <div class="txtChamp">
          <p>Организация соревнований среди студентов для поиска талантов.</p>
        </div>
        <div class="txtChamp">
          <p>
            Возможность для компаний провести мастер-классы, лекции и познакомиться с
            будущимиспециалистами.
          </p>
        </div>
      </div>
    </div>
    </Container>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Container from '@/components/common/Container.vue';
import TitleSection from '@/components/common/TitleSection.vue';

const videoRef = ref<HTMLVideoElement | null>(null);

const clickplay = (event: MouseEvent) => {
  event.stopPropagation()
  const target = event.currentTarget as HTMLElement;
  target.classList.add('hidden');

  if (videoRef.value) {
    videoRef.value.controls = true;
    videoRef.value.play();
  }

  console.log(videoRef.value?.children);
};


</script>
<style scoped>

.champImg {
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
}

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
  z-index: 1; 
  background: rgb(255, 255, 255);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  img{
    width: 50%;
    height: 50%;
  }
}


.video-wrap{
  height: 658px;
  width: 50%;
  position: relative;
  video{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
    position: relative;
    z-index: 0;
  }
}
.hidden {
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
