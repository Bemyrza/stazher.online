<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";
import gsap from "gsap";

defineProps<{ 
    custom_class?: string; 
    align?: 'left' | 'center' | 'right' 
}>();

const titleRef = ref(null);

onMounted(() => {
    gsap.from(titleRef.value, { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: titleRef.value,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
        } 
    });
});
</script>

<template>
    <h1 ref="titleRef" :class="['title', custom_class]" :style="{ textAlign: align }">
        <slot/>
    </h1>
</template>

<style scoped>
.title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
}
@media (max-width: 768px) {
    .title {
        margin-top: 20px;
        font-size: 2rem;
    }
}
</style>
