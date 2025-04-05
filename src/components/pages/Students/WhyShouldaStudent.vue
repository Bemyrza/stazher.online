<template>
    <Container class="wrap">
        <h1 class="title">
            Зачем студенту <br> решать кейсы?
        </h1>
        <div class="content">
            <p>
                Проблемы: отсутствие практического опыта, непонимание <br> карьерного пути, сложность поиска работы без опыта. <br>
                Как «Стажер.онлайн» помогает в этом: реальный опыт,<br> обратная связь от работодателей, стажировки и <br> предложения о работе.
            </p>
            <img src="../../../assets/media/img/StudentsPage/StudentHero.png" alt="">
        </div>
    </Container>
</template>
  
<script setup>
    import Container from '@/components/common/Container.vue';
</script>
  
<style scoped>
    .wrap{
        display: flex;
        margin-top: 80px;
    }
    .title{
        font-size: 4.375rem;
        font-weight: 500;
        line-height: 95%;
        font-weight: 500;
        width: 50%;
    }
    .content{
        width: 50%;
        p{
            font-size: 1rem;
            margin-bottom: 30px;
        }
        img{
            width: 100%;
        }
    }
</style>
  