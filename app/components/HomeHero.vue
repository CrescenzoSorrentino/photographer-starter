<script setup lang="ts">
const config = useRuntimeConfig();

const links = [
  {
    id: "evento-1",
    label: config.public.heroLabelEvento1,
    src: config.public.heroVideoEvento1,
  },
  {
    id: "evento-2",
    label: config.public.heroLabelEvento2,
    src: config.public.heroVideoEvento2,
  },
  {
    id: "evento-3",
    label: config.public.heroLabelEvento3,
    src: config.public.heroVideoEvento3,
  },
];

const active = ref("evento-1");
const currentSrc = computed(
  () => links.find((l) => l.id === active.value)?.src ?? "",
);
</script>

<template>
  <section class="hero">
    <!-- Mobile: poster statico -->
    <img
      class="hero__poster"
      :src="config.public.heroPoster"
      alt=""
      aria-hidden="true"
    />

    <!-- Desktop: video autoplay -->
    <video
      class="hero__video"
      autoplay
      muted
      loop
      playsinline
      :key="currentSrc"
      :poster="config.public.heroPoster"
    >
      <source :src="currentSrc" type="video/mp4" />
    </video>

    <!-- Links bottom -->
    <nav class="hero__nav">
      <ul>
        <li v-for="link in links" :key="link.id">
          <button
            :class="{ 'is-active': active === link.id }"
            @click="active = link.id"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 70svh;
  overflow: hidden;
}

.hero__poster {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero__video {
  display: none;
}

@media (min-width: 768px) {
  .hero {
    height: 90svh;
  }

  .hero__poster {
    display: none;
  }

  .hero__video {
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
}

.hero__nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 0 var(--page-padding-x);
  padding-bottom: var(--space-6);
}

@media (min-width: 768px) {
  .hero__nav {
    padding: 0 var(--page-padding-x-lg);
    padding-bottom: var(--space-8);
  }
}

.hero__nav ul {
  list-style: none;
  display: flex;
  gap: var(--space-8);
}

.hero__nav button {
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  font-size: var(--font-size-md);
  letter-spacing: var(--letter-spacing-normal);
  text-transform: uppercase;
  color: var(--foreground-muted);
  padding-bottom: var(--space-1);
  font-weight: var(--font-weight-semibold);
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);
  transition:
    color var(--duration-fast) var(--easing-expo),
    border-color var(--duration-fast) var(--easing-expo);
}

.hero__nav button:hover,
.hero__nav button.is-active {
  color: var(--foreground);
  border-bottom-color: var(--foreground);
}
</style>
