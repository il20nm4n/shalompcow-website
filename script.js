// Language switcher functionality
document.getElementById("english-btn").addEventListener("click", function() {
  switchToEnglish();
});

document.getElementById("korean-btn").addEventListener("click", function() {
  switchToKorean();
});

function switchToEnglish() {
  document.getElementById("intro-text").innerHTML = `
    <h2>Welcome to Shalom Presbyterian Church</h2>
    <p>We are a community committed to faith, love, and service.</p>
  `;
}

function switchToKorean() {
  document.getElementById("intro-text").innerHTML = `
    <h2>샬롬 장로교회에 오신 것을 환영합니다</h2>
    <p>우리는 믿음, 사랑, 봉사를 다하는 공동체입니다.</p>
  `;
}
