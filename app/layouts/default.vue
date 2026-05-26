<template>
  <div class="layout">
    <AppNavbar />
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.layout :deep(main) {
  flex: 1;
}
</style>
