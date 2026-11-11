// Personal Introduction Card (JavaScript Version)

const studentName = "KiNG";
const studentAge = 22;
const studentIsLearning = true;
const studentGoal = "Build real-world apps with TypeScript";

function createCard (fullName, age, isLearning, goal) {
    const line = "===================================================";

    // " ? : " is a short if/else: if isLearning is true use the first text, else the second text.
    const status = isLearning ? "Learning TypeScript" : "Taking a Break";

    // Space inside the backticks are printed exactly, so line start at the left edge
    return `
    ${line}
        PERSONAL INFORMATION CARD
    ${line}
    Name    : ${fullName}
    Age     : ${age}
    Status  : ${status}
    Goal    : ${goal}
    ${line}` ;
}

console.log(createCard(studentName, studentAge, studentIsLearning, studentGoal));
console.log(createCard("Raj", "twenty-five", true, "Learn"));
console.log(createCard("Dev"));