// Initialize variables for hunger and happiness levels
let hunger = 50;
let happiness = 50;

// Update the hunger and happiness levels displayed on the page
function updateStats() {
  document.getElementById('hunger').innerHTML = hunger;
  document.getElementById('happiness').innerHTML = happiness;
}

// Function to feed the pet
function feed() {
  // Increase hunger level by 10
  hunger += 10;
  // Make sure hunger level does not exceed 100
  if (hunger > 100) {
    hunger = 100;
  }
  // Update the hunger and happiness levels displayed on the page
  updateStats();
  // Change the image to show that the pet has been fed
  document.getElementById('pet-image').src = "https://appstickers-cdn.appadvice.com/1462633907/840563844/10555551f3e20e2db25b875533ebcc99-0.gif";
}

// Function to play with the pet
function play() {
  // Increase happiness level by 10
  happiness += 10;
  // Make sure happiness level does not exceed 100
  if (happiness > 100) {
    happiness = 100;
  }
  // Update the hunger and happiness levels displayed on the page
  updateStats();
  // Change the image to show that the pet is playing
  document.getElementById('pet-image').src = "https://appstickers-cdn.appadvice.com/1462633907/840563844/10555551f3e20e2db25b875533ebcc99-0.gif";
}

// Update the hunger and happiness levels displayed on the page when the page loads
updateStats();
