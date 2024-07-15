import { reactive } from 'vue'
import { Hero } from './models/Hero.js'
import { Boss } from './models/Boss.js'
import { HealingItem } from './models/HealingItem.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {Hero[]} an array of heroes*/
  heroes: [
    new Hero({
      name: 'Oslo',
      imgUrl: 'https://em-content.zobj.net/source/microsoft-teams/363/orangutan_1f9a7.png',
      health: 25,
      damage: 2
    }),
    new Hero({
      name: 'Quetzalcoatllama',
      imgUrl: 'https://em-content.zobj.net/source/microsoft-teams/363/llama_1f999.png',
      health: 10,
      damage: 5
    }),
    new Hero({
      name: 'Ben',
      imgUrl: 'https://em-content.zobj.net/source/microsoft-teams/363/hippopotamus_1f99b.png',
      health: 50,
      damage: 1
    }),
  ],
  gold: 0,
  /** @type {Boss} the big boss*/
  boss: new Boss({
    name: 'Jake Overall',
    level: 10,
    health: 100,
    damage: 5,
    gold: 100,
    imgUrl: 'https://em-content.zobj.net/source/microsoft-teams/363/dragon_1f409.png'
  }),

  /** @type {HealingItem[]} healing items*/
  healingItems: [
    new HealingItem({
      name: 'Potion',
      healingValue: 10,
      price: 100
    }),
    new HealingItem({
      name: 'Super Potion',
      healingValue: 100,
      price: 1000
    })
  ]
})
