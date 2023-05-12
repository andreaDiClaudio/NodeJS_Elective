import db from "./connection.js";

const findAllShops = await db.shops.find().toArray();
const findInHellerup = await db.shops.find({ city: "Hellerup" }).toArray();

console.log(findAllShops);
