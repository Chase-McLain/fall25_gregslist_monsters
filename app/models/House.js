import { generateId } from "../utils/GenerateId.js";

export class House {
  constructor(data) {
    this.id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.img = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorID = data.creator._id
    this.creatorName = data.creator.name
    this.creatorImg = data.creator.picture
  }



  get houseTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="shadow position-relative car-border" style="border-color: ;">
        <img
          src="${this.img}"
          alt="${this.year} ${this.bedrooms} ${this.bathrooms} ${this.levels}" class="car-img">
        <div class="p-3">
          <div class="d-flex justify-content-between">
            <div>
            <p class=" m-0">Year:${this.year} Bedrooms:${this.bedrooms} Bathrooms:${this.bathrooms} Floors:${this.levels}</p>      
            <p>${this.description}</p>
            </div>
            <div class="text-end">
              <img src="${this.creatorImg}" alt="${this.creatorName}" class="creator-img">
              <p>Listed by ${this.creatorName}</p>
            </div>
          </div>
          <p class="mt-3"></p>
        </div>
        <span class="text-success car-price bg-light px-2">${this.price}</span>
      </div>
    </div>
    `











  }













}





















