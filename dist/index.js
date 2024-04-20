var spaceShipList = [];
function createSpaceShip(name, pilot, crewLimit, crew) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: crew,
        inMission: false
    };
    spaceShipList.push(spaceship);
}
function addMember(indexOfSpaceShip, memberName) {
    if (spaceShipList[indexOfSpaceShip].crewLimit > spaceShipList[indexOfSpaceShip].crew.length) {
        spaceShipList[indexOfSpaceShip].crew.push(memberName);
        alert("".concat(memberName, " adicionado a tripula\u00E7\u00E3o."));
    }
    else {
        alert("A nave j\u00E1 est\u00E1 cheia!");
    }
}
function sendToMission(indexOfSpaceShip) {
    if (indexOfSpaceShip > spaceShipList.length) {
        alert("A nave selecionada não existe");
    }
    else {
        if (Math.floor(spaceShipList[indexOfSpaceShip].crewLimit / 3) <= (spaceShipList[indexOfSpaceShip].crew.length + 1)) {
            spaceShipList[indexOfSpaceShip].inMission = true;
            alert("".concat(spaceShipList[indexOfSpaceShip].name, " foi enviada em miss\u00E3o"));
        }
        else {
            alert("A nave ainda n\u00E3o atingiu a tripula\u00E7\u00E3o minima, por favor encaminhe mais tripulantes");
        }
    }
}
function showSpaceships() {
    for (var index = 0; index < spaceShipList.length; index++) {
        alert("\n        Index da nave: ".concat(index, "\n        Nome da nave: ").concat(spaceShipList[index].name, "\n        Piloto da nave: ").concat(spaceShipList[index].pilot, "\n        Tripula\u00E7\u00E3o da nave: ").concat(spaceShipList[index].crew, "\n        Em miss\u00E3o: ").concat(spaceShipList[index].inMission));
    }
}
createSpaceShip('aviao', 'vitor', 3, ['pedro', 'murilo']);
showSpaceships();
addMember(0, "andr\u00E9");
sendToMission(0);
showSpaceships();
