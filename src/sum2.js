module.exports.sum = (numbers) => {
    // input:
    //   - numbers: Array<number>

    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}