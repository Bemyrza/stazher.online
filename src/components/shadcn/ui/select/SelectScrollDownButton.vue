<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import {
  SelectScrollDownButton,
  type SelectScrollDownButtonProps,
  useForwardProps
} from 'radix-vue'
import { type HTMLAttributes, computed } from 'vue'
import { cn } from '@/components/shadcn/lib/utils'

const props = defineProps<SelectScrollDownButtonProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <select-scroll-down-button
    v-bind="forwardedProps"
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)"
  >
    <slot>
      <chevron-down class="h-4 w-4" />
    </slot>
  </select-scroll-down-button>
</template>
