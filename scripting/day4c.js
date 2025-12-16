const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue',
    mileage: 15000,
    myCarInfo: function() {
        return this;
    }
}
console.log(car.myCarInfo());