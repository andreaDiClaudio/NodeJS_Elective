const spaceships = [
    {name: "Chinese Weather Baloon", isPriceless: false, cost: 1_000_000},
    {name: undefined, type: "UFO", isPriceless: true, cost: Number.MAX_SAFE_INTEGER},
    {name: "Apollo 13", versionNumber: 13, isPriceless: false, cost: 2_000_000}
];

/*
forEach is never ther ight one
spaceship.forEach((spaceship, index, array) => console.log(array));
*/

//task for all spaceship make the owner China
const spaceshipsWithOwner = spaceships.map(spaceship => {
    spaceship.owner = "China";
    return {...spaceship, owner: "China"};//this line does not mutate the original array.
});


//add a cost of "isPriceless: true" to all spaceshipsWithOwner
/*
const spaceshipsWithOwnerAndPrice = spaceshipsWithOwner.map(spaceship => {
    spaceship.isPriceless = true;
    return spaceship;
});

console.log(spaceshipsWithOwnerAndPrice);
*/

//Give me the priceless and not pricesless spaceships into different arrays
const pricelessShips = spaceships.filter(spaceship => spaceship.isPriceless == true);
const notPricelessShips = spaceships.filter(spaceship => spaceship.isPriceless == false);

//task find a spaceship that costs less than 2 million money
const affordableSpaceship = spaceships.find(spaceship => spaceship.cost < 2_000_000);
console.log(affordableSpaceship);
