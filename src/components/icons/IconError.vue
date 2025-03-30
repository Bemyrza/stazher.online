<template>
  <svg
    :width="width ?? 16"
    :height="height ?? 16"
    :style="{ ...props }"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 14C4.6862 14 2 11.3138 2 8C2 4.6862 4.6862 2 8 2C11.3138 2 14 4.6862 14 8C14 11.3138 11.3138 14 8 14ZM7.4 9.8V11H8.6V9.8H7.4ZM7.4 5V8.6H8.6V5H7.4Z"
      fill="#FB3748"
    />
  </svg>
</template>

<script setup lang="ts">
import type { IconPropsI } from '@/types/componentsProps/commonProps'

defineProps<IconPropsI>()
</script>

<style scoped lang="scss"></style>
