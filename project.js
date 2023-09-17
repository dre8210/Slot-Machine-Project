const prompt = require('prompt-sync')();


// Deposit some Money

const deposit = () =>{
  while(true){
    const depositAmount = prompt('Enter a deposit amount: ')
    const numberDepositAmount = parseFloat(depositAmount)

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
    console.log('You have entered an invalid deposit amount. Try again!');
    }else{
    console.log(numberDepositAmount);
    return numberDepositAmount;
    }
  
}
}
 deposit()