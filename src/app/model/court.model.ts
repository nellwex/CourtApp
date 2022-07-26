export interface Court {
    id: number
    name: string
    sport: string
    coordinate : GeolocationCoordinates
    floor : string
    rating : number
    capacity: number
    photo: [] 
    comment: []
    private: Boolean
    free: Boolean
    light: Boolean
    durability: Boolean
    rainProofable: Boolean
    airCondition: Boolean
    highIntensity: Boolean
    parkingForCar: Boolean
    parkingForBike: Boolean
    
}
