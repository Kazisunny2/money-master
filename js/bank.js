 // income calculation
 document.getElementById('calculate-button').addEventListener('click',function(){
     let incomeTotal;
    let incomeValue = document.getElementById('income-input').value;
     if(isNaN(incomeValue)){
        document.getElementsById('error-input').innerText = 'Please Enter Number';
     }
     else{
        incomeTotal = parseFloat(document.getElementById('income-input').value);
        document.getElementById('error-input').innerText = '';
     }  
     const foodTotal = parseFloat(document.getElementById('food-input').value)
    const rentTotal = parseFloat(document.getElementById('rent-input').value)
    const clothesTotal = parseFloat(document.getElementById('clothes-input').value); 
    document.getElementById('total-expense').innerText = (foodTotal+rentTotal+clothesTotal); 
    document.getElementById('total-balance').innerText = incomeTotal - (foodTotal+rentTotal+clothesTotal);

})

//saving calculation
document.getElementById('save-button').addEventListener('click', function(){
    const foodTotal = parseFloat(document.getElementById('food-input').value)
    const rentTotal = parseFloat(document.getElementById('rent-input').value)
    const clothesTotal = parseFloat(document.getElementById('clothes-input').value); 
    const incomeTotal = parseFloat(document.getElementById('income-input').value);
    totalBalance = document.getElementById('total-balance').innerText = incomeTotal - (foodTotal+rentTotal+clothesTotal);

    const saveInput = parseFloat(document.getElementById('save-input').value);
    savingAmount = document.getElementById('saving-amount').innerText = (incomeTotal* (saveInput/100));
    document.getElementById('remaining-balance').innerText = totalBalance-savingAmount; 
    })
