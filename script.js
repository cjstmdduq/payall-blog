
// 프로모션 배너 반짝임효과
function randomSparkle() {
  const strong = document.querySelector(".promo-banner strong");
  const intensity = Math.random() * 30 + 10; // 10-40px 범위의 랜덤 값
  strong.style.textShadow = `0 0 ${intensity}px var(--gold)`;

  // 다음 반짝임까지의 랜덤 시간 설정 (0.5-2초)
  setTimeout(randomSparkle, Math.random() * 1500 + 500);
}


// 프로모션 배너 스크롤 시 하이드
window.addEventListener('scroll', function () {
  const banner = document.querySelector('.promo-banner');
  if (window.scrollY > 100) { // 100px 이상 스크롤되면
    banner.classList.add('hide-banner');
  } else {
    banner.classList.remove('hide-banner');
  }
});

// 초기 실행
randomSparkle();


// 네비게이션바 섹션
// 네비게이션 스크롤 애니메이션
document.querySelectorAll(".nav-menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const headerOffset = 80; // 헤더 높이만큼 오프셋

    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// 스크롤 시 위치 이벤트 처리
window.addEventListener('scroll', function () {
  const banner = document.querySelector('.promo-banner');
  const header = document.querySelector('.header');

  if (window.scrollY > 100) { // 100px 이상 스크롤되면
    banner.classList.add('hide-banner');
    header.style.top = '0'; // 헤더를 최상단으로 이동
  } else {
    banner.classList.remove('hide-banner');
    header.style.top = '36px'; // 프로모션 배너 높이만큼 아래로
  }
});


// 모바일 화면에서 햄버거메뉴 토글 js
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("mobileNav").classList.toggle("show");
});



// iframe 컨텐츠 보여주기 함수
function showContent(frameId) {
  // 모든 iframe 숨기기
  document.querySelectorAll('.content-frame').forEach(frame => {
      frame.style.display = 'none';
  });
  
  // 선택된 frame 보이기
  document.getElementById(frameId).style.display = 'block';
  
  // 모든 버튼에서 active 클래스 제거
  document.querySelectorAll('.sidebar-btn').forEach(btn => {
      btn.classList.remove('active');
  });
  
  // 클릭된 버튼에 active 클래스 추가
  event.target.classList.add('active');
}

// 초기 로드시 첫 번째 컨텐츠 표시
window.onload = function() {
  showContent('frame1');
  // 첫 번째 버튼에 active 클래스 추가
  document.querySelector('.sidebar-btn').classList.add('active');
}

// iframe 높이 자동 조절
function adjustIframeHeight(frameId) {
  const iframe = document.getElementById(frameId);
  iframe.onload = function() {
      try {
          const height = iframe.contentWindow.document.body.scrollHeight;
          iframe.style.height = height + 'px';
      } catch(e) {
          console.log('iframe 높이 조절 중 에러:', e);
      }
  }
}

// 윈도우 리사이즈시 높이 재조절
window.addEventListener('resize', function() {
  const activeFrame = document.querySelector('.content-frame[style*="display: block"]');
  if (activeFrame) {
      adjustIframeHeight(activeFrame.id);
  }
});
