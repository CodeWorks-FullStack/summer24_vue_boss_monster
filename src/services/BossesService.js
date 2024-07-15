import { AppState } from "../AppState.js"

class BossesService {
  attackBoss() {
    const boss = AppState.boss
    const heroes = AppState.heroes
    let totalDamageFromHeroes = 0
    heroes.forEach(hero => {
      totalDamageFromHeroes += hero.damage * Math.ceil(hero.level * .06)
    })
    boss.health -= totalDamageFromHeroes
    if (boss.health <= 0) boss.health = 0
  }
}

export const bossesService = new BossesService()