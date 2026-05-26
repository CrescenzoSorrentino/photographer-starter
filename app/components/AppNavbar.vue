<script setup lang="ts">
const config = useRuntimeConfig()
const isOpen = ref(false)
const isScrolled = ref(false)
const whatsapp = config.public.phone.replace(/\D/g, '')

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > window.innerHeight * 0.7
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

const links = [
  { href: `tel:${config.public.phone}`, label: "Telefono" },
  { href: `mailto:${config.public.email}`, label: "Email" },
  { href: `https://wa.me/${whatsapp}`, label: "WhatsApp" },
];
</script>

<template>
  <header class="navbar" :class="{ 'is-scrolled': isScrolled }">
    <NuxtLink to="/" class="navbar__logo">{{
      config.public.brandName
    }}</NuxtLink>

    <!-- Links desktop -->
    <nav class="navbar__links">
      <ul>
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" target="_blank" rel="noopener">{{
            link.label
          }}</a>
        </li>
      </ul>

      <!-- Mobile menu -->
      <button @click="isOpen = !isOpen" :class="{ 'is-open': isOpen }">
        <Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" />
      </button>
    </nav>
  </header>

  <Teleport to="body">
    <div class="mobile-menu" :class="{ 'is-open': isOpen }">
      <ul>
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            target="_blank"
            rel="noopener"
            @click="isOpen = false"
            >{{ link.label }}</a
          >
        </li>
      </ul>

      <div class="mobile-menu__social">
        <a :href="config.public.instagram" target="_blank" rel="noopener"
          >Instagram</a
        >
        <a :href="config.public.facebook" target="_blank" rel="noopener"
          >Facebook</a
        >
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
  padding: 0 var(--page-padding-x);
  background: transparent;
  transition: background var(--duration-base) var(--easing-expo);
}

.navbar.is-scrolled {
  background: var(--background);
}

@media (min-width: 768px) {
  .navbar {
    padding: 0 var(--page-padding-x-lg);
  }
}

.navbar__logo {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  transition: text-shadow var(--duration-base) var(--easing-expo);
}

.navbar.is-scrolled .navbar__logo {
  text-shadow: none;
}

.navbar__links button .iconify {
  transition: transform var(--duration-base) var(--easing-expo);
}

.navbar__links button.is-open .iconify {
  transform: rotate(90deg);
}

.navbar__links a {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--foreground-muted);
  text-transform: uppercase;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  transition: color var(--duration-fast) var(--easing-expo),
              text-shadow var(--duration-base) var(--easing-expo);
}

.navbar.is-scrolled .navbar__links a {
  text-shadow: none;
}

.navbar__links a:hover {
  color: var(--foreground);
}

.navbar__links ul {
  display: none;
}

.navbar__links button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--foreground);
  font-size: var(--font-size-xl);
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.3));
  transition: filter var(--duration-base) var(--easing-expo);
}

.navbar.is-scrolled .navbar__links button {
  filter: none;
}

@media (min-width: 768px) {
  .navbar__links ul {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    list-style: none;
  }

  .navbar__links button {
    display: none;
  }
}
</style>
