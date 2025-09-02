import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "../utils/Axios.js"



class HouseService {

  async getHouses() {
    const response = await api.get('api/houses')
    const houses = response.data.map((house) => new House(house))
    AppState.houses = houses
    console.log('rat house')

  }




  // const house = new House(response.data)




}








export const houseService = new HouseService



