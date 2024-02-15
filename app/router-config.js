import { AccountController } from "./controllers/AccountController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SandboxPokemonController } from "./controllers/SandBoxPokemonController.js";
import { WildPokemonController } from "./controllers/WildPokemonController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [WildPokemonController, SandboxPokemonController],
    view: 'app/views/HomeView.html'
    
    
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




