function estimateTransactionFee (){
    let input = prompt('Unatuma Ngapi?') //allows prompt input
    let amountToBeSent = Number(input) //limits input to Number

    let transactionFee = ((1.5/100) * amountToBeSent) //calculates transaction fee
        if(transactionFee <= 10) {
            transactionFee = 10
        } else if (transactionFee >=70){
            transactionFee = 70
        } else {
            transactionFee
        } //criteria for fee limits

    const total = amountToBeSent + transactionFee //gives total fee charged
    
    console.log (`Sending KES ${amountToBeSent}:`)

    console.log (`Calculated Transaction Fee ${transactionFee}`)
    
    console.log (`Total amount to be debited: KES ${total}`)

    console.log (` Send Money Securely!`)
}