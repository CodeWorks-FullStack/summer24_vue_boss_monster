<!-- NOTE js goes here -->
<!-- NOTE controller for home page -->
<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

// NOTE computed allows us to bring in properties from the appstate and attach listeners to them
const heroes = computed(() => AppState.heroes)
</script>

<!-- NOTE html goes here -->
<template>
  <div class="container-fluid">
    <div class="row">
      <!-- NOTE v-for will repeat HTML for every element in an array -->
      <!-- heroes is what we are iterating over, hero is an alias for each piece of data in the array -->
      <!-- NOTE the key in a v-for should be a unique property on whatever you are iterating over -->
      <div v-for="hero in heroes" :key="hero.name" class="col-6 col-md-3">
        <div class="bg-dark border border-light border-1 shadow-lg rounded text-light px-4">
          <div class="text-center">
            <!-- NOTE : before an attribute binds that attribute to a javascript value -->
            <img :src="hero.imgUrl" :alt="hero.name" class="hero-img">
          </div>
          <!-- NOTE pulls out each hero's name and dumps it into the HTML -->
          <!-- NOTE use {{}} to display javascript as text -->
          <p class="fs-4">{{ hero.name }}</p>
          <p class="d-flex justify-content-between fs-5">
            <span>HP:</span>
            <span>{{ hero.health }}</span>
          </p>
          <p class="d-flex justify-content-between fs-5">
            <span>LVL:</span>
            <span>{{ hero.level }}</span>
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<!-- NOTE css/scss goes here -->
<style scoped lang="scss">
.hero-img {
  height: 20vh;
}
</style>
