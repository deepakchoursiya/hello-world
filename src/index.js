// ================================
// BAD CODE FOR SONARCLOUD TESTING
// ================================

// ❌ Dead variable (never used)
const unusedValue = 123;

// ❌ Unused function
function neverUsedFunction() {
    console.log("This function is never called");
    return "unused";
}

// ❌ Duplicate code (copy-pasted intentionally)
console.log("Duplicate code line");
console.log("Duplicate code line");

// ❌ Console.log in production (SonarCloud flags it)
console.log("Debug: Should not use console.log in production");

// Normal exported function (optional)
function greet() {
    return "Hello World!";
}

console.log(greet());

module.exports = greet;
