// Calculate button Rent
document.getElementById('btn-calc').addEventListener('click', function(){
    // Get the amount of rent
    const calcExpRent = document.getElementById('rent');
    const calcExpencesRent = calcExpRent.value;
    // console.log(calcExpencesRent);

    const expRent = document.getElementById('expencesAmount');
    expRent.innerText = calcExpencesRent;

})

// Calculate button Food
document.getElementById('btn-calc').addEventListener('click', function(){
    // Get the amount of Food
    const calcExpFood = document.getElementById('food');
    const calcExpencesFood = calcExpFood.value;
    // console.log(calcExpencesFood);

    const expFood = document.getElementById('expencesAmount');
    expFood.innerText = calcExpencesFood;

})

// Calculate button Clothes
document.getElementById('btn-calc').addEventListener('click', function(){
    // Get the amount of Clothes
    const calcExpClothes = document.getElementById('clothes');
    const calcExpencesClothes = calcExpClothes.value;
    // console.log(calcExpencesClothes);

    const expClothes = document.getElementById('expencesAmount');
    expClothes.innerText = calcExpencesClothes;

    

    

})
// Calculate Total Expences




// Balance Update
