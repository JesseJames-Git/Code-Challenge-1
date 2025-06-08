function calculateChaiIngredients (){
    let input = prompt('Karibu! How many cups of chai would you like to make?'); //makes a prompt
    let numberOfCups = Number(input); // limits prompt input to Number
    
    let water = numberOfCups * 200
    let milk= numberOfCups * 50
    let tealeaves  = numberOfCups * 1
    let sugar = numberOfCups * 2

// calculations for the ingredient amount per number of cups 
    
    console.log (`To make ${numberOfCups} of Kenyan Chai, you will need ;`)
    console.log (`Water: ${water} ml`)
    console.log (`Milk: ${milk} ml`) 
    if(tealeaves === 1){
            console.log (`Tea Leaves (Majani): ${tealeaves} tablespoon`)
    } else {
            console.log(`Tea Leaves (Majani): ${tealeaves} tablespoons`)
    } //changes tablespoon to plural when more than one cup is needed
    console.log (`Sugar (Sukari): ${sugar} teaspoons (optional)`)
    console.log (`Enjoy your Chai Bora!`)

//shows output
}
   
