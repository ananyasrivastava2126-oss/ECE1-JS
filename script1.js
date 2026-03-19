function calculateResult() {

    // Get number of subjects
    let n = document.getElementById("subjects").value;

    let total = 0;

    // Loop to take marks
    for (let i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter marks for subject " + (i + 1)));

        if (isNaN(x)) {
            alert("Please enter valid marks");
            return;
        }

        total += x;
    }

    // Calculate average
    let average = total / n;

    let grade;

    // Grade calculation
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else if (average >= 50) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    // Pass/Fail
    let result;
    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    // Display result
    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}