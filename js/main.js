let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-input");
let elWalk = document.querySelector(".walk");
let elBike = document.querySelector(".bike");
let elCar = document.querySelector(".car");
let elAir = document.querySelector(".air");

let timeWalk = 3.6;
let timeBike = 20.1;
let timeCar = 70;
let timeAirplane = 800;

function checkTime(dis, speed) {
    let hour = Math.floor(dis / speed);
    let minutes = Math.floor((dis / speed - hour) * 60);
    let seconds = Math.floor(((dis / speed - hour) * 60 - minutes) * 60);

    // if (hour) {
    //     return undefined;
    // }
    // if (minutes == 0) {
    //     return undefined;
    // }
    // if (seconds == 0) {
    //     return undefined;
    // }

    return `${hour}h : ${minutes}m : ${seconds}s`
}

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let elInputValue = +elInput.value;

    elWalk.textContent = checkTime(elInputValue, timeWalk);
    elBike.textContent = checkTime(elInputValue, timeBike)
    elCar.textContent = checkTime(elInputValue, timeCar)
    elAir.textContent = checkTime(elInputValue, timeAirplane)
})


// let cars = ['BMW ', ' AUDI ', ' FORD ', ' CHEVROLET ', ' BUGATTI ']

// text.textContent = cars;

// form.addEventListener("submit", function(evt) {
//     evt.preventDefault();

//     let elInputValue = input.value;

//     span.textContent = cars[elInputValue - 1];
// })