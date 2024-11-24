// 갤러리 이미지 배열
const images = [
  { src: "img/1 Shape Poster/조경서/01.png", alt: "이미지 1" },
  { src: "img/1 Shape Poster/조경서/02.png", alt: "이미지 2" },
  { src: "img/1 Shape Poster/조경서/03.png", alt: "이미지 3" },
  { src: "img/2 Patter Poster/조경서/01.png", alt: "이미지 4" }
];

// 모달 관련 요소들
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
let currentIndex = 0;  // 현재 보여지고 있는 이미지의 인덱스

// 이미지를 클릭하면 모달을 열고 해당 이미지를 표시
function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = images[currentIndex].src;
  modalImg.alt = images[currentIndex].alt;
  captionText.innerHTML = images[currentIndex].alt;
}

// 닫기 버튼 클릭 시 모달 닫기
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// 이전/다음 이미지로 이동하는 함수
function changeImage(direction) {
  currentIndex += direction;

  // 이미지 인덱스가 범위를 벗어나지 않도록 처리
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // 새로운 이미지 표시
  modalImg.src = images[currentIndex].src;
  modalImg.alt = images[currentIndex].alt;
  captionText.innerHTML = images[currentIndex].alt;
}
