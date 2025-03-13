function speedDetector(speed) {
    const speedLimit = 70;
    const pointsPer5Km = 1;
    const maxPoints = 12;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        let points = Math.floor((speed - speedLimit) / 5) *pointsPer5Km;
        if (points > maxPoints) {
            return "License suspended";
        }
        return `Points: ${points}`;
    }
}

let speed = prompt("Enter the speed of the car: ");
console.log(speedDetector(parseInt(speed)));
