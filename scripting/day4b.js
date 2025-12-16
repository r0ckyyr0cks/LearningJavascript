const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue',
    mileage: 15000,
    myCarInfo: function() {
        return `Hey! My car is a ${this.color} ${this.year} ${this.make} ${this.model} with ${this.mileage} miles.`;
    }
}
console.log(car.myCarInfo());