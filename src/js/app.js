/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'


import Swiper, { Navigation, Pagination } from 'swiper';
let menu1 = ['<span class="activities__pagination-block"> <img src="images/services-pagination__first-item.svg"> <p class="activities__pagination-title">Complex design-project</p></span>',
             '<span class="activities__pagination-block"> <img src="images/services-pagination__second-item.svg"> <p class="activities__pagination-title">Planning solution</p></span>',
              '<span class="activities__pagination-block"> <img src="images/services-pagination__third-item.svg"> <p class="activities__pagination-title">Author supervision</p></span>',
               '<span class="activities__pagination-block"> <img src="images/services-pagination__fourth-item.svg"> <p class= "activities__pagination-title">Repair and decoration</p></span>',
                '<span class="activities__pagination-block"> <img src="images/services-pagination__fiveth-item.svg"> <p class="activities__pagination-title">Express-design</p></span>'
              ]
const swiper1 = new Swiper('#swiper1', {
  direction: 'horizontal',
  loop: true,
  speed: 200,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '#swiper1-pagination',
    clickable: true,
    type: 'bullets',
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (menu1[index]) + '</span>'
    }
  },
  navigation: {
    el: '.swiper-navigation'
  },
  modules: [Navigation, Pagination]
})

const swiper2 = new Swiper('#swiper2', {
  direction: 'horizontal',
  loop: true,
  speed: 200,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '#swiper2-pagination',
    clickable: true,
    type: 'progressbar',
  },
  navigation: {
    el: '.swiper-navigation'
  },
  modules: [Navigation, Pagination]
})

const swiper3 = new Swiper('#swiper3', {
  direction: 'horizontal',
  loop: true,
  speed: 200,
  autoplay: {
    delay: 2000
  },
  navigation: {
    el: '.swiper-navigation'
  },
  modules: [Navigation, Pagination]
})

const swiper4 = new Swiper('#swiper4', {
  direction: 'horizontal',
  loop: true,
  speed: 200,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '#swiper3-pagination',
    clickable: true,
    type: 'progressbar',
  },
  navigation: {
    el: '.swiper-navigation'
  },
  modules: [Navigation, Pagination]
})

const swiper5 = new Swiper('#swiper5', {
  direction: 'horizontal',
  loop: false,
  speed: 200,
  autoplay: {
    delay: 2000
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0 
    },
    400: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 4,
      slidesPerGroupAuto: 2
    },
    600: {
      slidesPerView: 5,
    },
  },
  navigation: {
    el: '.swiper-navigation'
  },
  modules: [Navigation, Pagination]
})

const swiper6 = new Swiper('#swiper6', {
  direction: 'horizontal',
  loop: true,
  speed: 200,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '#swiper2-pagination',
    clickable: true,
    type: 'progressbar',
  },
  navigation: {
    el: '.swiper-navigation'
  },
  modules: [Navigation, Pagination]
})

const projectsPaginationTitles = document.querySelectorAll('.projects__progressbar-navigation_item')

document.querySelector('.projects__progressbar-navigation_item').classList.add('active')
swiper2.on('slideChange', () => {
  projectsPaginationTitles.forEach(function(span) {
    span.classList.remove('active')
  })
  let activeSpanIndex = swiper2.realIndex
  projectsPaginationTitles[activeSpanIndex].classList.add('active')
})


const activitiesPaginationTitles = document.querySelectorAll('.activities-mobile__progressbar-navigation__item')

document.querySelector('.activities-mobile__progressbar-navigation__item').classList.add('active')
swiper4.on('slideChange', () => {
  activitiesPaginationTitles.forEach(function(span) {
    span.classList.remove('active')
  })
  let activeSpanIndex = swiper4.realIndex
  activitiesPaginationTitles[activeSpanIndex].classList.add('active')
})

const projctsMobilePaginationTitles = document.querySelectorAll('.projects-mobile__progressbar-navigation__item')

document.querySelector('.projects-mobile__progressbar-navigation__item').classList.add('active')
swiper6.on('slideChange', () => {
  projctsMobilePaginationTitles.forEach(function(span) {
    span.classList.remove('active')
  })
  let activeSpanIndex = swiper6.realIndex
  projctsMobilePaginationTitles[activeSpanIndex].classList.add('active')
})


 window.addEventListener('load', function(){
        deSVG('.telegram-dark', true);
    });




// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost'

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-type="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================
