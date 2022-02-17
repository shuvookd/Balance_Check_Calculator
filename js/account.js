// Function
function getInputValue(inputID){
    const x = document.getElementById(inputID);
    const y = x.value;
    const z = parseFloat(y);
    return z;
}
function balancetk(a,b){
    
    const tk = document.getElementById('remainingBalance').innerText = a - b;
    console.log(a,b);
    return tk;
}
// Calculate Expences
document.getElementById('btn-calc').addEventListener('click',function(){
    // Calculate button Rent
    const totalRentCost = getInputValue('rent');
    // Get the amount of Food
    const totalFoodCost = getInputValue('food');
    // Get the amount of Clothes
    const totalClothesCost = getInputValue('clothes');
    

    // Total Expences
    document.getElementById('expencesAmount');
    expencesAmount.innerText = totalRentCost + totalFoodCost + totalClothesCost;
    const totalCost = expencesAmount.innerText;


    // Total Salary
    const totalSalary = getInputValue('income');

    // Balance Remaining after cost
    document.getElementById('totalBalance');
    totalBalance.innerText = totalSalary - totalCost ;
    
})
    //  Save Calcutation
    document.getElementById('btn-save').addEventListener('click',function(){
    // Saving Account
    const totalPer = getInputValue('saveAmount');

    // Total Amount
    const totalSalary = getInputValue('income');

    // Calculation
    const calc = totalPer * totalSalary ;
    const SaveTK = calc/100 ;

    document.getElementById('saveAccount');
    const totalSaveTK = saveAccount.innerText = SaveTK ; 

    // Calculate button Rent
    const totalRentCost = getInputValue('rent');
    // Get the amount of Food
    const totalFoodCost = getInputValue('food');
    // Get the amount of Clothes
    const totalClothesCost = getInputValue('clothes');

    // Total Expences
    document.getElementById('expencesAmount');
    expencesAmount.innerText = totalRentCost + totalFoodCost + totalClothesCost;
    const totalCost = expencesAmount.innerText

    // Balance Remaining after cost
    document.getElementById('totalBalance');
    const balance = totalBalance.innerText = totalSalary - totalCost ;
    balancetk(balance,totalSaveTK);


    
})

