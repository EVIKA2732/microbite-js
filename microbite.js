input.onButtonPressed(Button.A, () => {
    music.getMelody(Melodies.Dadadadum)
	input.onButtonPressed(Button.A, () => {
        music.beginMelody(['g5:3'])
        
    })
})
if (true) {
    game.createSprite(3, 2).move(7)
}
basic.plotLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
if (true) {
    input.onLogoUp(() => {
            
        })
}
basic.forever(() => {
	
})
basic.forever(() => {
    basic.plotLeds(`
        . # . # .
        . . . . .
        . . # . .
        # . . . #
        . # # # .
        `)
})
basic.forever(() => {
    led.unplot(7, 11)
})
basic.forever(() => {
    basic.showString("Welcome")
    basic.pause(60)
    basic.showIcon(IconNames.Happy)
})
basic.forever(() => {
    if (true) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.setTempo(130)
    } else {
        music.rest(music.beat(BeatFraction.Double))
    }
})
