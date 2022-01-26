var useUppercaseLetters= false;
var useLowercaseLetter= false;
var useNumbers = false;
var useSymbols = false;
var useCrypto_random = false;
var passwordLength = 0;
var availableCharacters ="";


function getFormData (form) {
    useUppercaseLetters= form.uppercase_letters.checked;
    useLowercaseLetter= form.lowercase_letters.checked;
    useNumbers = form.numbers.checked;
    useSymbols = form.symbols.checked;
    useCrypto_random = form.crypto_random.checked;
    passwordLength = form.password_length.value;
    
    if (useUppercaseLetters ||useLowercaseLetter || useNumbers || useSymbols) {
      availableCharacters = getAvailableCharacters(useUppercaseLetters, useLowercaseLetter, useNumbers, useSymbols);


      ;
     // var generatedPasswordString = generateNewPassword (useCrypto_random, passwordLength, availableCharacters);
    }
    else {
      alert( 'Please, check at least one checkbox!' )
    }
    document.getElementById("predicted_entropy").innerText = entropyPerPassword(availableCharacters.length, passwordLength);
}



function generateNewPassword () {
  var generatedPasswordString ='';
  if (useCrypto_random) {
    for (let i = 0; i < passwordLength; i++) {
      generatedPasswordString += availableCharacters.charAt(getCryptRandValues(availableCharacters.length))
    }
  }

  else {
    for (let i = 0; i < passwordLength; i++) {
      generatedPasswordString += availableCharacters.charAt(getPseudoRandomValues(availableCharacters.length))
    }
  }
  updategeneratePasswordField(generatedPasswordString)
  document.getElementById("detected_entropy").innerText = passwordStrengthFromString(generatedPasswordString)
  return generatedPasswordString
  
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


  