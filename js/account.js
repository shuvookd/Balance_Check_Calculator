// Calculate Expences
document.getElementById('btn-calc').addEventListener('click',function(){
    // Calculate button Rent
    const calcExpRent = document.getElementById('rent');
    const calcExpencesRent = calcExpRent.value;
    const totalRentCost = parseFloat(calcExpencesRent);

    // Get the amount of Food
    const calcExpFood = document.getElementById('food');
    const calcExpencesFood = calcExpFood.value;
    const totalFoodCost = parseFloat(calcExpencesFood);

    // Get the amount of Clothes
    const calcExpClothes = document.getElementById('clothes');
    const calcExpencesClothes = calcExpClothes.value;
    const totalClothesCost = parseFloat(calcExpencesClothes);

    // Total Expences
    document.getElementById('expencesAmount');
    expencesAmount.innerText = totalRentCost + totalFoodCost + totalClothesCost;
    const totalCost = expencesAmount.innerText

    // Balance Update
    // Total Salary
    const calcSal = document.getElementById('income');
    const calcSalary = calcSal.value;
    const totalSalary = parseFloat(calcSalary);
    // Balance Remaining after cost
    document.getElementById('totalBalance');
    totalBalance.innerText = totalSalary - totalCost ;
    
})
//  Save Calcutation
document.getElementById('btn-save').addEventListener('click',function(){
    
    
})