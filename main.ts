let hossz = 0
let text2 = ""
function sovegvisszafele (text: string) {
    hossz = text.length - 1
    text2 = ""
    for (let index = 0; index <= hossz; index++) {
        text2 = "" + text2 + text.substr(index - hossz, 1)
        music.playTone(988, music.beat(BeatFraction.Quarter))
        basic.pause(250)
    }
    return text2
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(osszead(3, 1))
})
function osszead (a: number, b: number) {
    return a + b
}
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (sovegvisszafele("Beni")))
})
function kitolt (num: number) {
    for (let index2 = 0; index2 <= 4; index2++) {
        for (let index3 = 0; index3 <= 4; index3++) {
            let index22 = 0
            led.plotBrightness(index3, index22, num)
        }
    }
}
function hatvel () {
    return randint(1, 6)
}
basic.forever(function () {
	
})
