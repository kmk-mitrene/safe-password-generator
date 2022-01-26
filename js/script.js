function getCryptoRandomValues(maxValue) {
  let cryptoRandValues = new Uint32Array(1)
  self.crypto.getRandomValues(cryptoRandValues)
  return self.crypto.getRandomValues(cryptoRandValues) % maxValue
}

function getPseudoRandomValues(maxValue) {
  return Math.floor(Math.random() * maxValue)
}

function updatePasswordField(newPassword) {
  document.getElementById("generated_password").value = newPassword
}

function copyToClipboard() {
  let copyText = document.getElementById("generated_password")
  navigator.clipboard.writeText(copyText.value)
} 
