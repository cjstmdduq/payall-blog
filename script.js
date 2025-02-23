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
