import { AppState } from "../AppState.js"

class HealingItemsService {

  purchaseHealingItem(healingItem) {
    if (AppState.gold < healingItem.price) return
    AppState.gold -= healingItem.price
    const heroes = AppState.heroes
    heroes.forEach(hero => hero.health += healingItem.healingValue)
  }

}

export const healingItemsService = new HealingItemsService()