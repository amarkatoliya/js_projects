const inputWeight = document.getElementById('in-Weight');
const inputHeight = document.getElementById('in-Height');  // Height in cm
const calBtn = document.getElementById('bmiBtn');
const outputBtn = document.getElementById('output');

calBtn.addEventListener('click', () => {
    const w = parseFloat(inputWeight.value); // Convert input to float
    const h = parseFloat(inputHeight.value); // Convert input to float

    // Debugging: Log the values
    console.log("Weight:", w);
    console.log("Height (cm):", h);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert('Please enter valid numbers for weight and height.');
    } else {
        // Convert height from cm to meters
        const heightInMeters = h / 100;

        // BMI formula: weight / (height in meters)^2
        const result = w / (heightInMeters * heightInMeters);
        console.log("BMI Result:", result); // Debugging: Log the result

   
        let statusMessage = '';

        if (result <= 18.5) {
            statusMessage = 'You are Underweight';
        } else if (result > 18.5 && result <= 24.9) {
            statusMessage = 'You are Normal';
        } else if (result > 25 && result <= 29.9) {
            statusMessage = 'You are Overweight';
        } else {
            statusMessage = 'You are Obese';
        }

        // Display the message along with BMI
        outputBtn.textContent = `Your BMI is: ${result.toFixed(2)}. ${statusMessage}`;
    }
});
