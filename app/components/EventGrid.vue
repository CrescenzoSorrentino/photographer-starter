<script setup lang="ts">
interface GridItem {
  image: string
  title?: string
  subtitle?: string
  slug?: string
  type?: string
  poster?: string
  orientation?: 'portrait' | 'landscape'
}

const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps<{
  items: GridItem[]
  showOverlay?: boolean
  initialSlots?: number
}>()

const INITIAL_SLOTS = props.initialSlots ?? 6

const showAll = ref(false)
const detected = ref<Record<string, 'portrait' | 'landscape'>>({})

function effectiveOrientation(item: GridItem): 'portrait' | 'landscape' {
  return item.orientation ?? detected.value[item.image] ?? 'portrait'
}

function onLoad(img: HTMLImageElement, src: string) {
  detected.value[src] = img.naturalWidth > img.naturalHeight ? 'landscape' : 'portrait'
}

const visibleItems = computed(() => {
  if (showAll.value) return props.items
  let slots = 0
  const result = []
  for (const item of props.items) {
    const cost = effectiveOrientation(item) === 'landscape' ? 2 : 1
    if (slots + cost > INITIAL_SLOTS) break
    slots += cost
    result.push(item)
  }
  return result
})

const hasMore = computed(() => visibleItems.value.length < props.items.length)
</script>

<template>
  <section class="grid" :class="{ 'grid--overlay': showOverlay }">
    <component
      :is="item.slug ? NuxtLink : 'div'"
      v-for="(item, index) in visibleItems"
      :key="item.image"
      :to="item.slug ? `/eventi/${item.slug}` : undefined"
      v-fade-in="index"
      class="grid__card"
      :class="effectiveOrientation(item) === 'landscape' ? 'grid__card--landscape' : 'grid__card--portrait'"
    >
      <div class="grid__image-wrapper">
        <template v-if="item.type === 'video'">
          <video class="grid__image grid__video" autoplay muted loop playsinline :poster="item.poster">
            <source :src="item.image" type="video/mp4" />
          </video>
          <img v-if="item.poster" :src="item.poster" :alt="item.title" class="grid__image grid__mobile-poster" />
        </template>
        <img
          v-else
          :src="item.image"
          :alt="item.title"
          class="grid__image"
          @load="!item.orientation ? onLoad($event.target as HTMLImageElement, item.image) : undefined"
        />
      </div>

      <div v-if="showOverlay" class="grid__content">
        <h2 class="grid__title">{{ item.title }}</h2>
        <p v-if="item.subtitle" class="grid__subtitle">{{ item.subtitle }}</p>
      </div>
    </component>
  </section>

  <div v-if="hasMore" class="grid__more">
    <BaseButton :label="showOverlay ? 'Mostra tutti' : 'Mostra tutte'" @click="showAll = true" />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
  padding: var(--space-8) var(--page-padding-x);
}

.grid__image-wrapper {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 3 / 4;
}

.grid__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid__video {
  display: none;
}

.grid__mobile-poster {
  display: block;
}

.grid__content {
  padding-top: var(--space-3);
}

.grid__title {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}

.grid__subtitle {
  font-size: var(--font-size-sm);
  color: var(--foreground-muted);
  letter-spacing: var(--letter-spacing-normal);
  margin-top: var(--space-1);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 44vw;
    gap: var(--space-2);
    padding: var(--space-12) var(--page-padding-x-lg);
  }

  .grid__card--landscape {
    grid-column: span 2;
  }

  .grid__card--portrait .grid__image-wrapper,
  .grid__card--landscape .grid__image-wrapper {
    aspect-ratio: unset;
    height: 100%;
  }

  .grid__video {
    display: block;
  }

  .grid__mobile-poster {
    display: none;
  }

  .grid__card {
    position: relative;
    overflow: hidden;
  }

  .grid--overlay .grid__card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 50%);
    z-index: 1;
    opacity: 0.3;
    transition: opacity var(--duration-base) var(--easing-expo);
  }

  .grid--overlay .grid__card:hover::before {
    opacity: 1;
  }

  .grid__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    padding: var(--space-6);
    transform: translateY(8px);
    opacity: 0;
    transition: opacity var(--duration-base) var(--easing-expo),
                transform var(--duration-base) var(--easing-expo);
  }

  .grid--overlay .grid__card:hover .grid__content {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid__more {
  display: flex;
  justify-content: center;
  padding: var(--space-10) var(--page-padding-x);
}
</style>
