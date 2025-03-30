<template>
  <svg
    :width="width ?? 16"
    :height="height ?? 17"
    :style="{ ...props }"
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.125 2L2.25 0.75L0.375 2V11.375C0.375 12.4106 1.21447 13.25 2.25 13.25H11C12.0356 13.25 12.875 12.4106 12.875 11.375V9.5H11.625V2L9.75 0.75L7.875 2L6 0.75L4.125 2ZM10.375 9.5H2.875V11.375C2.875 11.7202 2.59518 12 2.25 12C1.90482 12 1.625 11.7202 1.625 11.375V2.66898L2.25 2.25231L4.125 3.50231L6 2.25231L7.875 3.50231L9.75 2.25231L10.375 2.66898V9.5ZM11 12H4.01831C4.08741 11.8045 4.125 11.5941 4.125 11.375V10.75H11.625V11.375C11.625 11.7202 11.3452 12 11 12Z"
      fill="#525866"
    />
  </svg>
</template>

<script setup lang="ts">
import type { IconPropsI } from '@/types/componentsProps/commonProps'

defineProps<IconPropsI>()
</script>

<style scoped lang="scss"></style>
