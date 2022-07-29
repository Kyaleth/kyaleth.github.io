function isWebBLEAvailable() {
  if (!navigator.bluetooth) {
     console.log('Web Bluetooth is not available!')
    return false
  }
  return true
}
