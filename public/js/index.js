console.log('index.js..');
alert("Hello World!");

window.addEventListener('load', () => {
    console.log('load');
});


// 추측: 이미 DOM이 로드된 상태이기 때문에, 이 이벤트가 실행이 안되는 것 같다.
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded'); // 어째서인지, 콘솔에 출력이 되지 않는다.
});

const indexHi = '카카로트 하이!';