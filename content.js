const className = "_604FD"

const internal = setInterval(() => {
  const header = document.querySelector("._604FD > div > span")
  if (header) {
    console.log(header)
    clearInterval(internal)

    const button = document.createElement("button")
    button.innerHTML = "2x"
    button.classList.add("twoTimesButton")
    
    button.addEventListener("click", () => {
      console.log("estou no evento")
      const audios = document.querySelectorAll("audio")
      audios.forEach((audio) => {
        audio.playbackRate = 2
      })
    })

    header.appendChild(button)
  }
}, 1000)