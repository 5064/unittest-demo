module.exports.sum = (numbers) => {
    // input:
    //   - numbers: Array<number>

    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}