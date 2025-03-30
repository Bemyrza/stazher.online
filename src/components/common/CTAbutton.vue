<template>
  <button :class="[
    'cta-button',
    sizeClass,
    themeClass
  ]" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  size?: 'small' | 'medium' | 'large' | 'auto';
  theme?: 'fill' | 'none';
};

const props = withDefaults(defineProps<Props>(), {
  size: 'auto',
  theme: 'fill'
});

const sizeClass = computed(() => {
  return {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    auto: 'px-5 py-2.5'
  }[props.size];
});

const themeClass = computed(() => {
  return props.theme === 'fill'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';
});
</script>

<style scoped>
.cta-button {
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 18px 50px;
  border-radius: 35px;
  font-size: 18px;
  border: 2px solid #8857FF;
  background-color: #8857FF;
  color: white;
}
</style>