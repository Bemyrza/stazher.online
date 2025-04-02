<template>
    <Container >
        <PartnersBlock />
        <div class="register-button-container">
            <CTAbutton class="register-button">Зарегистрироваться</CTAbutton>
        </div>
    </Container>
</template>

<script setup lang="ts">
import PartnersBlock from "@/components/pages/Home/Partners.vue";
import CTAbutton from "@/components/common/CTAbutton.vue";
import Container from "@/components/common/Container.vue";

</script>



<style scoped>


.register-button-container {
  display: flex;
  justify-content: center;
}

.register-button {
  width: 100%;
  background-color: #8857FF;
  color: white;
  font-size: 1.5rem;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-button:hover {
  background-color: #7747E3;
}

@media (max-width: 1200px) {
  .register-button {
    font-size: 1.3rem;
    padding: 12px 25px;
  }
}

@media (max-width: 900px) {
  .register-button {
    font-size: 1.2rem;
    padding: 10px 20px;
  }
}

@media (max-width: 600px) {
  .partners-title {
    font-size: 2rem;
  }

  .register-button {
    font-size: 1rem;
    padding: 10px 15px;
    border-radius: 20px;
  }
}

@media (max-width: 400px) {
  .partners-title {
    font-size: 1.8rem;
  }

  .register-button {
    font-size: 0.9rem;
    padding: 8px 12px;
  }
}


</style>