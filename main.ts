let 超声波 = 0
let led灯 = neopixel.create(DigitalPin.P11, 10, NeoPixelMode.RGB)
pins.digitalWritePin(DigitalPin.P14, 1)
basic.forever(function () {
    超声波 = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P9,
    PingUnit.Centimeters
    )
    basic.showNumber(超声波)
    if (超声波 < 20) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 200)
        basic.pause(2000)
        led灯.showColor(neopixel.colors(NeoPixelColors.Purple))
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        basic.pause(15000)
        led灯.clear()
        led灯.show()
    }
})
