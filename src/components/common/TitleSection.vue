<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ 
    custom_class?: string; 
    align?: 'left' | 'center' | 'right' 
}>();
</script>

<template>
    <h1 :class="['title', custom_class]" :style="{ textAlign: align }">
        <slot/>
    </h1>
</template>

<style scoped>
    .title {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1;
    }
</style>
