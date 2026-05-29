<script setup lang="ts">
const events = useEvents().filter(e => e.slug)
</script>

<template>
  <main>
    <HomeHero />
    <EventGrid :items="events" show-overlay />
    <HomeAbout />
    <SectionCta />
  </main>
</template>
