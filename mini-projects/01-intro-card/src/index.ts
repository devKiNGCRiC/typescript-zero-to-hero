// Personal Introduction Card (TypeScript Version)

const studentName: string = "KiNG";
const studentAge: number = 22;
const studentIsLearning: boolean = true;
const studentGoal: string = "Build real-world apps with TypeScript";
const studentCity: String = "Chennai"
const learningDays: number = 28;

function daysToWeeks (days: number): number {
    return Math.floor(days/7);
}

// Every input has a type, and the function promise to return a string 
function createCard(fullName: string, age: number, isLearning: boolean, goal: string, city: String, days: number): string {
    const line: string = "==================================================="
    
    const status: string = isLearning ? "Learning TypeScript" : "Taking a Break"; 
    return `
    ${line}
        PERSONAL INFORMATION CARD
    ${line}
    Name                : ${fullName}
    Age                 : ${age}
    Status              : ${status}
    Goal                : ${goal}
    City                : ${city}
    Weeks of Learning   : ${days}
    ${line}`;
}

console.log(createCard(studentName, studentAge, studentIsLearning, studentGoal, studentCity, daysToWeeks(learningDays)));
