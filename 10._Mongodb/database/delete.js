import db from "./connection.js";

db.shops.deleteOne({ city: "New city" });