import { AppState } from "../AppState.js"

class HeroesService {
  attackHeroes() {
    const aliveHeroes = AppState.heroes.filter(hero => hero.health > 0)
    if (aliveHeroes.length == 0) return
    const boss = AppState.boss
    const randomIndex = Math.floor(Math.random() * aliveHeroes.length)
    const randomHero = aliveHeroes[randomIndex]
    randomHero.health -= boss.damage * Math.ceil(boss.level * 0.07)
    if (randomHero.health <= 0) randomHero.health = 0
  }
}

export const heroesService = new HeroesService()