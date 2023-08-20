document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-amount');
    const previousTotalWithdrawAmount = getTotalValueById('withdraw-total')
    const newTotalWithdrawAmount = newWithdrawAmount + previousTotalWithdrawAmount;
    setTotalValueById('withdraw-total', newTotalWithdrawAmount);
    
    const previousTotalBalance = getTotalValueById('balance-total');
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    setTotalValueById('balance-total', newTotalBalance)
})