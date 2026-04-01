const greet = require("../src/index");

test("returns Hello World", () => {
    expect(greet()).toBe("Hello World!");
});
