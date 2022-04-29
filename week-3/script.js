var balance = 10000;
let action = prompt('Would you like to Deposit Money or Withdraw Money?');

if (action === 'deposit' || action === 'Deposit') {
  let deposit = prompt('How Much Would You Like To Deposit?'); 
  alert(`Your New Balance is: ${balance + deposit}`)
  } else {
    let withdraw = prompt('How Much Would You Like To Withdraw?')
    alert(`Your New Balance is: ${balance - withdraw}`)  
};