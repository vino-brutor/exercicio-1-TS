let spaceShipList = []

function createSpaceShip(name: string, pilot:string, crewLimit:number, crew:string[]){
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew,
        inMission: false 
    }
    spaceShipList.push(spaceship)
}

function addMember(indexOfSpaceShip:number, memberName:string){
    if(spaceShipList[indexOfSpaceShip].crewLimit  > spaceShipList[indexOfSpaceShip].crew.length ){
        spaceShipList[indexOfSpaceShip].crew.push(memberName)
        alert(`${memberName} adicionado a tripulação.`)
    }else{
        alert(`A nave já está cheia!`)
    }
}

function sendToMission(indexOfSpaceShip:number){
    if(indexOfSpaceShip > spaceShipList.length){
        alert("A nave selecionada não existe")
    }else{
        if(Math.floor(spaceShipList[indexOfSpaceShip].crewLimit/3) <= (spaceShipList[indexOfSpaceShip].crew.length + 1)){
            spaceShipList[indexOfSpaceShip].inMission = true
            alert(`${spaceShipList[indexOfSpaceShip].name} foi enviada em missão`)
        }else{
            alert(`A nave ainda não atingiu a tripulação minima, por favor encaminhe mais tripulantes`)

        }
    }
}

function showSpaceships(){
    for (let index:number = 0; index < spaceShipList.length; index++) {
        alert(
        `
        Index da nave: ${index}
        Nome da nave: ${spaceShipList[index].name}
        Piloto da nave: ${spaceShipList[index].pilot}
        Tripulação da nave: ${spaceShipList[index].crew}
        Em missão: ${spaceShipList[index].inMission}`)
    }}

createSpaceShip('aviao', 'vitor', 3, ['pedro', 'murilo'])
showSpaceships()
addMember(0, `andré`)
sendToMission(0)
showSpaceships()
