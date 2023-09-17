const prompt = require('prompt-sync')();


// Deposit some Money

const deposit = () =>{
  while(true){
    const depositAmount = prompt('Enter a deposit amount: ')
    const numberDepositAmount = parseFloat(depositAmount)

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
    console.log('You have entered an invalid deposit amount. Try again!');
    } else {
        console.log(numberDepositAmount);
        return numberDepositAmount;
      }
  }
}
 //Determine the number of lines the user wants to bet on
const getNumberOfLines = () => {
  while(true){
    const lines = prompt('Enter the number of lines to bet on(1 - 3): ')
    const numberOfLines = parseFloat(lines)
  
    if (isNaN(numberOfLines) || numberOfLines > 3 || numberOfLines < 1){
      console.log('You have entered an invalid number of lines. Try Again!');
    } else {
      console.log(numberOfLines);
      return numberOfLines
    }
  }
}
// Get the Bet Amount from the user
const getBet = (balance , lines) => {
  while (true) {
    const bet = prompt('Enter the bet per line: ')
    const numberBet = parseFloat(bet)

    if(isNaN(numberBet) || numberBet > balance / lines || numberBet <= 0){
      console.log('Invalid bet, Try again!. ');
    } else {
      console.log(numberBet);
      return numberBet
    }
  }
}






 let balance = deposit();
 const numberOfLines = getNumberOfLines();
 const bet = getBet(balance, numberOfLines);