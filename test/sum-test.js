const assert = require("assert");
const targetModule = require("../src/sum");

describe("my sum function", () => {
    it("should return total of the numbers", () => {
        // test data
        const numbers = [2, 3, 5, 7]

        const actual = targetModule.sum(numbers);
        assert.equal(actual, 17)
    })

    it("should return 0 when arguments is empty Array", () => {
        // test data
        const numbers = []

        const actual = targetModule.sum(numbers);
        assert.equal(actual, 0)
    })
})