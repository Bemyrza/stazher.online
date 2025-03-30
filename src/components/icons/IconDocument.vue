<template>
  <svg
    :width="width"
    :height="height"
    :style="{ ...props }"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.5 14V33.4895C33.5014 33.6865 33.464 33.8818 33.3898 34.0643C33.3157 34.2468 33.2064 34.413 33.0681 34.5532C32.9298 34.6935 32.7652 34.8052 32.5837 34.8818C32.4023 34.9585 32.2075 34.9986 32.0105 35H7.9895C7.59472 35 7.21609 34.8433 6.93679 34.5643C6.6575 34.2853 6.5004 33.9068 6.5 33.512V6.488C6.5 5.6825 7.1735 5 8.003 5H24.4955L33.5 14ZM30.5 15.5H23V8H9.5V32H30.5V15.5ZM14 12.5H18.5V15.5H14V12.5ZM14 18.5H26V21.5H14V18.5ZM14 24.5H26V27.5H14V24.5Z"
      fill="#7D52F4"
    />
  </svg>
</template>

<script setup lang="ts">
import type { IconPropsI } from '@/types/componentsProps/commonProps'

defineProps<IconPropsI>()
</script>

<style scoped lang="scss"></style>
