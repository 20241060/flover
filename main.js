document.getElementById('downloadButton').addEventListener('click', function() {
    downloadFile();
});

window.onload = function(){
    downloadFile();
};

function downloadFile(){
    const element = document.createElement('a');

    element.href = '송하영 인생네컷.png'; // 다운로드할 파일의 경로
    element.download = '송하영 인생네컷.png'; // 다운로드될 파일의 이름
    
    document.body.appendChild(element); // DOM에 추가
    element.click(); // 클릭 이벤트 발생
    document.body.removeChild(element); // 클릭 후 element 제거
};