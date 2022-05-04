class Carousel{constructor(t,i,s,e){this.parentEl=t,this.carouselTrack=t.querySelector(".carousel__track"),this.carouselItems=t.querySelectorAll(".carousel__item"),this.position=0,this.slidesToShow=i,this.slidesToScroll=i,this.marginRight=+window.getComputedStyle(this.carouselItems[0],null).marginRight.substring(0,2)||0,this.itemsWidth=(t.clientWidth-(i-1)*this.marginRight)/i,this.scrollSpeed=this.slidesToScroll*this.itemsWidth+(i-1)*this.marginRight+this.marginRight,this.btnNext=s,this.btnPrev=e,this.init()}init(){for(const t of this.carouselItems)t.style.minWidth=this.itemsWidth+"px";this.btnNext.addEventListener("click",(()=>{this.nextSlide()})),this.btnPrev.addEventListener("click",(()=>{this.prevSlide()})),this.checkBtns()}nextSlide(){this.position-=this.scrollSpeed,this.setPosition()}prevSlide(){this.position+=this.scrollSpeed,this.setPosition()}setPosition(){this.carouselTrack.style.transform=`translateX(${this.position}px)`,this.checkBtns()}checkBtns(){0===this.position?this.btnPrev.setAttribute("disabled",!0):this.btnPrev.removeAttribute("disabled"),this.position<=-(this.carouselItems.length-this.slidesToShow)*this.itemsWidth?this.btnNext.setAttribute("disabled",!0):this.btnNext.removeAttribute("disabled")}}