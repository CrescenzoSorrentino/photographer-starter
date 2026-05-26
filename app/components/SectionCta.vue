<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <section class="cta">
    <p class="cta__label">{{ config.public.ctaLabel }}</p>
    <h2 class="cta__title">{{ config.public.ctaTitle }}</h2>
    <BaseButton :href="`mailto:${config.public.email}`" :label="config.public.ctaButton" />
  </section>
</template>

<style scoped>
.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-20) var(--page-padding-x);
  border-top: 1px solid var(--border);
}

@media (min-width: 768px) {
  .cta {
    padding: var(--space-24) var(--page-padding-x-lg);
  }
}

.cta__label {
  font-size: var(--font-size-sm);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-4);
  text-wrap: balance;
}

.cta__title {
  font-family: var(--font-display);
  font-size: var(--font-size-2xl);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-10);
  text-wrap: balance;
}

@media (min-width: 768px) {
  .cta__title {
    font-size: var(--font-size-3xl);
  }
}
</style>
