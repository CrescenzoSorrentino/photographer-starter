export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const root = document.documentElement

  // Colori
  root.style.setProperty('--background',       config.public.background)
  root.style.setProperty('--surface',          config.public.surface)
  root.style.setProperty('--foreground',       config.public.foreground)
  root.style.setProperty('--foreground-muted', config.public.foregroundMuted)
  root.style.setProperty('--muted',            config.public.muted)
  root.style.setProperty('--accent',           config.public.accent)

  // Tipografia
  root.style.setProperty('--font-sans',    config.public.fontSans)
  root.style.setProperty('--font-display', config.public.fontDisplay)
})
