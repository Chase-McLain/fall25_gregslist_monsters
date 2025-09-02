
import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { Pop } from "../utils/Pop.js";





export class HouseController {
  constructor() {
    // console.log('rat house')
    AppState.on('houses', this.drawHouses)
    this.getHouses()
  }



  async getHouses() {
    try {
      await houseService.getHouses()
    } catch (error) {
      console.error('Failed to fetch houses')
      Pop.error(error)
    }
    //   console.log('rat house')
    // }



  }


  drawHouses() {
    let houseDisplay = ''
    AppState.houses.forEach((house) => houseDisplay += house.houseTemplate)
    const houseDisplayElement = document.getElementById('house-listings')
    houseDisplayElement.innerHTML = houseDisplay
  }



}







