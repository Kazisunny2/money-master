//  // income calculation
//  document.getElementById('calculate-button').addEventListener('click',function(){ 
//      const incomeTotal = parseFloat(document.getElementById('income-input').value);
//      if(isNaN(incomeTotal) || incomeTotal <0){
//         document.getElementById('income-input').value = '';
//          return alert('Please input valid amount of money in number format')
//      }
//      const foodTotal = parseFloat(document.getElementById('food-input').value);
//       if(isNaN(foodTotal) || foodTotal <0){
//         document.getElementById('food-input').value = '';
//          return alert('Please input valid amount of money in number format')
//      }

//     const rentTotal = parseFloat(document.getElementById('rent-input').value)
//     const clothesTotal = parseFloat(document.getElementById('clothes-input').value); 
//     document.getElementById('total-expense').innerText = (foodTotal+rentTotal+clothesTotal); 
//     document.getElementById('total-balance').innerText = incomeTotal - (foodTotal+rentTotal+clothesTotal);

// })

// //saving calculation
// document.getElementById('save-button').addEventListener('click', function(){
//     const foodTotal = parseFloat(document.getElementById('food-input').value)
//     const rentTotal = parseFloat(document.getElementById('rent-input').value)
//     const clothesTotal = parseFloat(document.getElementById('clothes-input').value); 
//     const incomeTotal = parseFloat(document.getElementById('income-input').value);
//     totalBalance = document.getElementById('total-balance').innerText = incomeTotal - (foodTotal+rentTotal+clothesTotal);

//     const saveInput = parseFloat(document.getElementById('save-input').value);
//     savingAmount = document.getElementById('saving-amount').innerText = (incomeTotal* (saveInput/100));
//     document.getElementById('remaining-balance').innerText = totalBalance-savingAmount; 
//     })

// const calculateBtn = document.getElementById('calculate-button')
// const saveBtn = document.getElementById('save-button')
// const expenseField = document.getElementById('total-expense')
// const balanceField = document.getElementById('total-balance')
// const savingAmountField = document.getElementById('saving-amount')
// const remainingField = document.getElementById('remaining-balance')
  
//     //Get value from input box
//     function getInputValue(boxID){
//         let inputBox = document.getElementById(boxID)
//         let inputAmount = parseFloat(inputBox.value);
//         if(isNaN(inputAmount) || inputAmount < 0){
//             inputBox.value = ''
//             return alert ('Please input valid amount of money in number formate')
//         }
//         inputBox.value = ''
//         return inputAmount;
//     }
//     // update balance

//      calculateBtn.addEventListener('click', function(event){
//          event.preventDefault()
//         let availableAmount = parseFloat(expenseField.innerText)
//         let inputAmount = getInputValue('income-input')
//         if (inputAmount> 0 ){
//             expenseField.innerText = inputAmount  
//         }
//     })

    //  // income calculation
  document.getElementById('calculate-button').addEventListener('click',function(){ 
      const incomeTotal = parseFloat(document.getElementById('income-input').value);
     if(isNaN(incomeTotal) || incomeTotal <0){
         document.getElementById('income-input').value = '';
         document.getElementById('food-input').value = '';
          return alert('Please input valid amount of money in number format')
      }
    //   else{
    //       continue
    //   }
     const foodTotal = parseFloat(document.getElementById('food-input').value);
      if(isNaN(foodTotal) || foodTotal <0){
         document.getElementById('food-input').value = '';
          return alert('Please input valid amount of money in number format')
      }

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
