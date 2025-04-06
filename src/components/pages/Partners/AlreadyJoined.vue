<template>
  <Container>
    <TitleSection align="center">К нам уже присоединились</TitleSection>
    <div class="joined-list">
        <div class="joined-item" v-for="(item, index) in data" :key="index">
          <img :src="item.image" alt="Company Logo" class="company-logo" />
          <h3 class="company-title">{{ item.title }}</h3>
        </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/common/Container.vue'
import TitleSection from '@/components/common/TitleSection.vue'
import sber from '@/assets/media/icons/SBER.svg'

const data = [
  {
    image: sber,
    title: 'Sberbank'
  },
  {
    image: sber,
    title: 'X5 Retail Group'
  },
  {
    image: sber,
    title: "L'Oréal"
  },
  {
    image: sber,
    title: 'Sberbank'
  }
]
</script>

<style scoped>

.joined-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 100px;
  margin-top: 75px;
  
}

.joined-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    img{
        width: 95px;
        height: 95px;
    }
    h3{
        font-size: 2rem;
        font-weight: 700;
    }
}

</style>
