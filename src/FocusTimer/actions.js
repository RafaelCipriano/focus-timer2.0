import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'
 
export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function stop() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function moreFiveMinutes() {
    console.log('more five minutes')
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    if (minutes >= 60) 
        return
    else
        minutes += 5

    timer.updateDisplay(minutes, seconds)
}

export function lessFiveMinutes() {
    console.log('less five minutes')
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    if (minutes <= 4) 
        return
    else
        minutes -= 5

    timer.updateDisplay(minutes, seconds)
}
el.forestButton.addEventListener('click', () => {
    el.forestButton.classList.toggle('music-on')

    if(state.isMute) {
        sounds.forestAudio.play()
    }
    else {
        sounds.forestAudio.pause()
    }
    state.isMute = !state.isMute
})

el.rainButton.addEventListener('click', () => {
    el.rainButton.classList.toggle('music-on')

    if(state.isMute) {
        sounds.rainAudio.play()
    }
    else {
        sounds.rainAudio.pause()
    }
    state.isMute = !state.isMute
})

el.coffeeShopButton.addEventListener('click', () => {
    el.coffeeShopButton.classList.toggle('music-on')

    if(state.isMute) {
        sounds.coffeeShopAudio.play()
    }
    else {
        sounds.coffeeShopAudio.pause()
    }
    state.isMute = !state.isMute
})

el.fireplaceButton.addEventListener('click', () => {
    el.fireplaceButton.classList.toggle('music-on')

    if(state.isMute) {
        sounds.fireplaceAudio.play()
    }
    else {
        sounds.fireplaceAudio.pause()
    }
    state.isMute = !state.isMute
})