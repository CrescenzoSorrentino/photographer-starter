<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  image: string
  heroImage: string
  type: string
  poster: string
}>()
</script>

<template>
  <section class="hero">
    <template v-if="type === 'video'">
      <video
        class="hero__media"
        autoplay muted loop playsinline
        :poster="poster"
      >
        <source :src="image" type="video/mp4" />
      </video>
    </template>
    <img
      v-else
      :src="heroImage || image"
      :alt="title"
      class="hero__media"
    />

    <div class="hero__overlay" />

    <div class="hero__content">
      <h1 class="hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 70svh;
  overflow: hidden;
}

@media (min-width: 768px) {
  .hero {
    height: 90svh;
  }
}

.hero__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%);
  z-index: 1;
}

.hero__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: var(--space-8) var(--page-padding-x);
}

@media (min-width: 768px) {
  .hero__content {
    padding: var(--space-12) var(--page-padding-x-lg);
  }
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--font-size-3xl);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .hero__title {
    font-size: var(--font-size-4xl);
  }
}

.hero__subtitle {
  font-size: var(--font-size-md);
  color: var(--foreground-muted);
  letter-spacing: var(--letter-spacing-normal);
  margin-top: var(--space-2);
}
</style>
