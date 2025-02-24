// 전화 걸기 버튼용 (필요하면 사용)
function makeCall() {
  window.location.href = "tel:02-6402-5502";
}

// 프로모션 배너 반짝임효과
function randomSparkle() {
  const strong = document.querySelector(".promo-banner strong");
  const intensity = Math.random() * 30 + 10; // 10~40px 사이 랜덤
  strong.style.textShadow = `0 0 ${intensity}px var(--gold)`;

  // 다음 반짝임까지 랜덤 시간 (0.5 ~ 2초)
  setTimeout(randomSparkle, Math.random() * 1500 + 500);
}

// 초기 실행
randomSparkle();

// 스크롤 시 프로모션 배너 숨김 처리
window.addEventListener('scroll', function () {
  const banner = document.querySelector('.promo-banner');
  if (window.scrollY > 100) {
    banner.classList.add('hide-banner');
  } else {
    banner.classList.remove('hide-banner');
  }
});

// PC 메뉴 클릭 시 스크롤 이동
document.querySelectorAll(".nav-menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const headerOffset = 80; // 헤더 높이만큼
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// 헤더 위치 처리
window.addEventListener('scroll', function () {
  const banner = document.querySelector('.promo-banner');
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    banner.classList.add('hide-banner');
    header.style.top = '0';
  } else {
    banner.classList.remove('hide-banner');
    header.style.top = '36px';
  }
});

// 모바일 햄버거 메뉴 토글
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("mobileNav").classList.toggle("show");
});


// iframe 컨텐츠 변경 함수 
function showContent(e, frameId) {
  const frame = document.getElementById("content-frame");

  // iframe src 변경 매핑
  const pageMap = {
    frame1: "./pages/introduction.html",
    frame2: "./pages/forbidden.html",
    frame3: "./pages/inquiry.html",
    frame4: "./pages/non-business.html",
    frame5: "./pages/devices.html",
    frame6: "./pages/manual-payment-1.html",
    frame7: "./pages/manual-payment-2.html",
    frame8: "./pages/manual-payment-3.html",
  };

  if (pageMap[frameId]) {
    frame.src = pageMap[frameId];
  }

  // 모든 사이드바 버튼 active 해제
  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // 지금 클릭한 버튼에 active 추가
  e.target.classList.add('active');
}


// 페이지 로딩 후
window.onload = function() {
  // 초기(첫화면) 컨텐츠를 띄워주기
  const frame = document.getElementById("content-frame");
  frame.src = "./pages/introduction.html";

  // 첫 번째 버튼에 active 클래스 달아주기
  const firstBtn = document.querySelector(".sidebar-btn");
  if (firstBtn) {
    firstBtn.classList.add("active");
  }
};


// 아이프레임 내용 높이 동기화(선택사항)
function setHeight() {
  const iframe = document.getElementById("content-frame");
  if (iframe && iframe.contentWindow.document.body) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  }
}
document.getElementById("content-frame").addEventListener("load", setHeight);



// 모바일 / 햄버거 토글 시 사이드바 
document.getElementById("menuToggle").addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("show");
});

