function estimateTransactionFee (){
    let input = prompt('Unatuma Ngapi?')
    let amountToBeSent = Number(input)

    let transactionFee = ((1.5/100) * amountToBeSent)
        if(transactionFee <= 10) {
            transactionFee = 10
        } else if (transactionFee >=70){
            transactionFee = 70
        } else {
            transactionFee
        }

    const total = amountToBeSent + transactionFee
    
    console.log (`Sending KES ${amountToBeSent}:`)

    console.log (`Calculated Transaction Fee ${transactionFee}`)
    
    console.log (`Total amount to be debited: KES ${total}`)

    console.log (` Send Money Securely!`)
}