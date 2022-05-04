class Carousel {
  constructor (parentEl, slidesToShow, btnNext, btnPrev) {
    this.parentEl = parentEl
    this.carouselTrack = parentEl.querySelector('.carousel__track')
    this.carouselItems = parentEl.querySelectorAll('.carousel__item')
    this.position = 0
    this.slidesToShow = slidesToShow
    this.slidesToScroll = slidesToShow
    this.marginRight = +window.getComputedStyle(this.carouselItems[0], null).marginRight.substring(0, 2) || 0
    this.itemsWidth = (parentEl.clientWidth - (slidesToShow - 1) * this.marginRight) / slidesToShow
    this.scrollSpeed = this.slidesToScroll * this.itemsWidth + (slidesToShow - 1) * this.marginRight + this.marginRight
    this.btnNext = btnNext
    this.btnPrev = btnPrev

    this.init()
  }

  init () {
    for (const item of this.carouselItems) {
      item.style.minWidth = this.itemsWidth + 'px'
    }

    this.btnNext.addEventListener('click', () => {
      this.nextSlide()
    })
    this.btnPrev.addEventListener('click', () => {
      this.prevSlide()
    })

    this.checkBtns()
  }

  nextSlide () {
    this.position -= this.scrollSpeed
    this.setPosition()
  }

  prevSlide () {
    this.position += this.scrollSpeed
    this.setPosition()
  }

  setPosition () {
    this.carouselTrack.style.transform = `translateX(${this.position}px)`
    this.checkBtns()
  }

  checkBtns () {
    if (this.position === 0) {
      this.btnPrev.setAttribute('disabled', true)
    } else {
      this.btnPrev.removeAttribute('disabled')
    }

    if (this.position <= -(this.carouselItems.length - this.slidesToShow) * this.itemsWidth) {
      this.btnNext.setAttribute('disabled', true)
    } else {
      this.btnNext.removeAttribute('disabled')
    }
  }
}
