<script setup lang="ts">
import { DropdownMenuGroup, type DropdownMenuGroupProps } from 'radix-vue'

const props = defineProps<DropdownMenuGroupProps>()
</script>

<template>
  <dropdown-menu-group v-bind="props">
    <slot />
  </dropdown-menu-group>
</template>
