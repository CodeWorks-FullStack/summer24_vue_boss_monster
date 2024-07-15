import { AppState } from "../AppState.js"

class BossesService {
  attackBoss() {
    const boss = AppState.boss
    boss.health--
    if (boss.health <= 0) boss.health = 0
  }
}

export const bossesService = new BossesService()