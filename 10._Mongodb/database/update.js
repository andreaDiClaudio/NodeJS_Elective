import db from "./connection.js";

db.shops.updateOne({ city: "Hellerup" }, { $push: { shops: "added shop" } });