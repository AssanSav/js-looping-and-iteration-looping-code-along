function writeCards(array, event) {
    const resultArray = []
    for (let i = 0; i < array.length; i++) {
        resultArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    console.log(resultArray)
    return resultArray
}

function countDown(numbers) {
    while (numbers >= 0) {
        console.log(numbers )
        numbers -= 1;
    }
}
countDown(5)
writeCards(["Ada", "Brendan", "Ali"], "birthday")
