let cars = ['BMW ', ' AUDI ', ' FORD ', ' CHEVROLET ', ' BUGATTI '];

title.textContent = cars;

form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    if(input1.value) {
        cars.unshift(input1.value);    
    }

    if(input2.value) {
        cars.push(input2.value);
    }
    title.textContent = cars;
})

first.addEventListener("click", function(evt) {
    evt.preventDefault();

    cars.shift();
    title.textContent = cars;
})

second.addEventListener("click", function(evt) {
    evt.preventDefault();

    cars.pop();
    title.textContent = cars;
})