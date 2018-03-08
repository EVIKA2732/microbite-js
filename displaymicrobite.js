let item = 0
let random: Image = null
input.onGesture(Gesture.Shake, () => {
    basic.clearScreen()
    if (random == 5) {
        basic.showString("Yes !")
    } else {
        if (random == 2) {
            music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
            basic.showString("No no no")
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                # # # # #
                `)
        }
    }
})
input.onGesture(Gesture.ThreeG, () => {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(3, 1)
    } else {
        led.unplot(4, 2)
    }
    while (input.buttonIsPressed(Button.A)) {
        item = 10
        music.playTone(220, music.tempo())
    }
})
input.onPinPressed(TouchPin.P0, () => {
    random.scrollImage(3, 20)
    random.reverse()
})
basic.showString("Good luck")
basic.showNumber(3)
basic.showIcon(IconNames.Heart)
basic.plotLeds(`
    . . . . .
    . . # . .
    . # . # .
    # . . . #
    . . . . .
    `)
