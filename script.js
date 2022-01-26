

  function generateNewPassword (form) {
    var useUppercaseLetters= form.uppercase_letters.checked;
    var useLowercaseLetter= form.lowercase_letters.checked
    var useNumbers = form.numbers.checked
    var useSymbols = form.symbols.checked
    var passwordLength = form.password_length.value
    console.log(useUppercaseLetters + useLowercaseLetter + useNumbers + useSymbols + passwordLength)

}


  function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("generated-password");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
  //  alert("Copied the text: " + copyText.value);
  } 
