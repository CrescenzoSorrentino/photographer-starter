<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

const allEvents = [
  { title: config.public.event1Title, subtitle: config.public.event1Subtitle, image: config.public.event1Image, heroImage: config.public.event1HeroImage, slug: config.public.event1Slug, type: config.public.event1Type, poster: config.public.event1Poster, photos: config.public.event1Photos },
  { title: config.public.event2Title, subtitle: config.public.event2Subtitle, image: config.public.event2Image, heroImage: config.public.event2HeroImage, slug: config.public.event2Slug, type: config.public.event2Type, poster: config.public.event2Poster, photos: config.public.event2Photos },
  { title: config.public.event3Title, subtitle: config.public.event3Subtitle, image: config.public.event3Image, heroImage: config.public.event3HeroImage, slug: config.public.event3Slug, type: config.public.event3Type, poster: config.public.event3Poster, photos: config.public.event3Photos },
  { title: config.public.event4Title, subtitle: config.public.event4Subtitle, image: config.public.event4Image, heroImage: config.public.event4HeroImage, slug: config.public.event4Slug, type: config.public.event4Type, poster: config.public.event4Poster, photos: config.public.event4Photos },
  { title: config.public.event5Title, subtitle: config.public.event5Subtitle, image: config.public.event5Image, heroImage: config.public.event5HeroImage, slug: config.public.event5Slug, type: config.public.event5Type, poster: config.public.event5Poster, photos: config.public.event5Photos },
  { title: config.public.event6Title, subtitle: config.public.event6Subtitle, image: config.public.event6Image, heroImage: config.public.event6HeroImage, slug: config.public.event6Slug, type: config.public.event6Type, poster: config.public.event6Poster, photos: config.public.event6Photos },
]

const event = allEvents.find(e => e.slug === route.params.slug)

if (!event) {
  throw createError({ statusCode: 404, statusMessage: 'Evento non trovato', fatal: true })
}

const photoItems = event.photos.split(',').map(p => p.trim()).filter(Boolean).map(src => ({ image: src }))

useHead({ title: `${event.title} — ${config.public.brandName}` })
</script>

<template>
  <main>
    <SlugHero
      :title="event!.title"
      :subtitle="event!.subtitle"
      :image="event!.image"
      :hero-image="event!.heroImage"
      :type="event!.type"
      :poster="event!.poster"
    />
    <EventGrid :items="photoItems" />
    <SectionCta />
  </main>
</template>
