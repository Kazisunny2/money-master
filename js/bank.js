 document.getElementById('calculate-button').addEventListener('click',function(){
        const incomeTotal = parseFloat(document.getElementById('income-input').value)
        const foodTotal = parseFloat(document.getElementById('food-input').value)
        const rentTotal = parseFloat(document.getElementById('rent-input').value)
        const clothesTotal = parseFloat(document.getElementById('clothes-input').value)
        document.getElementById('total-expense').innerText = incomeTotal - (foodTotal+rentTotal+clothesTotal);
    })
    
