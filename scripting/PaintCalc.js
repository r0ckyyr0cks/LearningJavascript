//Create a function that gets the full area and determines how many paint cans are needed to cover a wall
//for reference, the equation is:(height * width) / 5

const areaCalc = (height, width) => {
    let area = height * width
    let paintCans = Math.ceil(area / 5)
    return paintCans
}

console.log(areaCalc(5, 5));

