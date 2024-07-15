<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { healingItemsService } from '../services/HealingItemsService.js';


const healingItems = computed(() => AppState.healingItems)
const gold = computed(() => AppState.gold)

function purchaseHealingItem(healingItem) {
  healingItemsService.purchaseHealingItem(healingItem)
}
</script>


<template>
  <div class="bg-dark border border-light border-1 shadow-lg rounded text-light px-4 py-2">
    <p>Shop</p>
    <div v-for="healingItem in healingItems" :key="healingItem.name" class="d-flex gap-2 align-items-center mb-3">
      <p :title="`Heal all party members for ${healingItem.healingValue}`">{{ healingItem.name }}: {{
        healingItem.price }}</p>
      <!-- NOTE in vue you can pass entire objects as arguments from the HTML -->
      <!-- NOTE v-if only renders the html if the supplied statement is -->
      <button v-if="gold >= healingItem.price" @click="purchaseHealingItem(healingItem)" class="btn btn-outline-light">
        Purchase
      </button>
      <div v-else>You poor, dawg</div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
</style>