<script setup lang="ts">
defineProps<{
  label: string
  href?: string
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <a v-if="href" :href="href" class="btn">{{ label }}</a>
  <button v-else class="btn" @click="$emit('click')">{{ label }}</button>
</template>

<style scoped>
.btn {
  display: inline-block;
  background: none;
  border: 1px solid var(--border);
  cursor: pointer;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--foreground-muted);
  padding: var(--space-3) var(--space-8);
  transition: color var(--duration-fast) var(--easing-expo),
              border-color var(--duration-fast) var(--easing-expo);
}

.btn:hover {
  color: var(--foreground);
  border-color: var(--foreground);
}
</style>
