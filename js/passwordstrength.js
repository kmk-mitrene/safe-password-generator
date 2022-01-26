function passwordStrengthFromString(generatedPassword) {

    return entropyPerPassword(detectSymbolSets(generatedPassword), generatedPassword.length)
}

function detectSymbolSets(passwordText) {
    var symbolcount = 0;
    var regExpUppercase = /[A-Z]/g
    var regExpLowercase = /[a-z]/g
    var regExpNumbers = /[0-9]/g
    var regExpSymbols = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g

    if (regExpUppercase.test(passwordText)) {
        symbolcount += 26;
        
    }
    if (regExpLowercase.test(passwordText)) {
        symbolcount += 26;
    }
    if (regExpNumbers.test(passwordText)) {
        symbolcount += 10;
    }
    if (regExpSymbols.test(passwordText)) {
        symbolcount += 34;
    }
    return symbolcount;
}

function entropyPerPassword(possibleSymbols, symbolsInPassword) {    
   var entropyPerPassword = Math.ceil(symbolsInPassword * Math.log2(possibleSymbols))
    return entropyPerPassword;
}

