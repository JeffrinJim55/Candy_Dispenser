document.getElementById("checkStock").addEventListener("click", function () {
    const candyInput = parseInt(document.getElementById("candyInput").value);
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = "";
  
    if (candyInput <= 10 && candyInput > 0) {
      let candies = "";
      for (let i = 0; i < candyInput; i++) {
        candies += "🍬 ";
      }
      resultDiv.innerHTML = `<p>Here are your candies:</p><span>${candies}</span>`;
      startCandyRain(); // Start candy rain animation
    } else if (candyInput > 10) {
      resultDiv.innerHTML = `<p>Out of Stock. I only have <span>10 candies</span>.</p>`;
    } else {
      resultDiv.innerHTML = `<p>Please enter a valid number.</p>`;
    }
  });
  
  // Function to create a candy rain effect
  function startCandyRain() {
    const candyRainContainer = document.createElement("div");
    candyRainContainer.className = "candy-rain-container";
    document.body.appendChild(candyRainContainer);
  
    for (let i = 0; i < 30; i++) {
      const candy = document.createElement("div");
      candy.className = "falling-candy";
      candy.style.left = Math.random() * 100 + "vw"; // Random horizontal position
      candy.style.animationDuration = Math.random() * 3 + 3 + "s"; // Random fall duration
      candyRainContainer.appendChild(candy);
  
      // Remove the candy after animation ends
      candy.addEventListener("animationend", () => candy.remove());
    }
  
    // Remove the container after all candies have fallen
    setTimeout(() => candyRainContainer.remove(), 6000);
  }
  