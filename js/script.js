function getCryptRandValues(maxValue){
  var cryptoRandValues = new Uint32Array(1)
  self.crypto.getRandomValues(cryptoRandValues)
  return self.crypto.getRandomValues(cryptoRandValues) % maxValue 
}

function getPseudoRandomValues(maxValue){
return Math.floor(Math.random()*maxValue)

}

function updategeneratePasswordField(newPassword) {
  document.getElementById("generated_password").value = newPassword;
}

function copyToClipboard() {
  var copyText = document.getElementById("generated_password");
  navigator.clipboard.writeText(copyText.value);
  } 
