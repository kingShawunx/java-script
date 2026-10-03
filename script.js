/* =========================================================
   TASK 1 — VARIABLES & DATA TYPES
========================================================= */

// firstName can change because we will reassign it later
let firstName = "Ridwan";

// lastName will not change
const lastName = "Akinola";

// age is a number
let age = 19;

// studentId is a string
const studentId = "STU-00123";

// GPA should never change, so use const
const gpa = 4.25;

// isEnrolled is a boolean
let isEnrolled = true;

// graduationDate is currently unknown
let graduationDate = null;


// Log all student profile variables
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);


// Reassign firstName to a nickname
firstName = "Riddy";

console.log("Nickname:", firstName);


/* =========================================================
   TASK 2 — OPERATORS
========================================================= */

// Start the score at 0
let totalScore = 0;

console.log("Starting Score:", totalScore);


// First test — add 45 marks
totalScore += 45;

console.log("After First Test:", totalScore);


// Second test — add 30 marks
totalScore += 30;

console.log("After Second Test:", totalScore);


// Deduct 5 marks because of an error
totalScore -= 5;

console.log("After Deduction:", totalScore);


// Double the score for the bonus round
totalScore *= 2;

console.log("After Bonus Round:", totalScore);


// Add 1 point using the increment operator
totalScore++;

console.log("After Increment:", totalScore);


// Find the remainder when the score is divided by 7
console.log("Remainder When Divided By 7:", totalScore % 7);


/* =========================================================
   TASK 3 — TYPE CONVERSION
========================================================= */

// Original values received from a school form
let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;


// Convert studentAge from a string to a whole number
// parseInt() is used because the age should be a whole number.
studentAge = parseInt(studentAge);

console.log("Student Age:", studentAge, "| Type:", typeof studentAge);


// Convert examScore from a string to a decimal number
// parseFloat() is used because the exam score contains a decimal value.
examScore = parseFloat(examScore);

console.log("Exam Score:", examScore, "| Type:", typeof examScore);


// Convert passMark from a string to a number
// Number() converts the entire string into a number.
passMark = Number(passMark);

console.log("Pass Mark:", passMark, "| Type:", typeof passMark);


// Convert studentName from a number to a string
// String() converts the number 101 into the text "101".
studentName = String(studentName);

console.log("Student Name:", studentName, "| Type:", typeof studentName);


// Check whether the exam score is greater than the pass mark
console.log("Did Student Pass?:", examScore > passMark);


/* =========================================================
   TASK 4 — CONDITIONAL STATEMENTS
========================================================= */

// Grading function
function calculateGrade(score) {

    if (score >= 70) {
        return "A — Distinction";

    } else if (score >= 60) {
        return "B — Merit";

    } else if (score >= 50) {
        return "C — Pass";

    } else if (score >= 40) {
        return "D — Near Pass";

    } else {
        return "F — Fail";
    }
}


// Test 1
let score = 73;
console.log("Score:", score, "| Grade:", calculateGrade(score));


// Test 2
score = 65;
console.log("Score:", score, "| Grade:", calculateGrade(score));


// Test 3
score = 35;
console.log("Score:", score, "| Grade:", calculateGrade(score));


// You can test more scores below
// score = 52;
// console.log("Score:", score, "| Grade:", calculateGrade(score));