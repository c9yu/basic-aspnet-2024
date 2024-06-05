/* 회전버튼 동작 */
const rotateBtn = document.querySelector('.rotate-btn');
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length; // 5
let index = 0;

// $('.rotate-btn').on('click', function()); 와 동일
rotateBtn.addEventListener('click', function() {
    rotateBtn.classList.add('active');
    setTimeout(() => {
        rotateBtn.classList.remove('active');
    }), 2100;

    slides.forEach(slide => {
        if(slide.classList.contains('active')) {
           slide.classList.add('after-active');
        } else {
           slide.classList.remove('after-active');
        }
    })

    slides[index].classList.remove('active'); // 현재 슬라이드는 active 제거
    index += 1;

    if (index == totalSlides) index = 0; // 슬라이드가 총 슬라이드까지 가면 다시 처음으로 돌아감

    slides[index].classList.add('active'); // 클릭 시 다음 것을 active를 줘서 화면에 나오게 함
});