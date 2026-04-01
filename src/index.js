// ================================
// BAD CODE TO FORCE SONARCLOUD FAIL
// ================================

// ❌ Dead unused variable (maintainability issue)
const unusedValue = "Sonar should detect me but I am not used";

// ❌ Unused function (maintainability issue)
function totallyUnusedFunction() {
    console.log("I am never called!");
}

// ❌ Duplicate block of code (duplication issue)
console.log("This duplicate line will cause a Sonar issue");
console.log("This duplicate line will cause a Sonar issue");

// ❌ Bad practice: console.log (Sonar flags it)
console.log("Debug logs should not be used in production");

// ❌ More issues: unused parameters
function add(a, b, c) { // c is never used → issue
    return a + b;
}

// Main function
function greet() {
    return "Hello World!";
}

console.log(greet());

module.exports = greet;
