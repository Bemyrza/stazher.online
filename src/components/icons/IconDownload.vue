<template>
  <svg
    :width="width"
    :height="height"
    :style="{ ...props }"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.8999 18.3H20.0999V20.1H3.8999V18.3ZM12.8999 13.0548L18.3638 7.59L19.6364 8.8626L11.9999 16.5L4.3634 8.8635L5.636 7.59L11.0999 13.053V3H12.8999V13.0548Z"
      fill="#99A0AE"
    />
  </svg>
</template>

<script setup lang="ts">
import type { IconPropsI } from '@/types/componentsProps/commonProps'

defineProps<IconPropsI>()
</script>

<style scoped lang="scss"></style>
