let useUppercaseLetters = true
let useLowercaseLetter = true
let useNumbers = true
let useSymbols = true
let useCrypto_random = true
let passwordLength = 20
let availableCharacters = ""

function getFormData(form) {
  useUppercaseLetters = form.uppercase_letters.checked
  useLowercaseLetter = form.lowercase_letters.checked
  useNumbers = form.numbers.checked
  useSymbols = form.symbols.checked
  useCrypto_random = form.crypto_random.checked
  passwordLength = form.password_length.value

  if (useUppercaseLetters || useLowercaseLetter || useNumbers || useSymbols) {
    availableCharacters = getAvailableCharacters(useUppercaseLetters, useLowercaseLetter, useNumbers, useSymbols)
  }
  else {
    alert('Please, choose at least one character set!')
  }
  document.getElementById("predicted_entropy").innerText = entropyPerPassword(availableCharacters.length, passwordLength)
}

function generateNewPassword() {
  availableCharacters = getAvailableCharacters(useUppercaseLetters, useLowercaseLetter, useNumbers, useSymbols)
  let generatedPasswordString = ''
  if (useCrypto_random) {
    for (let i = 0; i < passwordLength; i++) {
      generatedPasswordString += availableCharacters.charAt(getCryptoRandomValues(availableCharacters.length))
    }
  }
  else {
    for (let i = 0; i < passwordLength; i++) {
      generatedPasswordString += availableCharacters.charAt(getPseudoRandomValues(availableCharacters.length))
    }
  }
  updatePasswordField(generatedPasswordString)
  document.getElementById("detected_entropy").innerText = passwordStrengthFromString(generatedPasswordString)
  return generatedPasswordString
}

function getAvailableCharacters(useUppercaseLetters, useLowercaseLetter, useNumbers, useSymbols) {
  let availableCharacters = ""
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
  return availableCharacters
}


