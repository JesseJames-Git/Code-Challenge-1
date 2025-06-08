function calculateChaiIngredients (){
    let input = prompt('Karibu! How many cups of chai would you like to make?');
    let numberOfCups = Number(input);
    
    let water = numberOfCups * 200
    let milk= numberOfCups * 50
    let tealeaves  = numberOfCups * 1
    let sugar = numberOfCups * 2
    
    console.log (`To make ${numberOfCups} of Kenyan Chai, you will need ;`)
    console.log (`Water: ${water} ml`)
    console.log (`Milk: ${milk} ml`) 
    if(tealeaves === 1){
            console.log (`Tea Leaves (Majani): ${tealeaves} tablespoon`)
    } else {
            console.log(`Tea Leaves (Majani): ${tealeaves} tablespoons`)
    }
    console.log (`Sugar (Sukari): ${sugar} teaspoons (optional)`)
    console.log (`Enjoy your Chai Bora!`)
}
   
