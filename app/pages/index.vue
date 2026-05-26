<script setup lang="ts">
const config = useRuntimeConfig()

const events = [
  { title: config.public.event1Title, subtitle: config.public.event1Subtitle, image: config.public.event1Image, slug: config.public.event1Slug, orientation: config.public.event1Orientation as 'portrait' | 'landscape', type: config.public.event1Type, poster: config.public.event1Poster },
  { title: config.public.event2Title, subtitle: config.public.event2Subtitle, image: config.public.event2Image, slug: config.public.event2Slug, orientation: config.public.event2Orientation as 'portrait' | 'landscape', type: config.public.event2Type, poster: config.public.event2Poster },
  { title: config.public.event3Title, subtitle: config.public.event3Subtitle, image: config.public.event3Image, slug: config.public.event3Slug, orientation: config.public.event3Orientation as 'portrait' | 'landscape', type: config.public.event3Type, poster: config.public.event3Poster },
  { title: config.public.event4Title, subtitle: config.public.event4Subtitle, image: config.public.event4Image, slug: config.public.event4Slug, orientation: config.public.event4Orientation as 'portrait' | 'landscape', type: config.public.event4Type, poster: config.public.event4Poster },
  { title: config.public.event5Title, subtitle: config.public.event5Subtitle, image: config.public.event5Image, slug: config.public.event5Slug, orientation: config.public.event5Orientation as 'portrait' | 'landscape', type: config.public.event5Type, poster: config.public.event5Poster },
  { title: config.public.event6Title, subtitle: config.public.event6Subtitle, image: config.public.event6Image, slug: config.public.event6Slug, orientation: config.public.event6Orientation as 'portrait' | 'landscape', type: config.public.event6Type, poster: config.public.event6Poster },
].filter(e => e.slug)
</script>

<template>
  <main>
    <HomeHero />
    <EventGrid :items="events" show-overlay />
    <SectionCta />
  </main>
</template>
