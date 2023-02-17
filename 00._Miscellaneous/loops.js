const rocks = [
    {name: "Pet Rock", age: 2},
    {name: "Led Zeppelin", age: 55},
    {name: "Dwayne Jhonson", age: 50},
    {name: "Neptune", age: 100_000_000_000}
];

//Here we are mapping the old array to a new one with incremented ages. the original array is untouched
const rocksAgedOneYear = rocks.map(rock => ({ ...rock, age: rock.age + 1}));
console.log(rocksAgedOneYear);

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0);

console.log(evenAgedRocks);