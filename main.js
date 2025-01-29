// window.onload = function(){
//     const link = document.createElement("a");
//     link.href = "https://raw.githubusercontent.com/20241060/flover/refs/heads/main/%EC%86%A1%ED%95%98%EC%98%81%20%EC%9D%B8%EC%83%9D%EB%84%A4%EC%BB%B7.png";
//     // 다운로드할 이미지 URL
//     link.download = "송하영 인생네컷.jpg"; // 저장될 파일 이름
//     document.body.appendChild(link);
//     link.click(); // 자동으로 다운로드 실행
//     document.body.removeChild(link); // 다운로드 후 링크 제거
// };

// function download(){
//     const blob = new blob(['This is a new file'], {type: "text/plain"});
//     downalodFile(blob, "송하영 인생네컷.png");
// }

// function downalodFile(blob, filename){
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");

//     a.href = url;
//     a.download = filename;
//     a.click();
// }

document.getElementById('downloadButton').addEventListener('click', function() {
    downloadFile();
});

window.onload = function(){
    downloadFile();
};

function downloadFile(){
    const element = document.createElement('a');

    element.setAttribute('href', '송하영 인생네컷.png'); // 다운로드할 파일의 경로
    element.setAttribute('download', '송하영 인생네컷.png'); // 다운로드될 파일의 이름
    
    document.body.appendChild(element); // DOM에 추가
    element.click(); // 클릭 이벤트 발생
    document.body.removeChild(element); // 클릭 후 element 제거
};