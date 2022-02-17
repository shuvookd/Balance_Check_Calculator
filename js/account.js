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
})
// Balance Update
// Total Salary
const calcSal = document.getElementById('income');
const calcSalary = calcSal.innerText;
const totalSalary = parseFloat(calcSalary);

const totalexpences = document.getElementById('expencesAmount');
const totalCost = expencesAmount.innerText

totalBalance.innerText = totalSalary - totalCost ;
