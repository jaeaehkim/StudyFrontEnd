// search input
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// Badge
const badgeEl = document.querySelector('header .badges');

// lodash란 것을 활용해서 함수 호출을 컨트롤 해줌
// ._throttle (함수, 시간)
window.addEventListener('scroll', _.throttle( function() {
        console.log(window.scrollY);
        if (window.scrollY > 500) {
            // badgeEl.style.display = 'none';
            // gsap.to(요소, 지속시간, 옵션)
            gsap.to(badgeEl,  .6, {
                opacity: 0,
                display: 'none'
            });
        } else {
            // badgeEl.style.display = 'block';
            gsap.to(badgeEl, .6, {
                opacity: 1,
                display: 'block'
            });
        }
    } , 300));


    const fadeEls = document.querySelectorAll('.visual .fade-in');
    fadeEls.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
            delay: (index + 1 ) * 0.7, // 순차적 작동
            opacity: 1
        })
    });


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    // autoplay: true,
    loop: true
});


new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal',
    slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
    spaceBetween: 10,  // 슬라이드 사이 여백ㄴ
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    // autoplay: {
    //     delay: 5000
    // },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
})