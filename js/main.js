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
var elAirplaneNum = document.querySelector(".card-airplane-number");
var elAirplaneMin = document.querySelector(".card-airplane-min");
var elAirplaneSecund = document.querySelector(".card-airplane-secund");

elBoxForm.addEventListener("submit", (e) => {
    e.preventDefault()

    var boxInputValue = elBoxInput.value;

    var soat = (boxInputValue / 3.6).toFixed(2);
    var soatYahlit = soat - Math.floor(soat).toFixed(2);
    var minut = 60 * soatYahlit;
    var minYahlit = minut - Math.floor(minut).toFixed(2);
    var secund = 60 * minYahlit;

    //  People  //
    elNumber.textContent = Math.floor(soat);
    elMinut.textContent = Math.floor(minut);
    elSecond.textContent = Math.floor(secund);

    // Bicycle //
    var bicycleSoat = (boxInputValue / 20.1).toFixed(2);
    var bicycleSoatYahlit = bicycleSoat - Math.floor(bicycleSoat).toFixed(2);
    var bicycleMinut = 60 * bicycleSoatYahlit;
    var bicycleMinYahlit = bicycleMinut - Math.floor(bicycleMinut).toFixed(2);
    var bicycleSecund = 60 * bicycleMinYahlit;

    //  Bicycle  //
    elBicycleNum.textContent = Math.floor(bicycleSoat);
    elBicycleMun.textContent = Math.floor(bicycleMinut);
    elBicycleSecund.textContent = Math.floor(bicycleSecund);

    // car //
    var carSoat = (boxInputValue / 70).toFixed(2);
    var carSoatYahlit = carSoat - Math.floor(carSoat).toFixed(2);
    var carMinut = 60 * carSoatYahlit;
    var carMinYahlit = carMinut - Math.floor(carMinut).toFixed(2);
    var carSecund = 60 * carMinYahlit;

    //  car  //
    elCarNum.textContent = Math.floor(carSoat);
    elCarMin.textContent = Math.floor(carMinut);
    elCarSecund.textContent = Math.floor(carSecund);

    // Airplane //
    var airplaneSoat = (boxInputValue / 800).toFixed(2);
    var airplaneSoatYahlit = airplaneSoat - Math.floor(airplaneSoat).toFixed(2);
    var airplaneMinut = 60 * airplaneSoatYahlit;
    var airplaneMinYahlit = airplaneMinut - Math.floor(airplaneMinut).toFixed(2);
    var airplaneSecund = 60 * airplaneMinYahlit;

    //  Airplane  //
    elAirplaneNum.textContent = Math.floor(airplaneSoat);
    elAirplaneMin.textContent = Math.floor(airplaneMinut);
    elAirplaneSecund.textContent = Math.floor(airplaneSecund); 
})


// Piyoda = 3.6km/soat;
// Velik = 20.1km/soat;
// Moshina = 70km/soat;
// Samalyot = 800km.soat;