const link = document.createElement("a");
link.href = "https://raw.githubusercontent.com/20241060/flover/refs/heads/main/%EC%86%A1%ED%95%98%EC%98%81%20%EC%9D%B8%EC%83%9D%EB%84%A4%EC%BB%B7.png";
link.download = "송하영 인생네컷.jpg";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);