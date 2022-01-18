input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
function lila () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function groc () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vermell () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function verd () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function tuquesa () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function blau () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let comptador = 0
let temps = 0
basic.forever(function () {
    if (input.soundLevel() > 140) {
        if (comptador == 0) {
            temps = 0
        }
        comptador = comptador + 1
    }
    if (temps == 14) {
        if (comptador != 0) {
            basic.showNumber(comptador)
        }
        if (comptador == 1) {
            vermell()
        }
        if (comptador == 2) {
            verd()
        }
        if (comptador == 3) {
            blau()
        }
        if (comptador == 4) {
            lila()
        }
        if (comptador == 5) {
            tuquesa()
        }
        if (comptador == 6) {
            groc()
        }
        if (comptador == 7) {
            blanc()
        }
        comptador = 0
        temps = 0
    }
})
loops.everyInterval(100, function () {
    temps = temps + 1
})
