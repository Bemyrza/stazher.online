<template>
    <header id="header" class="header">
        <nav class="header__nav-left">
            <router-link to="/cases" class="header__nav-link">ВСЕ КЕЙСЫ</router-link>

            <router-link to="/cases" class="header__nav-link">О НАС</router-link>
            <router-link to="/students" class="header__nav-link">СТУДЕНТАМ </router-link>
        </nav>

        <router-link to="/" class="header__logo">
            <icon-logo />
        </router-link>

        <nav class="header__nav-right">
            <router-link to="/partners" class="header__nav-link">ПАРТНЕРАМ</router-link>
            <router-link to="/contacts" class="header__nav-link">КОНТАКТЫ</router-link>
            <router-link to="/login" class="header__nav-link">ВОЙТИ</router-link>
        </nav>
    </header>
</template>

<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import { ref, watch } from 'vue'
import { type RouteRecordName, useRouter } from 'vue-router'

const router = useRouter()
const activeRouteName = ref<RouteRecordName | null | undefined>()
const isRegistration = ref<boolean>(false)

watch(
    () => router.currentRoute.value,
    () => {
        activeRouteName.value = router.currentRoute.value.name
        isRegistration.value = router.currentRoute.value.name === 'registration'
    }
)
</script>

<style lang="scss" scoped>
.header {
    height: 80px;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

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
}
</style>