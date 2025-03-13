// Function to determine the grade based on student marks
function gradeGenerator(marks) {
    if (marks > 100 || marks < 0) {
        return "Invalid marks! Please enter a number between 0 and 100.";
    }
    if (isNaN(marks)) {
        return "Invalid input! Please enter a numeric value.";
    }
    // Determine grade based on the given criteria
    else if (marks > 79) {
        return "Grade: A";
    } else if (marks >= 60) {
        return "Grade: B";
    } else if (marks >= 50) {
        return "Grade: C";
    } else if (marks >= 40) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}

let marks = prompt("Enter student marks (0-100): ");  // Prompt user for input
console.log(gradeGenerator(parseInt(marks))); // Display the grade


