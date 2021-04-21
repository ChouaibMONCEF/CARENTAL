function liste() {
  var i = reserve.vehicule.selectedIndex;

  for (let i = 0; i < 5; i++) {
    reserve.type.options[i].text = "";
  }

  switch (i) {
    case 1:
      var vi = new Array("Electrique", "Essence");
      break;
    case 2:
      var vi = new Array("Electrique", "Hybride", "Essence");
      break;
    case 3:
      var vi = new Array("Electrique", "Essence");
      break;
    case 4:
      var vi = new Array("Hybride", "Diesel", "Essence");
      break;
    case 5:
      var vi = new Array("Diesel");
      break;
    case 6:
      var vi = new Array("Essence", "Diesel");
      break;
    case 7:
      var vi = new Array("Diesel");
      break;
  }
  for (k = 0; k < vi.length; k++) {
    reserve.type.options[k].innerText = vi[k];
  }
  reserve.type.selectIndex = 0;
}
let cars = document.querySelector(
  "body > div:nth-child(2) > form > select:nth-child(3)"
);

let fuel = document.querySelector(
  "body > div:nth-child(2) > form > select:nth-child(7)"
);
let price = document.getElementById("price");
function calculate() {
  let auto = document.querySelector("#auto");
  let man = document.querySelector("#man");
  let selectedCar = cars.options[cars.selectedIndex];
  let selectedFuel = fuel.options[fuel.selectedIndex];
  let days = document.querySelector("#days");
  // console.log(selectedFuel.text);
  console.log(selectedCar.value);
  if (selectedCar.value == 10 && selectedFuel.text == "Electrique") {
    let pr = eval((parseInt(selectedCar.value) + 0.5) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 10 && selectedFuel.text == "Essence") {
    let pr = eval((parseInt(selectedCar.value) + 1.4) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 12 && selectedFuel.text == "Electrique") {
    let pr = eval((parseInt(selectedCar.value) + 0.6) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 12 && selectedFuel.text == "Hybride") {
    let pr = eval((parseInt(selectedCar.value) + 1.08) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 12 && selectedFuel.text == "Essence") {
    let pr = eval((parseInt(selectedCar.value) + 1.68) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 14 && selectedFuel.text == "Electrique") {
    let pr = eval((parseInt(selectedCar.value) + 0.7) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 14 && selectedFuel.text == "Essence") {
    let pr = eval((parseInt(selectedCar.value) + 1.96) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 23.8 && selectedFuel.text == "Hybride") {
    let pr = eval((parseInt(selectedCar.value) + 1.8) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 23.8 && selectedFuel.text == "Diesel") {
    let pr = eval((parseInt(selectedCar.value) + 4.2) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 23.8 && selectedFuel.text == "Essence") {
    let pr = eval((parseInt(selectedCar.value) + 2.8) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 16 && selectedFuel.text == "Diesel") {
    let pr = eval((parseInt(selectedCar.value) + 3.36) * parseInt(days.value));
    price.innerHTML = pr;
    auto.checked = true;
    man.disabled = true;
  } else if (selectedCar.value == 900 && selectedFuel.text == "Essence") {
    let pr = eval((parseInt(selectedCar.value) + 126) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 900 && selectedFuel.text == "Diesel") {
    let pr = eval((parseInt(selectedCar.value) + 189) * parseInt(days.value));
    price.innerHTML = pr;
    auto.disabled = true;
    man.checked = true;
  } else if (selectedCar.value == 297.5 && selectedFuel.text == "Diesel") {
    let pr = eval((parseInt(selectedCar.value) + 62.475) * parseInt(days.value));
    price.innerHTML = pr;
    man.disabled = true;
    auto.checked = true;
    
  }
}
