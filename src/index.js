import 'material-design-icons';
import './sass/style.scss';
import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';


const dummyContent = 'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом.'
const categories = [
    {country: 'Италия', category: 'italy'},
    {country: 'Германия', category: 'germany'},
    {country: 'Греция', category: 'greece'},
    {country: 'Турция', category: 'turkey'},
    {country: 'Испания', category: 'spain'},
    {country: 'Португалия', category: 'portugal'}
];
const places = [
    {country: 'Италия', city:'Милан', cityEng: 'milan', category: 'italy', image:'', dummyContent},
    {country: 'Германия', city:'Фрайбург', cityEng:'freiburg', category: 'germany', image:'', dummyContent},
    {country: 'Португалия', city:'Лиссабон', cityEng:'lissabon', category: 'portugal', image:'', dummyContent},
    {country: 'Италия', city:'Винченца', cityEng:'vicenza', category: 'italy', image:'', dummyContent},
    {country: 'Испания', city:'Барселона', cityEng: 'barselona', category: 'spain', image:'', dummyContent},
    {country: 'Португалия', city:'Порту', cityEng: 'portu', category: 'portugal', image:'', dummyContent},
    {country: 'Греция', city:'Афины', cityEng:'athenes', category: 'greece', image:'', dummyContent},
    {country: 'Турция', city:'Каш', cityEng: 'kas', category: 'turkey', image:'', dummyContent},
    {country: 'Испания', city:'Мадрид', cityEng: 'madrid', category: 'spain', image:'', dummyContent},
    {country: 'Германия', city:'Берлин', cityEng: 'berlin', category: 'germany', image:'', dummyContent},
    {country: 'Турция', city:'Анталия', cityEng: 'antalia', category: 'turkey', image:'', dummyContent},
    {country: 'Италия', city:'Венеция', cityEng: 'venice', category: 'italy', image:'', dummyContent},
    {country: 'Италия', city:'Генуя', cityEng: 'genoa', category: 'italy', image:'', dummyContent},
    {country: 'Испания', city:'Валенсия', cityEng: 'valencia', category: 'spain', image:'', dummyContent},
    {country: 'Греция', city:'Салоники', cityEng: 'saloniki', category: 'greece', image:'', dummyContent},
    {country: 'Португалия', city:'Гуарда', cityEng: 'guarda', category: 'portugal', image:'', dummyContent},
    {country: 'Италия', city:'Падуя', cityEng: 'padua', category: 'italy', image:'', dummyContent},
    {country: 'Турция', city:'Стамбул', cityEng: 'istanbul', category: 'turkey', image:'', dummyContent},
];

$(".categories__item").after(() => categories.map((o) =>
    `<li class="categories__item"><button class="categories__button" data-filter=${o.category}>${o.country}</button></li>`
));
$(".swiper-wrapper").html(() => places.map((o) =>
  `<div class="swiper-slide" data-category=${o.category}>
     <div class= "card">
       <div class="card__cover_${o.cityEng}">
         <h2 class="card__title">${o.city}</h2>
         <p class="card__category">${o.country}</p>
       </div>
     </div>
   </div>`
));

const filterByCategs = () => {
    $('.categories button').click(function(){
      console.log($(this).attr('data-filter'));
    $('ul .categories__button_active').removeClass('categories__button_active');
    $(this).addClass('categories__button_active');
    const filterCategory = $(this).attr('data-filter');
    if(filterCategory === 'all') {
      $('.swiper-wrapper .swiper-slide').show();
    } else {
      $('.swiper-wrapper .swiper-slide').each(function(){
          if($(this).attr("data-category") === filterCategory) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
    return false;
});
}
const swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      slidesPerColumn: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      },

    });


$(document).ready(
filterByCategs()
);
