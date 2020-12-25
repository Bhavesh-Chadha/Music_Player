aud = document.querySelector("audio")
imageIconPlay = document.querySelector(".image-icon-play")
aud.defaultmuted
imageIconPlay.addEventListener("click", () => {
    if (aud.paused) {
        aud.play()
        console.log("played")
        imageIconPlay.classList.remove("bx-play")
        imageIconPlay.classList.add("bx-pause")
        console.log(imageIconPlay.classList)

    } else {
        aud.pause()
        console.log("paused")
        imageIconPlay.classList.add("bx-play")
        imageIconPlay.classList.remove("bx-pause")
    }
})