const {tanks} = require("./tanks.json");

function getTanks(){
    return tanks;
}

function addTank(tank){
    tanks.push(tank);
    return tanks;
}

module.exports = {
    getTanks : getTanks,
    addTank: addTank
}