window.onload = function(){
    const link = document.createElement("a");
    link.href = "https://raw.githubusercontent.com/20241060/flover/refs/heads/main/%EC%86%A1%ED%95%98%EC%98%81%20%EC%9D%B8%EC%83%9D%EB%84%A4%EC%BB%B7.png";
    // 다운로드할 이미지 URL
    link.download = "송하영 인생네컷.jpg"; // 저장될 파일 이름
    document.body.appendChild(link);
    link.click(); // 자동으로 다운로드 실행
    document.body.removeChild(link); // 다운로드 후 링크 제거
};