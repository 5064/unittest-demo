module.exports.beforeSubmit = (formData) => {
    // validate input data and post it

    if (formData.name === null) {
        return new Error("名前が不正な値です");
    }

    if (formData.tel === null) {
        return new Error("電話番号が不正な値です");
    }

    // その他色々な処理...

    if (!validatePostalCode(formData.postalCode)) {
        return new Error("郵便番号が不正な値です");
    } else {
        // formData.postalCode = adjustPostalCode(formData.postalCode)
    }

    // APIにポストするロジック
    return "submitted!"
}

module.exports.validatePostalCode = (postalCode) => {
    const pattern = /^[0-9]{3}-*[0-9]{4}$/
    return pattern.test(postalCode)
}