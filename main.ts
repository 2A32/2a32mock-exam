let x = 0
input.onButtonPressed(Button.A, function () {
    if (input.temperature() < 25) {
        basic.showString("switch off air conditioner")
    }
})
input.onButtonPressed(Button.AB, function () {
    x = 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(x)
        x += 2
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("20211033")
})
basic.forever(function () {
	
})
