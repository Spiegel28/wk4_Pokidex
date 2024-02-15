import { DetailedPokemon } from './models/DetailedPokemon.js'
import { Pokemon } from './models/Pokemon1.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type { Pokemon[] } */

  wildPokemon = []


  /**@type { DetailedPokemon | null } */

  activeDetailedPokemon = null
}


export const AppState = createObservableProxy(new ObservableAppState())