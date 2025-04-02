<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ custom_class?: string }>();
</script>

<template>
    <section :class="['container', custom_class]">
        <slot/>
    </section>
</template>

<style scoped>
    .container {
        max-width: 1550px;
        margin: 0 auto;
        padding: 0 20px !important;
        margin-bottom: 120px;
    }
</style>
