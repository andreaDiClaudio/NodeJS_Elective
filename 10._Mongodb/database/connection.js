import { MongoClient } from "mongodb";

const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL);

const db = client.db("candy");

export default {
    shops: db.collection("shops"),
    candyTypes: db.collection("candy_types")
}