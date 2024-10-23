max7219_matrix.setup(1, DigitalPin.P16, DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
basic.forever(function on_forever() {
    if (!input.pinIsPressed(TouchPin.P0)) {
        max7219_matrix.randomizeAll()
        pause(100)
        max7219_matrix.clearAll()
    }
    
})
