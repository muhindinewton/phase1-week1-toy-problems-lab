// Function to detect speed and calculate demerit points
function speedDetector(speed) {
    const speedLimit = 70; // Speed limit in km/s
    const pointsPer5Km = 1; // Demerit points per 5 km/s above the limit
    const maxPoints = 12; // Maximum allowed demerit points before suspension

    if (speed <= speedLimit) {
        return "Ok";
    } else {
         // Calculate demerit points for every 5 km/s above the limit
        let points = Math.floor((speed - speedLimit) / 5) *pointsPer5Km;
        // Check if points exceed the maximum allowed
        if (points > maxPoints) {
            return "License suspended";
        }
        return `Points: ${points}`; // Print the total demerit points
    }
}

let speed = prompt("Enter the speed of the car: "); // Prompt user for input
console.log(speedDetector(parseInt(speed))); // Display the result
