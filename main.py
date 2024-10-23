max7219_matrix.setup(1, DigitalPin.P16, DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
def on_forever():
    if not (input.pin_is_pressed(TouchPin.P0)):
        max7219_matrix.randomize_all()
        pause(100)
        max7219_matrix.clear_all()
basic.forever(on_forever)
