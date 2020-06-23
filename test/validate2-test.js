const assert = require("assert");
const targetModule = require("../src/validate2");

describe("validate2.js(improved)の郵便番号のバリデーションテスト", () => {
    describe("異常系", () => {
        it("invalid postal code (null)", () => {
            // test data
            const postalCode = null;

            const actual = targetModule.validatePostalCode(postalCode)
            const expected = false;

            assert.equal(actual, expected);
        })

        it("invalid postal code (too many digits)", () => {
            // test data
            const postalCode = "123-12345";

            const actual = targetModule.validatePostalCode(postalCode)
            const expected = false;

            assert.equal(actual, expected);
        })

        it("invalid postal code (wrong digits)", () => {
            // test data
            const postalCode = "1234-123";

            const actual = targetModule.validatePostalCode(postalCode)
            const expected = false;

            assert.equal(actual, expected);
        })

        it("invalid postal code (with 2 hyphen)", () => {
            // test data
            const postalCode = "123--1234";

            const actual = targetModule.validatePostalCode(postalCode)
            const expected = false;

            assert.equal(actual, expected);
        })
    })
    describe("正常系", () => {
        it("valid postal code (with hyphen)", () => {
            // test data
            const postalCode = "123-1234";

            const actual = targetModule.validatePostalCode(postalCode)
            const expected = true;

            assert.equal(actual, expected);
        })

        it("valid postal code (with no hyphen)", () => {
            // test data
            const postalCode = "1231234";

            const actual = targetModule.validatePostalCode(postalCode)
            const expected = true;

            assert.equal(actual, expected);
        })
    })
})