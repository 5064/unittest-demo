const assert = require("assert");
const targetModule = require("../src/validate");

describe("validate.jsの郵便番号のバリデーションテスト", () => {
    it("invalid postal code (null)", () => {
        // test data
        const formData = {
            name: "Anna",
            tel: "000-0000-0000",
            postalCode: null,
            time_zone: null,
            geo_enabled: null,
            verified: true,
            profile_background_color: null,
            profile_background_image_url: null
        }

        const actual = targetModule.beforeSubmit(formData)
        const expected = new Error("郵便番号が不正な値です");

        assert.equal(actual.message, expected.message);
    })

    it("invalid postal code (too many digit)", () => {
        // test data
        const formData = {
            name: "Anna",
            tel: "000-0000-0000",
            postalCode: "123-12345",
            time_zone: null,
            geo_enabled: null,
            verified: true,
            profile_background_color: null,
            profile_background_image_url: null
        }

        const actual = targetModule.beforeSubmit(formData)
        const expected = new Error("郵便番号が不正な値です");

        assert.equal(actual.message, expected.message);
    })
})