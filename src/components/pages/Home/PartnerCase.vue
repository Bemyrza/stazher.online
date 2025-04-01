<template>
    <div class="partners-container">
        <PartnersBlock />
        <div class="register-button-container">
            <CTAbutton class="register-button">Зарегистрироваться</CTAbutton>
        </div>
    </div>
</template>

<script>
import PartnersBlock from "@/components/pages/Home/Partners.vue";
import CTAbutton from "@/components/common/CTAbutton.vue";

export default {
    components: {
        PartnersBlock,
        CTAbutton
    }
};
</script>



<style scoped>
.partners-container {
  text-align: center;
  padding: 8px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

/* Для заголовка, если он понадобится */
.partners-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Контейнер для кнопки */
.register-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* Основная кнопка */
.register-button {
  width: 100%;
  max-width: 1430px;
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

/* Адаптивность */
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