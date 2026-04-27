<script setup>
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const target = ref(null);
const isVisible = ref(false);
useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting;
  },
  { threshold: 0.1, rootMargin: '50px' }
);
</script>

<template>
  <div
    ref="target"
    class="transition-all duration-300 ease-out"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
  >
    <slot />
  </div>
</template>
