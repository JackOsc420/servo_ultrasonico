let distancia = 0
servos.P2.setAngle(0)
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    if (distancia == 5) {
        servos.P2.setAngle(0)
    } else {
        servos.P2.setAngle(0)
    }
})
