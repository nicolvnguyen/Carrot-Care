function fill() {
  var liq = document.getElementById("liquid");
  liq.style.height = "0px";
}

var clicks = 0;

function drinkWater() {
  var liq = document.getElementById("liquid");
  if (liq.style.height != "360px") {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("bunny").src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanP4MX90MPFUjbXwac_6wOYX3I3RsHU51xg&s";
    setTimeout(function () {
      document.getElementById("bunny").src =
        "https://t4.ftcdn.net/jpg/05/71/77/01/360_F_571770110_Ma0yElFc0Tpn1nWKOolJa3nvx0VIIG0F.jpg";
    }, 500);
  }
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

function pourWater() {
  var liq = document.getElementById("liquid");
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

function calculateSleep() {
    var start = document.getElementById('asleep').value;
    let[hoursStart, minutesStart] = start.split(':');
    hoursStart = parseInt(hoursStart);
    minutesStart = parseInt(minutesStart);
  
    var finish = document.getElementById('wokeup').value;
    let[hoursFinish, minutesFinish] = finish.split(':');
    hoursFinish = parseInt(hoursFinish);
    minutesFinish = parseInt(minutesFinish);
  
    if (!start) {
        document.querySelector("output").value = 'Please input a time for when you fell asleep!';
    }
  
    else if (!finish) {
        document.querySelector("output").value = 'Please input a time for when you woke up!';
    }
  
    else if (!Number.isInteger(hoursStart) || hoursStart > 12 || hoursStart < 1 || !Number.isInteger(minutesStart) || minutesStart > 59 || minutesStart < 0) {
        document.querySelector("output").value = 'Invalid time for when you fell asleep!';
    }
  
    else if (!Number.isInteger(hoursFinish) || hoursFinish > 12 || hoursFinish < 1 || !Number.isInteger(minutesFinish) || minutesFinish > 59 || minutesFinish < 0) {
        document.querySelector("output").value = 'Invalid time for when you woke up!';
    }
  
    else if (!document.getElementsByName('one')[0].checked && !document.getElementsByName('one')[1].checked) {
        document.querySelector("output").value = 'Please select AM or PM for when you fell asleep!';
    }
  
    else if (!document.getElementsByName('two')[0].checked && !document.getElementsByName('two')[1].checked) {
        document.querySelector("output").value = 'Please select AM or PM for when you woke up!';
    }
  
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
  
        if (minutesStart > minutesFinish) {
            total = 1440 - minutesStart + minutesFinish;
        }
  
        else {
            total = minutesFinish - minutesStart;
        }
  
        var totalHours = Math.floor(total / 60);
        var totalMinutes = total % 60;
  
        document.querySelector("output").value = 'Hours: ' + totalHours + ', Minutes: ' + totalMinutes;
    }
  };
  
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
  
  const URL = "https://quoteslate.vercel.app/api/quotes/random?tags=wisdom&minLength=50&maxLength=150"
  async function makeAPICall() {
    const result = await fetch(URL);
    result.json().then(data => {
      const quote = data.quote;
      console.log(quote)
      document.getElementById("quote").innerHTML = quote;
    })
  }

    document.addEventListener("DOMContentLoaded", (event) => {
    const storedName = localStorage.getItem('nameInput');
    const bunnyName = document.getElementById('bunny-name');
    if (storedName && bunnyName) {
      bunnyName.textContent = storedName;
    }
    console.log("page loaded")  
});