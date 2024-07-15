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
    <!-- <router-view /> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- NOTE when accessing a ref in the template tag, no .value is needed -->
          <h1>Times Clicked: {{ counter }}</h1>
          <!-- NOTE @click is the vue version of onclick -->
          <button @click="increaseCounter()" class="btn btn-success">Click!</button>
        </div>
      </div>
    </div>
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
