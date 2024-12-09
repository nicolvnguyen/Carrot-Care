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
