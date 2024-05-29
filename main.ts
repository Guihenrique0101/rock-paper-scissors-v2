let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1214, 948, 226, 35, 379, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else if (hand == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (hand == 3) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
    	
    }
})
