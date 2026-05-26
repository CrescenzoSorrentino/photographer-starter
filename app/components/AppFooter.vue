<script setup lang="ts">
const config = useRuntimeConfig()
const year = new Date().getFullYear()
const whatsapp = config.public.phone.replace(/\D/g, '')
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <NuxtLink to="/" class="footer__logo">{{ config.public.brandName }}</NuxtLink>

      <nav class="footer__links">
        <a :href="`tel:${config.public.phone}`">Telefono</a>
        <a :href="`mailto:${config.public.email}`">Email</a>
        <a :href="`https://wa.me/${whatsapp}`" target="_blank" rel="noopener">WhatsApp</a>
      </nav>

      <div class="footer__social">
        <a :href="config.public.instagram" target="_blank" rel="noopener">Instagram</a>
        <a :href="config.public.facebook" target="_blank" rel="noopener">Facebook</a>
      </div>
    </div>

    <div class="footer__bottom">
      <p>&copy; {{ year }} {{ config.public.brandName }}. Tutti i diritti riservati.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: var(--space-12) var(--page-padding-x) var(--space-8);
}

@media (min-width: 768px) {
  .footer {
    padding: var(--space-16) var(--page-padding-x-lg) var(--space-10);
  }
}

.footer__top {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  margin-bottom: var(--space-12);
}

@media (min-width: 768px) {
  .footer__top {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.footer__logo {
  font-family: var(--font-display);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}

.footer__links,
.footer__social {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

@media (min-width: 768px) {
  .footer__links,
  .footer__social {
    align-items: flex-end;
  }
}

.footer__links a,
.footer__social a {
  font-size: var(--font-size-sm);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--foreground-muted);
  transition: color var(--duration-fast) var(--easing-expo);
}

.footer__links a:hover,
.footer__social a:hover {
  color: var(--foreground);
}

.footer__bottom {
  border-top: 1px solid var(--border);
  padding-top: var(--space-6);
}

.footer__bottom p {
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--muted);
}
</style>
