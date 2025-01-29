const link = document.createElement("a");
link.href = "https://example.com/image.jpg";
link.download = "my-image.jpg";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);