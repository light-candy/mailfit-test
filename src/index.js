import './sass/style.scss';
import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';


const dummyContent = 'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.'
const categories = [
    {country: 'Италия', category: 'italy'},
    {country: 'Германия', category: 'germany'},
    {country: 'Греция', category: 'greece'},
    {country: 'Турция', category: 'turkey'},
    {country: 'Испания', category: 'spain'},
    {country: 'Португалия', category: 'portugal'}
];
const places = [
    {country: 'Италия', city:'Милан', cityEng: 'milan', category: 'italy'},
    {country: 'Германия', city:'Фрайбург', cityEng:'freiburg', category: 'germany'},
    {country: 'Португалия', city:'Лиссабон', cityEng:'lissabon', category: 'portugal'},
    {country: 'Италия', city:'Винченца', cityEng:'vicenza', category: 'italy'},
    {country: 'Испания', city:'Барселона', cityEng: 'barselona', category: 'spain'},
    {country: 'Португалия', city:'Порту', cityEng: 'portu', category: 'portugal'},
    {country: 'Греция', city:'Афины', cityEng:'athenes', category: 'greece'},
    {country: 'Турция', city:'Каш', cityEng: 'kas', category: 'turkey'},
    {country: 'Испания', city:'Мадрид', cityEng: 'madrid', category: 'spain'},
    {country: 'Германия', city:'Берлин', cityEng: 'berlin', category: 'germany'},
    {country: 'Турция', city:'Анталия', cityEng: 'antalia', category: 'turkey'},
    {country: 'Италия', city:'Венеция', cityEng: 'venice', category: 'italy'},
    {country: 'Италия', city:'Генуя', cityEng: 'genoa', category: 'italy'},
    {country: 'Испания', city:'Валенсия', cityEng: 'valencia', category: 'spain'},
    {country: 'Греция', city:'Салоники', cityEng: 'saloniki', category: 'greece'},
    {country: 'Португалия', city:'Гуарда', cityEng: 'guarda', category: 'portugal'},
    {country: 'Италия', city:'Падуя', cityEng: 'padua', category: 'italy'},
    {country: 'Турция', city:'Стамбул', cityEng: 'istanbul', category: 'turkey'},
];
$(".categories__item").after(() => categories.map((o) =>
  `<li class="categories__item"><button class="categories__button" data-filter=${o.category}>${o.country}</button></li>`
));
const createPlaces = (places) => {
$(".swiper-wrapper").html(() => places.map((o) =>
  `<div class="swiper-slide" data-category=${o.category}>
     <div class= "card">
       <div class="card__cover card__cover_${o.cityEng}">
         <h2 class="card__title">${o.city}</h2>
         <p class="card__category">${o.country}</p>
       </div>
       <div class="card__info">
         <button class="card__close">
           <span class="material-icons">
             close
           </span>
         </button>
         <p>${dummyContent}</p>
         <button class="card__button">Подробнее</button>
       </div>
     </div>
   </div>`
));
};

createPlaces(places);

const cardClose = () => {
  $('.card__close').click(function(e) {
    $(this).closest('.card').removeClass('card_open');
    $(this).closest('.swiper-slide').removeClass('swiper_open');
    $(this).closest('.swiper-slide').removeClass('swiper_open-right');
    $(this).closest('.swiper-slide').removeClass('swiper_open-mobile');
    e.stopPropagation();
  });
}

const cardOpen = () => {
  if ($(window).width() < 769) {
    $('.card').click(function(e) {
      $(this).closest('.swiper-slide').addClass('swiper_open');
      $(this).closest('.swiper-slide').addClass('swiper_open-mobile');
      $(this).addClass('card_open');
      $('.swiper-wrapper').css('transform', '');
      event.stopPropagation();
    });
    cardClose();
  } else if ($(window).width() < 1444) {
    $('.card').click(function(e) {
      $(this).closest('.swiper-slide').addClass('swiper_open');
      $(this).addClass('card_open');
      event.stopPropagation();
    });
    cardClose();
  } else {
    $('.card').hover(function(e) {
      if (($(window).width() - $(this).offset().left)  > 700) {
        $(this).closest('.swiper-slide').addClass('swiper_open');
      } else {
        $(this).closest('.swiper-slide').addClass('swiper_open-right');
      }
      $(this).addClass('card_open');
      event.stopPropagation();
    }, function(e) {
      $(this).closest('.card').removeClass('card_open');
      $(this).closest('.swiper-slide').removeClass('swiper_open');
      $(this).closest('.swiper-slide').removeClass('swiper_open-right');
      $(this).closest('.swiper-slide').removeClass('swiper_open-right');
      e.stopPropagation();
    });
  }
}

const filterCategs = () => {
  $('.categories button').click(function() {
    $('ul .categories__button_active').removeClass('categories__button_active');
    $(this).addClass('categories__button_active');
    const filterCategory = $(this).attr('data-filter');
    if (filterCategory === 'all') {
      createPlaces(places);
    } else {
      let placesFiltered = places.filter((o) => o.category === filterCategory);
      createPlaces(placesFiltered);
    }
    cardOpen();
    return false;
  });
};

const dropdownOpen = () => {
  $('.dropdown').click(function() {
    $('.dropdown').toggleClass('dropdown_open');
    $('.categories').toggleClass('categories_open');
  });
}

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  slidesPerColumn: 2,
  loop: false,
  updateOnWindowResize:true,
  observer:true,
  observeSlideChildren: true,
  observeParents: true,
  on: {
    slideChange: function(){
      $('.card').removeClass('card_open');
      $('.swiper-slide').removeClass('swiper_open');
      $('.swiper-slide').removeClass('swiper_open-right');
      $('.swiper-slide').removeClass('swiper_open-mobile');
    }
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    768: {
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 6,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      },
    }
  },
});

$(document).ready(() => {
  filterCategs();
  cardOpen();
  dropdownOpen();
});
$(window).resize(() => {
  swiper.update();
});
