const prompt = require('prompt-sync')();

const ROWS = 3
const COLS = 3

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
}

const SYMBOL_VALUES = {
  A : 5,
  B : 4,
  C : 3,
  D : 2
}

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

//Spin the Slot Machine
const spin = () => {
  const symbols = [] ;
  for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++){
      symbols.push(symbol);
    }
    
  }

  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
     
  }
  return reels;
}


 const  reels = spin();
 console.log(reels);
//  let balance = deposit();
//  const numberOfLines = getNumberOfLines();
//  const bet = getBet(balance, numberOfLines);