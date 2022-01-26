function generateNewPassword (form) {

    var useUppercaseLetters= form.uppercase_letters.checked;
    var useLowercaseLetter= form.lowercase_letters.checked
    var useNumbers = form.numbers.checked
    var useSymbols = form.symbols.checked
    var useCrypto_random = form.crypto_random.checked
    var passwordLength = form.password_length.value
    var generatedPasswordString ='';
    if (useUppercaseLetters ||useLowercaseLetter || useNumbers || useSymbols) {
      var availableCharacters= getAvailableCharacters(useUppercaseLetters, useLowercaseLetter, useNumbers, useSymbols)
      if (useCrypto_random) {
        for (let i = 0; i < passwordLength; i++) {
          generatedPasswordString += availableCharacters.charAt(getCryptRandValues(availableCharacters.length))
        }
        updategeneratePasswordField(generatedPasswordString)
      }

      else {
        for (let i = 0; i < passwordLength; i++) {
          generatedPasswordString += availableCharacters.charAt(getPseudoRandomValues(availableCharacters.length))
        }
        updategeneratePasswordField(generatedPasswordString)
      }

    }
    else {
      alert( 'Please, check at least one checkbox!' )
    }
}


function getAvailableCharacters(useUppercaseLetters, useLowercaseLetter, useNumbers, useSymbols) {
    var availableCharacters ="";
    if (useUppercaseLetters) {
      availableCharacters = availableCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (useLowercaseLetter) {
      availableCharacters = availableCharacters + "abcdefghijklmnopqrstuvwxyz"
    }
    if (useNumbers) {
      availableCharacters = availableCharacters + "0123456789"
    }
    if (useSymbols) {
      availableCharacters = availableCharacters + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    }
    return availableCharacters;
  }