import { reactive } from 'vue'
import { Hero } from './models/Hero.js'

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
      health: 25
    }),
    new Hero({
      name: 'Quetzalcoatllama',
      imgUrl: 'https://em-content.zobj.net/source/microsoft-teams/363/llama_1f999.png',
      health: 10
    }),
  ],
  gold: 0
})