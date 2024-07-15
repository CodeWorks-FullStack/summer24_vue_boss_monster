<!-- NOTE each component's script file will act as a controller -->
<script setup>
import { ref } from 'vue';
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

// NOTE a ref creates a watchable object around whatever value is passed to to ref function
const counter = ref(0)

function increaseCounter() {
  // .value accesses the value stored within the watchable object
  counter.value++
  console.log(counter);
}

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    Made with ☕ by Jeremy!
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
