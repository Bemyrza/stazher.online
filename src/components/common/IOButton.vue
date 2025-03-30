<template>
  <button
    :style="windowWidth >= 768 ? { width: width + 'px' } : {}"
    :class="[
      'button ',
      { 'w-full': fullWidth },
      { button: true },
      { 'button--outlined': outlined },
      { 'button--gray': gray },
      `button--${background}`,
      { 'button--thin': thin },
      { 'button--light': light }
    ]"
    :disabled="disable"
  >
    <slot />
    <IconPlus v-if="icon" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IconPlus from '../icons/IconPlus.vue'

defineProps<{ width?: number; fullWidth?: boolean; outlined?: boolean; gray?: boolean; icon?: boolean; thin?: boolean; light?: boolean; background?: string; disable?: boolean }>()

const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $primary-color;
  border-radius: 8px;
  border: none;
  color: $default-white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  transition: $default-transition;

  &:disabled {
    background-color: $disabled-color;
    cursor: default;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:hover {
    opacity: 0.8;
  }

  &--outlined {
    background: none;
    border: 2px solid $primary-color;
    color: $primary-color;
  }
  &--white {
    flex-direction: row-reverse;
    justify-content: center;
    background-color: $default-white;
    color: $additional-color;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    border: $default-border;

    &--disabled {
      background: $bg-weak-50;
      color: $text-disabled-300;
    }
  }

  &--thin {
    padding: 7px 14px;
  }

  &--light {
    color: $primary-color;
    background: $primary-alpha-10;
    padding: 6px 10px;
    height: fit-content;
  }

  &--gray {
    background: $bg-weak-50;
    color: $text-sub-600;
    border: $default-border;
    &:hover {
      opacity: 0.8;
    }
  }
}

@media (max-width: $mobile-max-width) {
  .button {
    width: 100%;
  }
}
</style>
