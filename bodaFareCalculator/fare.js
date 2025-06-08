function calculateBodaFare (){
    let input = prompt ('Unafika wapi Mkubwa? Kilometer ngapi?:') //Makes Propmt
    let distanceInKm = Number(input) //limits prompt input to number

    const baseFare = 50 // Gives Base Fare
    const chargePerKm = 15 // Gives Charge for one Kilometer
    const varyingPrice = chargePerKm * distanceInKm // Gives charge for distance travelled per kilometer
    let totalFare = (baseFare + varyingPrice) // gives total fare to be charged 
    
    console.log (`Uko kwote? Io ni ${distanceInKm} km:`) //shows traveling distance in Kilometers
    console.log (`Ukikalia Pikipiki: KES ${baseFare}`) //Shows base fare
    console.log (`Mpaka Uko: KES ${varyingPrice}`) // shows charges per kilometer
    console.log (`Total: KES ${totalFare}`) //shows total fare
    console.log (`Panda Pikipiki!`)
}
