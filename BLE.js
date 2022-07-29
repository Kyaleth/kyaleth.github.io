let connectButton = document.getElementById('connect');
let disconnectButton = document.getElementById('disconnect');
var deviceName = 'ESP32'

// Connect to the device on Connect button click
connectButton.addEventListener('click', function(event) {
  event.stopPropagation()
  event.preventDefault()
  
  if (isWebBLEAvailable()) {
  getDeviceInfo()
}

});
  


// Disconnect from the device on Disconnect button click
// disconnectButton.addEventListener('click', function() {
//   disconnect();
// });

function isWebBLEAvailable() {
  if (!navigator.bluetooth) {
     console.log('Web Bluetooth is not available!')
    return false
  }
  return true
}

function getDeviceInfo() {
  let options = {
    filters: [{name: deviceName}]
  }
  
  console.log('Requesting BLE device info...')
  navigator.bluetooth.requestDevice(options).then(device => {
    console.log('Name: ' + device.name)
  }).catch(error => {
    console.log('Request device error: ' + error)
  })
}
