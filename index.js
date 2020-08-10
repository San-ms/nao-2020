const slideshow = document.querySelector(".slideshow")
const images = slideshow.querySelectorAll("img")

slideshow.addEventListener("mousemove", function(event) {
  const x = event.offsetX
  const width = this.offsetWidth
  const percentagex = x / width
  const imageNumber = Math.floor(percentagex * images.length)

  images.forEach(image => {
    image.style.zIndex = 0
  })

  images[imageNumber].style.zIndex = 1

})
