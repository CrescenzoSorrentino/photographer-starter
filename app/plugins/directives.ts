export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('fade-in', {
    mounted(el, binding) {
      el.style.setProperty('--stagger-delay', `${(binding.value ?? 0) * 200}ms`)
      el.classList.add('fade-in')

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            el.classList.add('fade-in--visible')
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )

      observer.observe(el)
    },
  })
})
