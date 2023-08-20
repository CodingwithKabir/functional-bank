document.getElementById('Deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-amount');
    const previousTotalDepositAmount = getTotalValueById('deposit-total')
    const newTotalDepositAmount = newDepositAmount + previousTotalDepositAmount;
    setTotalValueById('deposit-total', newTotalDepositAmount);
    
    const previousTotalBalance = getTotalValueById('balance-total');
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    setTotalValueById('balance-total', newTotalBalance)
})