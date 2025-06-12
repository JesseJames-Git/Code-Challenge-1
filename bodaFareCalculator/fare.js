function calculateBodaFare (){
    let input = prompt ('Unafika wapi Mkubwa? Kilometer ngapi?:') //Makes Propmt
    let distanceInKm = Number(input) //limits prompt input to number

    const baseFare = 50 // Gives Base Fare
    const chargePerKm = 15 // Gives Charge for one Kilometer
    const varyingPrice = chargePerKm * distanceInKm // Gives charge for distance travelled per kilometer
    let totalFare = (baseFare + varyingPrice) // gives total fare to be charged 
    
    document.getElementById("div1").innerHTML =`Uko kwote? Io ni ${distanceInKm} km:` //shows traveling distance in Kilometers
    document.getElementById("div2").innerHTML =`Ukikalia Pikipiki: KES ${baseFare}`//Shows base fare
    document.getElementById("div3").innerHTML =`Mpaka Uko: KES ${varyingPrice}` // shows charges per kilometer
    document.getElementById("div4").innerHTML =`Total: KES ${totalFare}` //shows total fare
    document.getElementById("div5").innerHTML =`Panda Pikipiki!`

}
prompter = document.getElementById("prompter")

prompter.addEventListener('click',()=>{
    calculateBodaFare()
})




