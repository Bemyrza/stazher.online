<template>
  <header id="header" class="header">
    <router-link to="/cases">
      <icon-logo />
    </router-link>
    <div class="header__nav" v-if="!isRegistration">
      <div class="header__nav-left">
        <router-link
          to="/cases"
          :class="[
            'p-16-400',
            'header__nav-link',
            activeRouteName === 'cases' && 'header__nav-link--active'
          ]"
        >
          <icon-all-case class="header__link-icon" />
          <span>Все кейсы</span>
        </router-link>
      </div>
    </div>
    <span class="header__logo-text" v-else>Стажер.онлайн</span>
  </header>
</template>

<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import { ref, watch } from 'vue'
import IconAllCase from '@/components/icons/IconAllCase.vue'
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

  &__new-case {
    display: none;
  }
  @media (max-width: 700px) {
    padding: 8px;

    &__new-case {
      display: flex;
      gap: 3px;
    }
  }

  &__search {
    position: relative;
  }

  &__logo-text {
    position: relative;
    color: $text-sub-600;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    margin-left: 12px;

    animation: 0.5s ease headerLogoFadeIn forwards;
  }

  @keyframes headerLogoFadeIn {
    0% {
      transform: translateX(-10px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &__profile {
    display: flex;
    align-items: center;
    gap: 8px;
    border: $default-border;
    border-radius: 10px;
    padding: 4px;
    height: 40px;

    &-dropdown {
      margin: 0 14px 0 2px;
      transition: transform 0.3s ease;

      &--rotate {
        transform: rotate(180deg);
      }
    }
  }

  &__profile-name {
    @media (max-width: 700px) {
      display: none;
    }
  }

  &__add-case {
    @media (max-width: 700px) {
      display: none;
    }
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;

    &-link {
      color: #525866;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-radius: 10px;
      transition: 0.3s ease;

      &--active {
        color: $default-black;
        background: #f5f7fa;

        * {
          fill: $primary-color;
        }
      }
    }

    &-left {
      margin-left: 24px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    &-right {
      display: flex;
      align-items: center;
      gap: 29px;
    }
  }

  &__link-icon {
    @media (max-width: 700px) {
      display: none;
    }
  }

  &__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
}

@media (max-width: $mobile-max-width) {
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 8px;
    height: 60px;

    &__nav {
      margin-right: 0;

      &-left {
        width: 100%;
        margin-left: 8px;
      }

      &-right {
        &-btn {
          display: none;
        }
      }

      &-link {
        font-size: 12px;
      }
    }

    &__nav-link-help {
      display: none;
    }
    &__search {
      display: none;
    }
  }
}
</style>
