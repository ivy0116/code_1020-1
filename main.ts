basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(4 - (x + x), y)
            basic.pause(1000)
        }
    }
    for (let y = 0; y <= 0; y++) {
        for (let x = 0; x <= y; x++) {
            led.plot(x - 4, x)
        }
        basic.pause(1000)
    }
})
