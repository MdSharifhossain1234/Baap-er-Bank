// 1. add event handler with the withdraw button 

// 2.get the withdraw amount from the withdraw input field
// 2.5 also make sure to convert the input into a number by using parseflot 
// 3. get previous withdraw total

// 4.calculate total withdraw amount 
// 4.5.set total withdraw 

// 5. get the previous balance total 




// 7.clear the input value 

// step - 1 :

document.getElementById('btn-withdraw').addEventListener('click', function(){
//    step 2 
     
     const withdrawField = document.getElementById('withdraw-field');
     const newWithDrawAmountString = withdrawField.value;
     const newWithDrawAmount = parseFloat(newWithDrawAmountString);
     
     

    //  step 3: 

    const withdrawAmountElement = document.getElementById('withdraw-total');
    const previousWithDrawTotalString = withdrawAmountElement.innerText;
    const previousWithDrawTotal = parseFloat(previousWithDrawTotalString);
    

    // step 4:
    
    const currentWithdrawTotal = previousWithDrawTotal + newWithDrawAmount;
    withdrawAmountElement.innerText = currentWithdrawTotal;


    // step 5 :

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6:
    

    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceElement.innerText = newBalanceTotal;



    // step 7:

    withdrawField.value = '';

})