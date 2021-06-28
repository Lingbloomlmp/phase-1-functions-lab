// Code your solution in this file!
const startingAddress = 42;

function distanceFromHqInBlocks(distance){
    if (distance >= 42) {
        return (distance - startingAddress)
    }
    else if (distance <= 42){
        return (startingAddress - distance)
    }
}

function distanceFromHqInFeet(distance){
    if (distance >= 42) {
        return ((distance - startingAddress) * 264)
    }
    else if (distance <= 42){
        return ((startingAddress - distance) * 264)
    }
}

function distanceTravelledInFeet(start, finish){
    let disTrav =(
    Math.abs(start - finish) * 264)
    return disTrav
}

function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start, destination)
    if (distanceTravelled < 400){
        return 0
    }
    else if (distanceTravelled >400 && distanceTravelled <= 2000){
        return ((distanceTravelled - 400) * 0.02)
    }
    else if (distanceTravelled >2000 && distanceTravelled <= 2500){
        return 25
    }
    else return ('cannot travel that far')
    
}