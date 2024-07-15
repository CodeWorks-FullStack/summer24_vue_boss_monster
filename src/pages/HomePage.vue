<!-- NOTE js goes here -->
<!-- NOTE controller for home page -->
<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { bossesService } from '../services/BossesService.js';
import { heroesService } from '../services/HeroesService.js';
import Pop from '../utils/Pop.js';

// NOTE computed allows us to wrap properties from the appstate with a watchable object
// NOTE computed takes in a function as an argument that must return a value
// NOTE ()=> AppState.heroes is an implied return, ()=>{return AppState.heroes} is an explicit return
const heroes = computed(() => AppState.heroes)

const boss = computed(() => AppState.boss)

// NOTE computed values can calculate things for us and return them, and if a variable's value changes that is used within the computed, it will rerun
const totalDamage = computed(() => {
  let totalDamageFromHeroes = 0
  heroes.value.forEach(hero => {
    totalDamageFromHeroes += hero.damage * Math.ceil(hero.level * 1.06)
  })
  return totalDamageFromHeroes
})

function attackBoss() {
  bossesService.attackBoss()
}

function attackHeroes() {
  heroesService.attackHeroes()
  if (heroes.value.every(hero => hero.health == 0)) {
    // Pop.error("YOU LOSE")
    console.error("YOU LOSE PAL")
  }
}

// NOTE onMounted is a lifecycle hook that will execute a callback function when this component (page) is rendered to the DOM
onMounted(() => {
  // console.log('on mounted is running!');
  setInterval(attackHeroes, 1000)
})
</script>

<!-- NOTE html goes here -->
<template>
  <div class="container-fluid">
    <div class="row my-2">
      <!-- NOTE v-for will repeat HTML for every element in an array -->
      <!-- heroes is what we are iterating over, hero is an alias for each piece of data in the array -->
      <!-- NOTE the key in a v-for should be a unique property on whatever you are iterating over -->
      <div v-for="hero in heroes" :key="hero.name" class="col-6 col-md-3">
        <div class="bg-dark border border-light border-1 shadow-lg rounded text-light px-4">
          <div class="text-center">
            <!-- NOTE : before an attribute binds that attribute to a javascript value -->
            <!-- NOTE { grayscale: hero.health == 0 } the key of the object is applied as a class if the value is truthy -->
            <img :src="hero.imgUrl" :alt="hero.name" class="hero-img" :class="{ grayscale: hero.health == 0 }">
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

    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="bg-dark border border-light border-1 shadow-lg rounded text-light px-4">
          <div class="text-center">
            <img @click="attackBoss()" :src="boss.imgUrl" :alt="boss.name" role="button"
              :title="`Attack ${boss.name} for a total of ${totalDamage}`">
          </div>
          <p class="fs-2 text-center">
            {{ boss.name }} | {{ boss.health }}
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

.grayscale {
  filter: grayscale(1);
}
</style>
