import { AppState } from "../AppState.js"

class BossesService {
  attackBoss() {
    const boss = AppState.boss
    const heroes = AppState.heroes
    let totalDamageFromHeroes = 0
    heroes.forEach(hero => {
      totalDamageFromHeroes += hero.damage * Math.ceil(hero.level * 1.06)
    })
    boss.health -= totalDamageFromHeroes
    if (boss.health <= 0) boss.health = 0
    if (boss.health > 0) return
    // else
    AppState.gold += boss.gold
    boss.level++
    boss.health = boss.maxHealth * boss.level
    boss.gold += boss.gold * Math.ceil(boss.level * (Math.random() * 10))
    heroes.forEach(hero => hero.level++) //level all of em
  }
}

export const bossesService = new BossesService()