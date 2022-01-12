input.onButtonPressed(Button.A, function () {
    blau()
    basic.pause(1000)
})
function blau () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 1)
}
input.setSoundThreshold(SoundThreshold.Loud, 128)
