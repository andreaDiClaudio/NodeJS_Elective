import db from "./connection.js";

console.log(process.argv.findIndex((argument) => argument === "delete_mode"))

const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if (isDeleteMode) {
  db.exec(`DROP TABLE planets`);
  db.exec(`DROP TABLE people`);
}

//Conventions
//- Always name table plurals becasue it contains multi entries
//- snake case
/*DDL*/
const planets = `CREATE TABLE IF NOT EXISTS planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    size FLOAT,
    is_habitable BOOLEAN NOT NULL
  );`

const people = `CREATE TABLE IF NOT EXISTS people (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  planet_id INTEGER,
  FOREIGN KEY (planet_id) REFERENCES planets (id)
);`

db.exec(planets);
db.exec(people);

/*DML*/
//Seeding - putting data in the db
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Mercury', False);`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Venus', False)`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Earth', True)`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Mars', false)`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Jupiter', False)`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Saturn', False)`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Neptune', False)`);
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Uranus', False)`);
