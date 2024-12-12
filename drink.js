// Fill the cup with liquid to the max
function fill() {
  var liq = document.getElementById("liquid");
  liq.style.height = "0px";
}

// Keep track of how many times user clicked drink button
var clicks = 0;

// Drink water and deplete the glass
function drinkWater() {
  var liq = document.getElementById("liquid");
  if (liq.style.height != "360px") {
    // Add to the click counter for how many cups the user drank
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    // Change image from regular bunny to bunny drinking water
    document.getElementById("bunny").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanP4MX90MPFUjbXwac_6wOYX3I3RsHU51xg&s";
    setTimeout(function () {
      document.getElementById("bunny").src =
        "https://t4.ftcdn.net/jpg/05/71/77/01/360_F_571770110_Ma0yElFc0Tpn1nWKOolJa3nvx0VIIG0F.jpg";
    }, 500);
  }
  // Change the height of the cup to be lower as the bunny drinks
  if (liq.style.height == "0px") {
    liq.style.height = "30px";
  } else if (liq.style.height == "30px") {
    liq.style.height = "60px";
  } else if (liq.style.height == "60px") {
    liq.style.height = "90px";
  } else if (liq.style.height == "90px") {
    liq.style.height = "120px";
  } else if (liq.style.height == "120px") {
    liq.style.height = "150px";
  } else if (liq.style.height == "150px") {
    liq.style.height = "180px";
  } else if (liq.style.height == "180px") {
    liq.style.height = "210px";
  } else if (liq.style.height == "210px") {
    liq.style.height = "240px";
  } else if (liq.style.height == "240px") {
    liq.style.height = "270px";
  } else if (liq.style.height == "270px") {
    liq.style.height = "300px";
  } else if (liq.style.height == "300px") {
    liq.style.height = "330px";
  } else if (liq.style.height == "330px") {
    liq.style.height = "360px";
  }
}

// Pour water and increase the water in the glass
function pourWater() {
  var liq = document.getElementById("liquid");
  // Change the height of the cup to be higher as water is poured
  if (liq.style.height == "360px") {
    liq.style.height = "330px";
  } else if (liq.style.height == "330px") {
    liq.style.height = "300px";
  } else if (liq.style.height == "300px") {
    liq.style.height = "270px";
  } else if (liq.style.height == "270px") {
    liq.style.height = "240px";
  } else if (liq.style.height == "240px") {
    liq.style.height = "210px";
  } else if (liq.style.height == "210px") {
    liq.style.height = "180px";
  } else if (liq.style.height == "180px") {
    liq.style.height = "150px";
  } else if (liq.style.height == "150px") {
    liq.style.height = "120px";
  } else if (liq.style.height == "120px") {
    liq.style.height = "90px";
  } else if (liq.style.height == "90px") {
    liq.style.height = "60px";
  } else if (liq.style.height == "60px") {
    liq.style.height = "30px";
  } else if (liq.style.height == "30px") {
    liq.style.height = "0px";
  }
}

// Calculate how much sleep the bunny got
function calculateSleep() {
    // Obtain the hours and minutes from the input of when the user slept
    var start = document.getElementById('asleep').value;
    let[hoursStart, minutesStart] = start.split(':');
    hoursStart = parseInt(hoursStart);
    minutesStart = parseInt(minutesStart);
  
    // Obtain the hours and minutes from the input of when the user woke up
    var finish = document.getElementById('wokeup').value;
    let[hoursFinish, minutesFinish] = finish.split(':');
    hoursFinish = parseInt(hoursFinish);
    minutesFinish = parseInt(minutesFinish);
  
    // Check if there is an input for when the user fell asleep
    if (!start) {
        document.querySelector("output").value = 'Please input a time for when you fell asleep!';
    }
  
    // Check if there is an input for when the user woke up
    else if (!finish) {
        document.querySelector("output").value = 'Please input a time for when you woke up!';
    }
  
    // Check if the time slept is a valid input
    else if (!Number.isInteger(hoursStart) || hoursStart > 12 || hoursStart < 1 || !Number.isInteger(minutesStart) || minutesStart > 59 || minutesStart < 0) {
        document.querySelector("output").value = 'Invalid time for when you fell asleep!';
    }
  
    // Check if the time woke up is a valid input
    else if (!Number.isInteger(hoursFinish) || hoursFinish > 12 || hoursFinish < 1 || !Number.isInteger(minutesFinish) || minutesFinish > 59 || minutesFinish < 0) {
        document.querySelector("output").value = 'Invalid time for when you woke up!';
    }
  
    // Check if the user selected AM or PM for when the user fell asleep
    else if (!document.getElementsByName('one')[0].checked && !document.getElementsByName('one')[1].checked) {
        document.querySelector("output").value = 'Please select AM or PM for when you fell asleep!';
    }
  
    // Check if the user selected AM or PM for when the user woke up
    else if (!document.getElementsByName('two')[0].checked && !document.getElementsByName('two')[1].checked) {
        document.querySelector("output").value = 'Please select AM or PM for when you woke up!';
    }
  
    // Calculate the hours into minutes
    else {
        if (hoursStart == 12) {
            hoursStart = 0;
        }
        if (document.getElementsByName('one')[1].checked) {
            hoursStart += 12;
        }
        minutesStart += hoursStart * 60;
        
        if (hoursFinish == 12) {
            hoursFinish = 0;
        }
        if (document.getElementsByName('two')[1].checked) {
            hoursFinish+= 12;
        }
        minutesFinish += hoursFinish * 60;
  
        var total = 0;
  
        // Subtract to figure out how many minutes have passed between the start and finish
        if (minutesStart > minutesFinish) {
            total = 1440 - minutesStart + minutesFinish;
        }
  
        else {
            total = minutesFinish - minutesStart;
        }
  
        // Convert the minutes into hours and the remainder minutes
        var totalHours = Math.floor(total / 60);
        var totalMinutes = total % 60;
  
        // Output the hours and minutes slept
        document.querySelector("output").value = 'Hours: ' + totalHours + ', Minutes: ' + totalMinutes;
    }
  };
  
  // Save the name inputted for the bunny
  const storedName = localStorage.getItem('nameInput');
  const bunnyInput = document.getElementById('bunny-input');
  const bunnyName = document.getElementById('bunny-name');
  
  function save_name() {
    var input = document.getElementById("bunny-input").value;
    localStorage.setItem('nameInput', input)
    const bunnyName = document.getElementById('bunny-name');

    bunnyName.innerHTML = input;
    // alert("Name saved! The bunny is now named: " + input);
  }
  
  // Generate quotes using an API
  const URL = "https://quoteslate.vercel.app/api/quotes/random?tags=wisdom&minLength=50&maxLength=150"
  async function makeAPICall() {
    const result = await fetch(URL);
    result.json().then(data => {
      const quote = data.quote;
      console.log(quote)
      document.getElementById("quote").innerHTML = quote;
    })
  }

  // Save thte bunny's name across the pages
    document.addEventListener("DOMContentLoaded", (event) => {
    const storedName = localStorage.getItem('nameInput');
    const bunnyName = document.getElementById('bunny-name');
    if (storedName && bunnyName) {
      bunnyName.textContent = storedName;
    }
    console.log("page loaded")  
});