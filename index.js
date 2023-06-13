const distanceFromHqInBlocks = (customersStreet) => {
    let hq = 42
    let distanceFromHqInBlocks = Math.abs(hq -customersStreet)
        return distanceFromHqInBlocks;
}

const distanceFromHqInFeet = customersStreet => {
    return distanceFromHqInBlocks (customersStreet)*264;
}

const distanceTravelledInFeet = (startingPoint,endingPoint) => {
    let distanceTravelledInFeet = (Math.abs(endingPoint - startingPoint))*264
    return distanceTravelledInFeet;
}

const calculatesFarePrice = (start, destination) => {
    let farePrice = 0;
    let distance = Math.abs(start - destination) *264
    
    if (distance <= 400){
        return farePrice = 0;
    } else if(distance > 400 && distance <=2000){
        return farePrice = 2.56;
    } else if(distance > 528 && distance <=2000){
        return farePrice = 25.00;
    } else if(distance > 2000 && distance <2500){
        return farePrice = 25.00;
    } else if(distance => 2500) {
        return 'cannot travel that far';
        }
    return(farePrice)
}