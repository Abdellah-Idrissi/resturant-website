/*================== LOADER ==================*/
let loader = document.querySelector('.loader') 
window.addEventListener('load',()=> {
  let loaderTimeoutId = setTimeout(()=> {
    loader.classList.add('down')

    document.body.classList.add('loaded')

    clearTimeout(loaderTimeoutId)
  },1000)
})



/*================== NAVIGATION LINKS ==================*/
let navLinksSmallMedia = document.querySelectorAll('.header__menu__nav li')
let navLinksLargeMedia = document.querySelectorAll('.header__menu__navigation a')
navLinksLargeMedia.forEach((link,index)=> {
  link.addEventListener('click',()=> {

    // Remove current from large 
    let largeMediaLink = document.querySelector('.header__menu__navigation .current')
    if(largeMediaLink !== null) {
      largeMediaLink.classList.remove('current')
    }

    // Remove current from small 
    let smallMediaLink = document.querySelector('.header__menu__nav .current')
    if(smallMediaLink !== null) {
      smallMediaLink.classList.remove('current')
    }

    // Add current to large 
    link.parentElement.classList.add('current')
    // Add current to small 
    navLinksSmallMedia[index].classList.add('current')
  })
})
navLinksSmallMedia.forEach((link,index)=> {
  link.addEventListener('click',()=> {


    // Remove current from large 
    let largeMediaLink = document.querySelector('.header__menu__navigation .current')
    if(largeMediaLink !== null) {
      largeMediaLink.classList.remove('current')
    }

    // Remove current from small 
    let smallMediaLink = document.querySelector('.header__menu__nav .current')
    if(smallMediaLink !== null) {
      smallMediaLink.classList.remove('current')
    }

    // Add current to small 
    link.classList.add('current')
    // Add current to large 
    navLinksLargeMedia[index].parentElement.classList.add('current')


    // To close menu in nav click 
    headerMenu.classList.remove('open')
    overlay.classList.remove('open')
    document.body.classList.remove('hidden')
  })
})




/*================== OPEN & CLOSE MENU ==================*/
let burgerBtn = document.querySelector('.header__icon')
let headerMenu = document.querySelector('.header__menu')
let closeBtn = document.querySelector('.header__menu__close')
let overlay = document.querySelector('.overlay')
burgerBtn.addEventListener('click',()=> {
  headerMenu.classList.toggle('open')
  overlay.classList.add('open')
  document.body.classList.add('hidden')
})
closeBtn.addEventListener('click',()=> {
  headerMenu.classList.remove('open')
  overlay.classList.remove('open')
  document.body.classList.remove('hidden')
})




/*================== HIDE & SHOW HEADER AND TOPBAR WHILE SCROLLING ==================*/
let tobBar = document.querySelector('.topbar')
let header = document.querySelector('.header')
let scrollPrevVal = 0
window.addEventListener('scroll',()=> {

  if(scrollY >= 50) {
    tobBar.classList.add('hide')
    header.classList.add('hide')
  }
  
  if(scrollY === 0) {
    tobBar.classList.remove('hide')
    header.classList.remove('hide')
    header.classList.remove('scrollAlone')
  }

  if(scrollPrevVal > scrollY && scrollY !== 0) {
    header.classList.remove('hide')
    header.classList.add('scrollAlone')
  }

  scrollPrevVal = scrollY
})



/*================== SWIPER METHODS (AUTO LOOP , NEXTBTN , PREVBTN) ==================*/
let swiperSliders = document.querySelectorAll('.swiper__slide')
let activeSlider = 0 , intervalId
function goToActiveSlide() {
  document.querySelector('.swiper__slide.active').classList.remove('active')
  swiperSliders[activeSlider].classList.add('active')
}
function nextSlideMethod() {
  activeSlider === 2 ? activeSlider = 0 : activeSlider++
  goToActiveSlide()
}
function prevSlideMethod() {
  activeSlider === 0 ? activeSlider = 2 : activeSlider--
  goToActiveSlide()
}
function autoLoop() {
  intervalId = setInterval(nextSlideMethod,7000)
}
autoLoop()
let prevBtn = document.querySelector('.slide-prev-btn')
let nextBtn = document.querySelector('.slide-next-btn')
prevBtn.addEventListener('click',()=> {
  prevSlideMethod()
  clearInterval(intervalId)
  autoLoop()
})
nextBtn.addEventListener('click',()=> {
  nextSlideMethod()
  clearInterval(intervalId)
  autoLoop()
})



/*================== ROTATE PATTERN IMAGE ON MENU HOVER (FLAVOR SECTION) ==================*/
let isNotTouchDevice = window.matchMedia('(hover:hover)').matches
let flavorMenus = document.querySelectorAll('.flavor__menu')

flavorMenus.forEach((flavorMenu)=> {
  let element = flavorMenu.parentElement.querySelector('.flavor__food__img__container')

  flavorMenu.addEventListener('mouseenter',()=> {
    if(isNotTouchDevice) {
      element.classList.add('menuGotHovered')
    }
  })

  flavorMenu.addEventListener('mouseleave',()=> {
    if(isNotTouchDevice) {
      element.classList.remove('menuGotHovered')
    }
  })
})




/*================== MOVING MOUSE PARALLAX EFFECT ==================*/
let sensitivity = 450 // The higher the sens the lower the speed gets
element = document.querySelector('.child2')
window.addEventListener('mousemove',(e)=> {
  let x = e.clientX / sensitivity 
  let y = e.clientY / sensitivity 

  // We Added minus to the (x & y) to make a reverse moving
  element.style.transform = `translate(${-x}%,${-y}%)`
})




/*================== SCROLL SECTIONS ACTIVE LINK ==================*/
let sections = document.querySelectorAll('.section')
let contactSection = document.querySelector('.reservation-contact')
function scrollActive() {
  sections.forEach(section => {
    let sectionTop = section.offsetTop - 90
    let sectionBottom = sectionTop + section.offsetHeight
    let sectionId = section.getAttribute('id')
    let sectionNavLink = document.querySelectorAll(`a[href*='${sectionId}']`)
    if(sectionId === 'contact') {
      sectionTop = sectionBottom - 230 
      sectionBottom = sectionTop + contactSection.offsetHeight
    }


    if(scrollY > sectionTop && scrollY <= sectionBottom) {
      sectionNavLink[0].parentElement.classList.add('current')
      sectionNavLink[1].parentElement.classList.add('current')
    }

    else {
      sectionNavLink[0].parentElement.classList.remove('current')
      sectionNavLink[1].parentElement.classList.remove('current')
    }

  })
}
window.addEventListener('scroll',scrollActive)
window.addEventListener('load',scrollActive)





/*================== SCROLLUP  ==================*/
let scrollUp = document.querySelector('.scrollup')
window.onscroll = ()=> {
  scrollY > 400 ? scrollUp.classList.add('show') : scrollUp.classList.remove('show')
}



/*================== FLATPICKER FOR DATE INPUTS  ==================*/
flatpickr(".dateInput",{disableMobile: "true"});