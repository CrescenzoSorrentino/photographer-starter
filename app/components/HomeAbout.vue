<script setup lang="ts">
const config = useRuntimeConfig()

const services = (config.public.aboutServices as string).split(',').map(s => s.trim()).filter(Boolean)
</script>

<template>
  <section class="about">
    <div class="about__photo-wrap">
      <img class="about__photo" :src="config.public.aboutPhoto" :alt="config.public.aboutName" />
    </div>

    <div class="about__body">
      <p class="about__label">Chi sono</p>
      <h2 class="about__name">{{ config.public.aboutName }}</h2>
      <p class="about__bio">{{ config.public.aboutBio }}</p>

      <ul v-if="services.length" class="about__services">
        <li v-for="service in services" :key="service">{{ service }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  padding: var(--space-16) var(--page-padding-x);
  border-top: 1px solid var(--border);
}

.about__photo-wrap {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.about__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__label {
  font-size: var(--font-size-sm);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-4);
}

.about__name {
  font-family: var(--font-display);
  font-size: var(--font-size-3xl);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-6);
}

.about__bio {
  font-size: var(--font-size-lg);
  color: var(--foreground-muted);
  line-height: var(--line-height-normal);
  max-width: 55ch;
}

.about__services {
  list-style: none;
  margin-top: var(--space-8);
  border-top: 1px solid var(--border);
}

.about__services li {
  font-size: var(--font-size-sm);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--muted);
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--border);
}

@media (min-width: 768px) {
  .about {
    flex-direction: row;
    align-items: center;
    gap: var(--space-16);
    padding: var(--space-24) var(--page-padding-x-lg);
  }

  .about__photo-wrap {
    width: 45%;
    flex-shrink: 0;
    aspect-ratio: 3 / 4;
  }

  .about__body {
    flex: 1;
  }

  .about__name {
    font-size: var(--font-size-4xl);
  }
}
</style>
