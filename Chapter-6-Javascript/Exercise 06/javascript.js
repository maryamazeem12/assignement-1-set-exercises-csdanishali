
//When the page finishes loading..
window.onload =() => {
    //event listener for "calculate" button
    document.querySelector('#calcBtn').addEventListener('click', calculate);
     //event listener for "reset" button
    document.querySelector('#resetBtn').addEventListener('click', resetForm);
     //event listener for "theme toggle" button
    document.querySelector('#themeToggle').addEventListener('change',toggleTheme)
}
//Function to calculate total cost and distance
function calculate(){
    //This converts the petrol price and litres from input fields and convert to numbers
    const Petrol_Price= parseFloat(document.querySelector('#Petrol_Price').value);
    const liters = parseFloat(document.querySelector('#Litres').value);
    //if input is empty,exit the function
    if (!Petrol_Price || !liters) return;
    //Calculate total cost
    const total = Petrol_Price * liters;
    //assume distance to be 15km per litre
    const distance = liters * 15;
    //display the results in the output
    document.querySelector('#totalAmount').innerText = total.toFixed(2);
    document.querySelector('#distance').innerText = distance.toFixed(1);
}
//function to reset the input and output values
function resetForm(){
    //set petrol price back to default value
    document.querySelector('#Petrol_Price').value= 1.72;
    //reset litres value
    document.querySelector('#Litres').value= 0;
    //reset displayed output values
    document.querySelector('#totalAmount').innerText= "0.00";
    document.querySelector('#distance').innerText= "0.0";
    
}
//function for toggle theme
function toggleTheme(){
    //dark mode
    document.body.classList.toggle('dark');
}
    
  

  
