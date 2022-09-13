var elBoxForm = document.querySelector(".box");
var elBoxInput = document.querySelector("#input-number");
var elBtn = document.querySelector(".btn");

//  People  //
var elNumber = document.querySelector(".card-number");
var elMinut = document.querySelector(".card-min");
var elSecond = document.querySelector(".card-secund");

//  Bicycle //
var elBicycleNum = document.querySelector(".card-bicycle-number");
var elBicycleMun = document.querySelector(".card-bicycle-min");
var elBicycleSecund = document.querySelector(".card-bicycle-secund");

//  Car  //
var elCarNum = document.querySelector(".card-car-number");
var elCarMin = document.querySelector(".card-car-min");
var elCarSecund = document.querySelector(".card-car-secund");

//  Airplane  //
var elAirplaneNum = document.querySelectorAll(".card-airplane-number");
var elAirplaneMin = document.querySelectorAll(".card-airplane-min");
var elAirplaneSecund = document.querySelectorAll(".card-airplane-secund");

elBoxForm.addEventListener("submit", (e) => {
    e.preventDefault()

    var boxInputValue = elBoxInput.value;

    var soat = (boxInputValue / 3.6).toFixed(2);
    var soatYahlit = soat - Math.floor(soat).toFixed();
    var minut = (60 * soatYahlit % 60).toFixed(2)
    var secund = (60 * minut % 60).toFixed()

    //  People  //
    elNumber.textContent = soat;
    elMinut.textContent = minut;
    elSecond.textContent = secund

    // Bicycle //
    var bicycleSoat = (boxInputValue / 20.1).toFixed(2);
    var bicycleSoatYahlit = bicycleSoat - Math.floor(bicycleSoat).toFixed();
    var bicycleMinut = (60 * bicycleSoatYahlit % 60).toFixed(2)
    var bicycleSecund = (60 * bicycleMinut % 60).toFixed()

    //  Bicycle  //
    elBicycleNum.textContent = bicycleSoat;
    elBicycleMun.textContent = bicycleMinut;
    elBicycleSecund.textContent = bicycleSecund;

    // car //
    var carSoat = (boxInputValue / 70).toFixed(2);
    var carSoatYahlit = carSoat - Math.floor(carSoat).toFixed();
    var carMinut = (60 * carSoatYahlit % 60).toFixed(2);
    var carSecund = (60 * carMinut % 60).toFixed();

    //  car  //
    elCarNum.textContent = carSoat;
    elCarMin.textContent = carMinut;
    elCarSecund.textContent = carSecund;

    // Airplane //
    var airplaneSoat = (boxInputValue / 80).toFixed(2);
    var airplaneSoatYahlit = airplaneSoat - Math.floor(airplaneSoat).toFixed();
    var airplaneMinut = (60 * airplaneSoatYahlit % 60).toFixed(2);
    var airplaneSecund = (60 * airplaneMinut % 60).toFixed();

    //  Airplane  //
    elAirplaneNum.textContent = airplaneSoat;
    elAirplaneMin.textContent = airplaneMinut;
    elAirplaneSecund.textContent = airplaneSecund;
})


// Piyoda = 3.6km/soat;
// Velik = 20.1km/soat;
// Moshina = 70km/soat;
// Samalyot = 800km.soat;