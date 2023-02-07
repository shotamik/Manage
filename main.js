const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: window.innerWidth >= 769 ? 3 : window.innerWidth <= 768 ? 1 : 1,
    spaceBetween: 25,
    centeredSlides: false,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});