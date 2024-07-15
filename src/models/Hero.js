export class Hero {
  constructor(data) {
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.health = data.health
    this.level = 1
    this.damage = data.damage || 1
  }
}