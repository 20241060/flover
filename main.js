const link = document.createElement("a");
link.href = "https://example.com/image.jpg";
link.download = "송하영 인생네컷.jpg";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);