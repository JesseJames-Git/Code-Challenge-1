function calculateBodaFare (){
    let input = prompt ('Unafika wapi Mkubwa? Kilometer ngapi?:')
    let distanceInKm = Number(input)

    const baseFare = 50
    const chargePerKm = 15
    const varyingPrice = chargePerKm * distanceInKm
    let totalFare = (baseFare + varyingPrice)
    
    console.log (`Uko kwote? Io ni ${distanceInKm} km:`)
    console.log (`Ukikalia Pikipiki: KES ${baseFare}`)
    console.log (`Mpaka Uko: KES ${varyingPrice}`)
    console.log (`Total: KES ${totalFare}`)
    console.log (`Panda Pikipiki!`)
}
