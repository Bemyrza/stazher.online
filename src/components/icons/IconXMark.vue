<template>
  <svg
    :width="width"
    :height="height"
    :style="{ ...props }"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.99956 3.93955L8.71206 0.227051L9.77256 1.28755L6.06006 5.00005L9.77256 8.71255L8.71206 9.77305L4.99956 6.06055L1.28706 9.77305L0.226562 8.71255L3.93906 5.00005L0.226562 1.28755L1.28706 0.227051L4.99956 3.93955Z"
      fill="#0E121B"
    />
  </svg>
</template>

<script setup lang="ts">
import type { IconPropsI } from '@/types/componentsProps/commonProps'

defineProps<IconPropsI>()
</script>

<style scoped lang="scss"></style>
