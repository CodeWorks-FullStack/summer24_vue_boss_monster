import { AppState } from "../AppState.js"

class HeroesService {
  attackHeroes() {
    const heroes = AppState.heroes
    const randomIndex = Math.floor(Math.random() * heroes.length)
    const randomHero = heroes[randomIndex]
    randomHero.health--
  }
}

export const heroesService = new HeroesService()