import { AuthController } from './Auth/AuthController.js';
import { CarsController } from './controllers/CarsController.js';
import { ExampleController } from './controllers/ExampleController.js';
import { HouseController } from './controllers/HouseController.js';
import { MonstersController } from './controllers/MonstersController.js';

class App {

  // NOTE YOU MUST NAME THE CLASS PROPERTY 'authController' OR AUTH WILL NOT WORK
  authController = new AuthController()

  monstersController = new MonstersController()

  carsController = new CarsController()

  houseController = new HouseController()

}

window['app'] = new App()


