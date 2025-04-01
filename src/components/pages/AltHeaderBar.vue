<template>
    <header id="header" class="header">
        <nav class="header__nav header__nav-left">
            <router-link to="/cases" class="header__nav-link">ВСЕ КЕЙСЫ</router-link>
            <router-link to="/cases" class="header__nav-link">О НАС</router-link>
            <router-link to="/students" class="header__nav-link">СТУДЕНТАМ</router-link>
        </nav>

        <router-link to="/" class="header__logo">
            <img src="../../assets//media/icons/stasherIcon.svg" alt="">
        </router-link>

        <nav class="header__nav header__nav-right">
            <router-link to="/partners" class="header__nav-link">ПАРТНЕРАМ</router-link>
            <router-link to="/contacts" class="header__nav-link">КОНТАКТЫ</router-link>
            <router-link to="/login" class="header__nav-link">ВОЙТИ</router-link>
        </nav>

        <button class="header__burger" @click="toggleMenu">☰</button>
        <nav v-if="isMenuOpen" class="header__mobile-nav">
            <router-link to="/cases" class="header__nav-link" @click="toggleMenu">ВСЕ КЕЙСЫ</router-link>
            <router-link to="/cases" class="header__nav-link" @click="toggleMenu">О НАС</router-link>
            <router-link to="/students" class="header__nav-link" @click="toggleMenu">СТУДЕНТАМ</router-link>
            <router-link to="/partners" class="header__nav-link" @click="toggleMenu">ПАРТНЕРАМ</router-link>
            <router-link to="/contacts" class="header__nav-link" @click="toggleMenu">КОНТАКТЫ</router-link>
            <router-link to="/login" class="header__nav-link" @click="toggleMenu">ВОЙТИ</router-link>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { type RouteRecordName, useRouter } from 'vue-router';

const router = useRouter();
const activeRouteName = ref<RouteRecordName | null | undefined>();
const isRegistration = ref<boolean>(false);
const isMenuOpen = ref<boolean>(false);

watch(
    () => router.currentRoute.value,
    () => {
        activeRouteName.value = router.currentRoute.value.name;
        isRegistration.value = router.currentRoute.value.name === 'registration';
    }
);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
.header {
    height: 80px;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    position: relative;
    border-bottom: none;  /* Убирает возможную границу снизу */
    box-shadow: none; 

    &__logo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 2;
    }

    &__nav-left,
    &__nav-right {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__nav-link {
        color: #525866;
        padding: 8px 12px;
        border-radius: 10px;
        transition: 0.3s ease;

        &:hover {
            background: #f5f7fa;
        }
    }

    &__burger {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }

    &__mobile-nav {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        padding: 20px;
    }
}

@media (max-width: 768px) {
    .header {
        padding: 10px 20px;

        &__nav-left,
        &__nav-right {
            display: none;
        }

        &__burger {
            display: block;
        }
    }

    .header__mobile-nav {
        display: flex;
    }
}
</style>