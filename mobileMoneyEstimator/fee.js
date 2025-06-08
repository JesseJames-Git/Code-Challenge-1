function estimateTransactionFee (){
    let input = prompt('Unatuma Ngapi?')
    let amountToBeSent = Number(input)

    const transactionFee = ((1.5/100) * amountToBeSent)
    const total = amountToBeSent + transactionFee
    
    console.log (`Sending KES ${amountToBeSent}:`)

    if (transactionFee <= 10 ){
        console.log (`Calculated Transaction Fee: KES 10`)
    } else if (transactionFee >= 70){
        console.log (`Calculated Transaction Fee: KES 70`)
    }

    console.log (`Total amount to be debited: KES ${total}`)

    console.log (` Send Money Securely!`)
}