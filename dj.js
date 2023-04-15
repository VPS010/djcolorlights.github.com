var colors = ["#FF5733" , "#FFFC33" , "#3349FF" , "#8F0BF7"];
var intervalId;

document.querySelector(".clr").addEventListener("click", function() {
  clearInterval(intervalId); // clear any existing interval
  var speed = document.getElementById("speed").value * 100; // get the value of the slider and scale it
  intervalId = setInterval(function() {
    var colorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
  }, speed); // change color at the speed specified by the slider
});

document.querySelector(".stop").addEventListener("click", function() {
  clearInterval(intervalId); // stop the interval
});

document.getElementById("speed").addEventListener("input", function() {
  var speedValue = document.getElementById("speedValue");
  speedValue.textContent = this.value; // update the value displayed next to the slider
  if (intervalId) {
    clearInterval(intervalId); // stop the existing interval
    var speed = this.value * 100; // get the value of the slider and scale it
    intervalId = setInterval(function() {
      var colorIndex = Math.floor(Math.random() * colors.length);
      document.body.style.backgroundColor = colors[colorIndex];
    }, speed); // change color at the new speed specified by the slider
  }
});
