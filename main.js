//Get element
let input = document.getElementById('lbsInput');
//Add event listener
input.addEventListener('input', function(e){
    //Get input value
    let pounds = e.target.value;
    //Output grams conversion
    document.getElementById('gOutput').innerHTML = pounds/0.0022046;
    //Output kilograms conversion
    document.getElementById('kgOutput').innerHTML = pounds/2.2046;
    //Output ounces conversion
    document.getElementById('ozOutput').innerHTML = pounds*16;
});
//Reset input
input.value = '';