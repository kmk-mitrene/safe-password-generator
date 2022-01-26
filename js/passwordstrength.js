function passwordStrengthFromString(generatedPassword) {
    return entropyPerPassword(detectSymbolSets(generatedPassword), generatedPassword.length)
}

function detectSymbolSets(passwordText) {
    let symbolcount = 0
    let regExpUppercase = /[A-Z]/g
    let regExpLowercase = /[a-z]/g
    let regExpNumbers = /[0-9]/g
    let regExpSymbols = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g

    if (regExpUppercase.test(passwordText)) {
        symbolcount += 26
    }
    if (regExpLowercase.test(passwordText)) {
        symbolcount += 26
    }
    if (regExpNumbers.test(passwordText)) {
        symbolcount += 10
    }
    if (regExpSymbols.test(passwordText)) {
        symbolcount += 34
    }
    return symbolcount
}

function entropyPerPassword(possibleSymbols, symbolsInPassword) {
    return Math.ceil(symbolsInPassword * Math.log2(possibleSymbols))
}

