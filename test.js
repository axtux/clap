const ClapDetector = require('clap-detector').default

const CONFIG = {
  AUDIO_SOURCE: 'alsa hw:0,0',
  DETECTION_PERCENTAGE_START : '10%',
  DETECTION_PERCENTAGE_END: '10%',
  CLAP_AMPLITUDE_THRESHOLD: 0.7,
  CLAP_ENERGY_THRESHOLD: 0.3,
  CLAP_MAX_DURATION: 1500,
  MAX_HISTORY_LENGTH: 100 // no need to maintain big history
}

const clap = new ClapDetector(CONFIG)

clap.addClapsListener(claps => {
  console.log("1 clap", claps)
}, { number: 1, delay: 1000 })

clap.addClapsListener(claps => {
  console.log("2 claps", claps)
}, { number: 2, delay: 1000 })

clap.addClapsListener(claps => {
  console.log("3 claps", claps)
}, { number: 3, delay: 1000 })
