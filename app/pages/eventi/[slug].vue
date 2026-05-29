<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const event = useEvents().find(e => e.slug === route.params.slug)

if (!event) throw createError({ statusCode: 404, statusMessage: 'Evento non trovato', fatal: true })

const ev = event
const photoItems = ev.photos.split(',').map(p => p.trim()).filter(Boolean).map(src => ({ image: src }))

useHead({ title: `${ev.title} — ${config.public.brandName}` })
</script>

<template>
  <main>
    <SlugHero
      :title="ev.title"
      :subtitle="ev.subtitle"
      :image="ev.image"
      :hero-image="ev.heroImage"
      :type="ev.type"
      :poster="ev.poster"
    />
    <EventGrid :items="photoItems" />
    <SectionCta />
  </main>
</template>
