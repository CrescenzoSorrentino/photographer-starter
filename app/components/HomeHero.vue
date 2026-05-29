<script setup lang="ts">
const config = useRuntimeConfig();

const links = [
  { label: config.public.heroLabelEvento1 as string, src: config.public.heroVideoEvento1 as string, poster: config.public.heroPoster1 as string },
  { label: config.public.heroLabelEvento2 as string, src: config.public.heroVideoEvento2 as string, poster: config.public.heroPoster2 as string },
  { label: config.public.heroLabelEvento3 as string, src: config.public.heroVideoEvento3 as string, poster: config.public.heroPoster3 as string },
];

const activeIndex = ref(0);
const current = computed(() => links[activeIndex.value]!);

function advance() {
  activeIndex.value = (activeIndex.value + 1) % links.length;
}

onMounted(() => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const interval = setInterval(advance, 8000);
    onUnmounted(() => clearInterval(interval));
  }
});
</script>

<template>
  <section class="hero">
    <!-- Mobile: poster ciclico con fade -->
    <Transition name="poster-fade" mode="out-in">
      <img
        class="hero__poster"
        :key="activeIndex"
        :src="current.poster"
        alt=""
        aria-hidden="true"
      />
    </Transition>

    <!-- Desktop: video autoplay -->
    <video
      class="hero__video"
      autoplay
      muted
      playsinline
      @ended="advance"
      :key="activeIndex"
      :poster="current.poster"
    >
      <source :src="current.src" type="video/mp4" />
    </video>

    <!-- Links bottom -->
    <nav class="hero__nav">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <button
            :class="{ 'is-active': activeIndex === index }"
            @click="activeIndex = index"
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

.poster-fade-enter-active,
.poster-fade-leave-active {
  transition: opacity var(--duration-slow) var(--easing-expo);
}

.poster-fade-enter-from,
.poster-fade-leave-to {
  opacity: 0;
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
