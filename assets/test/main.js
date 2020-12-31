aud = document.querySelector("audio")
PlayerControlPlay = document.querySelector(".player-controls-play")
progress = document.querySelector(".progress")
progressWrapper = document.querySelector(".progress-wrapper")
timer = document.querySelector(".timer")
audioLength = document.querySelector(".audio-length")
// fclass=document.querySelector(".fclass")
// sclass = document.querySelector(".sclass")

totalLength = new Date(aud.duration * 1000);
hours = totalLength.getUTCHours();
minutes = totalLength.getUTCMinutes();
seconds = totalLength.getSeconds();
totalLength = (hours + ':' +
minutes + ':' + 
seconds)
audioLength.innerText = totalLength
PlayerControlPlay.addEventListener("click", () => {
    if (aud.paused) {
        aud.play()
        console.log("played")
        PlayerControlPlay.classList.remove("bx-play")
        PlayerControlPlay.classList.add("bx-pause")

    } else {
        aud.pause()
        console.log("paused")
        PlayerControlPlay.classList.add("bx-play")
        PlayerControlPlay.classList.remove("bx-pause")
    }
})
console.log("ti=" + progress.clientX)
aud.addEventListener("timeupdate", () => {
    progress.max = aud.duration
    progress.value = aud.currentTime
    progressWrapper.addEventListener("click",(e)=>{
        console.log("clickpos=" + e.clientX)
        console.log("plapos=" + progressWrapper.offsetLeft)
        console.log("width1 ="+progressWrapper.offsetWidth )
        progresssBarPosition = progressWrapper.offsetLeft
        progressClickPosition = e.clientX
        progress.style.width = ((progressClickPosition - progresssBarPosition)/(progressWrapper.offsetWidth)) * 100 + "%"
        console.log("width2 ="+((progressClickPosition - progresssBarPosition)/(progressWrapper.offsetWidth)) * 100 )
        console.log("width ="+progress.style.width )
        progress.value = (((progressClickPosition - progresssBarPosition )/(progressWrapper.offsetWidth)) * progress.max);
        console.log("v1= "+(((progressClickPosition - progresssBarPosition )/(progressWrapper.offsetWidth)) * progress.max))
        console.log("val ="+progress.value )
        aud.currentTime = progress.value
    })
    console.log(progress.max)
    console.log(progress.value)
    dateObj = new Date(aud.currentTime * 1000);
    hours = dateObj.getUTCHours();
    minutes = dateObj.getUTCMinutes();
    seconds = dateObj.getSeconds();
    console.log((minutes + ':' + seconds))
    timer.innerText =  (minutes.toString().padStart(2,0) + ':' + seconds.toString().padStart(2,0))
    per = (progress.value/progress.max) * 100
    progress.style.width = per + "%"
    console.log("ti=" + progress.offsetLeft)
    
})
