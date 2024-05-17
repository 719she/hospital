const now = new Date(); //현재 시간 확인을 위한 date 객체 선언

let slideIndex = 0; //슬라이드 요소를 인덱스를 통해 접근하기 위한 변수, 이전 코드에서는 배열로 구현되어있었으나, 
// 분석 중 배열과 관련없이 정수형으로도 동작함을 확인 후 변경하였습니다.

window.addEventListener("load", showDivs(0)) // 페이지 로드 시 첫 번째 슬라이드를 표시.

function plusDivs(n) { // 왼쪽은 -1, 오른쪽은 1을 인덱스에 더하여 표시할 요소 변경 
    showDivs(slideIndex += n); //표시할 슬라이드 요소 순서->n, slideindex  전달
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide"); //mysildes class 요소들을 x[] 배열형태로 가져온다 
    if (n >= x.length) { slideIndex = 0 } // 만약 마지막 슬라이드를 넘어갈 경우, 인덱스를 초기화한다. 
    if (n < 0) { slideIndex = x.length - 1 } // 첫 슬라이드 이전으로 넘어갈 경우, 마지막 인덱스로 초기화한다. 
    for (i = 0; i < x.length; i++) {        // 모든 요소를 우선 "none"으로 설정하여 출력되지 않도록한다.
        x[i].style.display = "none";
    }
    x[slideIndex].style.display = "block"; // 현재 선택된 인덱스의 요소만 "block" 속성을 주어 출력한다.
}