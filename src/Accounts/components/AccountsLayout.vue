<template>
  <div
    class="accounts-layout__container d-flex flex-column justify-center align-center"
  >
    <h1 class="accounts-layout-header">Crypto Currency</h1>
    <div class="input__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accounts-layout__container {
  height: 100%;

  .input__container {
    width: 20%;
  }
}
</style>
